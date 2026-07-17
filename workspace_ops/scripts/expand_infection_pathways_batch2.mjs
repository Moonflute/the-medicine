import fs from "node:fs";

const sourcePath = "source_notes/02 Diseases/08 감염/_data/infection-pathways.json";
const data = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const reviewedAt = "2026-07-18";

const sources = [
  { id: "idsa-cdi-2021", label: "SHEA/IDSA Clostridioides difficile Focused Update", url: "https://www.idsociety.org/practice-guideline/clostridioides-difficile-2021-focused-update/", tier: "A", year: "2021" },
  { id: "acg-cdi-2021", label: "ACG Clinical Guideline for Clostridioides difficile Infection", url: "https://pubmed.ncbi.nlm.nih.gov/34003176/", tier: "B", year: "2021" },
  { id: "iwgdf-idsa-dfi-2023", label: "IWGDF/IDSA Diabetes-Related Foot Infection Guideline", url: "https://www.idsociety.org/practice-guideline/diabetic-foot-infections/", tier: "A", year: "2023" },
  { id: "nice-dfi-2019", label: "NICE NG19 Diabetic Foot Infection", url: "https://www.nice.org.uk/guidance/ng19/chapter/Recommendations", tier: "A", year: "2019" },
  { id: "idsa-abrs-2012", label: "IDSA Acute Bacterial Rhinosinusitis Guideline", url: "https://www.idsociety.org/practice-guideline/rhinosinusitis/", tier: "A", year: "2012" },
  { id: "nice-sinusitis-2017", label: "NICE NG79 Acute Sinusitis Antimicrobial Prescribing", url: "https://www.nice.org.uk/guidance/ng79/chapter/Recommendations", tier: "A", year: "2017" },
  { id: "aap-aom-2013", label: "AAP Diagnosis and Management of Acute Otitis Media", url: "https://publications.aap.org/pediatrics/article/131/3/e964/30912/The-Diagnosis-and-Management-of-Acute-Otitis-Media", tier: "A", year: "2013" },
  { id: "nice-aom-2022", label: "NICE NG91 Acute Otitis Media Antimicrobial Prescribing", url: "https://www.nice.org.uk/guidance/ng91", tier: "A", year: "2022" },
  { id: "nice-bites-2020", label: "NICE NG184 Human and Animal Bites Antimicrobial Prescribing", url: "https://www.nice.org.uk/guidance/ng184/chapter/Recommendations", tier: "A", year: "2020" },
  { id: "cdc-pid-2021", label: "CDC Pelvic Inflammatory Disease Treatment Guideline", url: "https://www.cdc.gov/std/treatment-guidelines/pid.htm", tier: "A", year: "2021" },
  { id: "bashh-pid-2019", label: "BASHH Pelvic Inflammatory Disease Guideline", url: "https://www.bashh.org/resources/6/pid_2019/", tier: "A", year: "2019" },
  { id: "nice-diverticulitis-2019", label: "NICE NG147 Diverticular Disease Guideline", url: "https://www.nice.org.uk/guidance/ng147/chapter/Recommendations", tier: "A", year: "2019" },
  { id: "aga-diverticulitis-2021", label: "AGA Clinical Practice Update on Colonic Diverticulitis", url: "https://gastro.org/clinical-guidance/medical-management-of-colonic-diverticulitis/", tier: "B", year: "2021" },
];

const pathogens = [
  { id: "c_difficile", label: "Clostridioides difficile", aliases: ["C. difficile", "CDI"], spectrumOrganismId: "clostridia" },
  { id: "moraxella_catarrhalis", label: "Moraxella catarrhalis", aliases: ["M. catarrhalis"] },
  { id: "pasteurella_multocida", label: "Pasteurella multocida", aliases: ["P. multocida"] },
  { id: "capnocytophaga", label: "Capnocytophaga spp.", aliases: ["Capnocytophaga"] },
  { id: "eikenella", label: "Eikenella corrodens", aliases: ["E. corrodens"] },
  { id: "c_trachomatis", label: "Chlamydia trachomatis", aliases: ["C. trachomatis", "chlamydia"] },
  { id: "m_genitalium", label: "Mycoplasma genitalium", aliases: ["M. genitalium"] },
];

const component = (antibioticIds, selection = "one-of") => ({ antibioticIds, selection });
const regimen = (id, context, rank, components, sourceIds, conditions = [], avoidWhen = [], notes = []) => ({ id, context, rank, components, conditions, avoidWhen, notes, sourceIds });
const quiz = (id, type, prompt, choiceIds, correctId, explanation, sourceIds) => ({ id, type, prompt, choiceIds, correctId, explanation, sourceIds });
const pathogen = (organismId, likelihood, notes = []) => ({ organismId, likelihood, notes });
const base = (value) => ({
  aliases: [],
  severity: ["outpatient", "inpatient"],
  exclusions: [],
  sourceControlNotes: [],
  stewardshipNotes: [],
  targetedTherapies: [],
  quizQuestions: [],
  reviewStatus: "verified",
  reviewedBy: "Codex official-guideline cross-check",
  reviewedAt,
  ...value,
});

const pathways = [
  base({
    id: "adult-clostridioides-difficile-infection",
    displayName: "성인 Clostridioides difficile infection",
    aliases: ["CDI", "C. difficile colitis", "거짓막 결장염"],
    diseaseSourceFile: "08 감염/거짓막 결장염 (Pseudomembranous Colitis).md",
    infectionSite: "gastrointestinal",
    setting: "healthcare-associated",
    population: ["adult", "immunocompromised"],
    severity: ["nonsevere", "severe", "fulminant", "recurrent"],
    exclusions: ["asymptomatic-colonization", "formed-stool-testing"],
    diagnosticNotes: [
      "임상적으로 의미 있는 새 설사가 있는 환자에서만 독소 또는 다단계 검사를 시행하고 무증상 보균과 test of cure는 피한다.",
      "백혈구 수, creatinine, 저혈압·ileus·toxic megacolon을 확인해 nonsevere, severe, fulminant disease를 구분한다.",
    ],
    sourceControlNotes: ["가능하면 유발 항생제를 중단하고 접촉주의, 비누와 물 손위생, 환경 포자 제거를 함께 시행한다."],
    stewardshipNotes: ["초기 임상 반응만으로 치료를 조기 중단하지 않으며, 재발에서는 이전 치료와 재발 위험을 반영한다.", "경구 vancomycin과 IV vancomycin은 CDI에서 서로 대체되지 않는다."],
    pathogenGroups: [{ context: "toxin-mediated-colitis", organisms: [pathogen("c_difficile", "common")] }],
    empiricRegimens: [
      regimen("cdi-initial-fidaxomicin", "initial-nonfulminant-episode", "preferred", [component(["fidaxomicin"])], ["idsa-cdi-2021", "acg-cdi-2021"], ["검사로 확인된 초기 nonfulminant CDI"], [], ["자원과 접근성을 고려하며 경구 vancomycin도 허용 가능한 대안이다."]),
      regimen("cdi-initial-oral-vancomycin", "initial-nonfulminant-episode", "alternative", [component(["vancomycin"])], ["idsa-cdi-2021", "acg-cdi-2021"], ["fidaxomicin 사용이 어렵거나 적절하지 않음"], [], ["반드시 경구 또는 위장관 내 투여 경로를 사용한다."]),
      regimen("cdi-fulminant", "fulminant-disease", "preferred", [component(["vancomycin"], "all-of"), component(["metronidazole"], "optional")], ["idsa-cdi-2021", "acg-cdi-2021"], ["저혈압, shock, ileus 또는 megacolon"], ["fidaxomicin 단독으로 fulminant CDI를 치료"], ["고용량 경구/비위관 vancomycin을 사용하며 ileus가 있으면 직장 투여와 IV metronidazole을 검토하고 조기 수술 자문을 시행한다."]),
    ],
    sourceIds: ["idsa-cdi-2021", "acg-cdi-2021"],
    quizQuestions: [quiz("cdi-initial-drug", "disease-to-antibiotic", "초기 nonfulminant CDI에서 지속 임상반응을 고려해 우선 제안되는 약물은?", ["fidaxomicin", "metronidazole", "ceftriaxone", "ciprofloxacin"], "fidaxomicin", "IDSA/SHEA는 초기 CDI에서 fidaxomicin을 경구 vancomycin보다 우선 제안하며, vancomycin도 허용 가능한 대안이다.", ["idsa-cdi-2021", "acg-cdi-2021"])],
  }),
  base({
    id: "adult-diabetes-related-foot-infection",
    displayName: "성인 diabetes-related foot infection",
    aliases: ["diabetic foot infection", "DFI", "당뇨병성 족부감염"],
    diseaseSourceFile: "04 내분비/당뇨병성 족부질환.md",
    infectionSite: "diabetic-foot",
    setting: "mixed",
    population: ["adult", "immunocompromised"],
    severity: ["mild", "moderate", "severe", "osteomyelitis-suspected"],
    exclusions: ["clinically-uninfected-ulcer"],
    diagnosticNotes: [
      "국소 또는 전신 염증 소견으로 감염을 임상 진단하고 IWGDF/IDSA 기준으로 중증도를 분류한다.",
      "가능하면 세척 후 표재 swab보다 무균적으로 채취한 tissue specimen을 배양한다.",
      "골수염이 의심되면 probe-to-bone, 단순 X-ray와 염증표지자를 먼저 평가하고 불확실하면 MRI와 bone culture를 고려한다.",
    ],
    sourceControlNotes: ["괴사조직 debridement, 배농, pressure off-loading, 혈류 평가와 필요 시 revascularization을 항생제와 병행한다."],
    stewardshipNotes: ["임상적으로 감염되지 않은 ulcer에는 치유 촉진이나 예방 목적으로 항생제를 투여하지 않는다.", "배양 결과가 나오면 감염 중증도와 조직 침범 범위에 맞춰 좁은 spectrum으로 전환한다."],
    pathogenGroups: [
      { context: "mild-acute-infection", organisms: [pathogen("mssa", "common"), pathogen("streptococci", "common"), pathogen("mrsa", "risk-factor-dependent")] },
      { context: "chronic-moderate-severe-or-previously-treated", organisms: [pathogen("enterobacterales", "important"), pathogen("b_fragilis", "important"), pathogen("pseudomonas", "risk-factor-dependent")] },
    ],
    empiricRegimens: [
      regimen("dfi-mild-gram-positive", "mild-without-resistant-pathogen-risk", "preferred", [component(["cephalexin", "flucloxacillin", "amoxicillinclavulanate"])], ["iwgdf-idsa-dfi-2023", "nice-dfi-2019"], ["표재성 mild infection, 최근 항생제 노출과 MDR 위험 없음"], ["임상적으로 감염되지 않은 ulcer"], ["주로 streptococci와 S. aureus를 표적한다."]),
      regimen("dfi-moderate-severe", "moderate-or-severe-polymicrobial-risk", "preferred", [component(["ampicillinsulbactam", "piperacillintazobactam", "ertapenem"])], ["iwgdf-idsa-dfi-2023", "nice-dfi-2019"], ["깊은 조직 침범, chronic wound, 허혈, 괴사 또는 전신 소견"], [], ["중증이면 수술 평가와 배양을 지연하지 않는다."]),
      regimen("dfi-add-mrsa-coverage", "validated-mrsa-risk", "conditional", [component(["vancomycin", "linezolid", "daptomycin"])], ["iwgdf-idsa-dfi-2023", "nice-dfi-2019"], ["MRSA 과거력, 최근 보균·감염 또는 지역 역학상 의미 있는 위험"], ["구체적 위험 없이 모든 mild DFI에 routine MRSA coverage"], []),
    ],
    sourceIds: ["iwgdf-idsa-dfi-2023", "nice-dfi-2019"],
    quizQuestions: [quiz("dfi-mild-pathogen", "disease-to-organism", "최근 항생제 노출이 없는 mild diabetic foot infection에서 우선 표적해야 할 균은?", ["mssa", "pseudomonas", "cre", "b_fragilis"], "mssa", "Mild DFI에서는 beta-hemolytic streptococci와 S. aureus가 핵심 표적이다.", ["iwgdf-idsa-dfi-2023", "nice-dfi-2019"])],
  }),
  base({
    id: "acute-bacterial-rhinosinusitis",
    displayName: "acute bacterial rhinosinusitis",
    aliases: ["ABRS", "급성 세균성 부비동염"],
    diseaseSourceFile: "17 이비인후과/급성 부비동염 (Acute sinusitis).md",
    infectionSite: "paranasal-sinus",
    setting: "community",
    population: ["adult", "pediatric"],
    severity: ["outpatient", "severe", "complicated"],
    exclusions: ["uncomplicated-viral-rhinosinusitis"],
    diagnosticNotes: ["10일 이상 호전 없이 지속, 고열과 화농성 분비물이 초기부터 지속, 또는 호전 후 재악화 중 하나일 때 세균성 가능성을 높게 본다.", "안와·두개강 합병증, 심한 전신 감염 또는 국소 신경학적 이상이 있으면 즉시 영상과 전문 진료를 시행한다."],
    stewardshipNotes: ["10일 이내의 전형적 acute viral rhinosinusitis에는 항생제를 투여하지 않는다.", "지역 내성, 최근 항생제, 연령과 중증도에 따라 고용량 또는 대체 regimen 필요성을 평가한다."],
    pathogenGroups: [{ context: "community-abrs", organisms: [pathogen("pneumococcus", "common"), pathogen("h_influenzae", "common"), pathogen("moraxella_catarrhalis", "important")] }],
    empiricRegimens: [
      regimen("abrs-first-line", "confirmed-or-highly-suspected-abrs", "preferred", [component(["amoxicillinclavulanate"])], ["idsa-abrs-2012", "nice-sinusitis-2017"], ["세균성 임상 기준 충족"], ["단순 감기 또는 10일 이내 호전 경과"], []),
      regimen("abrs-adult-beta-lactam-allergy", "adult-with-true-beta-lactam-allergy", "alternative", [component(["doxycycline"])], ["idsa-abrs-2012", "nice-sinusitis-2017"], ["비임신 성인, beta-lactam 사용 불가"], ["임신 또는 소아에서 연령·안전성 검토 없이 사용"], []),
    ],
    sourceIds: ["idsa-abrs-2012", "nice-sinusitis-2017"],
    quizQuestions: [quiz("abrs-first-line-drug", "disease-to-antibiotic", "세균성 임상 기준을 충족한 ABRS에서 대표적인 초기 경구 치료는?", ["amoxicillinclavulanate", "vancomycin", "nitrofurantoin", "metronidazole"], "amoxicillinclavulanate", "Amoxicillin/clavulanate는 pneumococcus, H. influenzae와 M. catarrhalis를 고려한 대표적인 초기 선택이다.", ["idsa-abrs-2012", "nice-sinusitis-2017"])],
  }),
  base({
    id: "pediatric-acute-otitis-media",
    displayName: "소아 acute otitis media",
    aliases: ["AOM", "급성 화농성 중이염"],
    diseaseSourceFile: "17 이비인후과/급성화농성중이염 (Acute suppurative otitis media).md",
    infectionSite: "middle-ear",
    setting: "community",
    population: ["pediatric"],
    severity: ["nonsevere", "severe", "otorrhea"],
    exclusions: ["otitis-media-with-effusion-without-acute-inflammation"],
    diagnosticNotes: ["중등도 이상의 고막 팽륜 또는 새 이류를 핵심으로 진단하며, 단순 middle-ear effusion만으로 AOM을 진단하지 않는다.", "연령, 양측성, otorrhea, 심한 이통·고열과 추적 가능성을 바탕으로 관찰과 즉시 항생제를 구분한다."],
    stewardshipNotes: ["선별된 nonsevere AOM은 48–72시간 관찰 또는 delayed prescription이 가능하다.", "최근 amoxicillin 사용, 화농성 결막염 또는 amoxicillin 불응 재발이면 beta-lactamase coverage를 강화한다."],
    pathogenGroups: [{ context: "typical-aom", organisms: [pathogen("pneumococcus", "common"), pathogen("h_influenzae", "common"), pathogen("moraxella_catarrhalis", "important")] }],
    empiricRegimens: [
      regimen("aom-amoxicillin", "antibiotic-indicated-without-beta-lactamase-risk", "preferred", [component(["amoxicillin"])], ["aap-aom-2013", "nice-aom-2022"], ["즉시 항생제 적응증이며 최근 amoxicillin 노출·결막염 없음"], [], []),
      regimen("aom-amoxicillin-clavulanate", "beta-lactamase-risk-or-amoxicillin-failure", "preferred", [component(["amoxicillinclavulanate"])], ["aap-aom-2013", "nice-aom-2022"], ["최근 amoxicillin, 화농성 결막염, 또는 적절한 amoxicillin 치료 후 불응"], [], []),
    ],
    sourceIds: ["aap-aom-2013", "nice-aom-2022"],
    quizQuestions: [quiz("aom-first-line-drug", "disease-to-antibiotic", "항생제가 필요한 uncomplicated AOM에서 최근 amoxicillin 노출과 결막염이 없다면 우선 선택은?", ["amoxicillin", "cefepime", "ciprofloxacin", "vancomycin"], "amoxicillin", "대부분의 uncomplicated AOM에서 amoxicillin이 초기 선택이며 beta-lactamase 위험이 있으면 amoxicillin/clavulanate를 고려한다.", ["aap-aom-2013", "nice-aom-2022"])],
  }),
  base({
    id: "human-or-animal-bite-wound-infection",
    displayName: "human or animal bite wound infection",
    aliases: ["dog bite", "cat bite", "human bite", "교상 감염"],
    diseaseSourceFile: "11 외과/동물 물림 (Animal Bite).md",
    infectionSite: "bite-wound",
    setting: "community",
    population: ["adult", "pediatric", "immunocompromised"],
    severity: ["prophylaxis-eligible", "infected", "deep-structure-involvement"],
    diagnosticNotes: ["동물 종류, 손·얼굴·생식기 등 고위험 위치, puncture·crush 손상, 관절·건·골 침범과 면역저하·무비장 여부를 평가한다.", "tetanus, rabies와 human bite의 혈액매개감염 위험은 항균제 선택과 별도로 평가한다."],
    sourceControlNotes: ["충분한 irrigation, 이물 제거와 필요 시 debridement를 시행하고 손상된 tendon·joint·bone은 조기 외과 평가한다."],
    stewardshipNotes: ["피부가 손상되지 않은 bite에는 예방 항생제를 사용하지 않는다.", "예방은 깊은 상처, 손·얼굴 등 고위험 부위, cat/human bite 또는 고위험 숙주에 제한한다."],
    pathogenGroups: [{ context: "polymicrobial-bite-flora", organisms: [pathogen("pasteurella_multocida", "important"), pathogen("capnocytophaga", "risk-factor-dependent"), pathogen("eikenella", "risk-factor-dependent"), pathogen("mssa", "important"), pathogen("streptococci", "important"), pathogen("oral_anaerobes", "important")] }],
    empiricRegimens: [
      regimen("bite-oral-first-line", "prophylaxis-eligible-or-mild-infection", "preferred", [component(["amoxicillinclavulanate"])], ["nice-bites-2020", "idsa-ssti-2014"], ["고위험 예방 적응증 또는 경증 감염"], [], []),
      regimen("bite-iv-severe", "severe-or-deep-structure-infection", "preferred", [component(["ampicillinsulbactam", "piperacillintazobactam"])], ["nice-bites-2020", "idsa-ssti-2014"], ["전신 중증, 심부 구조 침범 또는 경구 불가"], [], ["48시간 내 임상 반응과 경구 전환 가능성을 재평가한다."]),
      regimen("bite-penicillin-allergy", "adult-penicillin-allergy", "alternative", [component(["doxycycline"], "all-of"), component(["metronidazole"], "all-of")], ["nice-bites-2020", "idsa-ssti-2014"], ["성인에서 beta-lactam 사용 불가"], ["임신·수유·소아에서 안전성 평가 없이 적용"], []),
    ],
    sourceIds: ["nice-bites-2020", "idsa-ssti-2014"],
    quizQuestions: [quiz("bite-first-line-drug", "disease-to-antibiotic", "고위험 dog/cat bite 예방 또는 경증 감염에서 대표적인 경구 1차 약물은?", ["amoxicillinclavulanate", "cephalexin", "aztreonam", "nitrofurantoin"], "amoxicillinclavulanate", "Amoxicillin/clavulanate는 Pasteurella, streptococci, staphylococci와 anaerobes를 함께 고려한다.", ["nice-bites-2020", "idsa-ssti-2014"])],
  }),
  base({
    id: "acute-pelvic-inflammatory-disease",
    displayName: "acute pelvic inflammatory disease",
    aliases: ["PID", "골반내 감염", "골반염"],
    diseaseSourceFile: "13 부인과/골반내 감염 (Pelvic Inflammatory Disease).md",
    infectionSite: "upper-female-genital-tract",
    setting: "community",
    population: ["adult", "pregnant"],
    severity: ["outpatient-mild-moderate", "inpatient-severe", "tubo-ovarian-abscess"],
    exclusions: ["ectopic-pregnancy", "surgical-abdomen-not-excluded"],
    diagnosticNotes: ["임신을 배제하고 하복부 통증과 cervical motion, uterine 또는 adnexal tenderness 중 하나 이상이면 다른 원인이 명확하지 않을 때 낮은 threshold로 경험적 치료한다.", "gonorrhea와 chlamydia NAAT, HIV·syphilis 검사와 필요 시 M. genitalium 검사를 시행하되 음성 결과가 PID를 배제하지는 않는다."],
    sourceControlNotes: ["tubo-ovarian abscess는 입원 관찰하고 임상 반응이 없거나 파열 위험이 있으면 영상 유도 배액 또는 수술을 평가한다."],
    stewardshipNotes: ["치료 지연은 infertility, ectopic pregnancy와 chronic pelvic pain 위험을 높일 수 있다.", "환자와 성 파트너의 검사·치료가 끝나고 증상이 해소될 때까지 성접촉을 피하도록 안내한다."],
    pathogenGroups: [{ context: "polymicrobial-ascending-infection", organisms: [pathogen("n_gonorrhoeae", "important"), pathogen("c_trachomatis", "important"), pathogen("m_genitalium", "risk-factor-dependent"), pathogen("b_fragilis", "important")] }],
    empiricRegimens: [
      regimen("pid-outpatient", "mild-to-moderate-outpatient", "preferred", [component(["ceftriaxone"], "all-of"), component(["doxycycline"], "all-of"), component(["metronidazole"], "all-of")], ["cdc-pid-2021", "bashh-pid-2019"], ["외과적 응급질환이 배제되고 경구 치료·추적 가능"], ["임신, tubo-ovarian abscess, severe illness 또는 경구 불내약"], []),
      regimen("pid-inpatient", "severe-inpatient-or-tubo-ovarian-abscess", "preferred", [component(["ceftriaxone"], "all-of"), component(["doxycycline"], "all-of"), component(["metronidazole"], "all-of")], ["cdc-pid-2021", "bashh-pid-2019"], ["severe illness, 임신, abscess, 경구 불가 또는 외과적 응급질환 미배제"], [], ["임상 호전 후 경구 치료로 전환해 전체 치료 과정을 완료한다."]),
      regimen("pid-inpatient-alternative", "inpatient-alternative", "alternative", [component(["clindamycin"], "all-of"), component(["gentamicin"], "all-of")], ["cdc-pid-2021", "bashh-pid-2019"], ["표준 cephalosporin regimen 사용이 부적절"], [], ["aminoglycoside TDM과 신기능 모니터링이 필요하다."]),
    ],
    sourceIds: ["cdc-pid-2021", "bashh-pid-2019"],
    quizQuestions: [quiz("pid-outpatient-regimen", "disease-to-antibiotic", "경증-중등도 outpatient PID의 권장 병합요법에 포함되는 주사 항생제는?", ["ceftriaxone", "vancomycin", "nitrofurantoin", "fidaxomicin"], "ceftriaxone", "Outpatient PID는 ceftriaxone에 doxycycline과 metronidazole을 병합해 gonococcus, chlamydia와 anaerobes를 포괄한다.", ["cdc-pid-2021", "bashh-pid-2019"])],
  }),
  base({
    id: "adult-acute-diverticulitis",
    displayName: "성인 acute diverticulitis",
    aliases: ["급성 게실염", "acute colonic diverticulitis"],
    diseaseSourceFile: "03 소화기/위장관/게실염 (Diverticulitis).md",
    infectionSite: "colonic-intra-abdominal",
    setting: "community",
    population: ["adult", "immunocompromised"],
    severity: ["uncomplicated-systemically-well", "uncomplicated-high-risk", "complicated"],
    exclusions: ["asymptomatic-diverticulosis", "diverticular-bleeding-without-infection"],
    diagnosticNotes: ["임상 소견만으로는 정확도가 제한되므로 첫 진단, 중증·비전형 경과 또는 합병증 의심 시 contrast CT로 확인한다.", "abscess, perforation, obstruction, fistula와 sepsis 여부를 구분하고 면역저하·중요 동반질환을 확인한다."],
    sourceControlNotes: ["배액 가능한 abscess, free perforation 또는 지속 sepsis에서는 percutaneous drainage나 수술 source control을 지연하지 않는다."],
    stewardshipNotes: ["면역기능이 정상이고 전신적으로 안정된 CT-confirmed uncomplicated diverticulitis에는 항생제를 선택적으로 사용한다.", "합병증이 없고 호전되면 IV 항생제를 48시간 내 재평가해 경구 전환과 단축 치료를 고려한다."],
    pathogenGroups: [{ context: "colonic-polymicrobial-infection", organisms: [pathogen("enterobacterales", "common"), pathogen("b_fragilis", "common"), pathogen("e_faecalis", "risk-factor-dependent")] }],
    empiricRegimens: [
      regimen("diverticulitis-oral-high-risk", "uncomplicated-but-systemically-unwell-or-high-risk", "conditional", [component(["amoxicillinclavulanate"])], ["nice-diverticulitis-2019", "aga-diverticulitis-2021"], ["전신 증상, 면역저하 또는 중요한 동반질환"], ["전신적으로 안정된 low-risk uncomplicated diverticulitis에 routine 투여"], []),
      regimen("diverticulitis-complicated-iv", "complicated-or-admitted", "preferred", [component(["cefuroxime"], "all-of"), component(["metronidazole"], "all-of")], ["nice-diverticulitis-2019", "aga-diverticulitis-2021"], ["abscess, perforation, obstruction, sepsis 또는 입원 치료 필요"], [], []),
      regimen("diverticulitis-complicated-broad", "severe-or-healthcare-exposed", "conditional", [component(["piperacillintazobactam", "ertapenem"])], ["nice-diverticulitis-2019", "aga-diverticulitis-2021"], ["중증도, 최근 항생제와 resistant Enterobacterales 위험을 반영"], ["구체적 MDR 위험 없이 carbapenem을 routine 사용"], []),
    ],
    sourceIds: ["nice-diverticulitis-2019", "aga-diverticulitis-2021"],
    quizQuestions: [quiz("diverticulitis-pathogen-group", "disease-to-organism", "항생제가 필요한 complicated diverticulitis에서 핵심 Gram-negative pathogen group은?", ["enterobacterales", "pneumococcus", "mrsa", "atypicals"], "enterobacterales", "Colonic source infection에서는 Enterobacterales와 B. fragilis group을 포함한 anaerobes를 함께 고려한다.", ["nice-diverticulitis-2019", "aga-diverticulitis-2021"])],
  }),
];

const sourceIds = new Set(data.sources.map((item) => item.id));
for (const source of sources) if (!sourceIds.has(source.id)) data.sources.push(source);
const pathogenIds = new Set((data.pathogens ?? []).map((item) => item.id));
for (const item of pathogens) if (!pathogenIds.has(item.id)) data.pathogens.push(item);
const pathwayIds = new Set(data.pathways.map((item) => item.id));
for (const pathway of pathways) if (!pathwayIds.has(pathway.id)) data.pathways.push(pathway);
data.reviewedAt = reviewedAt;

fs.writeFileSync(sourcePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
console.log(JSON.stringify({ sources: data.sources.length, pathogens: data.pathogens.length, pathways: data.pathways.length }, null, 2));
