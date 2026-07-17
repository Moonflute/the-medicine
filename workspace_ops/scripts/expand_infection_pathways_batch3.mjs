import fs from "node:fs";

const sourcePath = "source_notes/02 Diseases/08 감염/_data/infection-pathways.json";
const data = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const reviewedAt = "2026-07-18";
const sources = [
  { id: "nice-prostatitis-2018", label: "NICE NG110 Acute Prostatitis Antimicrobial Prescribing", url: "https://www.nice.org.uk/guidance/ng110/chapter/Recommendations", tier: "A", year: "2018" },
  { id: "eau-urological-infections-2025", label: "EAU Urological Infections Guideline", url: "https://uroweb.org/guidelines/urological-infections/chapter/the-guideline", tier: "A", year: "2025" },
  { id: "cdc-epididymitis-2021", label: "CDC Epididymitis Treatment Guideline", url: "https://www.cdc.gov/std/treatment-guidelines/epididymitis.htm", tier: "A", year: "2021" },
  { id: "wses-appendicitis-2020", label: "WSES Jerusalem Acute Appendicitis Guideline", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7386163/", tier: "A", year: "2020" },
  { id: "sis-iai-2024", label: "Surgical Infection Society Intra-Abdominal Infection Guideline", url: "https://pubmed.ncbi.nlm.nih.gov/38990709/", tier: "A", year: "2024" },
];
const component = (antibioticIds, selection = "one-of") => ({ antibioticIds, selection });
const regimen = (id, context, rank, components, sourceIds, conditions = [], avoidWhen = [], notes = []) => ({ id, context, rank, components, conditions, avoidWhen, notes, sourceIds });
const quiz = (id, type, prompt, choiceIds, correctId, explanation, sourceIds) => ({ id, type, prompt, choiceIds, correctId, explanation, sourceIds });
const pathogen = (organismId, likelihood, notes = []) => ({ organismId, likelihood, notes });
const base = (value) => ({ aliases: [], severity: ["outpatient", "inpatient"], exclusions: [], sourceControlNotes: [], stewardshipNotes: [], targetedTherapies: [], quizQuestions: [], reviewStatus: "verified", reviewedBy: "Codex official-guideline cross-check", reviewedAt, ...value });

const pathways = [
  base({
    id: "adult-acute-bacterial-prostatitis",
    displayName: "성인 acute bacterial prostatitis",
    aliases: ["ABP", "급성 세균성 전립샘염", "acute prostatitis"],
    diseaseSourceFile: "20 비뇨기과/전립샘염 (Prostatitis).md",
    infectionSite: "prostate-urinary-tract",
    setting: "mixed",
    population: ["adult"],
    severity: ["outpatient-stable", "systemically-unwell", "abscess-or-retention"],
    exclusions: ["chronic-pelvic-pain-syndrome", "chronic-bacterial-prostatitis"],
    diagnosticNotes: ["항생제 투여 전 midstream urine culture를 채취하고 sepsis, acute urinary retention과 prostatic abscess를 평가한다.", "급성기 강한 prostate massage와 biopsy는 bacteremia·sepsis 위험 때문에 피한다.", "48시간 내 호전이 없거나 악화되면 내성균, abscess, obstruction과 다른 진단을 재평가한다."],
    sourceControlNotes: ["급성 요폐는 urethral instrumentation 위험을 고려해 urology와 배액 방법을 결정하고, prostatic abscess는 크기와 반응에 따라 배액한다."],
    stewardshipNotes: ["배양과 감수성 결과가 나오면 전립선 침투가 가능한 가장 좁은 약제로 전환한다.", "fluoroquinolone은 최근 노출, 지역 내성과 disabling adverse effect를 검토한 뒤 사용한다."],
    pathogenGroups: [{ context: "ascending-urinary-pathogens", organisms: [pathogen("enterobacterales", "common"), pathogen("pseudomonas", "risk-factor-dependent"), pathogen("e_faecalis", "risk-factor-dependent")] }],
    empiricRegimens: [
      regimen("abp-stable-oral", "stable-outpatient-guided-by-local-susceptibility", "conditional", [component(["ciprofloxacin", "levofloxacin"])], ["nice-prostatitis-2018", "eau-urological-infections-2025"], ["경구 가능, sepsis·요폐·abscess 없음, 지역 fluoroquinolone 감수성 허용"], ["최근 fluoroquinolone 노출 또는 내성 위험이 높음"], ["14일에 재평가해 임상·배양 결과에 따라 총 치료 기간을 결정한다."]),
      regimen("abp-stable-trimethoprim", "stable-outpatient-fluoroquinolone-unsuitable", "alternative", [component(["trimethoprim", "trimethoprimsulfamethoxazole"])], ["nice-prostatitis-2018", "eau-urological-infections-2025"], ["감수성이 확인되거나 매우 유력하고 fluoroquinolone이 부적절"], ["감수성 근거 없는 경험적 사용"], []),
      regimen("abp-severe-iv", "systemically-unwell-or-unable-to-take-oral", "preferred", [component(["ceftriaxone", "cefuroxime", "gentamicin"])], ["nice-prostatitis-2018", "eau-urological-infections-2025"], ["sepsis 우려, 경구 불가 또는 합병증"], [], ["48시간 내 IV-to-PO 전환 가능성을 재평가하며 aminoglycoside는 TDM과 신기능을 확인한다."]),
    ],
    sourceIds: ["nice-prostatitis-2018", "eau-urological-infections-2025"],
    quizQuestions: [quiz("abp-common-pathogen", "disease-to-organism", "acute bacterial prostatitis에서 가장 흔한 원인균군은?", ["enterobacterales", "pneumococcus", "atypicals", "mrsa"], "enterobacterales", "E. coli를 포함한 Enterobacterales가 가장 흔하며 최근 시술과 의료 노출에서는 내성 및 Pseudomonas 위험을 별도 평가한다.", ["nice-prostatitis-2018", "eau-urological-infections-2025"])],
  }),
  base({
    id: "adult-acute-epididymitis",
    displayName: "성인 acute epididymitis",
    aliases: ["급성 부고환염", "epididymo-orchitis"],
    diseaseSourceFile: "20 비뇨기과/급성 부고환염 (Acute epididymitis).md",
    infectionSite: "epididymis-genitourinary",
    setting: "community",
    population: ["adult"],
    severity: ["outpatient", "severe-or-complicated"],
    exclusions: ["testicular-torsion", "noninfectious-epididymal-pain"],
    diagnosticNotes: ["갑작스러운 심한 unilateral scrotal pain에서는 testicular torsion을 우선 배제하고 불확실하면 즉시 urologic evaluation을 시행한다.", "gonorrhea·chlamydia NAAT와 urine culture를 시행하고 성접촉, insertive anal sex, urinary instrumentation과 outlet obstruction을 확인한다."],
    sourceControlNotes: ["abscess, infarction 또는 necrotizing infection이 의심되면 입원과 외과 평가를 시행한다."],
    stewardshipNotes: ["성적으로 활동적인 환자는 검사 결과 전 presumptive STI treatment가 필요할 수 있으며 파트너 평가와 치료를 병행한다.", "enteric-only regimen은 gonorrhea를 배제하고 배양 감수성을 확인한 경우에 사용한다."],
    pathogenGroups: [
      { context: "sexually-transmitted", organisms: [pathogen("n_gonorrhoeae", "important"), pathogen("c_trachomatis", "common"), pathogen("m_genitalium", "risk-factor-dependent")] },
      { context: "enteric-or-instrumentation-related", organisms: [pathogen("enterobacterales", "common"), pathogen("pseudomonas", "risk-factor-dependent")] },
    ],
    empiricRegimens: [
      regimen("epididymitis-sti", "likely-gonorrhea-or-chlamydia", "preferred", [component(["ceftriaxone"], "all-of"), component(["doxycycline"], "all-of")], ["cdc-epididymitis-2021", "eau-urological-infections-2025"], ["성매개 원인 가능성이 높음"], [], []),
      regimen("epididymitis-sti-enteric", "sti-plus-enteric-risk", "preferred", [component(["ceftriaxone"], "all-of"), component(["levofloxacin"], "all-of")], ["cdc-epididymitis-2021", "eau-urological-infections-2025"], ["insertive anal sex 등 STI와 enteric pathogen을 함께 고려"], [], []),
      regimen("epididymitis-enteric-only", "enteric-organisms-only", "conditional", [component(["levofloxacin"])], ["cdc-epididymitis-2021", "eau-urological-infections-2025"], ["gonorrhea가 배제되고 urinary instrumentation 또는 bacteriuria가 뒷받침"], ["gonorrhea 배제 전 단독 사용"], []),
    ],
    sourceIds: ["cdc-epididymitis-2021", "eau-urological-infections-2025"],
    quizQuestions: [quiz("epididymitis-sti-drug", "disease-to-antibiotic", "gonorrhea와 chlamydia가 의심되는 acute epididymitis regimen의 주사 성분은?", ["ceftriaxone", "vancomycin", "ertapenem", "fidaxomicin"], "ceftriaxone", "Ceftriaxone에 doxycycline을 병합해 gonococcus와 chlamydia를 함께 치료한다.", ["cdc-epididymitis-2021", "eau-urological-infections-2025"])],
  }),
  base({
    id: "adult-acute-calculous-cholecystitis",
    displayName: "성인 acute calculous cholecystitis",
    aliases: ["급성 쓸개염", "acute cholecystitis"],
    diseaseSourceFile: "03 소화기/간담췌/급성 쓸개염 (Acute Cholecystitis).md",
    infectionSite: "gallbladder-biliary-tract",
    setting: "mixed",
    population: ["adult"],
    severity: ["grade-I", "grade-II", "grade-III"],
    exclusions: ["biliary-colic-without-inflammation", "acute-cholangitis"],
    diagnosticNotes: ["국소 염증 소견, 전신 염증 반응과 imaging을 함께 사용해 진단하고 cholangitis·pancreatitis를 구분한다.", "장기기능장애, 발병 기간, 국소 합병증과 Charlson/ASA 등 수술 위험을 반영해 중증도를 평가한다."],
    sourceControlNotes: ["수술 가능한 환자에서는 조기 laparoscopic cholecystectomy가 핵심 source control이며, 고위험 중증 환자는 gallbladder drainage를 고려한다."],
    stewardshipNotes: ["uncomplicated cholecystectomy로 source control이 완전하면 수술 후 항생제를 불필요하게 연장하지 않는다.", "anaerobic coverage는 bilio-enteric anastomosis 등 구체적 위험이 있을 때 선택적으로 추가한다."],
    pathogenGroups: [{ context: "biliary-enteric-pathogens", organisms: [pathogen("enterobacterales", "common"), pathogen("e_faecalis", "risk-factor-dependent"), pathogen("b_fragilis", "risk-factor-dependent"), pathogen("pseudomonas", "risk-factor-dependent")] }],
    empiricRegimens: [
      regimen("cholecystitis-community", "community-acquired-grade-I-or-II", "preferred", [component(["ceftriaxone", "cefotaxime", "amoxicillinclavulanate"])], ["tokyo-cholangitis-2018", "kdca-antibiotic-practice-2026"], ["MDR 위험과 장기기능장애 없음"], [], []),
      regimen("cholecystitis-severe", "grade-III-or-healthcare-associated", "conditional", [component(["piperacillintazobactam", "cefepime", "meropenem"])], ["tokyo-cholangitis-2018", "kdca-antibiotic-practice-2026"], ["sepsis, 장기기능장애 또는 healthcare-associated resistant-pathogen risk"], ["구체적 ESBL/MDR 위험 없이 carbapenem routine 사용"], ["cefepime을 선택하고 anaerobic risk가 있으면 metronidazole을 별도 고려한다."]),
    ],
    sourceIds: ["tokyo-cholangitis-2018", "kdca-antibiotic-practice-2026"],
    quizQuestions: [quiz("cholecystitis-common-pathogen", "disease-to-organism", "acute cholecystitis에서 우선 고려하는 Gram-negative pathogen group은?", ["enterobacterales", "mrsa", "pneumococcus", "atypicals"], "enterobacterales", "E. coli와 Klebsiella spp.를 포함한 Enterobacterales가 대표적이며 healthcare exposure에서는 추가 위험을 평가한다.", ["tokyo-cholangitis-2018", "kdca-antibiotic-practice-2026"])],
  }),
  base({
    id: "adult-acute-appendicitis",
    displayName: "성인 acute appendicitis",
    aliases: ["급성 충수염", "complicated appendicitis"],
    diseaseSourceFile: "11 외과/급성 충수염 (Acute Appendicitis).md",
    infectionSite: "appendix-intra-abdominal",
    setting: "community",
    population: ["adult"],
    severity: ["uncomplicated", "perforated", "abscess-or-phlegmon", "sepsis"],
    exclusions: ["noninfectious-right-lower-quadrant-pain"],
    diagnosticNotes: ["clinical score와 imaging으로 진단하고 uncomplicated와 gangrene, perforation, abscess·phlegmon을 구분한다.", "sepsis, diffuse peritonitis와 임신 가능성 등 영상·수술 전략을 바꾸는 조건을 초기 평가한다."],
    sourceControlNotes: ["appendectomy가 표준 source control이며, 선별된 periappendiceal abscess·phlegmon에서는 antibiotics와 percutaneous drainage를 포함한 비수술 접근을 고려할 수 있다."],
    stewardshipNotes: ["uncomplicated appendicitis에서 수술 전 단회 항생제 후 routine postoperative antibiotics를 사용하지 않는다.", "complicated appendicitis도 적절한 source control 후에는 임상 반응에 따라 짧은 치료 기간을 사용한다."],
    pathogenGroups: [{ context: "appendiceal-polymicrobial-infection", organisms: [pathogen("enterobacterales", "common"), pathogen("b_fragilis", "common"), pathogen("e_faecalis", "risk-factor-dependent")] }],
    empiricRegimens: [
      regimen("appendicitis-perioperative", "uncomplicated-preoperative", "preferred", [component(["cefoxitin"])], ["wses-appendicitis-2020", "sis-iai-2024"], ["appendectomy 전 enteric Gram-negative와 anaerobic coverage"], [], ["ceftriaxone과 metronidazole 병합도 기관 protocol에 따라 사용한다."]),
      regimen("appendicitis-complicated", "perforated-abscess-or-sepsis", "preferred", [component(["ceftriaxone"], "all-of"), component(["metronidazole"], "all-of")], ["wses-appendicitis-2020", "sis-iai-2024"], ["complicated appendicitis"], [], []),
      regimen("appendicitis-severe-broad", "severe-or-resistant-pathogen-risk", "conditional", [component(["piperacillintazobactam", "meropenem"])], ["wses-appendicitis-2020", "sis-iai-2024"], ["septic shock, healthcare exposure 또는 검증된 MDR 위험"], ["low-risk uncomplicated appendicitis"], []),
    ],
    sourceIds: ["wses-appendicitis-2020", "sis-iai-2024"],
    quizQuestions: [quiz("appendicitis-coverage", "disease-to-organism", "complicated appendicitis에서 aerobic Gram-negative와 함께 반드시 고려할 균군은?", ["b_fragilis", "pneumococcus", "mrsa", "atypicals"], "b_fragilis", "Appendiceal source infection은 Enterobacterales와 B. fragilis group을 포함한 anaerobic coverage가 필요하다.", ["wses-appendicitis-2020", "sis-iai-2024"])],
  }),
];

const sourceIds = new Set(data.sources.map((item) => item.id));
for (const source of sources) if (!sourceIds.has(source.id)) data.sources.push(source);
const pathwayIds = new Set(data.pathways.map((item) => item.id));
for (const pathway of pathways) if (!pathwayIds.has(pathway.id)) data.pathways.push(pathway);
data.reviewedAt = reviewedAt;
fs.writeFileSync(sourcePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
console.log(JSON.stringify({ sources: data.sources.length, pathways: data.pathways.length }, null, 2));
