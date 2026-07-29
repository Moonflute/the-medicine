import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const microRoot = path.join(root, "source_notes", "09 Microbiology");
const registryPath = path.join(microRoot, "_data", "microorganism-registry.json");
const sourcesPath = path.join(microRoot, "_data", "microbiology-sources.json");
const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));
const sources = JSON.parse(fs.readFileSync(sourcesPath, "utf8")).sources;
const sourceMap = new Map(sources.map((item) => [item.id, item]));
const reviewedAt = "2026-07-29";

const bacterial = ["ncbi-taxonomy", "lpsn", "idsa-asm-lab-2024"];
const viral = ["ictv-taxonomy", "idsa-asm-lab-2024"];
const entries = [
  {
    id: "coagulase-negative-staphylococci", kind: "clinical_group", type: "bacterium", sci: "Coagulase-negative staphylococci", ko: "Coagulase-negative staphylococci", aliases: ["CoNS", "coagulase-negative Staphylococcus"],
    category: "G(+) 구균", folder: "05 Clinical Groups", classification: ["G(+)", "coccus", "catalase positive", "coagulase negative"], tags: ["skin-flora", "blood-culture-contaminant", "device", "biofilm"],
    summary: "피부 정상균총을 이루는 여러 Staphylococcus species의 임상군으로 혈액배양 오염의 흔한 원인이지만, prosthetic valve·vascular catheter·orthopedic hardware와 신생아·면역저하자에서는 biofilm-associated 진성 감염을 일으킨다.",
    transmission: "주로 자신의 피부 flora에서 device로 유입되며 의료진의 손과 시술 과정도 관여할 수 있다.", disease: ["catheter-related bloodstream infection", "prosthetic valve endocarditis", "prosthetic joint and hardware infection", "neonatal sepsis"], diagnosis: "독립 채취 혈액배양의 반복 양성, 같은 species와 susceptibility pattern, time-to-positivity, device와 임상상을 함께 평가한다.", treatment: "진성 감염이면 species·AST와 prosthetic material 여부에 맞춘 항균치료와 device 제거 또는 source control을 검토한다.", caution: "단일 bottle 양성을 자동으로 치료하거나 모든 CoNS를 contaminant로 버리는 두 극단을 피한다.", prevention: "시술 무균술과 catheter bundle, 불필요한 device 제거가 핵심이다.", sourceIds: bacterial,
  },
  {
    id: "corynebacterium-diphtheriae", type: "bacterium", sci: "Corynebacterium diphtheriae", ko: "디프테리아균", aliases: ["C. diphtheriae"],
    category: "G(+) 간균", folder: "01 Bacteria/02 Gram-positive bacilli", classification: ["G(+)", "club-shaped bacillus", "non-spore-forming", "toxin-producing strains"], tags: ["diphtheria", "pseudomembrane", "droplet", "vaccine-preventable"],
    summary: "toxigenic strain이 pharyngeal pseudomembrane과 myocarditis·neuropathy를 일으키는 G(+) bacillus로, 임상 의심 시 배양 확정을 기다리지 않고 antitoxin·항균치료·격리와 공중보건 대응을 시작해야 한다.",
    transmission: "호흡기 비말과 피부 병변 접촉으로 전파된다.", disease: ["respiratory diphtheria", "cutaneous diphtheria", "toxin-mediated myocarditis and neuropathy"], diagnosis: "검사실과 공중보건기관에 사전 연락해 적절한 인두·비강·병변 검체 배양과 toxigenicity 검사를 시행한다.", treatment: "diphtheria antitoxin과 권고 항균제를 신속히 투여하고 기도·심장·신경 합병증을 모니터링한다.", caution: "C. diphtheriae 동정만으로 toxin production을 확정할 수 없지만 임상적으로 의심되면 치료를 지연하지 않는다.", prevention: "vaccination, droplet precautions, 접촉자 배양·예방과 추가 vaccine을 공중보건 지침에 따라 시행한다.", sourceIds: [...bacterial, "cdc-vaccine-preventable"],
  },
  {
    id: "moraxella-catarrhalis", type: "bacterium", sci: "Moraxella catarrhalis", ko: "모락셀라 카타랄리스", aliases: ["M. catarrhalis", "Moraxella"],
    category: "G(-) 구균·구간균", folder: "01 Bacteria/03 Gram-negative cocci and coccobacilli", classification: ["G(-)", "diplococcus", "oxidase positive", "beta-lactamase commonly produced"], tags: ["otitis-media", "sinusitis", "COPD-exacerbation", "respiratory"],
    summary: "상기도를 집락화할 수 있는 G(-) diplococcus로 소아 acute otitis media·sinusitis와 성인 COPD exacerbation 및 하기도 감염에서 중요하며 beta-lactamase 생성이 흔하다.",
    transmission: "호흡기 분비물과 밀접 접촉으로 전파되고 상기도 집락화 후 감염이 발생할 수 있다.", disease: ["acute otitis media", "acute bacterial sinusitis", "COPD exacerbation", "pneumonia in chronic lung disease"], diagnosis: "호흡기 검체의 Gram stain·배양 결과를 검체 품질과 임상 증후군에 맞춰 해석한다.", treatment: "질환별 guideline과 지역 감수성을 따르며 beta-lactamase 안정성을 고려한다.", caution: "객담 분리는 집락화일 수 있고 ampicillin/amoxicillin 단독 내성이 흔하다.", prevention: "호흡기 위생과 influenza·pneumococcal vaccination 등 기저 호흡기 예방을 최적화한다.", sourceIds: bacterial,
  },
  {
    id: "chlamydia-pneumoniae", type: "bacterium", sci: "Chlamydia pneumoniae", ko: "폐렴클라미디아", aliases: ["C. pneumoniae"],
    category: "비정형균", folder: "01 Bacteria/07 Atypical bacteria", classification: ["obligate intracellular bacterium", "elementary and reticulate bodies"], tags: ["community-acquired-pneumonia", "pharyngitis", "bronchitis", "beta-lactam-gap"],
    summary: "obligate intracellular respiratory bacterium으로 pharyngitis·bronchitis와 community-acquired pneumonia를 일으키며 세포벽 표적 beta-lactam이 임상적으로 효과적이지 않다.",
    transmission: "호흡기 비말과 밀접 접촉으로 전파된다.", disease: ["pharyngitis and bronchitis", "community-acquired pneumonia", "institutional respiratory outbreaks"], diagnosis: "호흡기 NAAT가 가장 직접적이며 serology는 paired sample과 검사법 한계를 고려한다.", treatment: "macrolide, doxycycline 또는 respiratory fluoroquinolone을 환자 요인과 지역 지침에 맞춰 선택한다.", caution: "single serology titer는 급성 감염을 확정하기 어렵고 routine culture는 사용하지 않는다.", prevention: "호흡기 예절과 집단발생 감시를 적용한다.", sourceIds: bacterial,
  },
  {
    id: "borrelia-clinical-group", kind: "clinical_group", type: "bacterium", sci: "Borrelia species", ko: "보렐리아 임상군", aliases: ["Borrelia", "B. burgdorferi", "relapsing fever Borrelia"],
    category: "Spirochetes", folder: "05 Clinical Groups", classification: ["spirochetes", "vector-borne", "tick or louse transmitted"], tags: ["Lyme-disease", "relapsing-fever", "tick-borne", "neuroborreliosis"],
    summary: "tick 또는 louse가 매개하는 spirochete군으로 B. burgdorferi sensu lato complex는 Lyme disease를, 다른 종은 relapsing fever를 일으키므로 지역·vector·임상 증후군에 따라 진단법과 치료가 달라진다.",
    transmission: "감염된 tick 또는 body louse bite로 전파되며 종과 지역에 따라 vector가 다르다.", disease: ["erythema migrans and early Lyme disease", "neuroborreliosis and carditis", "Lyme arthritis", "tick-borne or louse-borne relapsing fever"], diagnosis: "전형적 erythema migrans는 임상 진단할 수 있고 그 외 Lyme disease는 단계별 two-tier serology를 사용한다. relapsing fever는 발열기 smear 또는 NAAT를 고려한다.", treatment: "질환 단계·CNS/심장 침범·임신과 종에 맞춰 doxycycline 또는 beta-lactam을 선택한다.", caution: "조기 Lyme disease에서는 serology 음성이 가능하고 비특이 증상에서 무분별한 검사는 위양성을 늘린다.", prevention: "tick avoidance, 조기 제거와 지역별 노출 후 예방 적응증을 적용한다.", sourceIds: bacterial,
  },
  {
    id: "leptospira-species", kind: "clinical_group", type: "bacterium", sci: "Leptospira species", ko: "렙토스피라균", aliases: ["Leptospira", "leptospirosis"],
    category: "Spirochetes", folder: "05 Clinical Groups", classification: ["thin spirochetes", "zoonotic", "water-associated"], tags: ["leptospirosis", "AKI", "jaundice", "pulmonary-hemorrhage"],
    summary: "감염 동물의 소변으로 오염된 담수·토양에 노출되어 피부나 점막으로 침투하는 spirochete로, 발열·myalgia에서 jaundice·AKI·meningitis·pulmonary hemorrhage를 동반한 Weil disease까지 나타난다.",
    transmission: "동물 소변에 오염된 물·토양이 손상 피부나 점막에 닿아 전파된다.", disease: ["anicteric febrile leptospirosis", "aseptic meningitis", "Weil disease", "pulmonary hemorrhage syndrome"], diagnosis: "노출력과 발병 시점에 맞춰 blood/urine NAAT와 serology를 사용하며 reference laboratory 확인이 필요할 수 있다.", treatment: "중증도에 따라 doxycycline 또는 IV penicillin/ceftriaxone 계열을 조기 투여하고 장기지지치료를 병행한다.", caution: "초기 serology 음성이 가능하고 임상상이 dengue·hantavirus·sepsis와 겹친다.", prevention: "오염 담수 노출 회피, 보호장비와 설치류 관리가 중요하다.", sourceIds: bacterial,
  },
  {
    id: "carbapenem-resistant-acinetobacter-baumannii", kind: "resistance_phenotype", type: "bacterium", sci: "Carbapenem-resistant Acinetobacter baumannii", ko: "Carbapenem-resistant A. baumannii", aliases: ["CRAB"],
    category: "내성 phenotype", folder: "06 Resistance Phenotypes", classification: ["G(-)", "non-fermenter", "carbapenem resistant", "multidrug resistant"], tags: ["CRAB", "healthcare-associated", "ventilator-associated", "infection-control"],
    summary: "carbapenem 내성을 보이는 A. baumannii complex phenotype으로 중환자실 pneumonia·bacteremia·wound infection에서 치료 선택이 제한되고, colonization과 감염 구분 및 고용량 sulbactam 기반 전략이 중요하다.",
    transmission: "의료환경 표면과 환자 피부에 오래 남아 손·기구를 통해 전파될 수 있다.", disease: ["ventilator-associated pneumonia", "bacteremia", "wound and burn infection", "colonization without invasive disease"], diagnosis: "정확한 species complex identification, AST와 carbapenem resistance 확인이 필요하며 비무균 검체는 감염 증거와 함께 해석한다.", treatment: "최신 IDSA AMR 지침에 따라 sulbactam-active regimen을 중심으로 감염 부위·AST·독성을 반영한 병합치료를 전문가와 결정한다.", caution: "polymyxin 단독 의존은 독성과 낮은 임상성공률 문제가 있고 respiratory isolate는 colonization일 수 있다.", prevention: "접촉주의, 환경소독, active surveillance와 시설 간 정보 전달을 강화한다.", sourceIds: ["idsa-amr-guidance", "eucast-expert-rules", "who-bacterial-priority-2024", "cdc-infection-control"],
  },
  {
    id: "difficult-to-treat-resistant-pseudomonas", kind: "resistance_phenotype", type: "bacterium", sci: "Difficult-to-treat resistant Pseudomonas aeruginosa", ko: "DTR Pseudomonas aeruginosa", aliases: ["DTR P. aeruginosa", "MDR Pseudomonas"],
    category: "내성 phenotype", folder: "06 Resistance Phenotypes", classification: ["G(-)", "non-fermenter", "difficult-to-treat resistance"], tags: ["DTR-Pseudomonas", "healthcare-associated", "AMR", "biofilm"],
    summary: "주요 전통적 antipseudomonal beta-lactam과 fluoroquinolone에 비감수성을 보이는 P. aeruginosa 치료저항 phenotype으로, 감염 여부 확인과 최신 beta-lactam AST 및 감염부위별 노출 최적화가 핵심이다.",
    transmission: "내인성 집락화 후 감염 또는 의료환경 수계·기구를 통한 전파가 가능하다.", disease: ["hospital-acquired pneumonia", "complicated UTI", "bacteremia", "device and burn-wound infection"], diagnosis: "정확한 AST와 최신 breakpoint를 적용하고 carbapenemase 등 내성기전을 지역 역학에 따라 평가한다.", treatment: "감수성이 확인된 newer antipseudomonal beta-lactam을 감염 부위와 PK/PD에 맞춰 우선 고려하고 routine combination continuation은 근거를 검토한다.", caution: "객담·소변 분리는 집락화일 수 있고 aminoglycoside 또는 polymyxin은 부위와 독성 한계가 크다.", prevention: "device bundle, 수계 관리, 접촉주의와 stewardship가 중요하다.", sourceIds: ["idsa-amr-guidance", "eucast-expert-rules", "who-bacterial-priority-2024", "cdc-infection-control"],
  },
  {
    id: "enterovirus", kind: "clinical_group", type: "virus", sci: "Enterovirus species", ko: "엔테로바이러스", aliases: ["enterovirus", "coxsackievirus", "echovirus", "EV-D68"],
    category: "장관 바이러스", folder: "02 Viruses/02 Enteric viruses", classification: ["Picornaviridae", "non-enveloped", "positive-sense RNA"], tags: ["aseptic-meningitis", "hand-foot-mouth", "myocarditis", "respiratory"],
    summary: "분변-경구와 호흡기 경로로 전파되는 non-enveloped RNA virus군으로 aseptic meningitis·hand-foot-mouth disease·myocarditis·acute flaccid paralysis와 일부 호흡기 질환을 일으킨다.",
    transmission: "분변-경구, 호흡기 분비물과 직접 접촉으로 전파된다.", disease: ["aseptic meningitis and encephalitis", "hand-foot-mouth disease and herpangina", "myocarditis and pericarditis", "neonatal sepsis-like disease", "acute flaccid myelitis"], diagnosis: "증후군에 따라 CSF·호흡기·stool NAAT를 선택하며 stool 또는 respiratory 검출이 CNS 질환의 직접 증거는 아닐 수 있다.", treatment: "대부분 지지치료이며 중증 신생아·면역저하 감염은 전문가 자문이 필요하다.", caution: "장기간 stool shedding과 무증상 검출을 임상 질환과 구분한다.", prevention: "손위생과 분변·호흡기 분비물 관리, 집단발생 감시를 시행한다.", sourceIds: [...viral, "cdc-respiratory-viruses"],
  },
  {
    id: "rotavirus", type: "virus", sci: "Rotavirus A", ko: "로타바이러스", aliases: ["rotavirus"],
    category: "장관 바이러스", folder: "02 Viruses/02 Enteric viruses", classification: ["Reoviridae", "non-enveloped", "segmented double-stranded RNA"], tags: ["gastroenteritis", "infant", "dehydration", "vaccine-preventable"],
    summary: "영유아에서 심한 watery diarrhea와 dehydration을 일으키는 segmented dsRNA virus로 vaccination 도입 후 중증 질환이 크게 감소했지만 의료기관과 보육시설 유행이 가능하다.",
    transmission: "분변-경구와 오염된 손·표면으로 전파된다.", disease: ["acute watery diarrhea", "vomiting and fever", "severe dehydration in infants"], diagnosis: "대부분 임상적으로 진단하며 중증·outbreak에서는 stool antigen 또는 NAAT를 사용할 수 있다.", treatment: "oral 또는 IV rehydration과 전해질 교정이 중심이다.", caution: "검사 양성은 최근 live vaccine shedding과 구분이 필요할 수 있다.", prevention: "영아 vaccination, 손위생과 contact precautions가 핵심이다.", sourceIds: [...viral, "cdc-vaccine-preventable", "cdc-foodborne"],
  },
  {
    id: "hepatitis-a-virus", type: "virus", sci: "Hepatitis A virus", ko: "A형간염바이러스", aliases: ["HAV"],
    category: "간염 바이러스", folder: "02 Viruses/04 Hepatitis viruses", classification: ["Picornaviridae", "non-enveloped", "positive-sense RNA"], tags: ["acute-hepatitis", "fecal-oral", "foodborne", "vaccine-preventable"],
    summary: "분변-경구로 전파되어 급성 hepatitis를 일으키지만 만성감염은 만들지 않는 RNA virus로, 고령·만성간질환자에서는 fulminant hepatitis 위험이 커질 수 있다.",
    transmission: "분변-경구, 오염된 음식·물과 밀접 접촉으로 전파된다.", disease: ["acute hepatitis A", "cholestatic or relapsing hepatitis", "rare acute liver failure"], diagnosis: "acute infection은 anti-HAV IgM으로 확인하고 total/IgG antibody는 과거 감염 또는 vaccination 면역을 반영한다.", treatment: "대부분 지지치료이며 간부전 징후를 모니터링하고 불필요한 hepatotoxic exposure를 피한다.", caution: "IgM은 낮은 pretest probability에서 위양성이 가능하고 chronic hepatitis를 설명하지 않는다.", prevention: "vaccination, 식품·손위생과 노출 후 vaccine 또는 immunoglobulin을 위험도와 시점에 맞춰 적용한다.", sourceIds: [...viral, "cdc-viral-hepatitis", "cdc-vaccine-preventable"],
  },
  {
    id: "measles-virus", type: "virus", sci: "Measles morbillivirus", ko: "홍역바이러스", aliases: ["measles virus", "rubeola"],
    category: "발진 바이러스", folder: "02 Viruses/07 Exanthem viruses", classification: ["Paramyxoviridae", "enveloped", "negative-sense RNA"], tags: ["measles", "airborne", "rash", "vaccine-preventable"],
    summary: "전염력이 매우 높은 airborne RNA virus로 fever·cough·coryza·conjunctivitis 뒤 발진을 일으키고 pneumonia·encephalitis 및 면역 amnesia를 유발할 수 있어 의심 즉시 격리와 공중보건 신고가 필요하다.",
    transmission: "airborne으로 전파되며 감염자가 떠난 공간에서도 일정 시간 전파 위험이 남을 수 있다.", disease: ["measles with febrile rash", "pneumonia", "acute encephalitis", "subacute sclerosing panencephalitis"], diagnosis: "공중보건기관과 협의해 respiratory/urine NAAT와 serum IgM을 적절한 시점에 채취한다.", treatment: "지지치료와 영양상태에 따른 vitamin A를 권고에 맞춰 사용하며 합병증을 치료한다.", caution: "백신 접종력이 불확실한 발열·발진 환자를 일반 대기실에 노출시키지 않는다.", prevention: "MMR vaccination, airborne isolation, 접촉자 면역확인과 노출 후 예방이 핵심이다.", sourceIds: [...viral, "cdc-vaccine-preventable", "cdc-infection-control"],
  },
  {
    id: "mumps-virus", type: "virus", sci: "Mumps orthorubulavirus", ko: "유행성이하선염바이러스", aliases: ["mumps virus"],
    category: "발진 바이러스", folder: "02 Viruses/07 Exanthem viruses", classification: ["Paramyxoviridae", "enveloped", "negative-sense RNA"], tags: ["mumps", "parotitis", "orchitis", "vaccine-preventable"],
    summary: "parotitis를 대표적으로 일으키는 RNA virus지만 meningitis·encephalitis·orchitis·oophoritis와 pancreatitis가 가능하며 vaccinated population에서도 outbreak가 발생할 수 있다.",
    transmission: "호흡기 비말과 타액의 밀접 접촉으로 전파된다.", disease: ["parotitis", "orchitis and oophoritis", "aseptic meningitis and encephalitis", "pancreatitis and hearing loss"], diagnosis: "buccal swab NAAT를 가능한 빨리 시행하고 vaccination 상태와 채취 시점에 따라 IgM 민감도가 낮을 수 있음을 고려한다.", treatment: "지지치료가 중심이며 합병증을 평가한다.", caution: "vaccinated 환자의 음성 IgM은 mumps를 배제하지 못한다.", prevention: "MMR vaccination, droplet precautions와 outbreak contact management를 시행한다.", sourceIds: [...viral, "cdc-vaccine-preventable"],
  },
  {
    id: "rubella-virus", type: "virus", sci: "Rubella virus", ko: "풍진바이러스", aliases: ["rubella virus", "German measles"],
    category: "발진 바이러스", folder: "02 Viruses/07 Exanthem viruses", classification: ["Matonaviridae", "enveloped", "positive-sense RNA"], tags: ["rubella", "congenital-rubella", "pregnancy", "vaccine-preventable"],
    summary: "소아·성인에서는 대개 경한 발열·발진·후이개 림프절병증을 일으키지만 임신 초기 감염은 congenital rubella syndrome과 유산을 유발할 수 있는 RNA virus다.",
    transmission: "호흡기 비말과 태반을 통해 전파된다.", disease: ["rubella", "arthralgia in adults", "congenital rubella syndrome"], diagnosis: "공중보건기관과 협의해 NAAT와 IgM/paired IgG를 시점에 맞춰 해석하며 임신부 저위험 screening에서 단독 IgM을 사용하지 않는다.", treatment: "특이 antiviral은 없고 지지치료 및 임신·태아 전문상담이 필요하다.", caution: "IgM 위양성은 임신에서 큰 위해를 유발할 수 있어 confirmatory testing이 필수다.", prevention: "MMR vaccination과 임신 전 면역확인, 의심 환자의 droplet precautions를 적용한다.", sourceIds: [...viral, "cdc-vaccine-preventable"],
  },
  {
    id: "dermatophytes", kind: "clinical_group", type: "fungus", sci: "Dermatophytes", ko: "피부사상균", aliases: ["dermatophytes", "Trichophyton", "Microsporum", "Epidermophyton"],
    category: "Dermatophyte", folder: "05 Clinical Groups", classification: ["keratinophilic fungi", "septate hyphae", "anthropophilic or zoophilic"], tags: ["tinea", "onychomycosis", "skin", "hair"],
    summary: "keratin을 이용해 피부 각질층·모발·손발톱을 침범하는 진균군으로 tinea의 해부학적 위치와 염증 정도, nail involvement에 따라 진단 검체와 topical 또는 systemic 치료가 달라진다.",
    transmission: "사람·동물·토양과 오염된 물품의 직접 접촉으로 전파된다.", disease: ["tinea corporis/cruris/pedis", "tinea capitis", "onychomycosis", "inflammatory kerion"], diagnosis: "병변 경계의 skin scraping, hair 또는 nail clipping에서 KOH microscopy와 fungal culture 또는 molecular test를 사용한다.", treatment: "국소 피부질환은 topical antifungal, 두피·광범위·손발톱 질환은 systemic therapy를 species·환자 요인에 맞춰 사용한다.", caution: "steroid 단독은 tinea incognito를 만들 수 있고 nail dystrophy가 모두 fungal infection은 아니다.", prevention: "피부 건조, 개인물품 공유 회피와 감염 동물·가족 접촉자 평가가 중요하다.", sourceIds: ["cdc-fungal", "idsa-asm-lab-2024"],
  },
  {
    id: "histoplasma-capsulatum", type: "fungus", sci: "Histoplasma capsulatum", ko: "히스토플라스마", aliases: ["H. capsulatum", "Histoplasma"],
    category: "Dimorphic fungi", folder: "03 Fungi/04 Dimorphic fungi", classification: ["thermally dimorphic fungus", "intracellular yeast in tissue", "soil-associated"], tags: ["histoplasmosis", "travel", "cave", "immunocompromised"],
    summary: "조류·박쥐 분변으로 오염된 토양에서 microconidia를 흡입해 감염되는 dimorphic fungus로 무증상 감염부터 acute pulmonary, chronic cavitary와 disseminated histoplasmosis까지 일으킨다.",
    transmission: "오염 토양·동굴·철거 환경의 aerosol을 흡입하며 사람 간 전파는 일반적이지 않다.", disease: ["acute pulmonary histoplasmosis", "chronic cavitary pulmonary disease", "disseminated histoplasmosis", "mediastinal complications"], diagnosis: "질환 형태와 면역상태에 따라 urine/serum antigen, culture, histopathology와 serology를 조합한다.", treatment: "경증 self-limited disease는 관찰할 수 있지만 중증·disseminated disease는 amphotericin induction 후 itraconazole 등을 사용한다.", caution: "antigen은 다른 endemic mycosis와 교차반응할 수 있고 culture는 느리며 laboratory exposure 위험이 있다.", prevention: "고위험 숙주는 조류·박쥐 분변과 먼지 aerosol 노출을 줄인다.", sourceIds: ["cdc-fungal", "idsa-asm-lab-2024"],
  },
  {
    id: "coccidioides-species", kind: "clinical_group", type: "fungus", sci: "Coccidioides species", ko: "콕시디오이데스", aliases: ["Coccidioides", "C. immitis", "C. posadasii"],
    category: "Dimorphic fungi", folder: "05 Clinical Groups", classification: ["dimorphic fungus", "arthroconidia in environment", "spherules in tissue"], tags: ["coccidioidomycosis", "desert", "pneumonia", "meningitis"],
    summary: "미주 건조지역 토양의 arthroconidia를 흡입해 community-acquired pneumonia를 일으키며 임신·면역저하·특정 숙주에서 disseminated bone·skin 또는 chronic meningitis로 진행할 수 있다.",
    transmission: "토양 먼지 aerosol 흡입이 주 경로이고 일반적인 사람 간 전파는 없다.", disease: ["primary pulmonary coccidioidomycosis", "chronic pulmonary disease", "skin and bone dissemination", "coccidioidal meningitis"], diagnosis: "travel/residence history와 serology, culture, histopathology 및 CSF 검사를 질환 부위에 맞춰 사용한다.", treatment: "질환 중증도와 dissemination에 따라 azole 또는 amphotericin을 사용하며 meningitis는 장기 치료가 필요하다.", caution: "초기 serology 음성이 가능하고 culture는 laboratory-acquired infection 위험이 높아 의심을 검사실에 알려야 한다.", prevention: "고위험 환자는 endemic area의 토양 먼지 노출을 줄인다.", sourceIds: ["cdc-fungal", "idsa-asm-lab-2024"],
  },
  {
    id: "cryptosporidium-species", kind: "clinical_group", type: "protozoan", sci: "Cryptosporidium species", ko: "와포자충", aliases: ["Cryptosporidium", "cryptosporidiosis"],
    category: "장관 원충", folder: "05 Clinical Groups", classification: ["Apicomplexa", "intracellular-extracytoplasmic protozoa", "chlorine-tolerant oocyst"], tags: ["watery-diarrhea", "waterborne", "HIV", "daycare"],
    summary: "chlorine에 비교적 강한 oocyst가 분변-경구로 전파되어 watery diarrhea를 일으키며 advanced immunosuppression에서는 prolonged severe diarrhea와 biliary disease가 가능한 원충군이다.",
    transmission: "오염된 물·수영장, 동물·사람 접촉과 음식으로 전파된다.", disease: ["acute watery diarrhea", "prolonged diarrhea in immunocompromised hosts", "biliary cryptosporidiosis"], diagnosis: "stool antigen, NAAT 또는 modified acid-fast microscopy를 사용하며 routine O&P에 자동 포함되지 않을 수 있다.", treatment: "수분보충과 면역회복이 중심이고 면역정상자에서는 nitazoxanide를 고려한다.", caution: "standard chlorine 농도에 강해 수영장 outbreak가 가능하고 HIV에서 약물 단독 효과는 제한적이다.", prevention: "안전한 물, 손위생과 설사 중 수영 회피를 시행한다.", sourceIds: ["cdc-dpdx", "nih-hiv-guidelines", "idsa-asm-lab-2024"],
  },
  {
    id: "intestinal-helminths", kind: "clinical_group", type: "helminth", sci: "Major intestinal helminths", ko: "주요 장관 연충", aliases: ["soil-transmitted helminths", "Ascaris", "hookworm", "Trichuris", "Enterobius"],
    category: "연충 임상군", folder: "05 Clinical Groups", classification: ["nematodes and cestodes", "intestinal parasites", "heterogeneous group"], tags: ["eosinophilia", "anemia", "obstruction", "perianal-pruritus"],
    summary: "Ascaris·hookworm·Trichuris·Enterobius와 장내 cestode를 포함하는 임상군으로 생활사와 조직 이동 여부에 따라 복통·빈혈·폐증상·장폐색·항문소양감이 다르게 나타난다.",
    transmission: "분변으로 오염된 토양·음식, 피부침투, 덜 익힌 육류 또는 직접 접촉 등 종별 경로가 다르다.", disease: ["intestinal symptoms and malnutrition", "iron-deficiency anemia from hookworm", "Löffler syndrome and biliary obstruction", "perianal pruritus from Enterobius"], diagnosis: "노출력에 따라 반복 stool O&P, antigen/NAAT, tape test와 혈액 eosinophil을 선택한다.", treatment: "species identification과 장기침범 여부에 따라 albendazole·mebendazole·praziquantel 등을 선택한다.", caution: "O&P 한 번 음성으로 배제하지 못하고 Strongyloides는 일반 장관 연충과 다른 steroid 위험을 가진다.", prevention: "위생·분변처리, 신발 착용과 음식 충분히 가열을 적용한다.", sourceIds: ["cdc-dpdx", "idsa-asm-lab-2024"],
  },
  {
    id: "tissue-helminths", kind: "clinical_group", type: "helminth", sci: "Major tissue helminths", ko: "주요 조직 연충", aliases: ["filariae", "Schistosoma", "Echinococcus", "tissue nematodes"],
    category: "연충 임상군", folder: "05 Clinical Groups", classification: ["nematodes, trematodes and cestodes", "tissue-invasive parasites", "heterogeneous group"], tags: ["eosinophilia", "travel", "lymphatic", "cystic-lesion"],
    summary: "Schistosoma·filariae·Echinococcus와 조직침범 nematode를 묶는 임상군으로 vector·담수·음식·동물 노출과 장기별 syndrome을 바탕으로 종 특이적 serology·영상·현미경검사를 선택해야 한다.",
    transmission: "vector bite, 담수 cercaria, 감염 동물의 egg 또는 덜 익힌 음식 등 종마다 다르다.", disease: ["schistosomiasis", "lymphatic filariasis and onchocerciasis", "echinococcal cyst disease", "visceral or ocular larva migrans"], diagnosis: "여행·거주·노출력과 eosinophilia, 영상, 종 특이 serology 및 stool/urine/blood microscopy를 조합한다.", treatment: "종과 병변 위치에 따라 praziquantel·ivermectin·albendazole과 수술 또는 중재를 조합한다.", caution: "Echinococcus cyst를 무계획하게 puncture하면 anaphylaxis와 dissemination 위험이 있고 Loa loa 고미세사상충혈증에서는 ivermectin 신경독성 위험이 있다.", prevention: "vector control, 안전한 담수·음식, 동물 분변 관리와 여행 예방을 시행한다.", sourceIds: ["cdc-dpdx", "idsa-asm-lab-2024"],
  },
];

function yaml(values) {
  return values.length ? values.map((value) => `- ${value}`).join("\n") : "[]";
}

function organismBody(item) {
  return `## 동정 및 분류

${item.classification.map((value) => `- \`${value}\``).join("\n")}

## 저장소와 전파

- ${item.transmission}

## 병원성 및 병태생리

- 병원체 고유 특성과 감염 부위, inoculum, 숙주 면역을 함께 고려한다.
- 비무균 부위 검출은 집락화·오염·감염을 검체 품질과 임상상으로 구분한다.

## 임상 정보

#### 주요 감염질환

${item.disease.map((value) => `- ${value}`).join("\n")}

#### 고위험 상황

- 면역저하, 해부학적 장벽 손상, invasive device와 관련 노출을 확인한다.

## 진단

- ${item.diagnosis}

## 치료 원칙

- ${item.treatment}
- 약제·용량·기간은 감염 부위, 중증도, 장기기능과 최신 지침에 따라 결정한다.

## 내성 및 치료 실패

- ${item.caution}
- 반응이 나쁘면 오진, 약물노출, 내성, deep focus와 source control을 재평가한다.

## 감염관리 및 예방

- ${item.prevention}`;
}

function phenotypeBody(item) {
  return `## 정의

- ${item.summary}

## 해당 병원체

- ${item.disease.join("\n- ")}

## 내성 기전

- 여러 intrinsic·acquired mechanism이 복합될 수 있어 phenotype과 기전검사를 구분한다.

## 검사 및 판정

- ${item.diagnosis}

## 임상적 의미

- 감염과 집락화를 구분하고 감염 부위·source control·AST를 함께 평가한다.

## 치료 원칙

- ${item.treatment}

## 감염관리

- ${item.prevention}

## 지역 역학과 해석상 주의

- ${item.caution}`;
}

for (const item of entries) {
  const kind = item.kind ?? "organism";
  const relativePath = `${item.folder}/${item.ko} (${item.sci}).md`;
  const sourceLines = item.sourceIds.map((id) => {
    const source = sourceMap.get(id);
    return source ? `- [${source.label}](${source.url})` : `- ${id}`;
  }).join("\n");
  const body = kind === "resistance_phenotype" ? phenotypeBody(item) : organismBody(item);
  const note = `---
microbiology_id: ${item.id}
entity_type: microorganism
entity_kind: ${kind}
pathogen_type: ${item.type}
scientific_name: ${item.sci}
korean_name: ${item.ko}
taxonomic_rank: ${kind === "organism" ? "species" : kind}
taxonomy_ids: []
aliases:
${yaml(item.aliases)}
classification:
${yaml(item.classification)}
clinical_tags:
${yaml(item.tags)}
spectrum_ids: []
source_ids:
${yaml(item.sourceIds)}
review_status: source_checked
reviewed_at: ${reviewedAt}
---

# ${item.ko === item.sci ? item.ko : `${item.ko} (${item.sci})`}

> [!summary]
> ${item.summary}

${body}

## 비고

- 임상 교육용 참조이며 개별 환자 진료는 최신 지역 지침과 전문가 판단을 따른다.

## 출처

${sourceLines}
`;
  const registryEntry = {
    id: item.id,
    entityKind: kind,
    pathogenType: item.type,
    scientificName: item.sci,
    koreanName: item.ko,
    aliases: item.aliases,
    category: item.category,
    classification: item.classification,
    clinicalTags: item.tags,
    taxonomyIds: [],
    spectrumIds: [],
    noteSourceFile: relativePath,
    sourceIds: item.sourceIds,
    reviewStatus: "source_checked",
    reviewedAt,
  };
  const index = registry.entities.findIndex((candidate) => candidate.id === item.id);
  if (index >= 0) registry.entities[index] = registryEntry;
  else registry.entities.push(registryEntry);
  const notePath = path.join(microRoot, relativePath);
  fs.mkdirSync(path.dirname(notePath), { recursive: true });
  fs.writeFileSync(notePath, note, "utf8");
}

registry.reviewedAt = reviewedAt;
fs.writeFileSync(registryPath, `${JSON.stringify(registry, null, 2)}\n`, "utf8");
console.log(`Completed initial microbiology scope with ${entries.length} additional entities (${registry.entities.length} total).`);
