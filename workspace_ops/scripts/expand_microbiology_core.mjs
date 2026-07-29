import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const microRoot = path.join(root, "source_notes", "09 Microbiology");
const registryPath = path.join(microRoot, "_data", "microorganism-registry.json");
const sourcesPath = path.join(microRoot, "_data", "microbiology-sources.json");
const reviewedAt = "2026-07-29";

const newSources = [
  { id: "ictv-taxonomy", label: "ICTV Virus Taxonomy", organization: "International Committee on Taxonomy of Viruses", url: "https://ictv.global/taxonomy", tier: "A", year: "current", scope: ["virus taxonomy", "nomenclature"] },
  { id: "cdc-respiratory-viruses", label: "CDC Clinical Overview of Respiratory Illnesses", organization: "Centers for Disease Control and Prevention", url: "https://www.cdc.gov/respiratory-viruses/hcp/clinical-overview/index.html", tier: "A", year: "current", scope: ["influenza", "RSV", "SARS-CoV-2", "respiratory viruses"] },
  { id: "cdc-sti-guidelines", label: "CDC Sexually Transmitted Infections Treatment Guidelines", organization: "Centers for Disease Control and Prevention", url: "https://www.cdc.gov/std/treatment-guidelines/default.htm", tier: "A", year: "current", scope: ["gonorrhea", "chlamydia", "syphilis", "HSV", "HPV"] },
  { id: "cdc-tb", label: "CDC Tuberculosis Clinical Overview", organization: "Centers for Disease Control and Prevention", url: "https://www.cdc.gov/tb/hcp/clinical-overview/index.html", tier: "A", year: "current", scope: ["tuberculosis", "diagnosis", "infection control"] },
  { id: "who-tb", label: "WHO Consolidated Guidelines on Tuberculosis", organization: "World Health Organization", url: "https://www.who.int/teams/global-tuberculosis-programme/who-consolidated-guidelines-on-tuberculosis", tier: "A", year: "current", scope: ["tuberculosis", "treatment", "prevention"] },
  { id: "cdc-viral-hepatitis", label: "CDC Viral Hepatitis Clinical Resources", organization: "Centers for Disease Control and Prevention", url: "https://www.cdc.gov/hepatitis/hcp/index.html", tier: "A", year: "current", scope: ["hepatitis A", "hepatitis B", "hepatitis C"] },
  { id: "nih-hiv-guidelines", label: "NIH Clinical Guidelines for HIV", organization: "National Institutes of Health", url: "https://clinicalinfo.hiv.gov/en/guidelines", tier: "A", year: "current", scope: ["HIV", "opportunistic infections", "antiretroviral therapy"] },
  { id: "cdc-vaccine-preventable", label: "CDC Pink Book", organization: "Centers for Disease Control and Prevention", url: "https://www.cdc.gov/pinkbook/hcp/table-of-contents/index.html", tier: "A", year: "current", scope: ["vaccine-preventable diseases", "epidemiology", "prevention"] },
  { id: "cdc-foodborne", label: "CDC Food Safety Clinical Resources", organization: "Centers for Disease Control and Prevention", url: "https://www.cdc.gov/food-safety/about/index.html", tier: "A", year: "current", scope: ["enteric bacteria", "foodborne infection"] },
  { id: "cdc-fungal", label: "CDC Fungal Diseases", organization: "Centers for Disease Control and Prevention", url: "https://www.cdc.gov/fungal/", tier: "A", year: "current", scope: ["Candida", "Aspergillus", "Cryptococcus", "endemic mycoses"] },
  { id: "cdc-dpdx", label: "CDC DPDx Laboratory Identification of Parasites", organization: "Centers for Disease Control and Prevention", url: "https://www.cdc.gov/dpdx/index.html", tier: "A", year: "current", scope: ["parasite biology", "specimen", "laboratory diagnosis"] },
  { id: "who-malaria", label: "WHO Guidelines for Malaria", organization: "World Health Organization", url: "https://www.who.int/publications/i/item/guidelines-for-malaria", tier: "A", year: "current", scope: ["malaria", "diagnosis", "treatment", "prevention"] },
  { id: "idsa-cdi", label: "SHEA/IDSA Clinical Practice Guideline for Clostridioides difficile Infection", organization: "SHEA and IDSA", url: "https://www.idsociety.org/practice-guideline/clostridioides-difficile-2021-focused-update/", tier: "A", year: "2021", scope: ["Clostridioides difficile", "treatment", "recurrence"] },
];

const bacteriaSources = ["ncbi-taxonomy", "lpsn", "idsa-asm-lab-2024"];
const virusSources = ["ictv-taxonomy", "idsa-asm-lab-2024"];
const definitions = [
  {
    id: "streptococcus-pyogenes", sci: "Streptococcus pyogenes", ko: "화농사슬알균", aliases: ["S. pyogenes", "group A Streptococcus", "GAS"],
    type: "bacterium", category: "G(+) 구균", folder: "01 Bacteria/01 Gram-positive cocci", classification: ["G(+)", "coccus", "beta-hemolytic", "group A Streptococcus"], tags: ["pharyngitis", "skin-soft-tissue", "invasive disease", "toxin-mediated"],
    summary: "사람의 인두와 피부를 침범해 pharyngitis와 피부감염을 일으키며, necrotizing fasciitis·streptococcal toxic shock syndrome 같은 침습 감염과 감염 후 면역 합병증까지 연결되는 주요 G(+) coccus다.",
    transmission: "호흡기 비말과 직접 접촉으로 전파되며 무증상 인두 보균이 가능하다.", diseases: ["pharyngitis와 scarlet fever", "impetigo, erysipelas, cellulitis", "necrotizing fasciitis와 streptococcal toxic shock syndrome", "acute rheumatic fever와 post-streptococcal glomerulonephritis"],
    diagnosis: "질환에 맞는 검체에서 RADT, NAAT 또는 배양을 사용한다. 인두검사 양성은 임상 증상과 연령별 보균 가능성을 함께 해석한다.", treatment: "확진 감염은 감염 부위와 침습성에 맞는 beta-lactam을 기본으로 하며 독소성 침습 감염에서는 신속한 source control과 toxin suppression 전략을 함께 고려한다.", caveat: "penicillin 감수성은 유지되지만 macrolide와 clindamycin 내성은 지역별로 달라 감수성 자료가 필요하다.", prevention: "손위생, 호흡기 예절과 적절한 치료 후 전염 가능 기간을 고려한다.", sources: [...bacteriaSources, "cdc-vaccine-preventable"],
  },
  {
    id: "streptococcus-agalactiae", sci: "Streptococcus agalactiae", ko: "B군사슬알균", aliases: ["S. agalactiae", "group B Streptococcus", "GBS"],
    type: "bacterium", category: "G(+) 구균", folder: "01 Bacteria/01 Gram-positive cocci", classification: ["G(+)", "coccus", "beta-hemolytic", "group B Streptococcus"], tags: ["neonate", "pregnancy", "bacteremia", "meningitis"],
    summary: "위장관과 생식기를 집락화할 수 있으며 신생아 sepsis·pneumonia·meningitis와 임신 관련 감염, 고령·만성질환 성인의 침습 감염을 일으키는 G(+) coccus다.",
    transmission: "산모의 생식기 집락에서 분만 중 신생아로 수직 전파될 수 있다.", diseases: ["early- and late-onset neonatal disease", "임신부의 UTI, chorioamnionitis와 postpartum infection", "성인의 bacteremia, skin-soft-tissue infection과 osteoarticular infection"],
    diagnosis: "임신부 선별검사는 권고 시기의 vaginal-rectal 검체로 시행하며 침습 감염은 혈액·CSF 등 무균 검체 배양으로 확인한다.", treatment: "침습 감염은 beta-lactam 감수성과 환자군에 따라 치료하고, 산과 영역에서는 선별 결과와 위험인자에 따른 intrapartum prophylaxis를 적용한다.", caveat: "penicillin allergy에서 대체 약물을 쓸 때 clindamycin 감수성 확인이 중요하다.", prevention: "산전 선별과 적절한 intrapartum prophylaxis가 early-onset 신생아 질환 예방의 핵심이다.", sources: [...bacteriaSources, "cdc-vaccine-preventable"],
  },
  {
    id: "viridans-group-streptococci", sci: "Viridans group streptococci", ko: "Viridans group streptococci", aliases: ["VGS", "viridans streptococci"],
    type: "bacterium", entityKind: "clinical_group", category: "G(+) 구균", folder: "05 Clinical Groups", classification: ["G(+)", "coccus", "alpha or non-hemolytic", "heterogeneous clinical group"], tags: ["oral flora", "endocarditis", "neutropenia", "dental"],
    summary: "구강·상기도·위장관 정상균총을 이루는 이질적인 사슬알균군으로, 혈액배양 오염 가능성과 infective endocarditis 또는 neutropenic bacteremia 같은 진성 감염 가능성을 모두 고려해야 한다.",
    transmission: "주로 자신의 점막 정상균총에서 내인성 감염이 발생한다.", diseases: ["native valve infective endocarditis", "치과·구강 기원의 bacteremia", "neutropenia 또는 mucositis 관련 bacteremia", "일부 종의 deep abscess"],
    diagnosis: "반복 혈액배양, 양성 bottle 수, 임상 소견과 심초음파를 함께 해석하며 species-level identification이 임상 맥락에 도움을 줄 수 있다.", treatment: "endocarditis 여부와 penicillin 또는 ceftriaxone 감수성, prosthetic material 존재를 기준으로 regimen과 기간을 결정한다.", caveat: "종과 환자군에 따라 beta-lactam 내성이 달라 침습 감염은 AST가 필요하다.", prevention: "구강 위생과 적절한 device 관리가 중요하며 endocarditis prophylaxis는 지침상 고위험군에 한정한다.", sources: bacteriaSources,
  },
  {
    id: "clostridioides-difficile", sci: "Clostridioides difficile", ko: "클로스트리디오이데스 디피실", aliases: ["C. difficile", "CDI"],
    type: "bacterium", category: "혐기성균", folder: "01 Bacteria/06 Anaerobes", classification: ["G(+)", "spore-forming bacillus", "obligate anaerobe", "toxin-producing"], tags: ["antibiotic-associated diarrhea", "colitis", "healthcare-associated", "recurrence"],
    summary: "항생제 노출과 장내 미생물군 교란 뒤 toxin-mediated colitis를 일으키는 포자형성 혐기성균으로, 무증상 집락화와 실제 감염을 엄격히 구분해야 한다.",
    transmission: "환경에 오래 남는 포자와 분변-경구 경로로 전파되며 의료환경에서 중요하다.", diseases: ["antibiotic-associated diarrhea", "pseudomembranous colitis", "fulminant colitis와 toxic megacolon", "recurrent CDI"],
    diagnosis: "설사가 있는 적절한 환자에서만 toxin assay와 NAAT를 기관 algorithm에 따라 사용한다. 무증상 환자 또는 형성변 검사는 과진단을 유발한다.", treatment: "원인 항생제 중단 가능성을 검토하고 중증도와 재발 횟수에 따라 guideline-recommended therapy를 선택하며 fulminant disease는 조기 수술 평가가 필요할 수 있다.", caveat: "NAAT 양성만으로 toxin-mediated disease를 확정할 수 없고 임상 증상이 필수다.", prevention: "접촉주의, 비누와 물 손위생이 필요한 상황, sporicidal 환경소독과 antimicrobial stewardship를 적용한다.", sources: [...bacteriaSources, "idsa-cdi", "cdc-infection-control"],
  },
  {
    id: "escherichia-coli", sci: "Escherichia coli", ko: "대장균", aliases: ["E. coli"],
    type: "bacterium", category: "G(-) 간균", folder: "01 Bacteria/04 Enterobacterales", classification: ["G(-)", "bacillus", "facultative anaerobe", "Enterobacterales"], tags: ["urinary-tract", "bacteremia", "intra-abdominal", "diarrheagenic pathotypes"],
    summary: "장내 정상균총이면서 UTI·bacteremia·intra-abdominal infection의 가장 중요한 원인 중 하나이고, 별도의 virulence factor를 가진 pathotype은 설사와 HUS 또는 신생아 수막염을 일으킬 수 있다.",
    transmission: "extraintestinal infection은 주로 자신의 장내 flora에서 발생하며 diarrheagenic strain은 오염된 음식·물과 접촉으로 전파된다.", diseases: ["cystitis와 pyelonephritis", "bacteremia와 sepsis", "intra-abdominal infection", "ETEC, STEC/EHEC 등 pathotype별 gastroenteritis", "neonatal meningitis"],
    diagnosis: "감염 부위에 맞는 배양과 AST를 시행한다. 혈성 설사 또는 HUS 위험에서는 Shiga toxin 검사를 포함한 stool testing을 고려한다.", treatment: "extraintestinal infection은 감염 부위·중증도·ESBL 위험과 AST에 맞춰 치료한다. STEC 의심 설사에서는 항생제와 antimotility agent가 해로울 수 있어 피한다.", caveat: "ESBL, AmpC 또는 carbapenemase phenotype이 가능하므로 과거 배양과 지역 내성률을 반영한다.", prevention: "손위생, 식품·물 안전과 catheter 사용 최소화가 중요하다.", sources: [...bacteriaSources, "cdc-foodborne", "idsa-amr-guidance"],
  },
  {
    id: "klebsiella-pneumoniae", sci: "Klebsiella pneumoniae", ko: "폐렴막대균", aliases: ["K. pneumoniae", "Klebsiella"],
    type: "bacterium", category: "G(-) 간균", folder: "01 Bacteria/04 Enterobacterales", classification: ["G(-)", "encapsulated bacillus", "facultative anaerobe", "Enterobacterales"], tags: ["pneumonia", "urinary-tract", "bacteremia", "liver abscess", "AMR"],
    summary: "장관과 상기도를 집락화할 수 있는 피막성 Enterobacterales로, 의료관련 pneumonia·UTI·bacteremia뿐 아니라 hypervirulent strain의 community-acquired liver abscess syndrome과 다제내성이 모두 중요하다.",
    transmission: "내인성 감염과 의료환경에서 손·기구를 통한 전파가 가능하다.", diseases: ["hospital-acquired pneumonia", "UTI와 bacteremia", "intra-abdominal infection", "pyogenic liver abscess와 metastatic infection"],
    diagnosis: "배양과 species identification 후 AST를 시행하며 침습 감염에서는 ESBL 및 carbapenem resistance mechanism을 평가한다.", treatment: "감염 부위와 중증도, ESBL/CRE phenotype 및 AST에 맞춰 선택하고 abscess는 source control을 병행한다.", caveat: "ESBL과 carbapenemase 생성이 치료 선택을 크게 바꾸며 hypermucoviscous phenotype만으로 hypervirulence를 확정하지 않는다.", prevention: "손위생, 접촉주의 적용과 device bundle, 항생제 stewardship가 중요하다.", sources: [...bacteriaSources, "idsa-amr-guidance", "who-bacterial-priority-2024"],
  },
  {
    id: "proteus-mirabilis", sci: "Proteus mirabilis", ko: "Proteus mirabilis", aliases: ["P. mirabilis"],
    type: "bacterium", category: "G(-) 간균", folder: "01 Bacteria/04 Enterobacterales", classification: ["G(-)", "bacillus", "urease positive", "swarming motility"], tags: ["urinary-tract", "catheter-associated", "struvite stone", "bacteremia"],
    summary: "강한 urease 활성과 swarming motility를 보이는 Enterobacterales로, catheter-associated UTI와 alkaline urine·struvite stone·obstruction이 동반된 complicated UTI에서 중요하다.",
    transmission: "장내 flora에서 요로로 상행하거나 urinary device와 연관되어 감염된다.", diseases: ["complicated UTI와 pyelonephritis", "catheter-associated UTI", "struvite stone 및 obstructive infection", "urinary-source bacteremia"],
    diagnosis: "소변배양과 AST를 시행하고 반복 감염이나 지속 균혈증에서는 결석·폐쇄·device를 평가한다.", treatment: "AST에 맞춘 항생제와 함께 catheter 교체 또는 제거, 폐쇄 해소와 감염성 결석 관리가 중요하다.", caveat: "nitrofurantoin은 일반적으로 적절한 선택이 아니며 ESBL 등 획득 내성 가능성을 확인한다.", prevention: "불필요한 urinary catheter를 줄이고 closed drainage system을 유지한다.", sources: bacteriaSources,
  },
  {
    id: "neisseria-gonorrhoeae", sci: "Neisseria gonorrhoeae", ko: "임균", aliases: ["N. gonorrhoeae", "gonococcus"],
    type: "bacterium", category: "G(-) 구균·구간균", folder: "01 Bacteria/03 Gram-negative cocci and coccobacilli", classification: ["G(-)", "diplococcus", "oxidase positive", "human-restricted"], tags: ["sexually-transmitted", "urethritis", "cervicitis", "pelvic-inflammatory-disease"],
    summary: "사람 점막을 감염시키는 G(-) diplococcus로 urethritis·cervicitis·PID와 disseminated gonococcal infection을 일으키며, 빠르게 변하는 항균제 내성이 치료와 공중보건의 핵심이다.",
    transmission: "성접촉과 분만 중 수직 전파로 전파된다.", diseases: ["urethritis와 cervicitis", "pelvic inflammatory disease와 epididymitis", "proctitis와 pharyngitis", "disseminated infection", "neonatal conjunctivitis"],
    diagnosis: "노출 부위별 NAAT가 중심이며 치료 실패 또는 내성 감시가 필요하면 적절한 배양과 AST를 확보한다.", treatment: "최신 지역 STI 지침의 권고 regimen을 따르고 Chlamydia 동시감염 배제 여부, 파트너 치료와 재검사를 함께 관리한다.", caveat: "pharyngeal infection은 치료 실패 위험이 상대적으로 높고 cephalosporin 감수성 저하를 감시해야 한다.", prevention: "condom, 파트너 검사·치료, 적절한 기간의 성접촉 회피와 신고·추적 정책을 적용한다.", sources: [...bacteriaSources, "cdc-sti-guidelines"],
  },
  {
    id: "legionella-pneumophila", sci: "Legionella pneumophila", ko: "레지오넬라균", aliases: ["L. pneumophila", "Legionella"],
    type: "bacterium", category: "비정형균", folder: "01 Bacteria/07 Atypical bacteria", classification: ["G(-) poorly staining bacillus", "facultative intracellular", "aquatic"], tags: ["pneumonia", "water-system", "healthcare-associated", "intracellular"],
    summary: "건물 급수계와 aerosol에 연관된 세포내 병원체로 중증 atypical pneumonia를 일으키며, routine respiratory culture에서 놓치기 쉬워 urinary antigen·NAAT·특수배양을 임상 상황에 맞게 조합해야 한다.",
    transmission: "오염된 물의 aerosol 흡입 또는 aspiration이 주 경로이며 일반적인 사람 간 전파는 드물다.", diseases: ["Legionnaires' disease", "Pontiac fever", "healthcare-associated pneumonia와 outbreak"],
    diagnosis: "urinary antigen은 주로 L. pneumophila serogroup 1을 검출하므로 하기도 검체 NAAT와 selective culture를 병행하면 진단과 역학조사에 유리하다.", treatment: "세포내 활성이 있는 macrolide 또는 fluoroquinolone 계열을 중증도와 환자 요인에 맞게 사용한다.", caveat: "beta-lactam 단독은 세포내 감염 특성상 임상적으로 적절하지 않다.", prevention: "의료기관과 대형 건물의 water management program과 outbreak 조사가 핵심이다.", sources: bacteriaSources,
  },
  {
    id: "mycoplasma-pneumoniae", sci: "Mycoplasma pneumoniae", ko: "폐렴미코플라스마", aliases: ["M. pneumoniae", "Mycoplasma"],
    type: "bacterium", category: "비정형균", folder: "01 Bacteria/07 Atypical bacteria", classification: ["cell wall absent", "small bacterium", "extracellular mucosal pathogen"], tags: ["community-acquired-pneumonia", "school-age", "extrapulmonary"],
    summary: "세포벽이 없어 Gram stain과 beta-lactam 치료의 표적이 되지 않는 호흡기 병원체로, 학령기·청년의 tracheobronchitis와 community-acquired pneumonia 및 다양한 extrapulmonary manifestation을 일으킨다.",
    transmission: "밀접 접촉에서 호흡기 비말로 전파되며 집단시설 유행이 가능하다.", diseases: ["tracheobronchitis", "community-acquired pneumonia", "rash와 신경·혈액계 extrapulmonary manifestation"],
    diagnosis: "호흡기 NAAT가 유용하며 serology는 시점과 교차반응 때문에 단일 결과 해석에 주의한다.", treatment: "macrolide, doxycycline 또는 respiratory fluoroquinolone을 연령·금기·지역 내성에 맞춰 선택한다.", caveat: "세포벽이 없어 모든 beta-lactam에 본질적으로 반응하지 않으며 macrolide resistance가 지역별로 증가할 수 있다.", prevention: "호흡기 예절과 집단발생 감시를 시행한다.", sources: [...bacteriaSources, "cdc-respiratory-viruses"],
  },
  {
    id: "chlamydia-trachomatis", sci: "Chlamydia trachomatis", ko: "클라미디아 트라코마티스", aliases: ["C. trachomatis", "Chlamydia"],
    type: "bacterium", category: "비정형균", folder: "01 Bacteria/07 Atypical bacteria", classification: ["obligate intracellular bacterium", "elementary and reticulate bodies"], tags: ["sexually-transmitted", "cervicitis", "urethritis", "neonate"],
    summary: "obligate intracellular 생활사를 가진 세균으로 무증상 생식기 감염이 흔하지만 cervicitis·urethritis·PID·infertility와 neonatal conjunctivitis 또는 pneumonia를 일으킨다.",
    transmission: "성접촉과 분만 중 수직 전파가 주 경로다.", diseases: ["cervicitis와 urethritis", "PID와 epididymitis", "lymphogranuloma venereum", "trachoma", "neonatal conjunctivitis와 pneumonia"],
    diagnosis: "노출 부위별 NAAT가 중심이며 rectal·pharyngeal 노출과 성별 해부학적 부위를 반영해 검체를 선택한다.", treatment: "질환 위치와 임신 여부에 맞는 최신 STI 지침 regimen을 사용하고 파트너 치료와 재검사를 함께 시행한다.", caveat: "치료 직후 NAAT는 잔존 핵산 때문에 양성일 수 있어 test-of-cure 적응증과 시점을 지킨다.", prevention: "screening 대상군, condom, 파트너 관리와 성접촉 회피 기간을 지침에 따라 적용한다.", sources: [...bacteriaSources, "cdc-sti-guidelines"],
  },
  {
    id: "mycobacterium-tuberculosis-complex", sci: "Mycobacterium tuberculosis complex", ko: "결핵균복합체", aliases: ["M. tuberculosis", "MTBC", "TB bacillus"],
    type: "bacterium", category: "Mycobacteria", folder: "01 Bacteria/08 Mycobacteria", classification: ["acid-fast bacillus", "obligate aerobe", "slow growing", "intracellular"], tags: ["tuberculosis", "airborne", "latent-infection", "multidrug-resistance"],
    summary: "공기매개로 전파되어 latent TB infection 또는 폐·폐외 tuberculosis를 일으키는 acid-fast bacillus로, 진단 시 active disease와 latent infection을 구분하고 신속 분자검사와 배양·약제감수성검사를 함께 계획해야 한다.",
    transmission: "활동성 폐 또는 후두 결핵 환자가 배출한 droplet nuclei를 흡입해 전파된다.", diseases: ["pulmonary tuberculosis", "miliary TB", "TB meningitis", "lymph node·bone·genitourinary TB", "latent TB infection"],
    diagnosis: "active TB 의심 시 적절한 호흡기 또는 병변 검체에서 AFB smear, NAAT와 mycobacterial culture를 시행한다. IGRA/TST는 감염 면역반응을 보여 주지만 active disease를 확정하지 않는다.", treatment: "여러 약제를 병합해 감수성과 질환 부위에 맞는 충분한 기간 치료하며 전문가·공중보건 체계와 연계한다.", caveat: "단독 치료는 내성을 유발할 수 있고 rifamycin drug interaction, 간독성과 paradoxical reaction을 모니터링한다.", prevention: "airborne isolation, 적절한 호흡보호구, 접촉자 조사와 latent infection 치료가 중요하다.", sources: [...bacteriaSources, "cdc-tb", "who-tb"],
  },
  {
    id: "nontuberculous-mycobacteria", sci: "Nontuberculous mycobacteria", ko: "비결핵항산균", aliases: ["NTM", "M. avium complex", "MAC"],
    type: "bacterium", entityKind: "clinical_group", category: "Mycobacteria", folder: "05 Clinical Groups", classification: ["acid-fast bacilli", "environmental mycobacteria", "heterogeneous group"], tags: ["chronic-pulmonary-disease", "device", "skin-soft-tissue", "immunocompromised"],
    summary: "환경에 널리 존재하는 결핵균복합체·나병균 이외의 mycobacteria로, 검체 분리만으로 질환을 확정할 수 없고 임상·영상·미생물 기준을 함께 충족해야 하는 이질적 병원체군이다.",
    transmission: "물·토양 등 환경 노출과 의료기구 관련 감염이 중심이며 대부분 사람 간 전파는 일반적이지 않다.", diseases: ["nodular-bronchiectatic 또는 cavitary pulmonary disease", "cervical lymphadenitis", "skin-soft-tissue와 surgical-site infection", "disseminated disease in advanced immunosuppression"],
    diagnosis: "반복 객담 또는 무균 검체의 species-level identification과 susceptibility pattern을 임상·영상 기준과 함께 해석한다.", treatment: "species, macrolide 감수성, 질환 부위와 중증도에 따라 다제 병합치료를 장기간 시행하므로 전문가 자문이 필요하다.", caveat: "단일 객담 분리나 colonization을 곧바로 질환으로 간주하면 불필요한 독성 치료를 유발한다.", prevention: "수술·시술 수계와 기구 관리, 취약 환자의 환경 노출 평가가 중요하다.", sources: bacteriaSources,
  },
  {
    id: "treponema-pallidum", sci: "Treponema pallidum", ko: "매독균", aliases: ["T. pallidum", "syphilis spirochete"],
    type: "bacterium", category: "Spirochetes", folder: "01 Bacteria/09 Spirochetes", classification: ["spirochete", "human-restricted", "not routinely cultured"], tags: ["sexually-transmitted", "congenital", "neurosyphilis", "multistage disease"],
    summary: "routine culture가 불가능한 spirochete로 일차·이차·잠복·삼차 매독과 neurosyphilis, ocular/otosyphilis 및 congenital syphilis를 일으키며 혈청검사 조합과 병기 판정이 진단·치료를 좌우한다.",
    transmission: "성접촉, 태반을 통한 수직 전파와 드물게 혈액 노출로 전파된다.", diseases: ["primary chancre", "secondary syphilis", "latent and tertiary syphilis", "neurosyphilis·ocular syphilis·otosyphilis", "congenital syphilis"],
    diagnosis: "treponemal과 nontreponemal serologic test를 algorithm에 따라 조합하고 병기·신경안과 증상·치료력과 함께 해석한다.", treatment: "penicillin 기반 치료를 병기와 CNS/안구 침범, 임신 여부에 맞춰 시행하고 nontreponemal titer로 반응을 추적한다.", caveat: "prozone, 초기 window period와 과거 치료 후 지속 treponemal 양성을 고려한다.", prevention: "파트너 통지·검사, 임신부 선별과 안전한 성접촉이 핵심이다.", sources: [...bacteriaSources, "cdc-sti-guidelines"],
  },
  {
    id: "bordetella-pertussis", sci: "Bordetella pertussis", ko: "백일해균", aliases: ["B. pertussis"],
    type: "bacterium", category: "G(-) 구균·구간균", folder: "01 Bacteria/03 Gram-negative cocci and coccobacilli", classification: ["G(-)", "small coccobacillus", "strict aerobe", "toxin-producing"], tags: ["pertussis", "droplet", "infant", "vaccine-preventable"],
    summary: "호흡상피에 부착해 toxin-mediated prolonged cough를 일으키는 작은 G(-) coccobacillus로, 초기 catarrhal phase의 전염력이 높고 영아에서는 apnea와 중증 합병증 위험이 크다.",
    transmission: "호흡기 비말과 밀접 접촉으로 매우 잘 전파된다.", diseases: ["catarrhal illness", "paroxysmal cough with whoop or post-tussive vomiting", "infant apnea", "secondary pneumonia and complications"],
    diagnosis: "증상 기간에 맞춰 nasopharyngeal 검체 PCR과 배양을 사용하며 late disease에서는 검사 민감도가 감소할 수 있다.", treatment: "macrolide를 주로 사용하며 조기 치료는 전파 감소에 중요하다. 노출 후 예방은 고위험 접촉자와 상황을 선별한다.", caveat: "기침이 오래 지속된 뒤 치료하면 증상 기간을 크게 줄이지 못할 수 있으나 전파 관리 목적이 있다.", prevention: "연령·임신에 맞는 vaccination, droplet precautions와 접촉자 관리가 핵심이다.", sources: [...bacteriaSources, "cdc-vaccine-preventable"],
  },
  {
    id: "influenza-virus", sci: "Influenza A and B viruses", ko: "인플루엔자 바이러스", aliases: ["influenza virus", "flu virus", "Influenza A", "Influenza B"],
    type: "virus", category: "호흡기 바이러스", folder: "02 Viruses/01 Respiratory viruses", classification: ["Orthomyxoviridae", "enveloped", "segmented negative-sense RNA"], tags: ["influenza", "seasonal", "pneumonia", "antiviral"],
    summary: "분절 RNA genome을 가진 호흡기 바이러스로 abrupt fever·myalgia·respiratory symptoms를 일으키고 viral 또는 secondary bacterial pneumonia로 악화할 수 있으며, 고위험군에서는 검사 결과를 기다리지 않는 조기 antiviral 치료가 중요할 수 있다.",
    transmission: "호흡기 입자와 밀접 접촉으로 전파되며 계절 유행을 보인다.", diseases: ["uncomplicated influenza", "primary viral pneumonia", "secondary bacterial pneumonia", "myositis와 neurologic complication"],
    diagnosis: "유행기 임상상과 NAAT를 중심으로 진단하며 rapid antigen 음성은 민감도 한계 때문에 배제력이 제한된다.", treatment: "중증·입원·고위험 환자는 가능한 빨리 neuraminidase inhibitor 등 권고 antiviral을 시작하고 합병증을 평가한다.", caveat: "antigenic drift 때문에 매년 유행 strain과 vaccine 구성이 달라지며 임상 증상만으로 다른 호흡기 바이러스와 구분하기 어렵다.", prevention: "매년 vaccination과 의료기관 transmission-based precautions를 적용한다.", sources: [...virusSources, "cdc-respiratory-viruses", "cdc-vaccine-preventable"],
  },
  {
    id: "respiratory-syncytial-virus", sci: "Respiratory syncytial virus", ko: "호흡기세포융합바이러스", aliases: ["RSV", "human orthopneumovirus"],
    type: "virus", category: "호흡기 바이러스", folder: "02 Viruses/01 Respiratory viruses", classification: ["Pneumoviridae", "enveloped", "negative-sense RNA"], tags: ["bronchiolitis", "infant", "older-adult", "immunocompromised"],
    summary: "모든 연령에서 재감염을 일으키는 호흡기 바이러스로 영아 bronchiolitis의 대표 원인이며, 고령자·심폐질환자·면역저하자에서는 pneumonia와 입원 위험이 높다.",
    transmission: "호흡기 분비물과 오염된 손·표면의 직접 접촉으로 전파된다.", diseases: ["infant bronchiolitis", "pneumonia", "upper respiratory infection", "older adult and immunocompromised severe disease"],
    diagnosis: "호흡기 검체 NAAT가 가장 민감하며 antigen test는 특히 성인에서 민감도가 낮을 수 있다.", treatment: "대부분 지지치료가 중심이며 고위험 면역저하 환자의 antiviral 전략은 전문 지침과 자문에 따른다.", caveat: "증상만으로 influenza·SARS-CoV-2 등과 구분할 수 없다.", prevention: "대상군별 maternal vaccine, infant monoclonal antibody 또는 adult vaccine와 접촉주의를 최신 권고에 맞춰 적용한다.", sources: [...virusSources, "cdc-respiratory-viruses"],
  },
  {
    id: "sars-cov-2", sci: "Severe acute respiratory syndrome coronavirus 2", ko: "SARS-CoV-2", aliases: ["SARS-CoV-2", "COVID-19 virus"],
    type: "virus", category: "호흡기 바이러스", folder: "02 Viruses/01 Respiratory viruses", classification: ["Coronaviridae", "enveloped", "positive-sense RNA"], tags: ["COVID-19", "pneumonia", "systemic", "post-acute"],
    summary: "COVID-19을 일으키는 enveloped RNA virus로 무증상 감염부터 상기도 감염, viral pneumonia와 systemic complication까지 나타내며 환자 위험도와 증상 시작 시점이 antiviral 적응증을 결정한다.",
    transmission: "주로 호흡기 입자와 밀접한 실내 노출을 통해 전파된다.", diseases: ["acute COVID-19", "viral pneumonia and hypoxemic respiratory failure", "thromboinflammatory complication", "post-COVID condition"],
    diagnosis: "NAAT와 antigen test를 검사 목적·증상 시점·pretest probability에 따라 선택하며 음성 antigen은 상황에 따라 반복 또는 NAAT 확인이 필요하다.", treatment: "고위험 외래 또는 입원 환자에서 최신 지침의 antiviral·면역조절 전략을 적용하고 약물상호작용과 산소요구도를 반영한다.", caveat: "변이와 면역 환경에 따라 epidemiology, 검사 성능과 치료 권고가 변하므로 최신 공중보건 지침을 확인한다.", prevention: "최신 vaccination, 환기와 상황별 마스크·격리 지침을 적용한다.", sources: [...virusSources, "cdc-respiratory-viruses"],
  },
  {
    id: "adenovirus", sci: "Human adenovirus", ko: "사람 아데노바이러스", aliases: ["adenovirus", "HAdV"],
    type: "virus", category: "호흡기 바이러스", folder: "02 Viruses/01 Respiratory viruses", classification: ["Adenoviridae", "non-enveloped", "double-stranded DNA"], tags: ["respiratory", "conjunctivitis", "gastroenteritis", "immunocompromised"],
    summary: "환경에서 비교적 안정한 non-enveloped DNA virus로 respiratory disease·pharyngoconjunctival fever·gastroenteritis·hemorrhagic cystitis를 일으키며 면역저하자에서는 disseminated disease가 가능하다.",
    transmission: "호흡기 분비물, 분변-경구, 직접 접촉과 오염된 물·표면으로 전파된다.", diseases: ["acute respiratory disease", "pharyngoconjunctival fever", "gastroenteritis", "hemorrhagic cystitis", "disseminated disease after transplant"],
    diagnosis: "질환 부위 검체의 NAAT가 유용하며 양성 결과는 장기간 shedding과 임상 질환을 구분해 해석한다.", treatment: "면역정상자는 주로 지지치료이며 중증 면역저하자는 면역회복과 전문적 antiviral 전략을 고려한다.", caveat: "무증상 또는 회복 후 shedding이 가능해 multiplex panel 양성만으로 원인 병원체를 확정하지 않는다.", prevention: "손위생, 접촉·비말주의와 수영장·기구 위생이 중요하다.", sources: [...virusSources, "cdc-respiratory-viruses"],
  },
  {
    id: "norovirus", sci: "Norovirus", ko: "노로바이러스", aliases: ["Norwalk-like virus"],
    type: "virus", category: "장관 바이러스", folder: "02 Viruses/02 Enteric viruses", classification: ["Caliciviridae", "non-enveloped", "positive-sense RNA"], tags: ["gastroenteritis", "outbreak", "foodborne", "healthcare-associated"],
    summary: "적은 접종량과 환경 안정성 때문에 병원·요양시설·학교·크루즈 등에서 폭발적 acute gastroenteritis outbreak를 일으키는 non-enveloped RNA virus다.",
    transmission: "분변-경구, 구토 aerosol, 오염 식품·물·표면과 직접 접촉으로 전파된다.", diseases: ["acute vomiting and watery diarrhea", "institutional gastroenteritis outbreak", "prolonged disease in immunocompromised hosts"],
    diagnosis: "대부분 임상·역학적으로 진단하며 outbreak 또는 중증·면역저하 환자에서는 stool NAAT를 사용할 수 있다.", treatment: "수분·전해질 보충이 중심이고 routine antiviral은 없다.", caveat: "NAAT는 증상 회복 후 shedding을 검출할 수 있어 outbreak 맥락과 증상을 함께 본다.", prevention: "비누와 물 손위생, 오염 환경의 적절한 소독, 증상 있는 식품취급자 배제와 접촉주의가 중요하다.", sources: [...virusSources, "cdc-foodborne", "cdc-infection-control"],
  },
  {
    id: "herpes-simplex-virus", sci: "Herpes simplex virus 1 and 2", ko: "단순헤르페스바이러스", aliases: ["HSV-1", "HSV-2", "herpes simplex virus"],
    type: "virus", category: "Herpesvirus", folder: "02 Viruses/03 Herpesviruses", classification: ["Herpesviridae", "enveloped", "double-stranded DNA", "latent infection"], tags: ["mucocutaneous", "genital", "encephalitis", "neonate"],
    summary: "감각신경절에 평생 잠복하는 enveloped DNA virus로 orolabial·genital lesion, keratitis, encephalitis와 neonatal 또는 disseminated infection을 일으킨다.",
    transmission: "병변 또는 무증상 shedding 중 피부·점막 접촉과 분만 중 수직 전파로 전파된다.", diseases: ["orolabial and genital herpes", "keratitis", "temporal lobe encephalitis", "neonatal herpes", "disseminated disease in immunocompromised hosts"],
    diagnosis: "활성 병변 또는 CSF의 NAAT가 중심이며 혈청검사는 과거 노출을 보여 줄 수 있으나 활성 병변 진단을 대체하지 않는다.", treatment: "질환 부위와 중증도에 따라 acyclovir 계열을 사용하며 encephalitis 또는 neonatal disease 의심 시 결과를 기다리지 않고 IV 치료를 시작한다.", caveat: "PCR 시점이 너무 이르거나 늦으면 CNS 감염에서 위음성이 가능하고 면역저하자의 지속 병변에서는 antiviral resistance를 고려한다.", prevention: "병변 시 접촉 회피, suppressive therapy의 전파 감소 효과와 임신 말기·분만 관리를 적용한다.", sources: [...virusSources, "cdc-sti-guidelines", "nih-hiv-guidelines"],
  },
  {
    id: "varicella-zoster-virus", sci: "Varicella-zoster virus", ko: "수두대상포진바이러스", aliases: ["VZV", "human herpesvirus 3"],
    type: "virus", category: "Herpesvirus", folder: "02 Viruses/03 Herpesviruses", classification: ["Herpesviridae", "enveloped", "double-stranded DNA", "latent infection"], tags: ["varicella", "zoster", "encephalitis", "vaccine-preventable"],
    summary: "초감염으로 varicella를, 감각신경절 잠복 후 재활성화로 herpes zoster를 일으키며 고령·임신·면역저하자에서 disseminated disease와 CNS·안구 합병증 위험이 커진다.",
    transmission: "varicella는 airborne와 병변 접촉으로, zoster는 주로 병변 접촉으로 전파되며 disseminated zoster는 airborne 전파가 가능하다.", diseases: ["varicella", "herpes zoster", "postherpetic neuralgia", "encephalitis·vasculopathy·retinitis", "disseminated disease"],
    diagnosis: "전형적 병변은 임상 진단이 가능하지만 비전형적·중증 질환은 병변 또는 CSF NAAT로 확인한다.", treatment: "환자 위험도와 질환 범위에 따라 oral 또는 IV antiviral을 신속히 사용하고 ophthalmic zoster는 긴급 안과 평가가 필요하다.", caveat: "면역저하자의 disseminated disease와 CNS 침범은 피부 병변이 적어도 가능하다.", prevention: "varicella와 zoster vaccination, airborne/contact precautions와 고위험 노출 후 예방을 적용한다.", sources: [...virusSources, "cdc-vaccine-preventable", "nih-hiv-guidelines"],
  },
  {
    id: "cytomegalovirus", sci: "Human cytomegalovirus", ko: "거대세포바이러스", aliases: ["CMV", "human herpesvirus 5"],
    type: "virus", category: "Herpesvirus", folder: "02 Viruses/03 Herpesviruses", classification: ["Herpesviridae", "enveloped", "double-stranded DNA", "latent infection"], tags: ["congenital", "transplant", "HIV", "retinitis"],
    summary: "평생 잠복하는 herpesvirus로 면역정상자에서는 대개 무증상 또는 mononucleosis-like illness이지만 태아와 transplant·advanced HIV 환자에서는 장기침범 질환을 일으킨다.",
    transmission: "체액, 성접촉, 수직 전파, 수혈과 이식으로 전파된다.", diseases: ["congenital CMV", "mononucleosis-like syndrome", "retinitis", "colitis·esophagitis·pneumonitis", "transplant-related CMV syndrome"],
    diagnosis: "환자군에 따라 quantitative blood NAAT, tissue histopathology, ocular fluid 또는 congenital diagnosis용 적절한 시기 검체를 사용한다.", treatment: "장기침범·선천성·이식 관련 질환은 ganciclovir 계열 등 antiviral과 면역억제 조정을 전문 지침에 따라 시행한다.", caveat: "혈중 DNAemia가 곧 tissue-invasive disease를 의미하지 않으며 골수억제·신독성과 내성을 모니터링한다.", prevention: "이식 환자의 prophylaxis 또는 preemptive monitoring과 혈액제제 전략을 위험도에 맞춰 적용한다.", sources: [...virusSources, "nih-hiv-guidelines"],
  },
  {
    id: "epstein-barr-virus", sci: "Epstein-Barr virus", ko: "엡스타인-바 바이러스", aliases: ["EBV", "human herpesvirus 4"],
    type: "virus", category: "Herpesvirus", folder: "02 Viruses/03 Herpesviruses", classification: ["Herpesviridae", "enveloped", "double-stranded DNA", "B-cell latency"], tags: ["infectious-mononucleosis", "lymphoproliferative", "oncogenic"],
    summary: "B cell에 잠복하는 herpesvirus로 infectious mononucleosis를 일으키며 면역저하자의 post-transplant lymphoproliferative disorder와 여러 lymphoma·nasopharyngeal carcinoma에 연관된다.",
    transmission: "주로 타액을 통해 전파된다.", diseases: ["infectious mononucleosis", "hepatitis and splenic enlargement", "PTLD", "EBV-associated lymphomas and carcinomas"],
    diagnosis: "heterophile antibody와 EBV-specific serology를 질병 시점에 맞춰 해석하고 면역저하자의 PTLD 위험에서는 quantitative DNA monitoring을 제한된 맥락에서 사용한다.", treatment: "단순 mononucleosis는 지지치료가 중심이며 기도폐쇄·혈액학적 합병증 또는 PTLD는 별도 전문 치료가 필요하다.", caveat: "EBV DNA 양성만으로 PTLD를 진단하지 않으며 조직 진단과 임상 맥락이 중요하다.", prevention: "비장비대 기간의 contact sport 회피와 이식 환자의 위험기반 모니터링을 적용한다.", sources: [...virusSources, "nih-hiv-guidelines"],
  },
  {
    id: "hepatitis-b-virus", sci: "Hepatitis B virus", ko: "B형간염바이러스", aliases: ["HBV"],
    type: "virus", category: "간염 바이러스", folder: "02 Viruses/04 Hepatitis viruses", classification: ["Hepadnaviridae", "enveloped", "partially double-stranded DNA", "reverse transcription"], tags: ["hepatitis", "chronic", "cirrhosis", "hepatocellular-carcinoma"],
    summary: "reverse transcription을 이용하는 DNA virus로 acute 또는 chronic hepatitis를 일으키며 cirrhosis와 hepatocellular carcinoma 위험을 높인다. 혈청 marker와 HBV DNA 조합으로 감염 단계와 치료 적응증을 판정한다.",
    transmission: "혈액·성접촉·주산기 노출로 전파된다.", diseases: ["acute hepatitis B", "chronic hepatitis B", "cirrhosis and hepatocellular carcinoma", "extrahepatic immune-complex disease", "reactivation during immunosuppression"],
    diagnosis: "HBsAg, anti-HBc IgM/total, anti-HBs와 HBV DNA를 임상 상황에 맞춰 조합하고 간손상·섬유화 정도를 평가한다.", treatment: "chronic HBV의 치료 여부는 HBV DNA, ALT, fibrosis, cirrhosis와 면역억제 계획에 따라 정하며 potent nucleos(t)ide analogue를 주로 사용한다.", caveat: "면역억제·항암치료 전 HBV screening과 reactivation prophylaxis 평가가 중요하다.", prevention: "universal vaccination, 임신부 선별과 신생아 immunoprophylaxis, 혈액·성접촉 예방을 적용한다.", sources: [...virusSources, "cdc-viral-hepatitis", "cdc-vaccine-preventable"],
  },
  {
    id: "hepatitis-c-virus", sci: "Hepatitis C virus", ko: "C형간염바이러스", aliases: ["HCV"],
    type: "virus", category: "간염 바이러스", folder: "02 Viruses/04 Hepatitis viruses", classification: ["Flaviviridae", "enveloped", "positive-sense RNA"], tags: ["hepatitis", "chronic", "cirrhosis", "direct-acting-antiviral"],
    summary: "혈액으로 전파되는 RNA virus로 만성화가 흔하고 cirrhosis와 hepatocellular carcinoma의 주요 원인이지만, direct-acting antiviral로 대부분 cure가 가능한 감염이다.",
    transmission: "주로 혈액 노출과 injection drug use로 전파되며 주산기·성접촉 전파도 가능하다.", diseases: ["acute and chronic hepatitis C", "cirrhosis and hepatocellular carcinoma", "mixed cryoglobulinemia and other extrahepatic disease"],
    diagnosis: "anti-HCV screening 양성은 HCV RNA로 active infection을 확인하고 치료 전 fibrosis, HBV/HIV coinfection과 drug interaction을 평가한다.", treatment: "pangenotypic DAA regimen을 간경변 상태·과거 치료·신기능과 상호작용에 맞춰 사용하고 치료 후 sustained virologic response를 확인한다.", caveat: "항체 양성은 과거 자연소실 또는 치료 후에도 지속되므로 active infection 판정에는 RNA가 필요하다.", prevention: "백신은 없으며 harm reduction, 안전한 주사·혈액 노출 관리와 감염자 탐지·치료가 예방의 핵심이다.", sources: [...virusSources, "cdc-viral-hepatitis"],
  },
  {
    id: "human-immunodeficiency-virus-1", sci: "Human immunodeficiency virus 1", ko: "사람면역결핍바이러스 1", aliases: ["HIV-1", "HIV"],
    type: "virus", category: "Retrovirus", folder: "02 Viruses/05 Retroviruses", classification: ["Retroviridae", "enveloped", "positive-sense RNA", "reverse transcription"], tags: ["HIV", "immunodeficiency", "opportunistic-infection", "antiretroviral-therapy"],
    summary: "CD4 T cell을 중심으로 지속 감염해 untreated 상태에서 progressive immunodeficiency와 opportunistic infection·malignancy를 유발하는 retrovirus로, 조기 진단과 지속적인 combination ART가 핵심이다.",
    transmission: "성접촉, 혈액 노출, 임신·분만·수유를 통한 수직 전파가 가능하다.", diseases: ["acute retroviral syndrome", "chronic HIV infection", "AIDS-defining opportunistic infections and malignancies", "HIV-associated organ disease"],
    diagnosis: "4세대 antigen/antibody assay와 differentiation assay, 필요 시 HIV RNA를 diagnostic algorithm에 따라 사용한다. 신생아는 항체가 아닌 virologic test가 필요하다.", treatment: "진단 후 가능한 빨리 guideline-recommended combination ART를 시작하고 resistance, coinfection, opportunistic infection과 drug interaction을 함께 관리한다.", caveat: "undetectable viral load는 성접촉 전파를 예방하지만 치료 중단 시 rebound하므로 지속 복약이 필수다.", prevention: "condom, PrEP, PEP, 안전한 주사와 임신·분만·수유 관리, U=U 원칙을 적용한다.", sources: [...virusSources, "nih-hiv-guidelines"],
  },
  {
    id: "human-papillomavirus", sci: "Human papillomavirus", ko: "사람유두종바이러스", aliases: ["HPV"],
    type: "virus", category: "피부·점막 바이러스", folder: "02 Viruses/06 Cutaneous and mucosal viruses", classification: ["Papillomaviridae", "non-enveloped", "double-stranded DNA"], tags: ["warts", "cervical-cancer", "anogenital", "vaccine-preventable"],
    summary: "피부·점막 상피를 감염하는 DNA virus군으로 low-risk type은 wart를, oncogenic high-risk type의 지속 감염은 cervical·anal·oropharyngeal 등 여러 cancer를 유발한다.",
    transmission: "주로 친밀한 피부·점막 접촉과 성접촉으로 전파된다.", diseases: ["cutaneous and anogenital warts", "cervical intraepithelial neoplasia and cancer", "anal·vulvar·vaginal·penile cancer", "oropharyngeal cancer"],
    diagnosis: "병변은 임상·조직학적으로 평가하고 cervical screening에서는 HPV test와 cytology를 연령·위험도별 algorithm에 따라 사용한다.", treatment: "virus 자체를 제거하는 systemic therapy는 없고 wart 또는 dysplasia·cancer 병변을 치료하며 screening surveillance를 지속한다.", caveat: "HPV 양성은 흔하고 대부분 자연 소실되므로 type·지속성·세포학적 이상을 함께 해석한다.", prevention: "노출 전 vaccination과 권고 screening이 가장 중요하다.", sources: [...virusSources, "cdc-sti-guidelines", "cdc-vaccine-preventable"],
  },
  {
    id: "candida-albicans", sci: "Candida albicans", ko: "칸디다 알비칸스", aliases: ["C. albicans", "Candida"],
    type: "fungus", category: "Yeast", folder: "03 Fungi/01 Yeasts", classification: ["yeast", "budding", "germ tube positive", "commensal"], tags: ["candidemia", "mucosal", "intra-abdominal", "device"],
    summary: "구강·장관·생식기 정상균총을 이루는 yeast이지만 점막장벽 손상, 광범위 항생제, 중심정맥관과 면역저하 상황에서 mucosal candidiasis부터 candidemia와 deep-seated candidiasis까지 일으킨다.",
    transmission: "대부분 자신의 정상균총에서 내인성 감염이 발생하며 의료환경 전파도 가능하다.", diseases: ["oropharyngeal and vulvovaginal candidiasis", "candidemia", "intra-abdominal candidiasis", "endocarditis·endophthalmitis·hepatosplenic disease"],
    diagnosis: "무균 검체 배양은 중요하며 candidemia에서는 species identification과 antifungal susceptibility, source 평가가 필요하다. 비무균 검체 분리는 집락화일 수 있다.", treatment: "침습 감염은 echinocandin 등으로 시작해 species·감수성·임상 안정성에 따라 조정하고 catheter와 deep focus source control을 평가한다.", caveat: "객담 Candida는 대개 집락화이며 Candida pneumonia는 매우 드물다.", prevention: "불필요한 catheter·항생제 최소화와 device bundle, 고위험군의 선택적 prophylaxis를 적용한다.", sources: ["cdc-fungal", "idsa-asm-lab-2024"],
  },
  {
    id: "candida-auris", sci: "Candida auris", ko: "칸디다 아우리스", aliases: ["C. auris"],
    type: "fungus", category: "Yeast", folder: "03 Fungi/01 Yeasts", classification: ["yeast", "healthcare-associated", "environmentally persistent", "multidrug resistant"], tags: ["candidemia", "outbreak", "infection-control", "AMR"],
    summary: "의료환경 표면에 오래 생존하고 환자 피부를 집락화하며 outbreak를 일으킬 수 있는 emerging yeast로, 오동정 가능성과 다제내성 때문에 정확한 species identification·AST·감염관리가 모두 중요하다.",
    transmission: "의료환경에서 오염된 손·기구·표면과 집락화 환자를 통해 전파된다.", diseases: ["candidemia", "wound and device-associated infection", "persistent skin colonization without invasive disease"],
    diagnosis: "validated MALDI-TOF 또는 molecular method로 확인하고 공중보건기관과 연계한다. 비무균 부위 양성은 감염이 아니라 집락화일 수 있다.", treatment: "침습 감염은 일반적으로 echinocandin을 우선 고려하되 AST와 임상 반응에 따라 조정한다.", caveat: "집락화에는 antifungal treatment를 하지 않지만 감염관리 조치는 필요하다.", prevention: "접촉주의, 환자·환경 screening, 환경소독제 선택과 시설 간 정보 전달이 핵심이다.", sources: ["cdc-fungal", "idsa-asm-lab-2024", "cdc-infection-control"],
  },
  {
    id: "aspergillus-fumigatus", sci: "Aspergillus fumigatus", ko: "아스페르길루스 푸미가투스", aliases: ["A. fumigatus", "Aspergillus"],
    type: "fungus", category: "Mold", folder: "03 Fungi/02 Molds", classification: ["septate mold", "acute-angle branching hyphae", "airborne conidia"], tags: ["invasive-aspergillosis", "neutropenia", "transplant", "allergic"],
    summary: "공기 중 conidia를 흡입해 질환을 일으키는 mold로, 숙주 면역상태에 따라 allergic bronchopulmonary aspergillosis·aspergilloma·chronic pulmonary disease 또는 angioinvasive aspergillosis로 나타난다.",
    transmission: "환경의 공기 중 conidia 흡입이 주 경로이며 일반적인 사람 간 전파는 없다.", diseases: ["invasive pulmonary aspergillosis", "disseminated and CNS aspergillosis", "chronic pulmonary aspergillosis and aspergilloma", "allergic bronchopulmonary aspergillosis"],
    diagnosis: "고위험 숙주에서 CT, serum/BAL galactomannan, fungal culture와 histopathology를 조합하며 host factor와 pretest probability가 중요하다.", treatment: "침습 감염은 mold-active azole 또는 상황별 대체제를 신속히 시작하고 면역회복·수술 가능성을 평가한다.", caveat: "호흡기 배양 양성은 colonization일 수 있고 azole resistance와 drug interaction·therapeutic drug monitoring을 고려한다.", prevention: "고위험 병동의 공기관리, 건설노출 통제와 선택적 prophylaxis를 적용한다.", sources: ["cdc-fungal", "idsa-asm-lab-2024"],
  },
  {
    id: "cryptococcus-neoformans-gattii", sci: "Cryptococcus neoformans and Cryptococcus gattii", ko: "크립토코쿠스", aliases: ["C. neoformans", "C. gattii", "Cryptococcus"],
    type: "fungus", category: "Yeast", folder: "03 Fungi/01 Yeasts", classification: ["encapsulated yeast", "environmental", "neurotropic"], tags: ["meningitis", "HIV", "transplant", "intracranial-pressure"],
    summary: "피막을 가진 환경 yeast로 폐감염과 subacute meningitis를 일으키며 advanced HIV·transplant 등 세포면역 저하에서 disseminated disease가 흔하다. CNS 감염에서는 반복적인 intracranial pressure 관리가 치료 성패에 중요하다.",
    transmission: "환경 propagule 흡입이 주 경로이고 사람 간 전파는 일반적이지 않다.", diseases: ["cryptococcal meningitis", "pulmonary cryptococcosis", "disseminated skin·bone·prostate disease"],
    diagnosis: "serum과 CSF cryptococcal antigen, fungal culture와 lumbar puncture opening pressure를 평가한다.", treatment: "CNS 또는 중증 질환은 amphotericin-based induction과 flucytosine, 이후 azole consolidation·maintenance를 단계적으로 시행한다.", caveat: "fungal burden 감소와 별개로 elevated intracranial pressure를 적극적으로 관리해야 하며 조기 steroid는 일반적으로 권장되지 않는다.", prevention: "advanced HIV에서 antigen screening과 신속한 ART 연계·적절한 치료 시점을 지침에 따라 적용한다.", sources: ["cdc-fungal", "idsa-asm-lab-2024", "nih-hiv-guidelines"],
  },
  {
    id: "pneumocystis-jirovecii", sci: "Pneumocystis jirovecii", ko: "폐포자충", aliases: ["P. jirovecii", "PCP", "PJP"],
    type: "fungus", category: "Atypical fungi", folder: "03 Fungi/03 Atypical fungi", classification: ["fungus", "unculturable by routine methods", "opportunistic"], tags: ["pneumonia", "HIV", "steroid", "hypoxemia"],
    summary: "routine culture가 되지 않는 opportunistic fungus로 CD4 저하, prolonged corticosteroid와 transplant 환자에서 subacute dyspnea·dry cough·hypoxemia를 동반한 diffuse pneumonia를 일으킨다.",
    transmission: "공기 전파 가능성이 제시되지만 임상적으로는 숙주 면역저하가 가장 중요한 위험요인이다.", diseases: ["Pneumocystis pneumonia", "rare extrapulmonary disease"],
    diagnosis: "induced sputum 또는 BAL의 PCR·direct fluorescent staining과 serum beta-D-glucan을 임상·영상 소견과 함께 해석한다.", treatment: "TMP-SMX가 기본이며 중등도-중증 hypoxemia에서는 적절한 시기의 adjunctive corticosteroid를 고려한다.", caveat: "PCR 양성은 낮은 burden의 colonization일 수 있어 정량값과 숙주·영상·산소화를 함께 평가한다.", prevention: "HIV CD4와 면역억제 강도에 따른 primary·secondary prophylaxis를 시행한다.", sources: ["cdc-fungal", "idsa-asm-lab-2024", "nih-hiv-guidelines"],
  },
  {
    id: "mucorales", sci: "Mucorales", ko: "털곰팡이목", aliases: ["mucormycosis", "Mucor", "Rhizopus"],
    type: "fungus", entityKind: "clinical_group", category: "Mold", folder: "05 Clinical Groups", classification: ["broad pauciseptate hyphae", "right-angle branching", "angioinvasive molds"], tags: ["mucormycosis", "diabetes", "neutropenia", "surgical-emergency"],
    summary: "broad pauciseptate hyphae를 보이는 angioinvasive mold군으로 uncontrolled diabetes와 ketoacidosis, neutropenia, transplant 또는 trauma에서 rhino-orbital-cerebral·pulmonary·cutaneous mucormycosis를 일으킨다.",
    transmission: "환경 포자 흡입 또는 오염된 상처로 유입된다.", diseases: ["rhino-orbital-cerebral mucormycosis", "pulmonary mucormycosis", "cutaneous and gastrointestinal disease", "disseminated infection"],
    diagnosis: "응급 tissue biopsy의 histopathology와 fungal culture가 핵심이며 영상으로 침범 범위를 신속히 평가한다.", treatment: "지체 없는 광범위 surgical debridement, liposomal amphotericin B와 기저 위험요인 교정을 함께 시행한다.", caveat: "voriconazole은 Mucorales에 활성이 없으며 혈청 biomarker 음성으로 배제할 수 없다.", prevention: "고위험 숙주의 건설·먼지 노출과 오염 상처를 관리하고 breakthrough infection에서 prophylaxis spectrum을 검토한다.", sources: ["cdc-fungal", "idsa-asm-lab-2024"],
  },
  {
    id: "plasmodium-falciparum", sci: "Plasmodium falciparum", ko: "열대열원충", aliases: ["P. falciparum", "falciparum malaria"],
    type: "protozoan", category: "혈액 원충", folder: "04 Parasites/01 Protozoa", classification: ["Apicomplexa", "intraerythrocytic protozoan", "mosquito-borne"], tags: ["malaria", "fever-travel", "hemolysis", "medical-emergency"],
    summary: "Anopheles mosquito가 전파하는 intraerythrocytic protozoan으로 높은 parasitemia, cerebral malaria, severe anemia, acidosis와 multiorgan failure를 일으킬 수 있어 여행력이 있는 발열 환자에서 즉시 배제해야 하는 응급 병원체다.",
    transmission: "감염된 Anopheles mosquito bite가 주 경로이며 드물게 수혈·주사·수직 전파가 가능하다.", diseases: ["uncomplicated malaria", "cerebral malaria", "severe anemia and hemoglobinuria", "acidosis·AKI·ARDS and multiorgan failure"],
    diagnosis: "thick and thin blood smear를 즉시 시행해 종과 parasitemia를 평가하고 초기 음성이어도 의심이 높으면 반복한다. rapid diagnostic test는 smear를 완전히 대체하지 않는다.", treatment: "중증 malaria는 즉시 IV artesunate를 사용하고 uncomplicated disease는 여행지 내성 패턴과 최신 지침에 따른 combination therapy를 선택한다.", caveat: "치료를 검사 지연 때문에 미루지 말고 exchange transfusion은 routine 권고가 아니다.", prevention: "여행지별 chemoprophylaxis, mosquito avoidance와 신속한 post-travel 평가를 시행한다.", sources: ["cdc-dpdx", "who-malaria", "idsa-asm-lab-2024"],
  },
  {
    id: "toxoplasma-gondii", sci: "Toxoplasma gondii", ko: "톡소포자충", aliases: ["T. gondii", "toxoplasma"],
    type: "protozoan", category: "조직 원충", folder: "04 Parasites/01 Protozoa", classification: ["Apicomplexa", "obligate intracellular protozoan", "tissue cyst"], tags: ["congenital", "HIV", "encephalitis", "ocular"],
    summary: "고양이가 definitive host인 obligate intracellular protozoan으로 면역정상자에서는 대개 무증상이지만 임신 중 초감염은 congenital toxoplasmosis를, advanced HIV에서는 다발성 뇌병변 encephalitis를 일으킨다.",
    transmission: "덜 익힌 고기의 tissue cyst, 토양·고양이 분변의 oocyst와 태반을 통해 감염된다.", diseases: ["asymptomatic or mononucleosis-like infection", "congenital toxoplasmosis", "toxoplasmic encephalitis", "chorioretinitis"],
    diagnosis: "IgG/IgM과 avidity를 임신 시점에 맞춰 해석하고 CNS disease는 영상·혈청상태·치료반응, 필요 시 CSF PCR을 조합한다.", treatment: "중증·안구·선천성·CNS 질환은 pyrimethamine 기반 또는 대체 regimen을 전문 지침에 따라 사용하고 HIV에서는 maintenance가 필요할 수 있다.", caveat: "IgM은 장기간 지속되거나 위양성이 가능해 임신부에서 단일 검사로 감염 시점을 확정하지 않는다.", prevention: "육류 충분히 가열, 토양·고양이 분변 노출 예방과 고위험 HIV 환자의 prophylaxis를 적용한다.", sources: ["cdc-dpdx", "nih-hiv-guidelines", "idsa-asm-lab-2024"],
  },
  {
    id: "giardia-duodenalis", sci: "Giardia duodenalis", ko: "람블편모충", aliases: ["G. duodenalis", "G. lamblia", "Giardia"],
    type: "protozoan", category: "장관 원충", folder: "04 Parasites/01 Protozoa", classification: ["flagellated protozoan", "cyst and trophozoite", "fecal-oral"], tags: ["diarrhea", "malabsorption", "waterborne", "daycare"],
    summary: "소량의 cyst 섭취로 감염되는 장관 원충으로 foul-smelling greasy diarrhea, bloating과 malabsorption을 일으키며 오염된 물·daycare·밀접 접촉과 연관된다.",
    transmission: "분변-경구, 오염된 물·음식과 사람 간 접촉으로 전파된다.", diseases: ["acute or chronic watery diarrhea", "steatorrhea and malabsorption", "post-infectious symptoms"],
    diagnosis: "stool antigen 또는 NAAT가 유용하며 microscopy는 여러 날 검체가 필요할 수 있다.", treatment: "tinidazole, metronidazole 또는 nitazoxanide 등을 환자 요인에 맞춰 사용하고 재감염·복약·면역결핍을 평가한다.", caveat: "치료 후 지속 증상은 약제 실패뿐 아니라 lactose intolerance와 post-infectious syndrome일 수 있다.", prevention: "안전한 물, 손위생과 수영장·daycare 분변 오염 관리를 시행한다.", sources: ["cdc-dpdx", "idsa-asm-lab-2024"],
  },
  {
    id: "entamoeba-histolytica", sci: "Entamoeba histolytica", ko: "이질아메바", aliases: ["E. histolytica", "amebiasis"],
    type: "protozoan", category: "장관 원충", folder: "04 Parasites/01 Protozoa", classification: ["amoeba", "cyst and trophozoite", "invasive colonic protozoan"], tags: ["dysentery", "liver-abscess", "travel", "fecal-oral"],
    summary: "대장 점막을 침범해 bloody diarrhea를 일으키고 portal circulation을 통해 amoebic liver abscess를 형성할 수 있는 원충으로, 비병원성 Entamoeba와 정확히 구분해야 한다.",
    transmission: "성숙 cyst의 분변-경구 섭취와 일부 성접촉으로 전파된다.", diseases: ["amoebic colitis and dysentery", "amoebic liver abscess", "rare pleuropulmonary or cerebral spread"],
    diagnosis: "stool antigen 또는 species-specific NAAT가 microscopy보다 E. dispar 구분에 유리하며 liver abscess는 영상과 serology를 조합한다.", treatment: "침습 질환은 tissue-active agent 후 반드시 luminal agent를 이어서 사용한다.", caveat: "microscopy만으로 E. histolytica와 비병원성 종을 신뢰성 있게 구분하기 어렵고 steroid 오투여는 fulminant colitis를 악화시킬 수 있다.", prevention: "안전한 물·음식, 손위생과 분변 노출을 줄이는 성행동이 중요하다.", sources: ["cdc-dpdx", "idsa-asm-lab-2024"],
  },
  {
    id: "strongyloides-stercoralis", sci: "Strongyloides stercoralis", ko: "분선충", aliases: ["S. stercoralis", "strongyloides"],
    type: "helminth", category: "선충", folder: "04 Parasites/02 Helminths", classification: ["nematode", "soil-transmitted", "autoinfection"], tags: ["eosinophilia", "steroid", "hyperinfection", "gram-negative-sepsis"],
    summary: "피부를 침투하고 autoinfection으로 수십 년 지속할 수 있는 장내 선충으로, corticosteroid 또는 HTLV-1 관련 면역저하에서 hyperinfection과 disseminated strongyloidiasis를 일으켜 치명적 Gram-negative sepsis를 동반할 수 있다.",
    transmission: "오염 토양의 filariform larva가 피부를 관통해 감염된다.", diseases: ["asymptomatic chronic infection", "abdominal and pulmonary symptoms", "larva currens", "hyperinfection and disseminated strongyloidiasis"],
    diagnosis: "stool larva 검출은 민감도가 낮아 반복 검사·농축법 또는 serology를 사용하며 hyperinfection에서는 호흡기 검체에서도 larva가 보일 수 있다.", treatment: "ivermectin이 기본이며 hyperinfection은 면역억제를 줄이고 stool/sputum 음전까지 연장 치료한다.", caveat: "eosinophilia가 없다고 배제할 수 없고 고위험 지역 노출자는 steroid 시작 전 screening 또는 empiric strategy를 고려한다.", prevention: "토양 접촉 시 신발 착용, 위생 개선과 면역억제 전 위험 평가가 중요하다.", sources: ["cdc-dpdx", "idsa-asm-lab-2024"],
  },
  {
    id: "taenia-solium", sci: "Taenia solium", ko: "갈고리촌충", aliases: ["T. solium", "pork tapeworm"],
    type: "helminth", category: "조충", folder: "04 Parasites/02 Helminths", classification: ["cestode", "human definitive and accidental intermediate host", "tissue cyst"], tags: ["taeniasis", "neurocysticercosis", "seizure", "foodborne"],
    summary: "덜 익힌 돼지고기의 cysticercus를 먹으면 장내 taeniasis가, 사람 분변의 egg를 섭취하면 tissue cysticercosis가 발생하는 조충으로 neurocysticercosis는 세계적으로 중요한 후천성 seizure 원인이다.",
    transmission: "taeniasis는 돼지고기 cyst, cysticercosis는 사람 보균자가 배출한 egg의 분변-경구 섭취로 발생한다.", diseases: ["intestinal taeniasis", "parenchymal neurocysticercosis", "intraventricular or subarachnoid cysticercosis", "ocular and muscular cysticercosis"],
    diagnosis: "taeniasis는 stool egg/proglottid를, neurocysticercosis는 CT/MRI와 confirmatory serology를 병변 단계·위치와 함께 평가한다.", treatment: "장내 감염과 CNS 질환의 치료가 다르며 neurocysticercosis는 antiparasitic therapy 전 안과검사, edema control과 seizure management를 계획한다.", caveat: "intraventricular·subarachnoid·ocular disease에서는 antiparasitic 시작이 위험할 수 있어 전문가와 수술 전략을 우선 검토한다.", prevention: "육류 충분히 가열, 위생·분변관리와 taeniasis 환자 치료가 cysticercosis 예방의 핵심이다.", sources: ["cdc-dpdx", "idsa-asm-lab-2024"],
  },
  {
    id: "sarcoptes-scabiei", sci: "Sarcoptes scabiei var. hominis", ko: "옴진드기", aliases: ["Sarcoptes scabiei", "scabies mite"],
    type: "ectoparasite", category: "외부기생충", folder: "04 Parasites/03 Ectoparasites", classification: ["mite", "obligate human ectoparasite", "skin burrow"], tags: ["scabies", "pruritus", "crusted-scabies", "outbreak"],
    summary: "각질층에 굴을 파는 사람 외부기생충으로 야간 소양감과 전형적 분포의 papule·burrow를 일으키며, crusted scabies는 mite burden과 전염력이 매우 높아 시설 outbreak의 핵심 원인이 된다.",
    transmission: "지속적인 피부 접촉이 주 경로이고 crusted scabies에서는 의복·침구 등 간접 전파도 중요하다.", diseases: ["classic scabies", "nodular scabies", "crusted scabies", "secondary bacterial skin infection"],
    diagnosis: "전형적 임상 분포와 접촉력을 바탕으로 dermoscopy 또는 skin scraping microscopy로 mite·egg·scybala를 확인할 수 있다.", treatment: "topical permethrin 또는 oral ivermectin을 환자군과 중증도에 맞춰 사용하며 crusted disease는 병합·반복 치료가 필요하다.", caveat: "치료 후 소양감은 수주 지속할 수 있어 곧바로 실패로 보지 않되 새로운 burrow와 접촉자 미치료를 확인한다.", prevention: "가구·밀접 접촉자를 동시에 치료하고 세탁·환경관리와 시설 contact precautions를 적용한다.", sources: ["cdc-dpdx", "cdc-infection-control"],
  },
];

function yamlList(values) {
  return values.length ? values.map((value) => `- ${value}`).join("\n") : "[]";
}

function makeNote(item) {
  const kind = item.entityKind ?? "organism";
  const sourceIds = item.sources;
  const title = item.ko === item.sci ? item.ko : `${item.ko} (${item.sci})`;
  const sources = sourceIds.map((id) => {
    const source = [...newSources, ...JSON.parse(fs.readFileSync(sourcesPath, "utf8")).sources].find((entry) => entry.id === id);
    return source ? `- [${source.label}](${source.url})` : `- ${id}`;
  }).join("\n");
  return `---
microbiology_id: ${item.id}
entity_type: microorganism
entity_kind: ${kind}
pathogen_type: ${item.type}
scientific_name: ${item.sci}
korean_name: ${item.ko}
taxonomic_rank: ${kind === "organism" ? "species" : "clinical_group"}
taxonomy_ids: []
aliases:
${yamlList(item.aliases)}
classification:
${yamlList(item.classification)}
clinical_tags:
${yamlList(item.tags)}
spectrum_ids: []
source_ids:
${yamlList(sourceIds)}
review_status: source_checked
reviewed_at: ${reviewedAt}
---

# ${title}

> [!summary]
> ${item.summary}

## 동정 및 분류

${item.classification.map((value) => `- \`${value}\``).join("\n")}
- 분류명과 병원체명은 공식 taxonomy 자료를 우선하며, 임상군은 실제 진단·치료 의사결정에 유용한 범위로 묶는다.

## 저장소와 전파

- ${item.transmission}
- 역학적 노출과 숙주 상태를 검사 전 확률에 함께 반영한다.

## 병원성 및 병태생리

- 감염 여부와 중증도는 병원체의 virulence뿐 아니라 감염 부위, inoculum, 숙주 면역과 해부학적 장벽에 좌우된다.
- 비무균 부위 검출은 집락화·오염·질환 가능성을 검체 품질과 임상상으로 구분한다.

## 임상 정보

#### 주요 감염질환

${item.diseases.map((value) => `- ${value}`).join("\n")}

#### 고위험 상황

- 면역저하, 장기·해부학적 장벽 손상, invasive device와 의료노출 여부를 확인한다.
- 중증 또는 비전형적 경과에서는 dissemination, 합병증과 source control 필요성을 재평가한다.

## 진단

- ${item.diagnosis}
- 검사 결과는 검체 종류, 채취 시점, 선행 항균치료와 임상 증후군을 함께 고려해 해석한다.

## 치료 원칙

- ${item.treatment}
- 정확한 약제·용량·기간은 감염 부위, 중증도, 숙주 상태, 장기기능과 최신 지침을 기준으로 결정한다.

## 내성 및 치료 실패

- ${item.caveat}
- 예상보다 반응이 나쁘면 오진, 부적절한 검체, 약물노출, 내성, deep focus와 source control 실패를 순서대로 재평가한다.

## 감염관리 및 예방

- ${item.prevention}
- 신고·접촉자 조사·격리 여부는 지역 공중보건 규정과 기관 감염관리 지침을 따른다.

## 비고

- 이 문서는 임상적 핵심을 정리한 참조 자료이며 개별 환자의 진단·치료 지침을 대체하지 않는다.

## 출처

${sources}
`;
}

const sourceDataset = JSON.parse(fs.readFileSync(sourcesPath, "utf8"));
for (const source of newSources) {
  const index = sourceDataset.sources.findIndex((item) => item.id === source.id);
  if (index >= 0) sourceDataset.sources[index] = source;
  else sourceDataset.sources.push(source);
}
sourceDataset.reviewedAt = reviewedAt;
fs.writeFileSync(sourcesPath, `${JSON.stringify(sourceDataset, null, 2)}\n`, "utf8");

const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));
for (const item of definitions) {
  const relativePath = `${item.folder}/${item.ko} (${item.sci}).md`;
  const entry = {
    id: item.id,
    entityKind: item.entityKind ?? "organism",
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
    sourceIds: item.sources,
    reviewStatus: "source_checked",
    reviewedAt,
  };
  const index = registry.entities.findIndex((candidate) => candidate.id === item.id);
  if (index >= 0) registry.entities[index] = entry;
  else registry.entities.push(entry);
  const notePath = path.join(microRoot, relativePath);
  fs.mkdirSync(path.dirname(notePath), { recursive: true });
  fs.writeFileSync(notePath, makeNote(item), "utf8");
}
registry.reviewedAt = reviewedAt;
fs.writeFileSync(registryPath, `${JSON.stringify(registry, null, 2)}\n`, "utf8");
console.log(`Microbiology registry expanded by ${definitions.length} clinical-core entities (${registry.entities.length} total).`);
