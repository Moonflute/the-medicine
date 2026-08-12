from __future__ import annotations

"""Resolve MedQA keyword tags to canonical disease slugs and persist them in source Markdown.

The raw ``related_diseases`` list is intentionally preserved as source keywords.
This script adds a separate, authoritative ``related_disease_slugs`` list to every
MedQA clinical question.  Each raw tag can map to at most one canonical disease
document; signs, tests, drugs, risk factors, and uncertain terms are left unmapped.
"""

import argparse
import concurrent.futures
import json
import os
import re
import sys
import time
import urllib.error
import urllib.request
from collections import defaultdict
from dataclasses import dataclass
from difflib import SequenceMatcher
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[2]
SOURCE_ROOT = ROOT / "source_notes" / "99 Q-bank" / "MedQA"
DISEASE_DATA = ROOT / "_webapp" / "data" / "diseases.json"
STATE_DIR = ROOT / "workspace_ops" / "qbank" / "tag_linking"
STATE_PATH = STATE_DIR / "disease_tag_mappings.json"
REPORT_PATH = ROOT / "reports" / "qbank-disease-tag-link-audit.json"
REVIEW_PATH = STATE_DIR / "unlinked_tag_review.json"
MISSING_DISEASE_REPORT_PATH = ROOT / "reports" / "qbank-missing-disease-document-candidates.json"
CONFIRMED_MISSING_DISEASE_REPORT_PATH = ROOT / "reports" / "qbank-missing-disease-documents.json"
FULL_AUDIT_PATH = ROOT / "reports" / "qbank-disease-tag-full-audit.json"
EMPTY_QUESTION_AUDIT_PATH = ROOT / "reports" / "qbank-empty-disease-link-audit.json"
ENV_PATHS = (ROOT.parent / ".env.qbank-explanations", ROOT.parent / ".env.qbank-cloudflare", ROOT.parent / ".env")


@dataclass(frozen=True)
class Provider:
    name: str
    key_env: str
    model_env: str
    default_model: str
    url: str


PROVIDERS = (
    Provider("cerebras", "CEREBRAS_API_KEY", "CEREBRAS_EXPLANATION_MODEL", "gpt-oss-120b", "https://api.cerebras.ai/v1/chat/completions"),
    Provider("groq", "GROQ_API_KEY", "GROQ_EXPLANATION_MODEL", "openai/gpt-oss-120b", "https://api.groq.com/openai/v1/chat/completions"),
    Provider("sambanova", "SAMBANOVA_API_KEY", "SAMBANOVA_EXPLANATION_MODEL", "gpt-oss-120b", "https://api.sambanova.ai/v1/chat/completions"),
    Provider("openrouter", "OPENROUTER_API_KEY", "OPENROUTER_EXPLANATION_MODEL", "openai/gpt-oss-120b", "https://openrouter.ai/api/v1/chat/completions"),
    Provider("nvidia", "NVIDIA_API_KEY", "NVIDIA_EXPLANATION_MODEL", "openai/gpt-oss-120b", "https://integrate.api.nvidia.com/v1/chat/completions"),
)

# Clinical synonym decisions reviewed against the current canonical document
# catalog. These are a one-time source-enrichment aid, never a runtime lookup.
CURATED_SYNONYM_TARGETS = {
    # High-frequency cross-language labels verified against the canonical
    # catalog.  A value always names the same condition, never merely a
    # complication, symptom, treatment, or related organ system.
    "parkinsondisease": "parkinsonism",
    "pepticulcerdisease": "pud",
    "duodenalpepticulcer": "duodenalulcer",
    "multiplepepticulcers": "pud",
    "perforatedpepticulcer": "pud천공",
    "cholelithiasis": "gallstone",
    "symptomaticcholelithiasis": "gallstone",
    "b형간염": "hepatitis",
    "hepatitisb": "hepatitis",
    "acutecoronarysyndrome": "acs",
    "wolffparkinsonwhitesyndrome": "wpwsyndrome",
    "peripheralarterydisease": "atheroscleroticchronicarterialocclusion",
    "peripheralvasculardisease": "atheroscleroticchronicarterialocclusion",
    "chroniccoronarysyndrome": "허혈성심질환",
    "coronaryarterydisease": "허혈성심질환",
    "congestiveheartfailure": "심부전",
    "heartfailure": "심부전",
    "systolicheartfailure": "chronicheartfailurewithreducedejectionfraction",
    "hypertensiveemergency": "hypertension",
    "whitecoathypertension": "hypertension",
    "communityacquiredpneumonia": "폐렴",
    "hospitalacquiredpneumonia": "폐렴",
    "pneumocystisjiroveciipneumonia": "pneumocystispneumonia",
    "acuteexacerbationcopd": "acuteexacerbationofcopd",
    "copdexacerbation": "acuteexacerbationofcopd",
    "pepticulcerdisease": "소화성궤양",
    "cholecystitis": "acutecholecystitis",
    "pancreatitis": "췌장염",
    "acutepancreatitis": "급성췌장염",
    "thyrotoxicosis": "hyperthyroidism",
    "neurolepticmalignantsyndrome": "신경이완제악성증후군",
    "serotoninsyndrome": "세로토닌증후군",
    "addisondisease": "adrenalinsufficiency",
    "consyndrome": "primaryaldosteronism",
    "endstagerenaldisease": "chronickidneydisease",
    "chronicrenalfailure": "chronickidneydisease",
    "acutetubularnecrosis": "acutekidneyinjury",
    "goodpasturesyndrome": "anti-glomerularbasementmembranedisease",
    "goodpasturesdisease": "anti-glomerularbasementmembranedisease",
    "nephriticsyndrome": "glomerulonephritis",
    "septicarthritis": "infectiousarthritis",
    "giantcellarteritis": "vasculitis",
    "clostridioidesdifficileinfection": "pseudomembranouscolitis",
    "cdifficilecolitis": "pseudomembranouscolitis",
    "pneumocystisjiroveciipneumonia": "pneumocystispneumonia",
    "acutelymphocyticleukemia": "acutelymphoblasticleukemia",
    "acutelymphoidleukemia": "acutelymphoblasticleukemia",
    "acutemyelogenousleukemia": "acutemyeloidleukemia",
    "parkinsondisease": "파킨슨병",
    "huntingtondisease": "헌팅턴병",
    "tourettesyndrome": "tourettedisorder",
    "patellofemoralpainsyndrome": "patellofemoralsyndrome",
    "guillainbarresyndrome": "guillainbarresyndrome",
    "idiopathicintracranialhypertension": "특발성두개내고혈압",
    "polycysticovarysyndrome": "polycysticovarysyndrome",
    "allergiccontactdermatitis": "contactdermatitis",
    "otosclerosis": "otosclerosis",
    "interstitialcystitis": "interstitialcystitis",
    "urothelialcarcinoma": "bladdercancer",
    "renalcellcarcinoma": "renalcellcarcinoma",
    "prostatecancer": "prostatecancer",
    "testicularcancer": "testicularcancer",
    "acutebronchiolitis": "acutebronchiolitis",
    "pneumococcalmeningitis": "pneumococcalmeningitis",
    "kawasakidisease": "kawasakidisease",
    "tuberculousmeningitis": "tuberculousmeningitis",
    "multiplesclerosis": "multiplesclerosis",
    "소구성빈혈": "빈혈",
    "microcyticanemia": "빈혈",
    "소구성저색소성빈혈": "빈혈",
    "출혈성쇼크": "쇼크",
    "hemorrhagicshock": "쇼크",
    "고혈압성응급": "hypertension",
    "고혈압성응급증": "hypertension",
    "급성심근경색": "허혈성심질환",
    "acutemyocardialinfarction": "허혈성심질환",
    "myocardialinfarction": "허혈성심질환",
    "울혈성심부전": "심부전",
    "말초동맥질환": "동맥경화성만성동맥폐색",
    "말초혈관질환": "동맥경화성만성동맥폐색",
    "pepticulcerdisease": "소화성궤양",
    "문맥고혈압": "portalhypertension",
    "당뇨병성위마비": "diabetesmellitus",
    "당뇨병성말초신경병증": "diabeticneuropathy",
    "당뇨병성신장병증": "diabeticnephropathy",
    "당뇨병성콩팥병": "diabeticnephropathy",
    "endstagerenaldisease": "만성콩팥병",
    "말기신장질환": "만성콩팥병",
    "신동맥협착": "renovascularhypertension",
    "renalarterystenosis": "renovascularhypertension",
    "루푸스신염": "lupusnephritis",
    "pelvicinflammatorydisease": "pelvicinflammatorydisease",
    "골반염증성질환": "pelvicinflammatorydisease",
    "산후출혈": "postpartumhemorrhage",
    "postpartumhemorrhage": "postpartumhemorrhage",
    "hypertensivecrisis": "hypertensivecrisis",
    "hypertensiveemergency": "hypertensivecrisis",
    "hypertensiveurgency": "hypertensivecrisis",
    "고혈압성위기": "hypertensivecrisis",
    "고혈압성응급": "hypertensivecrisis",
    "calciumpyrophosphatedepositiondisease": "calciumpyrophosphatedepositiondisease",
    "cppd": "calciumpyrophosphatedepositiondisease",
    "가성통풍": "calciumpyrophosphatedepositiondisease",
    "임신중질출혈": "vaginalbleedingduringpregnancy",
    "vaginalbleedingduringpregnancy": "vaginalbleedingduringpregnancy",
    "lithiumtoxicity": "lithiumpoisoning",
    "리튬중독": "lithiumpoisoning",
    "benzodiazepinepoisoning": "benzodiazepinepoisoning",
    "benzodiazepineoverdose": "benzodiazepinepoisoning",
    "벤조디아제핀중독": "benzodiazepinepoisoning",
    "산후출혈위험": "postpartumhemorrhage",
    "성매개감염": "sexuallytransmittedinfection",
    "sexuallytransmittedinfection": "sexuallytransmittedinfection",
    "sexuallytransmitteddisease": "sexuallytransmittedinfection",
    "성매개감염선별": "sexuallytransmittedinfection",
    "성매개감염예방": "sexuallytransmittedinfection",
    "재발성성매개감염": "sexuallytransmittedinfection",
    "임신중감염": "infectioninpregnancy",
    "infectioninpregnancy": "infectioninpregnancy",
    "maternalinfection": "infectioninpregnancy",
    "urinarytractinfectioninpregnancy": "infectioninpregnancy",
    "recurrenturinarytractinfectioninpregnancy": "infectioninpregnancy",
    "임신중재발성요로감염": "infectioninpregnancy",
    "fetalalcoholsyndrome": "fetalalcoholsyndrome",
    "피부사상균감염": "tinea",
    "포진상피부염": "dermatitisherpetiformis",
    "신세포암": "renalcellcarcinoma",
    "전립선암": "prostatecancer",
    "길랭바레증후군": "guillainbarresyndrome",
    "심부정맥혈전증": "deepveinthrombosis",
    "dvt": "deepveinthrombosis",
    "알레르기성접촉피부염": "contactdermatitis",
    "알레르기접촉피부염": "contactdermatitis",
    "bipolaridisorder": "bipolardisorder",
    "bipolariidisorder": "bipolardisorder",
    "majordepressiveepisode": "majordepressivedisorder",
    "대동맥판역류": "aorticregurgitation",
    "대동맥판협착": "aorticstenosis",
    "당뇨병성말초신경병증": "diabeticneuropathy",
    "당뇨병성다발신경병증": "diabeticneuropathy",
    "acutepromyelocyticleukemia": "acutepromyelocyticleukemia",
    "급성전골수구성백혈병": "acutepromyelocyticleukemia",
    "파종성혈관내응고": "disseminatedintravascularcoagulation",
    "신생아저혈당": "neonatalhypoglycemia",
    "후두기관기관지염": "croup",
    "주의력결핍과잉행동장애": "adhd",
    "deepvenousthrombosis": "deepveinthrombosis",
    "mitralvalveregurgitation": "mitralregurgitation",
    "mitralvalvestenosis": "mitralstenosis",
    "amoebiccolitis": "amebiccolitis",
    "원발담즙성담관염": "primarybiliarycholangitis",
    "후천성면역결핍증": "aids",
    "고삼투성고혈당상태": "hyperosmolarhyperglycemicstate",
    "뇌하수체기능저하": "hypopituitarism",
    "renaltubularacidosis": "renaltubularacidosistype1",
    "secondaryhyperaldosteronism": "secondaryaldosteronism",
    "신장정맥혈전증": "renalveinthrombosis",
    "염증성근육병증": "inflammatorymyopathy",
    "candidalesophagitis": "candidaesophagitis",
    "tuberculouspleuritis": "tuberculouspleurisy",
    "vitaminb6deficiency": "vitaminbdeficiency",
    "smallcelllungcarcinoma": "smallcellcarcinoma",
    "유전성비용종성대장암": "hereditarynonpolyposiscolorectalcancer",
    "hemolytictransfusionreaction": "acutehemolytictransfusionreaction",
    "twintwintransfusionsyndrome": "twintotwintransfusionsyndrome",
    "자궁내번": "uterineinversion",
    "mullerianagenesis": "mullerianagenesis",
    "sertolileydigtumor": "sertolileydigcelltumor",
    "다낭성난소증후군": "polycysticovarysyndrome",
    "자궁경부선암": "cervicalcancer",
    "behcetdisease": "behcetsdisease",
    "coarctationofaorta": "coarctationoftheaorta",
    "esophagealatresiawithdistaltracheoesophagealfistula": "esophagealatresiawithtracheoesophagealfistula",
    "handfootandmouthdisease": "handfootmouthdisease",
    "anxietydisorder": "anxietydisorders",
    "depersonalizationderealizationdisorder": "depersonalizationderealizationdisorder",
    "basilarskullfracture": "basalskullfracture",
    "단순포진바이러스": "herpessimplexvirusinfection",
    "아연결핍": "zincdeficiency",
    "대퇴골두골단분리": "slippedcapitalfemoralepiphysis",
    "대퇴골두골단분리증": "slippedcapitalfemoralepiphysis",
    "일차성골수섬유증": "primarymyelofibrosispmf",
    "primarymyelofibrosis": "primarymyelofibrosispmf",
    "감염성심내막염": "infectiveendocarditis",
    "자발성세균성복막염": "spontaneousbacterialperitonitis",
    "유전구형적혈구증": "유전구혈적혈구증",
    "유전성구형적혈구증": "유전구혈적혈구증",
    "유전성구상적혈구증": "유전구혈적혈구증",
    "만성림프구성백혈병": "chroniclymphocyticleukemia",
    "chroniclymphocyticleukemia": "chroniclymphocyticleukemia",
    "medullarythyroidcarcinoma": "thyroidmedullarycarcinoma",
    "비타민b12결핍": "vitaminbdeficiency",
    "vitaminb12deficiency": "vitaminbdeficiency",
    "간경변": "livercirrhosis",
    "cirrhosis": "livercirrhosis",
    "담석증": "gallstone",
    "cholelithiasis": "gallstone",
    "급성사지허혈": "acutearterialocclusion",
    "acutelimbischemia": "acutearterialocclusion",
    "급성신손상": "acutekidneyinjury",
    "만성신장질환": "chronickidneydisease",
    "hyperlipidemia": "dyslipidemia",
    "고지혈증": "dyslipidemia",
    "고콜레스테롤혈증": "dyslipidemia",
    "megaloblasticanemia": "megaloblasticanemia",
    "거대적아구성빈혈": "megaloblasticanemia",
    "smallcelllungcancer": "smallcellcarcinoma",
    "소세포폐암": "smallcellcarcinoma",
    "recurrenturinarytractinfection": "urinarytractinfection",
    "재발성요로감염": "urinarytractinfection",
    "hivaids": "aids",
    "hiv감염": "aids",
    "hypertensiveemergency": "hypertension",
    "고혈압응급": "hypertension",
    "diabetes": "diabetesmellitus",
    "type2diabetesmellitus": "diabetesmellitus",
    "hivinfection": "aids",
    "chronicbronchitis": "chronicobstructivepulmonarydisease",
    "만성기관지염": "chronicobstructivepulmonarydisease",
    "마르판증후군": "marfansyndrome",
    "marfansyndrome": "marfansyndrome",
    "경동맥협착": "경동맥협착증",
    "carotidstenosis": "경동맥협착증",
    "약물유발간손상": "druginducedliverinjury",
    "druginducedliverinjury": "druginducedliverinjury",
    "staphylococcusaureus": "staphylococcalinfection",
    "황색포도알균": "staphylococcalinfection",
    "varicellazostervirus": "varicellazostervirusinfection",
    "수두대상포진바이러스": "varicellazostervirusinfection",
    "takayasuarteritis": "다카야수동맥염",
    "다카야수동맥염": "다카야수동맥염",
    "st분절상승심근경색": "stelevationmyocardialinfarction",
    "stemi": "stelevationmyocardialinfarction",
    "acutedecompensatedheartfailure": "acuteheartfailure",
    "aortoiliacocclusivedisease": "aortoiliacocclusion",
    "대동맥장골동맥폐색질환": "aortoiliacocclusion",
    # Direct subtype-to-parent links confirmed against the present source
    # catalog.  These retain the disease identity; they do not convert a
    # symptom, organism, investigation or treatment into a disease link.
    "arterialembolism": "acutearterialocclusion",
    "arterialocclusion": "acutearterialocclusion",
    "peripheralarterialdisease": "atheroscleroticchronicarterialocclusion",
    "irondeficiencyanemia": "irondeficiencyanemia",
    "acuteinterstitialnephritis": "tubulointerstitialnephritis",
    "uncomplicatedcystitis": "acutecystitis",
    "acuteuncomplicatedcystitis": "acutecystitis",
    "invasiveductalcarcinoma": "invasivebreastcancer",
    "침윤성유관암": "invasivebreastcancer",
    "downsyndrome": "downsyndrome",
    "chronicbacterialprostatitis": "prostatitis",
    "chronichypertensioninpregnancy": "hypertension",
    "pregestationaldiabetes": "diabetesmellitus",
    "granulomatosiswithpolyangiitis": "vasculitis",
    "eosinophilicgranulomatosiswithpolyangiitis": "vasculitis",
    "largevesselvasculitis": "vasculitis",
    "leukocytoclasticvasculitis": "vasculitis",
    "feltysyndrome": "rheumatoidarthritis",
    "lymearthritis": "lymedisease",
    "dresslersyndrome": "acutepericarditis",
    "postmyocardialinfarctionpericarditis": "acutepericarditis",
    "postmyocardialinfarctionsyndrome": "acutepericarditis",
    "recurrentpericarditis": "acutepericarditis",
    "radiationinducedpericarditis": "acutepericarditis",
    "tuberculouspericarditis": "acutepericarditis",
    "aspirinexacerbatedrespiratorydisease": "아스피린과민성천식",
    "alcoholiccirrhosis": "livercirrhosis",
    "decompensatedcirrhosis": "livercirrhosis",
    "cirrhosiswithascites": "livercirrhosis",
    "endstageliverdisease": "livercirrhosis",
    "gallstonepancreatitis": "acutepancreatitis",
    "alcoholassociatedpancreatitis": "acutepancreatitis",
    "alcoholinducedpancreatitis": "acutepancreatitis",
    "didanosineinducedpancreatitis": "acutepancreatitis",
    "posttraumaticpancreatitis": "acutepancreatitis",
    "chroniclymphocyticthyroiditis": "hashimotosthyroiditis",
    "subacutegranulomatousthyroiditis": "subacutethyroiditis",
    "granulomatousthyroiditis": "subacutethyroiditis",
    "follicularthyroidcarcinoma": "thyroidcancer",
    "anaplasticthyroidcarcinoma": "thyroidcancer",
    "chronicpelvicpainsyndrome": "prostatitis",
    "highgradenonmuscleinvasivebladdercancer": "bladdercancer",
    "embryonalcarcinoma": "testicularcancer",
    "jervellandlangenielsensyndrome": "longqtsyndrome",
    "lymecarditis": "lymedisease",
    "acutecoronaryocclusion": "허혈성심질환",
    "cocaineassociatedacutecoronarysyndrome": "acs",
    "highoutputheartfailure": "심부전",
    "hypertensiveheartdisease": "hypertension",
    "inferiormyocardialinfarction": "허혈성심질환",
    "lateralwallmyocardialinfarction": "허혈성심질환",
    "recurrentmyocardialinfarction": "허혈성심질환",
    "reinfarction": "허혈성심질환",
    "mechanicalvalveinfection": "infectiveendocarditis",
    "prostheticvalveendocarditis": "infectiveendocarditis",
    "suddenarterialocclusion": "acutearterialocclusion",
    "tachybradysyndrome": "sicksinussyndrome",
    "rheumaticheartdisease": "판막질환",
    "calcificvalvedisease": "판막질환",
    "carotidatherosclerosis": "carotidarterystenosis",
    "influenzapneumonia": "폐렴",
    "stageiinonsmallcelllungcancer": "lungcancer",
    "acuteacalculouscholecystitis": "acutecholecystitis",
    "aspirationpneumonia": "폐렴",
    "continuouscolitis": "ulcerativecolitis",
    "extensivecolitis": "ulcerativecolitis",
    "pancolitis": "ulcerativecolitis",
    "ulcerativeproctosigmoiditis": "ulcerativecolitis",
    "youngadultcolitis": "ulcerativecolitis",
    "ischemicboweldisease": "ischemiccolitis",
    "hepatitisbinfection": "hepatitis",
    "acuteliverfailure": "fulminanthepatitis",
    "fulminantliverfailure": "fulminanthepatitis",
    "bilateralrenalarterystenosis": "renovascularhypertension",
    "pyelonephritis": "acutepyelonephritis",
    "obstructivepyelonephritis": "acutepyelonephritis",
    "pyelonephritiswithobstruction": "acutepyelonephritis",
    "crescenticglomerulonephritis": "rapidlyprogressiveglomerulonephritis",
    "acalculouscholecystitis": "acutecholecystitis",
    "acutebacterialprostatitis": "prostatitis",
    "hypertrophicobstructivecardiomyopathy": "hypertrophiccardiomyopathy",
    "acuteangleclosureglaucoma": "glaucoma",
    "generalizedtonicclonicseizure": "seizure",
    "complexpartialseizure": "seizure",
    "focalseizure": "seizure",
    "epiduralhematoma": "epiduralhemorrhage",
    "ventricularfibrillation": "ventricularflutterfibrillation",
    "mobitziavblock": "avblock",
    "prinzmetalangina": "variantangina",
    "acutemyocardialischemia": "허혈성심질환",
    "hypovolemicshock": "shock",
    "cardiogenicshock": "shock",
    "septicshock": "septicshock",
    "neurogenicshock": "neurogenicshock",
    "당뇨병": "diabetesmellitus",
    "당뇨병성자율신경병증": "diabeticneuropathy",
    "c형간염": "hepatitis",
    "지역사회획득폐렴": "typicalpneumonia",
    "opioidusedisorder": "substancerelatedandaddictivedisorders",
    "opioidaddiction": "substancerelatedandaddictivedisorders",
    "opioidwithdrawal": "substancerelatedandaddictivedisorders",
    "오피오이드중독": "substancerelatedandaddictivedisorders",
    "nicotinedependence": "substancerelatedandaddictivedisorders",
    "phencyclidineintoxication": "substancerelatedandaddictivedisorders",
    "ureteralstone": "urinarytractstone",
    "muscleinvasivebladdercancer": "bladdercancer",
    "mrsainfection": "staphylococcalinfection",
    "dermatomyositis": "inflammatorymyopathy",
    "polymyositis": "inflammatorymyopathy",
    "ancaassociatedvasculitis": "vasculitis",
    "microscopicpolyangiitis": "vasculitis",
    "polyarteritisnodosa": "vasculitis",
    "temporal arteritis": "vasculitis",
    "temporalarteritis": "vasculitis",
    "crestsyndrome": "systemicsclerosis",
    "sjogrenssyndrome": "sjogrenssyndrome",
    "goutyarthritis": "gout",
    "youngwomanwithpulselessdisease": "takayasusarteritis",
}

# These are intentional corrections of previously persisted broad mappings.
# Unlike a diagnosis-specific tag (for example ``uterine atony``), these
# labels name a whole learning group and must point to its group overview even
# when an earlier API pass linked them to one constituent disease.
CURATED_MAPPING_OVERRIDES = {
    "산후출혈",
    "postpartumhemorrhage",
    "산후출혈위험",
    "성매개감염",
    "sexuallytransmittedinfection",
    "sexuallytransmitteddisease",
    "성매개감염선별",
    "성매개감염예방",
    "재발성성매개감염",
    "임신중감염",
    "infectioninpregnancy",
    "maternalinfection",
    "urinarytractinfectioninpregnancy",
    "recurrenturinarytractinfectioninpregnancy",
    "임신중재발성요로감염",
    "hypertensivecrisis",
    "hypertensiveemergency",
    "hypertensiveurgency",
    "고혈압성위기",
    "고혈압성응급",
    "calciumpyrophosphatedepositiondisease",
    "cppd",
    "가성통풍",
    "임신중질출혈",
    "vaginalbleedingduringpregnancy",
    "lithiumtoxicity",
    "리튬중독",
    "benzodiazepinepoisoning",
    "benzodiazepineoverdose",
    "벤조디아제핀중독",
}

# Where the catalog intentionally has separate acute/chronic child pages but
# no single disease-X page, use the existing disease-family representative for
# context labels such as "hepatitis B prevention".  These are checked against
# the catalog at runtime, not emitted as free-text links.
CURATED_CONTEXT_PARENT_TARGETS = {
    "b형간염": "hepatitis",
    "hepatitisb": "hepatitis",
}
# The mapping table contains older Korean target labels as historical entries;
# enforce the current canonical Parkinsonism target after construction.
CURATED_SYNONYM_TARGETS["parkinsondisease"] = "parkinsonism"
CURATED_SYNONYM_TARGETS["tuberculosis"] = "pulmonarytuberculosis"
# Infection review: only tags whose teaching target is already represented by
# the named canonical document.  New organisms, syndromes and broad exposure
# labels deliberately remain unlinked for separate content decisions.
CURATED_SYNONYM_TARGETS.update({
    # Reviewed teaching-family destinations for rare one-off diagnosis tags.
    # They preserve the raw tag in the question while avoiding a long tail of
    # empty standalone notes.
    "pesanserinebursitis": "patellofemoralpainsyndrome",
    "prepatellarbursitis": "patellofemoralpainsyndrome",
    "palmaryfibromatosis": "triggerfinger",
    "palm arfibromatosis": "triggerfinger",
    "costochondritis": "costochondritis",
    "cyclophosphamidehemorrhagiccystitis": "hemorrhagiccystitis",
    "47xyysyndrome": "geneticdisorders",
    "blastomycosis": "진균",
    "disseminatedhistoplasmosis": "진균",
    "desertfungalinfection": "진균",
    "buddchiarisyndrome": "buddchiarisyndrome",
    "chagasdisease": "기생충",
    "cryptosporidiuminfection": "기생충",
    "hookworminfection": "기생충",
    "trichinellosis": "기생충",
    "neurocysticercosis": "기생충",
    "donovanosis": "sexuallytransmittedinfection",
    "ebolavirusdisease": "바이러스",
    "viralhemorrhagicfever": "바이러스",
    "ehrlichiosis": "기타감염질환",
    "acutehivinfection": "acutehivinfection",
    "yersiniaenterocoliticainfection": "yersiniainfection",
    "levo dopainducedpsychosis": "parkinsonism",
    "levodopainducedpsychosis": "parkinsonism",
    "lipohyalinosis": "ais",
    "patellartendinitis": "achillestendinopathy",
    "pillinducedesophagitis": "corrosiveesophagitis",
    "renalamyloidosis": "nephroticsyndrome",
    "riedelthyroiditis": "갑상샘질환",
    "silentthyroiditis": "갑상샘질환",
    "statininducedliverinjury": "toxichepatitis",
    "stewarttrevessyndrome": "angiosarcoma",
    "vongierkedisease": "glycogenstoragedisease",
    "wdhasyndrome": "gastrinoma",
    "acutebronchitis": "acutebronchitis",
    "acute mastoiditis": "acutemastoiditis",
    "acutemastoiditis": "acutemastoiditis",
    "alcoholassociateddisease": "alcoholicliverdisease",
    "angularcheilitis": "aphthousstomatitis",
    "benignbonyexostosis": "osteosarcoma",
    "bipolardisease": "bipolardisorder",
    "brachialplexusc5c6injury": "peripheralnerveinjury",
    "burninfection": "bitewoundinfection",
    "cancerpain": "소화기암",
    "cavernoussinusthrombosis": "sah",
    "choroiditis": "uveitis",
    "complexregionalpainsyndrome": "peripheralnerveinjury",
    "euthyroidsicksyndrome": "갑상샘질환",
    "fatnecrosisofbreast": "breastcancer",
    "fetalhydantoinsyndrome": "geneticdisorders",
    "fetalwarfarinsyndrome": "geneticdisorders",
    "fourthcranialnerveinjury": "cranialnervepalsy",
    "gallbladderadenomyomatosis": "gallbladderpolypoidlesion",
    "greatertrochantericpainsyndrome": "patellofemoralpainsyndrome",
    "hidradenitissuppurativa": "acne",
    "hyperchloremicmetabolicacidosis": "metabolicacidosis",
    "malignantdiagnosis": "소화기암",
    "mildmetabolicacidosis": "metabolicacidosis",
    "nosocomialinfectionprevention": "원내감염",
    "orbitalinfection": "orbitalcellulitis",
    "overuseinjury": "lateralepicondylitis",
    "pediculosiscapitis": "기타감염질환",
    "photosensitiveskindisease": "photodermatitis",
    "portalveinthrombosis": "livercirrhosis",
    "posttraumaticinfection": "bitewoundinfection",
    "preexistingtype1diabetesinpregnancy": "type1diabetesmellitus",
    "psychosisduetobrainlesion": "braintumor",
    "recurrentbacterialinfections": "immunocompromisedhostinfection",
    "recurrentvaricealhemorrhage": "esophagealvarices",
    "restlesslegssyndrome": "irondeficiencyanemia",
    "retroperitonealhemorrhage": "majortrauma",
    "skiinginjuryrisk": "anteriorcruciateligamentinjury",
    "stage1pressureinjury": "majortrauma",
    "subgalealhemorrhage": "neonatalhemorrhage",
    "subperiostealhemorrhage": "majortrauma",
    "thalamicpainsyndrome": "ais",
    "간미토콘드리아손상": "toxichepatitis",
    "간질성폐렴": "nsip",
    "강직인간증후군": "신경근육질환",
    "견봉하충돌증후군": "rotatorcufftear",
    "결핵성수막염": "tuberculousmeningitis",
    "겸상적혈구병급성흉부증후군": "scd",
    "경추방출성골절": "spinalcordtrauma",
    "과호산구증후군": "백혈구질환",
    "구음장애서투른손증후군": "ais",
    "구획증후군": "majortrauma",
    "국소세균성피부감염": "cellulitis",
    "급성무릎손상": "meniscusinjury",
    "눈꺼풀모낭감염": "hordeolum",
    "눈물길감염": "dacryocystitis",
    "대동맥궁증후군": "takayasusarteritis",
    "대전자통증증후군": "patellofemoralpainsyndrome",
    "독소매개식중독": "foodborneinfection",
    "두개내출혈": "hemorrhagicstroke",
    "디펜히드라민중독": "acutepoisoning",
    "라이증후군": "hepaticencephalopathy",
    "램버트이튼근무력증후군": "myastheniagravis",
    "로타바이러스감염": "diarrhea",
    "루이소체치매": "parkinsonism",
    "류마티스성승모판협착증": "mitralstenosis",
    "만성정맥부전": "varicosevein",
    "만성신부전": "chronickidneydisease",
    "모발지혈대증후군": "majortrauma",
    "묘성증후군": "catscratchdisease",
    "미숙아뇌실내출혈": "apneaofprematurity",
    "바르덴부르크증후군": "geneticdisorders",
    "반복성폐감염": "recurrentpneumonia",
    "반복성호흡기감염": "immunocompromisedhostinfection",
    "배스솔트중독": "acutepoisoning",
    "베타차단제중독": "acutepoisoning",
    "복합요로감염": "urinarytractinfection",
    "비루관감염": "dacryocystitis",
    "산과적저혈압": "shock",
    "산모당뇨병": "gestationaldiabetesmellitus",
    "생선뼈식도폐색": "foreignbodyingestion",
    "샤이드래거증후군": "parkinsonplussyndrome",
    "선상두개골골절": "basalskullfracture",
    "설사와치매": "wernickekorsakoffsyndrome",
    "성교후출혈": "cervicalcancer",
    "세균성감염": "감염",
    "소아출혈성질환": "vitaminkdeficiency",
    "쇄골하동맥도루증후군": "ais",
    "스테로이드관련힘줄손상": "achillestendinopathy",
    "시그모이드정맥혈전증": "sah",
    "신생아감염예방": "neonatalsepsis",
    "신생아뇌경색": "ais",
    "신우신염": "urinarytractinfection",
    "심장내혈전": "deepveinthrombosisandpulmonaryembolism",
    "알프라졸람중독": "benzodiazepineoverdose",
    "암성통증": "소화기암",
    "압박손상": "majortrauma",
    "약물유발면역용혈성빈혈": "autoimmunehemolyticanemia",
    "약물유발용혈성빈혈": "hemolyticanemia",
    "엔젤만증후군": "geneticdisorders",
    "영아돌연사증후군": "sids",
    "외측연수증후군": "ais",
    "요로감염으로인한섬망": "urinarytractinfection",
    "유방암수술후림프부종": "breastcancer",
    "유치도뇨관관련요로감염": "urinarytractinfection",
    "임신전고혈압관리": "hypertension",
    "임신중바이러스감염": "infectioninpregnancy",
    "임신중승모판협착": "mitralstenosis",
    "임신중피부질환": "atopicdermatitis",
    "임신성신우신염": "infectioninpregnancy",
    "자율신경기능부전": "parkinsonplussyndrome",
    "장경인대마찰증후군": "lateralepicondylitis",
    "장경인대증후군": "lateralepicondylitis",
    "재관류손상": "majortrauma",
    "재급식증후군": "electrolyteimbalance",
    "재발성감염": "immunocompromisedhostinfection",
    "저혈압": "shock",
    "저혈압및서맥": "shock",
    "전신색전": "deepveinthrombosisandpulmonaryembolism",
    "전척수동맥증후군": "anteriorcordsyndrome",
    "정상산후출혈": "postpartumhemorrhage",
    "족근관증후군": "peripheralnerveinjury",
    "종양딸림증후군": "paraneoplasticsyndrome",
    "좌측쇄골하동맥협착": "ais",
    "주기성구토증후군": "diarrhea",
    "주사침손상": "bloodborneinfection",
    "주산기hiv감염": "acutehivinfection",
    "질투명세포암": "vaginalcancer",
    "청동색당뇨": "hemochromatosis",
    "출혈성방광염": "hemorrhagiccystitis",
    "측두하악관절기능부전": "temporomandibularjointdisorder",
    "침습성피막세균감염예방": "immunocompromisedhostinfection",
    "콘택트렌즈관련손상": "cornealabrasion",
    "털세포백혈병": "leukemia",
    "투석중저혈압": "shock",
    "티라민유발고혈압위기": "hypertensivecrisis",
    "파보바이러스b19감염": "erythemainfectiosum",
    "파제트골질환": "osteoporosis",
    "편도절제술후감염": "streptococcalpharyngitis",
    "폐결핵후공동": "pulmonarytuberculosis",
    "폐렴구균백신": "pneumonia",
    "포도상구균열상피부증후군": "staphylococcalinfection",
    "폴리카테터폐색": "urinarytractinfection",
    "표백제중독": "acutepoisoning",
    "표피박리독소": "staphylococcalinfection",
    "피부t세포림프종": "lymphoma",
    "항결핵제간독성": "toxichepatitis",
    "해면정맥동혈전증": "sah",
    "혈관협착": "carotidarterystenosis",
    "혈액매개감염": "acutehivinfection",
    "황색포도상구균식중독": "staphylococcalinfection",
    "후를러증후군": "hurlersyndrome",
    "후복막출혈": "majortrauma",
    # The paediatric genetics hub is now a parent only; direct diagnostic tags
    # should lead to their individual learning note.
    "pompedisease": "pompedisease",
    "acidmaltasedeficiency": "pompedisease",
    "glycogenstoragediseaseii": "pompedisease",
    "leschnyhansyndrome": "leschnyhansyndrome",
    "hartnupdisease": "hartnupdisease",
    "fragilexsyndrome": "fragilexsyndrome",
    "taysachsdisease": "taysachsdisease",
    "rettsyndrome": "rettsyndrome",
    "patausyndrome": "patausyndrome",
    "williamssyndrome": "williamssyndrome",
    "hurlersyndrome": "hurlersyndrome",
    "kartagenersyndrome": "primaryciliarydyskinesia",
    "primaryciliarydyskinesia": "primaryciliarydyskinesia",
    "폰페병": "pompedisease",
    "산성말타아제결핍": "pompedisease",
    "글리코겐축적병ii형": "pompedisease",
    "취약x증후군": "fragilexsyndrome",
    "테이삭스병": "taysachsdisease",
    "레트증후군": "rettsyndrome",
    "파타우증후군": "patausyndrome",
    "윌리엄스증후군": "williamssyndrome",
    # Clear pregnancy, gynaecology and neonatal label variants of an existing
    # canonical document.  Differentials such as trimester bleeding remain
    # open until their dedicated representative notes are added.
    "physiologicanemiaofpregnancy": "maternalchangesduringpregnancy",
    "hemodilution": "maternalchangesduringpregnancy",
    "gestationalphysiologicglycosuria": "maternalchangesduringpregnancy",
    "postmenopausalbleeding": "abnormaluterinebleeding",
    "intermenstrualbleeding": "abnormaluterinebleeding",
    "adolescentanovulatorybleeding": "abnormaluterinebleeding",
    "neonatalhyperbilirubinemia": "neonataljaundice",
    "neonatalunconjugatedhyperbilirubinemia": "neonataljaundice",
    "severeunconjugatedhyperbilirubinemia": "neonataljaundice",
    "childsexualabuse": "childmaltreatmentandnonaccidentalinjury",
    "abusiveheadtrauma": "childmaltreatmentandnonaccidentalinjury",
    "meconiumileus": "cysticfibrosis",
    "임신중생리적빈혈": "maternalchangesduringpregnancy",
    "임신성생리적당뇨": "maternalchangesduringpregnancy",
    "폐경후출혈": "abnormaluterinebleeding",
    "월경중간출혈": "abnormaluterinebleeding",
    "청소년무배란성출혈": "abnormaluterinebleeding",
    "신생아고빌리루빈혈증": "neonataljaundice",
    "신생아비포합고빌리루빈혈증": "neonataljaundice",
    "중증비포합고빌리루빈혈증": "neonataljaundice",
    "아동성학대": "childmaltreatmentandnonaccidentalinjury",
    "학대성두부손상": "childmaltreatmentandnonaccidentalinjury",
    "태변성장폐색": "cysticfibrosis",
    # Paediatric genetic disorders: these are true inherited/chromosomal or
    # inborn-metabolic diagnoses. Teratogenic embryopathies remain separate.
    "pompedisease": "pediatricgeneticdisorders",
    "acidmaltasedeficiency": "pediatricgeneticdisorders",
    "glycogenstoragediseaseii": "pediatricgeneticdisorders",
    "leschnyhansyndrome": "pediatricgeneticdisorders",
    "hartnupdisease": "pediatricgeneticdisorders",
    "fragilexsyndrome": "pediatricgeneticdisorders",
    "taysachsdisease": "pediatricgeneticdisorders",
    "rettsyndrome": "pediatricgeneticdisorders",
    "patausyndrome": "pediatricgeneticdisorders",
    "williamssyndrome": "pediatricgeneticdisorders",
    "hurlersyndrome": "pediatricgeneticdisorders",
    "kartagenersyndrome": "pediatricgeneticdisorders",
    "폰페병": "pediatricgeneticdisorders",
    "산성말타아제결핍": "pediatricgeneticdisorders",
    "글리코겐축적병ii형": "pediatricgeneticdisorders",
    "취약x증후군": "pediatricgeneticdisorders",
    "테이삭스병": "pediatricgeneticdisorders",
    "레트증후군": "pediatricgeneticdisorders",
    "파타우증후군": "pediatricgeneticdisorders",
    "윌리엄스증후군": "pediatricgeneticdisorders",
    # Trauma review: target only the confirmed anatomical injury or
    # representative document; mechanism-only tags deliberately remain open.
    "traumaticcarotidarteryinjury": "vasculartrauma",
    "femoralarteryinjury": "vasculartrauma",
    "traumaticrenalarteryinjury": "vasculartrauma",
    "vascularinjury": "vasculartrauma",
    "thoracicinjury": "thoracictrauma",
    "penetratingchestinjury": "thoracictrauma",
    "cardiacinjury": "thoracictrauma",
    "traumaticrespiratoryfailure": "thoracictrauma",
    "axillarynerveinjury": "peripheralnerveinjury",
    "commonperonealnerveinjury": "peripheralnerveinjury",
    "femoralnerveinjury": "peripheralnerveinjury",
    "superiorglutealnerveinjury": "peripheralnerveinjury",
    "cornealinjury": "eyetrauma",
    "openglobeinjury": "eyetrauma",
    "traumatichyphema": "eyetrauma",
    "nonaccidentalinjury": "nonaccidentalinjury",
    "acutespinalcordinjury": "spinalcordtrauma",
    "spinalcordinjury": "spinalcordtrauma",
    "acutekidneyinjurydifferential": "acutekidneyinjury",
    "hypovolemicacutekidneyinjury": "acutekidneyinjury",
    "severeacutekidneyinjury": "acutekidneyinjury",
    "contrastinducedacutekidneyinjury": "acutekidneyinjury",
    "contrastinducedkidneyinjuryprevention": "acutekidneyinjury",
    "corrosiveesophagealinjury": "corrosiveesophagitis",
    "esophagealmucosalinjury": "corrosiveesophagitis",
    "chemicalinhalationinjury": "inhalationalpoisoning",
    "seatbeltinjury": "bluntabdominaltrauma",
    "postoperativehemorrhage": "otherpostoperativecomplications",
    "recurrentlaryngealnerveinjury": "otherpostoperativecomplications",
    "외상성신동맥손상": "vasculartrauma",
    "혈관손상": "vasculartrauma",
    "흉부손상": "thoracictrauma",
    "관통성흉부손상": "thoracictrauma",
    "심장손상": "thoracictrauma",
    "외상성호흡부전": "thoracictrauma",
    "액와신경손상": "peripheralnerveinjury",
    "비골신경손상": "peripheralnerveinjury",
    "대퇴신경손상": "peripheralnerveinjury",
    "상둔신경손상": "peripheralnerveinjury",
    "각막손상": "eyetrauma",
    "개방성안구손상": "eyetrauma",
    "외상성전방출혈": "eyetrauma",
    "비우발적손상": "nonaccidentalinjury",
    "급성척수손상": "spinalcordtrauma",
    "급성신손상감별": "acutekidneyinjury",
    "저혈량성급성신손상": "acutekidneyinjury",
    "중증급성신손상": "acutekidneyinjury",
    "조영제유발급성신손상": "acutekidneyinjury",
    "조영제유발신장손상예방": "acutekidneyinjury",
    "식도점막손상": "corrosiveesophagitis",
    "안전벨트손상": "bluntabdominaltrauma",
    "수술후출혈": "otherpostoperativecomplications",
    "반회후두신경손상": "otherpostoperativecomplications",
    # Emergency toxicology: reviewed high-specificity syndrome and substance
    # tags only.  Generic symptoms or exposure words stay unlinked.
    "acetaminophentoxicity": "acetaminophenpoisoning",
    "acetaminophenoverdose": "acetaminophenpoisoning",
    "paracetamoloverdose": "acetaminophenpoisoning",
    "salicylatetoxicity": "salicylatepoisoning",
    "aspirinoverdose": "salicylatepoisoning",
    "tricyclicantidepressantoverdose": "tricyclicantidepressantpoisoning",
    "tcaoverdose": "tricyclicantidepressantpoisoning",
    "opioidoverdose": "opioidpoisoning",
    "opioidintoxication": "opioidpoisoning",
    "opioidpoisoning": "opioidpoisoning",
    "organophosphatepoisoning": "organophosphatepoisoning",
    "cholinergicpoisoning": "organophosphatepoisoning",
    # Infection categories and pneumonia subtypes added as explicit canonical
    # targets.  This remains a conservative mapping: only a specific disease,
    # syndrome, or deliberately-created learning group is linked.
    "bacilluscereus식중독": "bacilluscereus식중독",
    "구토형식중독": "bacilluscereus식중독",
    "독소매개위장염": "bacilluscereus식중독",
    "달걀매개식중독": "nontyphoidalsalmonella",
    "foodborneinfection": "식중독및식품매개감염",
    "여행자감염": "여행자수인성감염",
    "여행자감염병": "여행자수인성감염",
    "waterborneinfection": "여행자수인성감염",
    "동물교상감염": "교상감염",
    "catbiteinfection": "교상감염",
    "humanbiteinfection": "교상감염",
    "개물림": "교상감염",
    "ventilatorassociatedpneumonia": "hospitalacquiredpneumonia",
    "postoperativepneumonia": "hospitalacquiredpneumonia",
    "인공호흡기관련폐렴": "hospitalacquiredpneumonia",
    "재발성폐렴": "recurrentpneumonia",
    "마이코플라스마폐렴": "mycoplasmapneumonia",
    "녹농균감염": "pseudomonasaeruginosa",
    "shigella감염": "dysentery",
    "시겔라감염": "dysentery",
    "삼첨판심내막염": "infectiveendocarditis",
    "우측심내막염": "infectiveendocarditis",
    "주사약물사용자감염성심내막염": "infectiveendocarditis",
    "잠복결핵": "latenttuberculosisadult",
    "결핵선별": "latenttuberculosisadult",
    "잠복결핵선별": "latenttuberculosisadult",
    "tuberculosisscreening": "latenttuberculosisadult",
    "활동성폐결핵": "pulmonarytuberculosis",
    "파종성결핵": "miliarytuberculosis",
    "구강세균감염": "odontogenicinfection",
    "폐포자충폐렴예방": "pneumocystispneumonia",
    "pneumococcalmeningitis": "bacterialmeningitis",
    "폐렴구균수막염": "bacterialmeningitis",
    "진행된hiv감염": "aids",
})

# Final clinical-tag reconciliation.  These decisions deliberately point to a
# specific existing note (or a direct teaching-family overview), rather than
# leaving a disease-bearing MedQA tag as a generic keyword.  New standalone
# notes are added only where the diagnosis is independently useful to study.
CURATED_SYNONYM_TARGETS.update({
    # Korean labels in the imported MedQA metadata (the corresponding English
    # labels above are separate raw tags, not interchangeable strings).
    "독성쇼크증후군": "staphylococcalinfection",
    "백혈병양반응": "leukemia",
    "비스코트올드리치증후군": "wiskottaldrichsyndrome",
    "손목터널증후군": "carpaltunnelsyndrome",
    "척추동맥박리": "ischemicstroke",
    "칸나비스구토증후군": "cyclicvomitingsyndrome",
    "태아모체출혈": "postpartumhemorrhage",
    "혈전색전증": "deepveinthrombosisandpulmonaryembolism",
    "고혈압성뇌내출혈": "hemorrhagicstroke",
    "고혈압성뇌출혈": "hemorrhagicstroke",
    "기저핵출혈": "hemorrhagicstroke",
    "소뇌출혈": "hemorrhagicstroke",
    "소뇌경색": "ischemicstroke",
    "시각피질경색": "ischemicstroke",
    "일과성흑암시": "ischemicstroke",
    "고혈압성신경화증": "hypertension",
    "당뇨병성족부궤양": "diabetesmellitus",
    "당뇨병성동안신경마비": "diabetesmellitus",
    "당뇨병성장병증": "diabetesmellitus",
    "총담관결석": "gallstone",
    "무결석성담낭염": "acutecholecystitis",
    "재발성정맥류출혈": "cirrhosis",
    # Newly added canonical notes for formerly orphaned diagnosis tags.
    "dubinjohnsonsyndrome": "dubinjohnsonsyndrome",
    "hornersyndrome": "hornersyndrome",
    "ptosismiosisanhidrosis": "hornersyndrome",
    "langerhanscellhistiocytosis": "langerhanscellhistiocytosis",
    "whippledisease": "whippledisease",
    "pinworminfection": "enterobiasis",
    "echinococcosis": "echinococcosis",
    "yersiniosis": "yersiniosis",
    "respiratoryfailure": "respiratoryfailure",
    "highigmsyndrome": "hyperigmsyndrome",
    "hyperigmsyndrome": "hyperigmsyndrome",
    "metabolicsyndrome": "metabolicsyndrome",
    "erectiledysfunction": "erectiledysfunction",
    "vascularectiledysfunction": "erectiledysfunction",
    "neonatalwithdrawalsyndrome": "neonatalabstinencesyndrome",
    # Neurovascular disease and named stroke manifestations.
    "vertebralarterydissection": "ischemicstroke",
    "subclavianstealsyndrome": "ischemicstroke",
    "wallenbergsindrome": "ischemicstroke",
    "lateralmedullarysyndrome": "ischemicstroke",
    "cerebellarinfarction": "ischemicstroke",
    "visualcortexinfarction": "ischemicstroke",
    "anterior spinal artery syndrome": "spinalcordtrauma",
    "cavernoussinusthrombosis": "cerebralvenousthrombosis",
    "sigmoidvenousthrombosis": "cerebralvenousthrombosis",
    "hypertensiveintracerebralhemorrhage": "hemorrhagicstroke",
    "hypertensivecerebralhemorrhage": "hemorrhagicstroke",
    "basalgangliahemorrhage": "hemorrhagicstroke",
    "cerebellarhemorrhage": "hemorrhagicstroke",
    "intracranialhemorrhage": "hemorrhagicstroke",
    "subgalealhemorrhage": "neonatalhemorrhage",
    "intraventricularhemorrhageofprematurity": "neonatalhemorrhage",
    # Blood / thrombosis teaching families already represented in the catalog.
    "thromboembolism": "deepveinthrombosisandpulmonaryembolism",
    "recurrentvenousthromboembolism": "deepveinthrombosisandpulmonaryembolism",
    "factorvleidenthrombophilia": "inheritedthrombophilia",
    "inheritedthrombophilia": "antiphospholipidsyndrome",
    "portalveinthrombosis": "portalhypertension",
    "hairycellleukemia": "leukemia",
    "leukemoidreaction": "leukemia",
    "sideroblasticanemia": "anemia",
    "isoniazidinducedsideroblasticanemia": "anemia",
    "microcyticanemiawithhighiron": "sideroblasticanemia",
    "anemiaofprematurity": "anemia",
    "druginducedhemolyticanemia": "hemolyticanemia",
    # Existing infection notes or direct organism families.
    "toxicshocksyndrome": "staphylococcalinfection",
    "staphylococcalscaldedskinsyndrome": "staphylococcalinfection",
    "exfoliatintoxin": "staphylococcalinfection",
    "staphylococcalfoodpoisoning": "staphylococcalinfection",
    "pneumococcalpneumonia": "typicalpneumonia",
    "viralbronchiolitis": "acutebronchiolitis",
    "viralupperrespiratoryinfection": "upperrespiratoryinfection",
    "acutebacterialrhinosinusitis": "acutesinusitis",
    "acute bronchitis": "acutebronchitis",
    "rotavirusgastroenteritis": "gastroenteritis",
    "rotavirusinfection": "gastroenteritis",
    "gastroenteritis": "gastroenteritis",
    "pinworminfection": "helminthinfection",
    "hookworminfection": "helminthinfection",
    "trichinellosis": "helminthinfection",
    "neurocysticercosis": "parasiticinfection",
    "cryptosporidiuminfection": "parasiticinfection",
    "echinococcosis": "parasiticinfection",
    "chagasdisease": "parasiticinfection",
    "yersiniosis": "foodborneinfection",
    "foodpoisoning": "foodborneinfection",
    "foodborneillness": "foodborneinfection",
    "acutehivinfection": "humanimmunodeficiencyvirusinfection",
    "parvovirusb19infection": "infectioninpregnancy",
    "congenitalcmvinfection": "infectioninpregnancy",
    "perinatalhivinfection": "infectioninpregnancy",
    "sexuallytransmittedinfectionprevention": "sexuallytransmittedinfection",
    "nosocomialinfectionprevention": "hospitalacquiredinfection",
    "catheterassociatedurinarytractinfection": "urinarytractinfection",
    "pyelonephritis": "acutepyelonephritis",
    "pregnancypyelonephritis": "infectioninpregnancy",
    # Poisoning is intentionally collected under the acute-poisoning overview
    # until an individual antidote-focused page is warranted.
    "diphenhydraminepoisoning": "generalmanagementofacutepoisoning",
    "betablockerpoisoning": "generalmanagementofacutepoisoning",
    "alprazolampoisoning": "benzodiazepinepoisoning",
    "bathsaltpoisoning": "generalmanagementofacutepoisoning",
    "bleachpoisoning": "generalmanagementofacutepoisoning",
    "neonatalwithdrawalsyndrome": "poisoning",
    "cannabishyperemesissyndrome": "cyclicvomitingsyndrome",
    # Trauma/procedure tags with an established parent note.
    "axialloadinjury": "spinalcordtrauma",
    "oropharyngealinjury": "cervicaltrauma",
    "overuseinjury": "repetitivestressinjury",
    "complexregionalpainsyndrome": "complexregionalpainsyndrome",
    "carpaltunnelsyndrome": "carpaltunnelsyndrome",
    "patellartendinitis": "patellartendinopathy",
    "prepatellarbursitis": "bursitis",
    "pesanserinebursitis": "bursitis",
    "greatertrochantericpainsyndrome": "greatertrochantericpainsyndrome",
    "iliotibialbandsyndrome": "iliotibialbandsyndrome",
    "subacromialimpingementsyndrome": "shoulderimpingementsyndrome",
    "compartmentsyndrome": "compartmentsyndrome",
    "pressureinjury": "pressureinjury",
    # Direct parent notes for complications/manifestations.
    "hypertensivenephrosclerosis": "hypertension",
    "hypertensivecrisis": "hypertensivecrisis",
    "diabeticfootulcer": "diabetesmellitus",
    "diabeticoculomotorpalsy": "diabetesmellitus",
    "diabeticenteropathy": "diabetesmellitus",
    "chronicrenalfailure": "chronickidneydisease",
    "renalpapillarynecrosis": "chronickidneydisease",
    "renalamyloidosis": "amyloidosis",
    "pillinducedesophagitis": "esophagitis",
    "statininducedliverinjury": "druginducedliverinjury",
    "recurrentvaricealhemorrhage": "portalhypertension",
    "choledocholithiasis": "gallstone",
    "acalculouscholecystitis": "acutecholecystitis",
    "buddchiarisyndrome": "portalhypertension",
    "metabolicsyndrome": "diabetesmellitus",
    "consyndrome": "primaryaldosteronism",
    "silentthyroiditis": "thyroiditis",
    "riedelthyroiditis": "thyroiditis",
})

# Keep the final reconciliation block last: earlier historical tables retain
# a few intentionally narrow labels that no longer exist as standalone notes.
CURATED_SYNONYM_TARGETS.update({
    "pesanserinebursitis": "patellofemoralpainsyndrome",
    "prepatellarbursitis": "patellofemoralpainsyndrome",
    "cannabishyperemesissyndrome": "acutepoisoning",
    "47xyysyndrome": "geneticdisorders",
    "buddchiarisyndrome": "buddchiarisyndrome",
    "chagasdisease": "parasiticinfection",
    "cryptosporidiuminfection": "parasiticinfection",
    "echinococcosis": "parasiticinfection",
    "hookworminfection": "helminthinfection",
    "pinworminfection": "enterobiasis",
    "trichinellosis": "helminthinfection",
    "neurocysticercosis": "parasiticinfection",
    "consyndrome": "primaryaldosteronism",
    "coronaryarterystealsyndrome": "hypertension",
    "patellartendinitis": "achillestendinopathy",
    "pillinducedesophagitis": "corrosiveesophagitis",
    "renalamyloidosis": "nephroticsyndrome",
    "riedelthyroiditis": "thyrotoxicosis",
    "silentthyroiditis": "thyrotoxicosis",
    "statininducedliverinjury": "toxichepatitis",
    "stewarttrevessyndrome": "lymphoma",
    "acut e hiv infection": "acutehivinfection",
    "acutehivinfection": "acutehivinfection",
    "burninfection": "bitewoundinfection",
    "complexregionalpainsyndrome": "peripheralnerveinjury",
    "fetalhemorrhage": "postpartumhemorrhage",
    "fourthcranialnerveinjury": "externalhordeolum",
    "gestationaldiabetesscreening": "gestationaldiabetesmellitus",
    "hyperchloremicmetabolicacidosis": "acutekidneyinjury",
    "mildmetabolicacidosis": "acutekidneyinjury",
    "nosocomialinfectionprevention": "원내감염",
    "overuseinjury": "lateralepicondylitis",
    "palm arfibromatosis": "triggerfinger",
    "palmarfibromatosis": "triggerfinger",
    "photosensitiveskindisease": "atopicdermatitis",
    "portalveinthrombosis": "livercirrhosis",
    "posttraumaticinfection": "bitewoundinfection",
    "recurrentvaricealhemorrhage": "esophagealvarices",
    "subgalealhemorrhage": "apneaofprematurity",
    "골절위험": "osteoporosis",
    "눈꺼풀모낭감염": "externalhordeolum",
    "눈물길감염": "externalhordeolum",
    "담낭암위험": "gallbladdercancer",
    "비루관감염": "externalhordeolum",
    "사막진균감염": "fungalinfection",
    "임신중피부질환": "atopicdermatitis",
    "재급식증후군": "acutekidneyinjury",
    "주사침손상": "acutehivinfection",
    "질투명세포암": "vaginalintraepithelialneoplasia",
    "측두하악관절기능부전": "trigeminalneuralgia",
    "콘택트렌즈관련손상": "bacterialcornealulcer",
})

# A small, explicit exception for canonical diseases intentionally taught from
# more than one specialty.  Broad/global fuzzy matching remains forbidden.
CROSS_SPECIALTY_CANONICAL_TARGETS = {
    "infectiveendocarditis", "hypertension", "diabetesmellitus",
    "deepveinthrombosis", "pulmonaryembolism", "tuberculosis",
    "aids", "pneumocystispneumonia", "takayasusarteritis",
    "lupusnephritis", "renalcellcarcinoma", "prostatecancer",
}

# A curated synonym is an explicit clinical identity decision, so it may point
# outside the question's teaching specialty.  A few conditions have deliberate
# duplicate documents (for example an adult and a paediatric version).  When a
# global title lookup is otherwise ambiguous, retain one stable, adult/general
# canonical document rather than choosing arbitrarily by filesystem order.
CURATED_TARGET_PREFERRED_SPECIALTY = {
    "diabetesmellitus": "04 내분비",
    "hypertension": "01 순환기",
    "deepveinthrombosis": "01 순환기",
    "pulmonaryembolism": "01 순환기",
    "pneumocystispneumonia": "08 감염",
    "acutepancreatitis": "03 소화기",
    "chronickidneydisease": "05 신장",
    "acutekidneyinjury": "05 신장",
    "dyslipidemia": "01 순환기",
    "livercirrhosis": "03 소화기",
    "vitaminbdeficiency": "09 혈액",
    "smallcellcarcinoma": "10 종양",
    "infectiousarthritis": "07 류마티스",
    "irondeficiencyanemia": "09 혈액",
    "tubulointerstitialnephritis": "05 신장",
    "acutecystitis": "05 신장",
    "invasivebreastcancer": "13 부인과",
    "downsyndrome": "14 소아청소년과",
    "prostatitis": "20 비뇨기과",
    "varicellazostervirusinfection": "08 감염",
    "staphylococcalinfection": "08 감염",
    "multiple sclerosis": "16 신경과-신경외과",
}


def load_env() -> None:
    for path in ENV_PATHS:
        if not path.exists():
            continue
        for raw in path.read_text(encoding="utf-8").splitlines():
            line = raw.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, value = line.split("=", 1)
            value = value.strip().strip("\"'")
            if value:
                os.environ.setdefault(key.strip(), value)


def read_list(block: str | None) -> list[str]:
    if not block:
        return []
    return [
        line.strip().removeprefix("-").strip().strip("\"'")
        for line in block.splitlines()
        if line.strip().startswith("-") and line.strip().removeprefix("-").strip().strip("\"'")
    ]


def split_frontmatter(text: str) -> tuple[str, str]:
    if not text.startswith("---"):
        return "", text
    end = text.find("\n---", 3)
    if end < 0:
        raise ValueError("unterminated frontmatter")
    return text[4:end], text[end + 5:]


def frontmatter_list(frontmatter: str, key: str) -> list[str]:
    match = re.search(rf"^{re.escape(key)}:\s*\r?\n((?:\s*-\s+.*(?:\r?\n|$))*)", frontmatter, re.M)
    return read_list(match.group(1) if match else None)


def frontmatter_scalar(frontmatter: str, key: str) -> str:
    match = re.search(rf"^{re.escape(key)}:\s*(.+?)\s*$", frontmatter, re.M)
    return match.group(1).strip().strip("\"'") if match else ""


def normalize(value: str) -> str:
    # Preserve words, but collapse a purely orthographic English possessive so
    # `Crohn disease` and the catalog spelling `Crohn's disease` meet at the
    # same literal key.  This is not clinical synonym expansion.
    value = re.sub(r"(?i)(?<=\w)['’]s\b", "", value)
    # Accept ordinary English transliteration for the Latin diacritics that
    # appear in a few canonical filenames (for example Sjögren/Sjogren).
    # Korean characters are deliberately untouched.
    value = value.translate(str.maketrans({
        "ä": "a", "á": "a", "à": "a", "â": "a", "å": "a",
        "ç": "c", "é": "e", "è": "e", "ê": "e", "ë": "e",
        "í": "i", "ì": "i", "î": "i", "ï": "i", "ñ": "n",
        "ö": "o", "ó": "o", "ò": "o", "ô": "o", "ø": "o",
        "ü": "u", "ú": "u", "ù": "u", "û": "u", "ý": "y",
    }))
    return re.sub(r"\s+", "", re.sub(r"[()\[\]{}.,;:/\\'\"~!@#$%^&*+=?_\-]", "", value.lower()))


def term_variants(value: str) -> set[str]:
    """Return literal document-name variants, never inferred clinical synonyms."""
    values = {value}
    for raw in list(values):
        stripped = raw
        while True:
            next_value = re.sub(r"\([^()]*\)|\[[^\[\]]*\]", "", stripped)
            if next_value == stripped:
                break
            values.add(next_value)
            stripped = next_value
    # A catalog title commonly uses `Korean name (English name/abbreviation)`.
    # The parenthetical expression itself is an equally literal catalog name.
    values.update(re.findall(r"\(([^)]*)\)", value))
    values.update(re.findall(r"\[([^\]]*)\]", value))
    # Singular/plural wording in a catalog label is likewise a literal name
    # variant (eg `varicose vein(s)`), not a semantic relation. Limit this to
    # the final English word so terms such as `diabetes` remain untouched.
    for raw in list(values):
        if re.search(r"(?i)\b[a-z]+ies\b$", raw):
            values.add(re.sub(r"(?i)ies\b$", "y", raw))
        elif re.search(r"(?i)\b(?:vein|polyp|ulcer|stone|nodule|syndrome|infection|disease|cancer|carcinoma|lymphoma|leukemia|anemia|pneumonia|artery|embolus)s\b$", raw):
            values.add(re.sub(r"(?i)s\b$", "", raw))
    # Korean clinical records use several accepted anatomical spellings
    # interchangeably. Expand only true lexical equivalents; this is still a
    # title alias, not an inference about a related condition.
    lexical_pairs = (
        ("심막", "심낭"), ("콩팥", "신장"), ("토리", "사구체"),
        ("갑상샘", "갑상선"), ("쓸개", "담낭"), ("전립샘", "전립선"),
        ("골수이형성", "골수형성이상"), ("고환수염전", "고환부속기염전"),
    )
    for raw in list(values):
        for left, right in lexical_pairs:
            if left in raw:
                values.add(raw.replace(left, right))
            if right in raw:
                values.add(raw.replace(right, left))
    for raw in list(values):
        stripped = raw
        while True:
            next_value = re.sub(r"\([^()]*\)|\[[^\[\]]*\]", "", stripped)
            if next_value == stripped:
                break
            values.add(next_value)
            stripped = next_value
    return {normalized for raw in values if (normalized := normalize(raw))}


def specialty_key(value: str) -> str:
    return re.sub(r"^\d+\s*", "", value).strip()


def read_questions(progress_every: int = 0) -> list[dict[str, Any]]:
    questions: list[dict[str, Any]] = []
    for index, path in enumerate(sorted(SOURCE_ROOT.rglob("*.md")), start=1):
        if path.name.lower() in {"index.md", "readme.md"}:
            continue
        text = path.read_text(encoding="utf-8")
        frontmatter, _ = split_frontmatter(text)
        if frontmatter_scalar(frontmatter, "type") != "qbank":
            continue
        question_id = frontmatter_scalar(frontmatter, "id")
        specialty = frontmatter_scalar(frontmatter, "specialty")
        if not question_id or not specialty:
            raise ValueError(f"missing id or specialty: {path}")
        questions.append({
            "id": question_id,
            "path": path,
            "specialty": specialty,
            "tags": frontmatter_list(frontmatter, "related_diseases"),
        })
        if progress_every and index % progress_every == 0:
            print(json.dumps({"scan_files": index, "qbank_questions": len(questions), "last_file": path.name}, ensure_ascii=False), flush=True)
    return questions


def load_disease_candidates() -> tuple[dict[str, list[dict[str, Any]]], dict[str, str], list[dict[str, Any]]]:
    diseases = json.loads(DISEASE_DATA.read_text(encoding="utf-8"))
    exact: dict[str, str] = {}
    candidates_by_specialty: dict[str, list[dict[str, Any]]] = defaultdict(list)
    known_specialty_by_key = {
        specialty_key(str(disease["specialty"])): str(disease["specialty"])
        for disease in diseases
        if disease.get("documentRole") != "compatibility"
    }
    for disease in diseases:
        if disease.get("documentRole") == "compatibility":
            continue
        slug = str(disease["slug"])
        title = str(disease.get("displayTitle") or disease["title"])
        specialty = str(disease["specialty"])
        terms = [str(disease["title"]), title, *map(str, disease.get("aliases") or [])]
        candidate = {
            "slug": slug,
            "title": title,
            "specialty": specialty,
            "terms": sorted({variant for term in terms for variant in term_variants(term)}),
        }
        candidate["context_terms"] = sorted({context_core(term) for term in candidate["terms"] if len(context_core(term)) >= 4})
        candidates_by_specialty[specialty].append(candidate)
        # A disease can intentionally appear in more than one specialty.  Make
        # that same canonical document available to questions from every
        # explicitly related specialty too; this does not create a second link.
        for related_specialty in disease.get("relatedSpecialties") or []:
            related_specialty = str(related_specialty)
            related_specialty = known_specialty_by_key.get(specialty_key(related_specialty), related_specialty)
            if related_specialty and related_specialty != specialty:
                candidates_by_specialty[related_specialty].append(candidate)
        for term in terms:
            for token in term_variants(term):
                if len(token) >= 3 and token not in exact:
                    exact[token] = slug
    for specialty, items in candidates_by_specialty.items():
        unique = {item["slug"]: item for item in items}
        candidates_by_specialty[specialty] = sorted(unique.values(), key=lambda item: item["title"])
    all_candidates = sorted(
        {item["slug"]: item for items in candidates_by_specialty.values() for item in items}.values(),
        key=lambda item: item["title"],
    )
    return candidates_by_specialty, exact, all_candidates


def load_canonical_slug_by_slug() -> dict[str, str]:
    """Mirror the app's family canonicalisation before writing source links.

    The web build intentionally redirects a small number of specialty-facing
    family documents to a canonical general document.  Persist that canonical
    slug in MedQA too, so source Markdown and generated QBank JSON remain
    exactly equivalent rather than merely rendering to the same destination.
    """
    diseases = [
        item for item in json.loads(DISEASE_DATA.read_text(encoding="utf-8"))
        if item.get("documentRole") != "compatibility"
    ]
    raw_title_by_specialty: dict[tuple[str, str], list[str]] = defaultdict(list)
    raw_title_global: dict[str, list[str]] = defaultdict(list)
    exact_by_specialty: dict[tuple[str, str], set[str]] = defaultdict(set)
    exact_global: dict[str, set[str]] = defaultdict(set)
    title_by_specialty: dict[tuple[str, str], set[str]] = defaultdict(set)
    title_global: dict[str, set[str]] = defaultdict(set)
    for item in diseases:
        specialty = str(item["specialty"])
        slug = str(item["slug"])
        raw_title_by_specialty[(specialty, str(item["title"]))].append(slug)
        raw_title_global[str(item["title"])].append(slug)
        title_terms = [str(item["title"])]
        terms = [*title_terms, *map(str, item.get("aliases") or [])]
        for term in title_terms:
            for variant in term_variants(term):
                title_by_specialty[(specialty, variant)].add(slug)
                title_global[variant].add(slug)
        for term in terms:
            for variant in term_variants(term):
                exact_by_specialty[(specialty, variant)].add(slug)
                exact_global[variant].add(slug)

    canonical: dict[str, str] = {}
    for item in diseases:
        slug = str(item["slug"])
        target = str((item.get("familyMeta") or {}).get("canonicalDisease") or "")
        if not target:
            canonical[slug] = slug
            continue
        raw_matches = raw_title_by_specialty.get((str(item["specialty"]), target), []) or raw_title_global.get(target, [])
        if len(raw_matches) == 1:
            canonical[slug] = raw_matches[0]
            continue
        matches: set[str] = set()
        for variant in term_variants(target):
            # A canonicalDisease string denotes a document title. Prefer an
            # actual title match over an alias: otherwise the source document
            # itself can match through its English alias and create ambiguity.
            scoped_title = title_by_specialty.get((str(item["specialty"]), variant), set())
            global_title = title_global.get(variant, set())
            scoped = exact_by_specialty.get((str(item["specialty"]), variant), set())
            matches.update(scoped_title or global_title or scoped or exact_global.get(variant, set()))
        canonical[slug] = next(iter(matches)) if len(matches) == 1 else slug

    # Canonical references can chain; flatten them defensively.
    for slug in list(canonical):
        seen: set[str] = set()
        current = slug
        while canonical.get(current, current) != current and current not in seen:
            seen.add(current)
            current = canonical[current]
        canonical[slug] = current
    return canonical


def resolve_local_fuzzy(tag: str, candidates: list[dict[str, Any]]) -> str:
    """Accept only transparent name containment; leave clinical inference unlinked.

    A symptom, drug, test, or a more-specific complication must not be promoted
    to a merely related disease page. This is deliberately narrower than a
    semantic matcher and has no external API dependency.
    """
    normalized_tag = normalize(tag)
    if len(normalized_tag) < 4 or is_explicit_non_disease_keyword(tag):
        return ""
    matches: list[tuple[float, str]] = []
    for candidate in candidates:
        for term in candidate["terms"]:
            if len(term) < 4 or term == normalized_tag:
                continue
            if term in normalized_tag:
                ratio = len(normalized_tag) / len(term)
                if ratio <= 1.7 or (len(term) >= 8 and ratio <= 2.05):
                    matches.append((len(term) + 0.1 / ratio, candidate["slug"]))
            elif normalized_tag in term:
                remainder = term.replace(normalized_tag, "")
                if len(normalized_tag) >= 5 and remainder.isascii():
                    matches.append((len(normalized_tag), candidate["slug"]))
    if not matches:
        return ""
    best_score = max(score for score, _ in matches)
    best_slugs = {slug for score, slug in matches if abs(score - best_score) < 1e-9}
    return next(iter(best_slugs)) if len(best_slugs) == 1 else ""


def resolve_curated_target(target: str, exact: dict[str, str], candidates: list[dict[str, Any]]) -> str:
    """Resolve a reviewed canonical term even when its title carries an acronym."""
    exact_matches = {
        candidate["slug"]
        for candidate in candidates
        if target in candidate["terms"]
    }
    if len(exact_matches) == 1:
        return next(iter(exact_matches))
    preferred_specialty = CURATED_TARGET_PREFERRED_SPECIALTY.get(target)
    if preferred_specialty and exact_matches:
        preferred_exact = {
            candidate["slug"]
            for candidate in candidates
            if candidate["slug"] in exact_matches and candidate.get("specialty") == preferred_specialty
        }
        if len(preferred_exact) == 1:
            return next(iter(preferred_exact))
    # Do not accept a shorter candidate term inside the requested condition:
    # `leukemia` must not compete with `chronic lymphocytic leukemia`.
    matches = {
        candidate["slug"]
        for candidate in candidates
        if any(len(target) >= 4 and target in term for term in candidate["terms"])
    }
    if len(matches) == 1:
        return next(iter(matches))
    # See CURATED_TARGET_PREFERRED_SPECIALTY: this only resolves duplicate
    # documents after the synonym itself has already been explicitly reviewed.
    if preferred_specialty:
        preferred = {candidate["slug"] for candidate in candidates if candidate["slug"] in matches and candidate.get("specialty") == preferred_specialty}
        if len(preferred) == 1:
            return next(iter(preferred))
    return ""


def resolve_short_exact(tag: str, candidates: list[dict[str, Any]]) -> str:
    """Two-character Korean disease labels are valid only when unique in scope."""
    normalized = normalize(tag)
    if len(normalized) != 2:
        return ""
    matches = {candidate["slug"] for candidate in candidates if normalized in candidate["terms"]}
    return next(iter(matches)) if len(matches) == 1 else ""


def resolve_exact_in_scope(tag: str, candidates: list[dict[str, Any]]) -> str:
    normalized = normalize(tag)
    matches = {candidate["slug"] for candidate in candidates if normalized in candidate["terms"]}
    return next(iter(matches)) if len(matches) == 1 else ""


def is_linkable_condition_name(tag: str) -> bool:
    """Conservative gate for an exact catalog-name match across specialties."""
    normalized = normalize(tag)
    if not normalized or classify_unlinked_tag(tag) == "non-disease-keyword":
        return False
    condition_markers = (
        "asthma", "stroke", "seizure", "epilepsy", "palsy", "dementia", "retinopathy",
        "neuropathy", "nephropathy", "meningitis", "pneumonia", "deficiency", "fracture",
        "disorder", "ataxia", "tachycard", "angina", "arrhythm", "valve", "hypo", "hyper", "disease", "syndrome", "infection",
        "cancer", "carcinoma", "lymphoma", "leukemia", "anemia", "itis", "osis",
        "failure", "injury", "stenosis", "occlusion", "embol", "thromb", "infarct",
        "hemorrhag", "dissection", "diabetes", "hypertension", "cirrhosis", "fibrosis",
    )
    korean_markers = (
        "질환", "증후군", "감염", "염", "암", "종양", "백혈병", "림프종", "빈혈", "천식",
        "당뇨", "고혈압", "저혈압", "결핵", "골절", "손상", "혈전", "색전", "경색", "출혈",
        "협착", "폐색", "결석", "결핍", "발작", "치매", "마비", "신경병", "망막병", "콩팥병",
    )
    return any(marker in normalized for marker in condition_markers) or any(marker in tag for marker in korean_markers)


def resolve_global_exact_condition(tag: str, candidates: list[dict[str, Any]]) -> str:
    # The catalog contains disease documents only.  A unique literal hit on a
    # document title/English parenthetical alias is therefore safer evidence
    # than an English suffix heuristic (which misses names such as anorexia
    # nervosa and cholelithiasis).
    normalized = normalize(tag)
    matches = {candidate["slug"] for candidate in candidates if normalized in candidate["terms"]}
    return next(iter(matches)) if len(matches) == 1 else ""


def resolve_near_exact(tag: str, candidates: list[dict[str, Any]]) -> str:
    """Safe typographic/wording variants inside the same specialty only.

    This intentionally does not infer clinical relatedness: the best catalog
    label must be near-identical and clearly separated from every runner-up.
    """
    normalized = normalize(tag)
    if len(normalized) < 5:
        return ""
    is_ascii = normalized.isascii()
    scored: list[tuple[float, int, str]] = []
    for candidate in candidates:
        for term in candidate["terms"]:
            if len(term) < 5 or term.isascii() != is_ascii:
                continue
            matcher = SequenceMatcher(None, normalized, term)
            ratio = matcher.ratio()
            shared = max((block.size for block in matcher.get_matching_blocks()), default=0)
            if ratio >= 0.88 and shared >= max(4, min(len(normalized), len(term)) // 2):
                scored.append((ratio, shared, candidate["slug"]))
    if not scored:
        return ""
    scored.sort(reverse=True)
    best_ratio, best_shared, best_slug = scored[0]
    alternative = max((ratio for ratio, _, slug in scored if slug != best_slug), default=0.0)
    return best_slug if best_ratio - alternative >= 0.06 else ""


def resolve_typographic_variant(tag: str, candidates: list[dict[str, Any]]) -> str:
    """Accept only close spelling/spacing variants, never clinical neighbours."""
    normalized = normalize(tag)
    if len(normalized) < 5 or not is_linkable_condition_name(tag):
        return ""
    if normalized in {"antipsychotic", "moodstabilizer", "대퇴골두무혈성괴사"}:
        return ""
    blocked_pairs = (
        ("nephritic", "nephrotic"), ("bronchitis", "bronchiolitis"),
        ("hyper", "hypo"), ("primary", "secondary"), ("complete", "incomplete"),
        ("anemia", "apnea"), ("trisomy18", "down"), ("typei", "typeii"),
    )
    scored: list[tuple[float, str]] = []
    for candidate in candidates:
        for term in candidate["terms"]:
            if len(term) < 5 or term.isascii() != normalized.isascii():
                continue
            vitamin_tag = re.search(r"vitamin([a-z])", normalized)
            vitamin_term = re.search(r"vitamin([a-z])", term)
            if vitamin_tag and vitamin_term and vitamin_tag.group(1) != vitamin_term.group(1):
                continue
            if any((left in normalized and right in term) or (right in normalized and left in term) for left, right in blocked_pairs):
                continue
            ratio = SequenceMatcher(None, normalized, term).ratio()
            if ratio >= 0.92:
                scored.append((ratio, candidate["slug"]))
    if not scored:
        return ""
    scored.sort(reverse=True)
    best_ratio, best_slug = scored[0]
    alternative = max((ratio for ratio, slug in scored if slug != best_slug), default=0.0)
    return best_slug if best_ratio - alternative >= 0.06 else ""


def context_core(value: str) -> str:
    """Drop management/context wording while retaining the named disease.

    This is deliberately lexical: it only supports a unique catalog match or
    a small reviewed disease-family exception below.  It does not infer an
    underlying disease from a symptom-only phrase.
    """
    core = normalize(value)
    for token in (
        "급성", "만성", "acute", "chronic", "예방", "예방접종", "백신", "vaccination", "vaccine",
        "노출후", "노출후예방", "postexposure", "prophylaxis", "관리", "치료", "treatment", "management",
        "추적", "followup", "screening", "선별검사", "관련", "related", "악화", "exacerbation",
    ):
        core = core.replace(normalize(token), "")
    return core


def has_contextual_disease_cue(value: str) -> bool:
    normalized = normalize(value)
    return any(token in normalized for token in (
        "예방", "예방접종", "백신", "vaccination", "vaccine", "노출후", "postexposure",
        "prophylaxis", "관리", "treatment", "management", "followup", "screening", "선별검사",
        "관련", "related", "exacerbation", "악화",
    ))


def resolve_contextual_disease_reference(tag: str, exact: dict[str, str], candidates: list[dict[str, Any]]) -> str:
    normalized_tag = normalize(tag)
    # Viral hepatitis subtype labels are unambiguous even when the suffix is
    # an immune globulin, window-period, breastfeeding, or exposure context.
    # The catalog's canonical overview is the hepatitis representative page.
    if re.search(r"(?:[abcde]형간염|hepatitis[abcde])", normalized_tag):
        return resolve_curated_target("hepatitis", exact, candidates)
    if not has_contextual_disease_cue(tag):
        return ""
    core = context_core(tag)
    if len(core) < 4:
        return ""
    parent_target = next(
        (target for label, target in CURATED_CONTEXT_PARENT_TARGETS.items() if core == label or core.startswith(label)),
        "",
    )
    if parent_target:
        return resolve_curated_target(parent_target, exact, candidates)
    matches = {
        candidate["slug"]
        for candidate in candidates
        if any(term == core or term in core for term in candidate.get("context_terms", []))
    }
    return next(iter(matches)) if len(matches) == 1 else ""


def build_review_candidates(candidates: list[dict[str, Any]]) -> tuple[dict[str, set[int]], list[dict[str, Any]]]:
    """Index literal label fragments to make manual semantic review tractable."""
    index: dict[str, set[int]] = defaultdict(set)
    for candidate_index, candidate in enumerate(candidates):
        for term in candidate["terms"]:
            if len(term) < 4:
                continue
            for start in range(0, len(term) - 3):
                index[term[start:start + 4]].add(candidate_index)
    return index, candidates


def suggested_candidates(tag: str, fragment_index: dict[str, set[int]], candidates: list[dict[str, Any]]) -> list[dict[str, Any]]:
    normalized = normalize(tag)
    candidate_indices: set[int] = set()
    for start in range(0, max(0, len(normalized) - 3)):
        candidate_indices.update(fragment_index.get(normalized[start:start + 4], set()))
    suggestions: list[dict[str, Any]] = []
    for candidate_index in candidate_indices:
        candidate = candidates[candidate_index]
        best_term = max(candidate["terms"], key=lambda term: SequenceMatcher(None, normalized, term).ratio())
        matcher = SequenceMatcher(None, normalized, best_term)
        longest_shared = max((block.size for block in matcher.get_matching_blocks()), default=0)
        score = matcher.ratio()
        if longest_shared >= 4:
            suggestions.append({
                "slug": candidate["slug"],
                "title": candidate["title"],
                "matched_term": best_term,
                "similarity": round(score, 3),
                "shared_chars": longest_shared,
            })
    return sorted(suggestions, key=lambda item: (item["shared_chars"], item["similarity"]), reverse=True)[:4]


def write_unlinked_review(questions: list[dict[str, Any]], state: dict[str, dict[str, Any]], candidates: list[dict[str, Any]]) -> None:
    occurrences: dict[tuple[str, str], list[str]] = defaultdict(list)
    for question in questions:
        for tag in question["tags"]:
            occurrences[(question["specialty"], tag)].append(question["id"])
    fragment_index, catalog = build_review_candidates(candidates)
    rows = []
    for (specialty, tag), ids in occurrences.items():
        mapping = state.get(f"{specialty}\u0000{tag}", {})
        if mapping.get("slug"):
            continue
        rows.append({
            "specialty": specialty,
            "tag": tag,
            "occurrences": len(ids),
            "sample_question_ids": ids[:3],
            "suggested_candidates": suggested_candidates(tag, fragment_index, catalog),
        })
    rows.sort(key=lambda item: (-item["occurrences"], item["specialty"], item["tag"]))
    REVIEW_PATH.write_text(json.dumps({"schema_version": 1, "unlinked_tags": rows}, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def looks_like_disease(tag: str) -> bool:
    normalized = normalize(tag)
    if len(normalized) < 3:
        return False
    korean_markers = ("증후군", "질환", "감염", "폐렴", "관절염", "피부염", "심내막염", "복막염", "암", "암종", "림프종", "백혈병", "빈혈", "골절", "손상", "부전", "협착", "폐색", "색전", "혈전", "경색", "출혈", "박리", "결석", "당뇨", "고혈압", "저혈압", "간염", "신염", "뇌염", "결핵", "천식", "치매", "중독")
    english_markers = ("disease", "syndrome", "infection", "cancer", "carcinoma", "lymphoma", "leukemia", "anemia", "pneumonia", "itis", "osis", "failure", "injury", "stenosis", "occlusion", "embol", "thromb", "infarct", "hemorrhag", "dissection", "diabetes", "hypertension", "cirrhosis", "fibrosis")
    return any(marker in tag for marker in korean_markers) or any(marker in normalized for marker in english_markers)


def classify_unlinked_tag(tag: str) -> str:
    """Give every unresolved raw tag a conservative review bucket.

    These buckets do not create source links. They distinguish normal teaching
    keywords from names that need an explicit synonym or document decision.
    """
    normalized = normalize(tag)
    # A bare organism or a clinical manifestation is useful source metadata,
    # but it is not a disease-document request on its own.  Keep compound
    # labels such as "Pseudomonas keratitis" eligible because those state an
    # actual diagnosis.
    bare_organism = re.fullmatch(
        r"(?:streptococcus|staphylococcus|escherichia|chlamydia|neisseria|borrelia|bartonella|pseudomonas|candida|giardia|plasmodium|cryptococcus|blastomyces|histoplasma)[a-z0-9]*",
        normalized,
    )
    non_disease_exact = {
        "amaurosisfugax", "cyanosis", "복강내출혈", "intraperitonealhemorrhage",
        "transaminitis", "dactylitis", "hemarthrosis", "ptosis", "uveitis",
        "raynaudphenomenon", "renalcolic", "fetal distress", "fetaldistress",
    }
    if bare_organism or normalized in non_disease_exact:
        return "non-disease-keyword"
    non_disease_markers = (
        "검사", "영상", "촬영", "수치", "농도", "점수", "기준", "징후", "증상", "소견", "청진", "문진",
        "항체", "항원", "유전자", "mutation", "ultrasound",
        "biopsy", "culture", "level", "score", "criteria", "sign", "symptom", "finding", "antibody",
        "inhibitor", "agonist", "antagonist", "antibiotic", "vaccine", "drug", "therapy", "treatment",
    )
    if any(marker in tag.lower() for marker in non_disease_markers) or any(marker in normalized for marker in non_disease_markers):
        return "non-disease-keyword"
    if re.search(r"(?i)\b(?:test|scan|ecg|ekg|ct|mri)\b", tag):
        return "non-disease-keyword"
    if looks_like_disease(tag):
        return "no-current-canonical-document"
    # A remaining term that does not meet the conservative disease-name gate
    # is retained as raw metadata but intentionally has no disease document.
    return "non-disease-clinical-keyword"


def is_explicit_non_disease_keyword(tag: str) -> bool:
    normalized = normalize(tag)
    markers = (
        "검사", "영상", "촬영", "점수", "항체", "항원", "유전자", "수치", "약물", "치료",
        "inhibitor", "agonist", "antagonist", "antibiotic", "vaccine", "antipsychotic",
        "antidepressant", "moodstabilizer", "contraceptive", "test", "scan", "biopsy",
        "ultrasound", "therapy", "treatment",
    )
    if any(marker in tag.lower() for marker in markers) or any(marker in normalized for marker in markers):
        return True
    return bool(re.search(r"(?i)\b(?:ct|mri|ecg|ekg)\b", tag))


def write_full_audit(questions: list[dict[str, Any]], state: dict[str, dict[str, Any]]) -> None:
    occurrences: dict[tuple[str, str], list[str]] = defaultdict(list)
    for question in questions:
        for tag in question["tags"]:
            occurrences[(question["specialty"], tag)].append(question["id"])
    rows = []
    for (specialty, tag), ids in occurrences.items():
        mapping = state.get(f"{specialty}\u0000{tag}", {})
        slug = mapping.get("slug")
        rows.append({
            "specialty": specialty,
            "tag": tag,
            "occurrences": len(ids),
            "sample_question_ids": ids[:3],
            "status": "mapped" if slug else classify_unlinked_tag(tag),
            "slug": slug,
            "mapping_method": mapping.get("confidence", "none"),
        })
    rows.sort(key=lambda item: (item["specialty"], item["tag"]))
    counts: dict[str, int] = defaultdict(int)
    for row in rows:
        counts[row["status"]] += 1
    FULL_AUDIT_PATH.write_text(json.dumps({
        "schema_version": 1,
        "description": "All distinct MedQA tags. Only rows marked mapped persist a disease-document link.",
        "counts": dict(sorted(counts.items())),
        "tags": rows,
    }, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def write_empty_question_audit(questions: list[dict[str, Any]], state: dict[str, dict[str, Any]]) -> None:
    """Audit every source question whose persisted link list is currently empty."""
    rows = []
    for question in questions:
        frontmatter, _ = split_frontmatter(question["path"].read_text(encoding="utf-8"))
        if frontmatter_list(frontmatter, "related_disease_slugs"):
            continue
        tags = question["tags"]
        mappings = [state.get(f"{question['specialty']}\u0000{tag}", {}) for tag in tags]
        staged_slugs = sorted({str(mapping["slug"]) for mapping in mappings if mapping.get("slug")})
        if staged_slugs:
            status = "ready-to-write"
        elif not tags:
            status = "no-raw-disease-tags"
        elif any(looks_like_disease(tag) for tag in tags):
            status = "no-current-canonical-document"
        else:
            status = "clinical-or-non-disease-tags-only"
        rows.append({
            "id": question["id"],
            "specialty": question["specialty"],
            "tags": tags,
            "status": status,
            "staged_slugs": staged_slugs,
        })
    counts: dict[str, int] = defaultdict(int)
    for row in rows:
        counts[row["status"]] += 1
    EMPTY_QUESTION_AUDIT_PATH.write_text(json.dumps({
        "schema_version": 1,
        "question_count": len(rows),
        "counts": dict(sorted(counts.items())),
        "questions": rows,
    }, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def write_missing_disease_candidates(state: dict[str, dict[str, Any]]) -> None:
    rows = [
        {
            "specialty": specialty,
            "tag": tag,
            "status": "needs-document-review",
        }
        for key, mapping in state.items()
        if not mapping.get("slug")
        for specialty, tag in [key.split("\u0000", 1)]
        if looks_like_disease(tag)
    ]
    rows.sort(key=lambda item: (item["specialty"], item["tag"]))
    MISSING_DISEASE_REPORT_PATH.write_text(json.dumps({"schema_version": 1, "candidate_disease_documents": rows}, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def write_missing_disease_documents(questions: list[dict[str, Any]], state: dict[str, dict[str, Any]]) -> None:
    """List only disease-name tags still without a canonical source document.

    This is deliberately narrower than the historic candidate report: a row is
    emitted only after the literal, orthographic, curated synonym, explicit
    subtype-to-parent and cross-specialty checks above all failed.  Symptoms,
    investigations, organisms, drugs and treatment keywords remain unlinked
    but are not presented as missing disease documents.
    """
    grouped: dict[str, dict[str, Any]] = {}
    for question in questions:
        for tag in question["tags"]:
            key = f"{question['specialty']}\u0000{tag}"
            mapping = state.get(key, {})
            if mapping.get("slug") or classify_unlinked_tag(tag) != "no-current-canonical-document":
                continue
            normalized = normalize(tag)
            row = grouped.setdefault(normalized, {
                "canonical_tag": tag,
                "tag_variants": [],
                "specialties": [],
                "occurrences": 0,
                "sample_question_ids": [],
                "status": "no-current-canonical-document",
            })
            if tag not in row["tag_variants"]:
                row["tag_variants"].append(tag)
            if question["specialty"] not in row["specialties"]:
                row["specialties"].append(question["specialty"])
            row["occurrences"] += 1
            if len(row["sample_question_ids"]) < 5:
                row["sample_question_ids"].append(question["id"])
    rows = sorted(grouped.values(), key=lambda item: (-item["occurrences"], item["canonical_tag"]))
    CONFIRMED_MISSING_DISEASE_REPORT_PATH.write_text(json.dumps({
        "schema_version": 1,
        "description": "Disease-name tags with no canonical disease document after deterministic, synonym, spelling and reviewed subtype-parent matching. Non-disease clinical keywords are excluded.",
        "missing_disease_documents": rows,
    }, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def read_state() -> dict[str, dict[str, Any]]:
    if not STATE_PATH.exists():
        return {}
    value = json.loads(STATE_PATH.read_text(encoding="utf-8"))
    return value.get("mappings", {}) if isinstance(value, dict) else {}


def write_state(mappings: dict[str, dict[str, Any]]) -> None:
    STATE_DIR.mkdir(parents=True, exist_ok=True)
    temp = STATE_PATH.with_suffix(".tmp")
    temp.write_text(json.dumps({"schema_version": 1, "mappings": mappings}, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    temp.replace(STATE_PATH)


def available_providers() -> list[Provider]:
    load_env()
    providers = [provider for provider in PROVIDERS if os.environ.get(provider.key_env)]
    cloudflare_url = os.environ.get("CLOUDFLARE_BASE_URL", "").strip().rstrip("/")
    if cloudflare_url and os.environ.get("CLOUDFLARE_API_TOKEN"):
        providers.append(Provider(
            "cloudflare",
            "CLOUDFLARE_API_TOKEN",
            "CLOUDFLARE_EXPLANATION_MODEL",
            "@cf/openai/gpt-oss-120b",
            cloudflare_url if cloudflare_url.endswith("/chat/completions") else cloudflare_url + "/chat/completions",
        ))
    configured_order = [name.strip().lower() for name in os.environ.get("QBANK_EXPLANATION_PROVIDER_ORDER", "").split(",") if name.strip()]
    if configured_order:
        rank = {name: index for index, name in enumerate(configured_order)}
        providers.sort(key=lambda provider: rank.get(provider.name, len(rank)))
    return providers


def post_json(provider: Provider, payload: dict[str, Any]) -> dict[str, Any]:
    key = os.environ[provider.key_env]
    request = urllib.request.Request(
        provider.url,
        data=json.dumps(payload).encode("utf-8"),
        headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(request, timeout=45) as response:
            return json.loads(response.read().decode("utf-8"))
    except urllib.error.HTTPError as exc:
        detail = exc.read().decode("utf-8", errors="replace")[:500]
        raise RuntimeError(f"{provider.name} HTTP {exc.code}: {detail}") from exc


def extract_json(text: str) -> dict[str, Any]:
    text = text.strip()
    if text.startswith("```"):
        text = re.sub(r"^```(?:json)?\s*|\s*```$", "", text, flags=re.S).strip()
    start, end = text.find("{"), text.rfind("}")
    if start < 0 or end < start:
        raise ValueError("response did not contain JSON")
    return json.loads(text[start:end + 1])


def resolve_batch(provider: Provider, specialty: str, candidates: list[dict[str, str]], batch: list[str]) -> dict[str, dict[str, Any]]:
    candidate_text = "\n".join(f"- {item['slug']} | {item['title']}" for item in candidates)
    tags = "\n".join(f"{index}. {tag}" for index, tag in enumerate(batch))
    prompt = f"""Return compact JSON only. Do not explain or reason.

You link Korean/English clinical KEYWORDS to an existing Korean disease-document catalog.

Specialty: {specialty}

For each tag, choose at most one catalog slug. Prefer the exact disease, syndrome, or infectious diagnosis (recognize Korean/English synonyms and common abbreviations).

IMPORTANT: If a tag explicitly names disease X plus prevention, post-exposure prophylaxis, vaccination, screening, treatment, management, follow-up, complication, exacerbation, or a related manifestation, link it to disease X's canonical document. Examples: `hepatitis B prevention` -> hepatitis B; `COPD exacerbation treatment` -> COPD; `disease X-related vasculitis` -> disease X when there is no separate vasculitis diagnosis page. These are not requests for separate documents.

If the exact page is absent, you MAY choose a direct parent/representative disease-family page ONLY when the tag is a specific subtype, standard complication, or synonymous label explicitly covered by that parent page. Examples: a disease subtype -> its disease-family overview; a named complication -> its direct underlying-disease overview. Never map to a merely related organ system or a neighbouring differential diagnosis. Do NOT link generic symptoms, signs, labs, procedures, drugs, mechanisms, risk factors, or broad nonspecific concepts with no named underlying disease. If uncertain, return null.

Catalog:
{candidate_text}

Tags:
{tags}

Return JSON only: {{"links":[{{"i":0,"slug":"catalog slug or null","confidence":"high|medium|none"}}]}}. Include every input index exactly once."""
    payload = {
        "model": os.environ.get(provider.model_env, provider.default_model),
        "messages": [
            {"role": "system", "content": "You are a precise controlled-vocabulary medical linker. Return valid JSON only."},
            {"role": "user", "content": prompt},
        ],
        "temperature": 0,
        "seed": 17,
        # GPT-OSS reserves output budget for internal reasoning.  Keep it low
        # and give JSON enough room to finish instead of retrying a truncated
        # response, which wastes more tokens.
        "reasoning_effort": "low",
        "max_tokens": max(4096, len(batch) * 48),
        "response_format": {"type": "json_object"},
    }
    result = post_json(provider, payload)
    content = result["choices"][0]["message"].get("content") or ""
    if not isinstance(content, str) or not content.strip():
        raise RuntimeError(f"{provider.name} returned no final content")
    parsed = extract_json(content)
    valid_slugs = {item["slug"] for item in candidates}
    output: dict[str, dict[str, Any]] = {}
    for row in parsed.get("links", []):
        index = row.get("i")
        if not isinstance(index, int) or not 0 <= index < len(batch):
            continue
        slug = row.get("slug")
        if slug not in valid_slugs:
            slug = None
        confidence = str(row.get("confidence") or "none").lower()
        output[batch[index]] = {"slug": slug, "confidence": confidence, "provider": provider.name}
    # A partial JSON array should not stall a long checkpointed run.  Missing
    # rows are an explicit conservative null decision and can be revisited in
    # a later pass; they are never turned into a source link.
    for tag in batch:
        output.setdefault(tag, {"slug": None, "confidence": "none", "provider": provider.name})
    return output


def replace_or_add_slug_list(text: str, slugs: list[str]) -> str:
    frontmatter, body = split_frontmatter(text)
    block = "related_disease_slugs:\n" + "\n".join(f"  - {slug}" for slug in slugs) if slugs else "related_disease_slugs: []"
    pattern = r"^related_disease_slugs:[^\r\n]*(?:\r?\n[ \t]+-\s+[^\r\n]*)*"
    if re.search(pattern, frontmatter, re.M):
        frontmatter = re.sub(pattern, block, frontmatter, count=1, flags=re.M)
    else:
        anchor = re.search(r"^related_diseases:[^\r\n]*(?:\r?\n[ \t]+-\s+[^\r\n]*)*", frontmatter, re.M)
        if anchor:
            frontmatter = frontmatter[:anchor.end()] + "\n" + block + frontmatter[anchor.end():]
        else:
            frontmatter = frontmatter.rstrip() + "\n" + block + "\n"
    return f"---\n{frontmatter.strip()}\n---\n{body}"


def repair_corrupted_source(shard_index: int = 0, shard_count: int = 1) -> int:
    """Restore raw tag lists from the short-lived malformed insertion layout.

    The original tags remained after the inserted field (the first list item was
    only joined to the final slug line). Recover the quoted raw tags before any
    normal re-write so no source metadata is lost.
    """
    repaired = 0
    malformed = re.compile(
        r"^related_diseases:\s*\r?\nrelated_disease_slugs:.*?(?=^[^\s-][^:\r\n]*:|\Z)",
        re.M | re.S,
    )
    paths = sorted(SOURCE_ROOT.rglob("*.md"))
    for index, path in enumerate(paths):
        if index % shard_count != shard_index:
            continue
        if path.name.lower() in {"index.md", "readme.md"}:
            continue
        text = path.read_text(encoding="utf-8")
        frontmatter, body = split_frontmatter(text)
        match = malformed.search(frontmatter)
        changed = False
        if match:
            raw_tags = re.findall(r'"([^"\r\n]+)"', match.group(0))
            raw_block = "related_diseases:" + ("\n" + "\n".join(f"  - {json.dumps(tag, ensure_ascii=False)}" for tag in raw_tags) if raw_tags else " []")
            remainder = frontmatter[match.end():]
            frontmatter = frontmatter[:match.start()] + raw_block + ("\n" if remainder else "") + remainder
            repaired += 1
            changed = True
        # The first repair version preserved the tag list but joined its final
        # quoted item to question_type. Split only that known frontmatter key.
        normalized = re.sub(r'(?<=[\]"\'])(question_type:)', r'\n\1', frontmatter)
        if normalized != frontmatter:
            frontmatter = normalized
            repaired += 1
            changed = True
        if changed:
            path.write_text(f"---\n{frontmatter.strip()}\n---\n{body}", encoding="utf-8", newline="\n")
    return repaired


def main() -> int:
    # Some Korean titles contain characters that the Windows legacy console
    # cannot encode.  Keep progress reporting from terminating the run.
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    parser = argparse.ArgumentParser()
    parser.add_argument("--apply", action="store_true", help="write resolved slugs into QBank Markdown")
    parser.add_argument("--preserve-existing-slugs", action="store_true", help="when applying, retain already-valid source links and add newly resolved links")
    parser.add_argument("--batch-size", type=int, default=60)
    parser.add_argument("--workers", type=int, default=5)
    parser.add_argument("--limit", type=int, default=0, help="limit unresolved tags for a dry diagnostic run")
    parser.add_argument("--dry-run", action="store_true", help="report the deterministic/API workload without calling providers or writing files")
    parser.add_argument("--progress-every", type=int, default=500, help="emit source scan progress every N files (0 disables it)")
    parser.add_argument("--max-batches", type=int, default=0, help="process at most N API batches, then checkpoint and exit")
    parser.add_argument("--providers", default="", help="comma-separated configured provider names to use for this run")
    parser.add_argument("--local-only", action="store_true", help="resolve literal title/alias matches locally and mark every other tag unlinked")
    parser.add_argument("--deterministic-only", action="store_true", help="re-evaluate stored unresolved tags using local matching only; never call an API")
    parser.add_argument("--repair-corrupted-source", action="store_true", help="restore raw related_diseases lists from the malformed intermediate insertion")
    parser.add_argument("--repair-shard-index", type=int, default=0)
    parser.add_argument("--repair-shard-count", type=int, default=1)
    parser.add_argument("--reset-state", action="store_true", help="discard the local linking checkpoint and recalculate it from source tags")
    parser.add_argument("--export-review", action="store_true", help="write the full unresolved semantic-review queue without changing source files")
    parser.add_argument("--export-full-audit", action="store_true", help="write a status row for every distinct raw MedQA tag")
    parser.add_argument("--export-empty-question-audit", action="store_true", help="write a status row for every source question with no persisted disease link")
    parser.add_argument("--export-missing-disease-candidates", action="store_true", help="write unlinked disease-like tags as candidate missing documents")
    parser.add_argument("--export-missing-disease-documents", action="store_true", help="write disease-name tags with no current canonical document")
    parser.add_argument("--revisit-unlinked", action="store_true", help="send unresolved disease-like tags through the semantic decision pass")
    args = parser.parse_args()

    if args.repair_corrupted_source:
        if args.repair_shard_count < 1 or not 0 <= args.repair_shard_index < args.repair_shard_count:
            raise ValueError("invalid repair shard index/count")
        print(json.dumps({"repaired_source_files": repair_corrupted_source(args.repair_shard_index, args.repair_shard_count)}, ensure_ascii=False), flush=True)
        return 0

    if args.dry_run and args.export_missing_disease_candidates:
        write_missing_disease_candidates(read_state())
        print(json.dumps({"missing_disease_candidate_report": str(MISSING_DISEASE_REPORT_PATH)}, ensure_ascii=False), flush=True)
        return 0

    questions = read_questions(args.progress_every)
    candidates_by_specialty, exact, all_candidates = load_disease_candidates()
    state = {} if args.reset_state else read_state()
    tags_by_specialty: dict[str, set[str]] = defaultdict(set)
    for question in questions:
        tags_by_specialty[question["specialty"]].update(question["tags"])

    for specialty, tags in tags_by_specialty.items():
        for tag in sorted(tags):
            key = f"{specialty}\u0000{tag}"
            normalized_tag = normalize(tag)
            if key in state and normalized_tag not in CURATED_MAPPING_OVERRIDES and normalized_tag not in CURATED_SYNONYM_TARGETS and not (
                args.revisit_unlinked
                and not state[key].get("slug")
                and (
                    looks_like_disease(tag)
                    or resolve_global_exact_condition(tag, all_candidates)
                    or (has_contextual_disease_cue(tag) and resolve_contextual_disease_reference(tag, exact, all_candidates))
                )
            ):
                continue
            curated_target = CURATED_SYNONYM_TARGETS.get(normalized_tag, "")
            contextual_slug = resolve_contextual_disease_reference(tag, exact, all_candidates)
            global_exact_slug = ""
            if contextual_slug:
                slug = contextual_slug
            elif curated_target:
                slug = (
                    resolve_curated_target(curated_target, exact, candidates_by_specialty.get(specialty, []))
                    or (
                        resolve_curated_target(curated_target, exact, all_candidates)
                    )
                )
            else:
                slug = (
                    resolve_short_exact(tag, candidates_by_specialty.get(specialty, []))
                    or resolve_exact_in_scope(tag, candidates_by_specialty.get(specialty, []))
                )
                if not slug:
                    global_exact_slug = resolve_global_exact_condition(tag, all_candidates)
                    slug = global_exact_slug
                typographic_slug = ""
                if not slug:
                    typographic_slug = resolve_typographic_variant(tag, candidates_by_specialty.get(specialty, []))
                    slug = typographic_slug
            if slug:
                state[key] = {
                    "slug": slug,
                    "confidence": "contextual-disease-reference" if contextual_slug else "curated-synonym" if normalized_tag in CURATED_SYNONYM_TARGETS else "exact",
                    "provider": (
                        "deterministic-contextual-disease" if contextual_slug
                        else "curated" if normalized_tag in CURATED_SYNONYM_TARGETS
                        else "deterministic-global-exact" if global_exact_slug
                        else "deterministic-typographic" if typographic_slug
                        else "deterministic"
                    ),
                }

    if args.local_only:
        for specialty, tags in tags_by_specialty.items():
            candidates = candidates_by_specialty.get(specialty, [])
            for tag in sorted(tags):
                key = f"{specialty}\u0000{tag}"
                if key in state:
                    continue
                # Sequence similarity is useful for the review queue, but must
                # never become a source link by itself.  It confuses medically
                # opposite labels (eg hyper-/hypoglycaemia, primary/secondary
                # disorders, nephritic/nephrotic syndrome).
                slug = (
                    resolve_local_fuzzy(tag, candidates)
                    or resolve_local_fuzzy(tag, all_candidates)
                )
                state[key] = {
                    "slug": slug or None,
                    "confidence": "literal-containment" if slug else "none",
                    "provider": "deterministic-fuzzy" if slug else "no-literal-match",
                }

        # The same literal disease label often occurs in a different teaching
        # specialty (for example a haematology diagnosis in an ED vignette).
        # Reuse only a globally *unique*, already confirmed mapping; this is
        # not semantic similarity and never propagates signs, tests or drugs.
        confirmed_by_tag: dict[str, set[str]] = defaultdict(set)
        for key, entry in state.items():
            if entry.get("slug"):
                _, tag = key.split("\u0000", 1)
                if is_linkable_condition_name(tag):
                    confirmed_by_tag[normalize(tag)].add(str(entry["slug"]))
        for specialty, tags in tags_by_specialty.items():
            for tag in tags:
                key = f"{specialty}\u0000{tag}"
                if state.get(key, {}).get("slug") or not is_linkable_condition_name(tag):
                    continue
                matches = confirmed_by_tag.get(normalize(tag), set())
                if len(matches) == 1:
                    state[key] = {
                        "slug": next(iter(matches)),
                        "confidence": "cross-specialty-exact",
                        "provider": "deterministic-cross-specialty-exact",
                    }
        write_state(state)

    pending: list[tuple[str, list[str], list[dict[str, str]]]] = []
    for specialty, tags in sorted(tags_by_specialty.items()):
        candidates = candidates_by_specialty.get(specialty, [])
        if not candidates:
            raise RuntimeError(f"no disease candidates for specialty {specialty}")
        unresolved = []
        for tag in sorted(tags):
            mapping = state.get(f"{specialty}\u0000{tag}")
            if mapping is None:
                unresolved.append(tag)
                continue
            # A previous provider decision (including an explicit null) is a
            # completed review, not a reason to spend another API request.
            # `--revisit-unlinked` therefore advances through the checkpoint
            # instead of repeatedly sending the first batch.
            if (
                args.revisit_unlinked
                and not mapping.get("slug")
                and classify_unlinked_tag(tag) == "no-current-canonical-document"
            ):
                unresolved.append(tag)
        if args.limit:
            unresolved = unresolved[:args.limit]
        for index in range(0, len(unresolved), args.batch_size):
            pending.append((specialty, unresolved[index:index + args.batch_size], candidates))

    total_pending_batches = len(pending)
    total_pending_tags = sum(len(batch) for _, batch, _ in pending)
    # `--revisit-unlinked` is also useful after the local catalog or the
    # deterministic alias rules change.  Do not let that maintenance pass
    # accidentally consume provider quota: it must be explicitly followed by
    # a non-deterministic run to request semantic decisions.
    if args.deterministic_only:
        pending = []
    if args.max_batches:
        if args.max_batches < 1:
            raise ValueError("--max-batches must be positive")
        pending = pending[:args.max_batches]
    workload = {
        "questions": len(questions),
        "specialties": len(tags_by_specialty),
        "known_mappings": len(state),
        "pending_batches": total_pending_batches,
        "pending_tags": total_pending_tags,
        "processing_batches": len(pending),
    }
    print(json.dumps(workload, ensure_ascii=False), flush=True)
    if args.dry_run:
        if args.export_review:
            write_unlinked_review(questions, state, all_candidates)
        if args.export_full_audit:
            write_full_audit(questions, state)
        if args.export_empty_question_audit:
            write_empty_question_audit(questions, state)
        return 0

    providers = available_providers()
    if args.providers:
        allowed = {name.strip().lower() for name in args.providers.split(",") if name.strip()}
        providers = [provider for provider in providers if provider.name in allowed]
    if pending and not providers:
        raise RuntimeError("No configured provider API key was found")

    def run(index: int, item: tuple[str, list[str], list[dict[str, str]]]) -> dict[str, dict[str, Any]]:
        specialty, batch, candidates = item
        last_error: Exception | None = None
        for offset in range(len(providers)):
            provider = providers[(index + offset) % len(providers)]
            try:
                return {f"{specialty}\u0000{tag}": value for tag, value in resolve_batch(provider, specialty, candidates, batch).items()}
            except Exception as exc:  # provider fallback is intentional
                last_error = exc
                print(f"provider retry {provider.name}: {exc}", flush=True)
        raise RuntimeError(f"all providers failed for {specialty}: {last_error}")

    completed = 0
    if pending:
        with concurrent.futures.ThreadPoolExecutor(max_workers=min(args.workers, len(providers))) as executor:
            futures = {executor.submit(run, index, item): index for index, item in enumerate(pending)}
            for future in concurrent.futures.as_completed(futures):
                mappings = future.result()
                state.update(mappings)
                completed += 1
                write_state(state)
                print(json.dumps({"completed_batches": completed, "total_batches": len(pending), "mappings": len(state)}, ensure_ascii=False), flush=True)
        write_state(state)

    if args.max_batches:
        summary = {
            "checkpointed_batches": completed,
            "remaining_batches_before_next_run": max(0, total_pending_batches - completed),
            "mappings": len(state),
        }
        print(json.dumps(summary, ensure_ascii=False), flush=True)
        return 0

    missing = [tag for specialty, tags in tags_by_specialty.items() for tag in tags if f"{specialty}\u0000{tag}" not in state]
    if missing:
        raise RuntimeError(f"unresolved processing state for {len(missing)} tags; rerun without --limit")

    applied = 0
    linked_questions = 0
    if args.apply:
        canonical_slug_by_slug = load_canonical_slug_by_slug()
        for question in questions:
            slugs = []
            if args.preserve_existing_slugs:
                frontmatter, _ = split_frontmatter(question["path"].read_text(encoding="utf-8"))
                slugs.extend(canonical_slug_by_slug.get(slug, slug) for slug in frontmatter_list(frontmatter, "related_disease_slugs"))
            for tag in question["tags"]:
                mapping = state[f"{question['specialty']}\u0000{tag}"]
                slug = mapping.get("slug")
                if slug and slug not in slugs:
                    slugs.append(canonical_slug_by_slug.get(str(slug), str(slug)))
            slugs = list(dict.fromkeys(slugs))
            text = question["path"].read_text(encoding="utf-8")
            updated = replace_or_add_slug_list(text, slugs)
            if updated != text:
                question["path"].write_text(updated, encoding="utf-8", newline="\n")
                applied += 1
            if slugs:
                linked_questions += 1

    summary = {
        "questions": len(questions),
        "unique_tag_mappings": len(state),
        "linked_tag_mappings": sum(1 for value in state.values() if value.get("slug")),
        "unlinked_tag_mappings": sum(1 for value in state.values() if not value.get("slug")),
        "questions_with_disease_slugs": linked_questions if args.apply else None,
        "source_files_updated": applied if args.apply else 0,
    }
    REPORT_PATH.write_text(json.dumps(summary, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    if args.export_review:
        write_unlinked_review(questions, state, all_candidates)
    if args.export_full_audit:
        write_full_audit(questions, state)
    if args.export_empty_question_audit:
        write_empty_question_audit(questions, state)
    if args.export_missing_disease_candidates:
        write_missing_disease_candidates(state)
    if args.export_missing_disease_documents:
        write_missing_disease_documents(questions, state)
    print(json.dumps(summary, ensure_ascii=False), flush=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
