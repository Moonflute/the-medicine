---
type: qbank
schema_version: 1
id: medqa-us-train-004673
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:024c68def3f33983256a75d782599f731c5d0e4f9df1e0f4f571d875248e14bc
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "악성 외이도염"
  - "두개저 골수염"
  - "당뇨병성 외이도염"
question_type: management
related_disease_slugs:
  - MDgg6rCQ7Je8L-uFueuGjeq3oCAoUHNldWRvbW9uYXMgQWVydWdpbm9zYSkubWQ
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

60세 당뇨병 남성이 오른쪽 귀 통증으로 내원했다. 3주 동안 오른쪽 귀 통증이 악화되었고 처음에는 화농성 이루가 있었으나 호전되었으며 며칠 전부터 얼굴 비대칭이 생겼다. 당뇨병 약은 잘 복용하지 않는다. 체온은 100.4°F (38°C), 혈압은 140/90 mmHg, 맥박은 분당 90회, 호흡수는 분당 18회이다. 신체검사에서 오른쪽 외이도의 골-연골 접합부에 육아조직이 보이고 오른쪽 안면 처짐도 있다. 다음 중 치료에서 가장 적절한 단계는 무엇인가?

## 선택지

A. 6주간 정맥 시프로플록사신
B. 14일간 국소 폴리믹신과 네오마이신
C. 4주간 고압산소치료
D. 수술적 처치

## 해설

당뇨 조절 불량, 심한 이통, 외이도 골-연골 경계의 육아조직과 안면신경마비는 두개저 침범을 동반할 수 있는 괴사성 외이도염에 합당하다. 국소 점이액만으로 치료할 수 없고, 제시된 선택지에서는 A의 장기 전신 항녹농균 항생제 치료가 가장 적절하다. 실제로는 신속한 ENT/감염내과 평가, 배양·영상과 혈당 조절이 필요하며 항생제 종류·정맥/경구 경로·기간은 감수성과 중증도, 치료반응에 따라 조정한다. 모든 환자에게 6주간 정맥 ciprofloxacin 단독을 고정적으로 적용한다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 안면신경마비를 동반한 괴사성 외이도염에서 장기 전신 항녹농균 요법이라는 A의 취지는 유지하되 모든 환자에게 6주 내내 정맥 ciprofloxacin 단독이 일률적 1차라는 설명을 교정.
- 공식/학회 근거: https://www.rightdecisions.scot.nhs.uk/antimicrobial-prescribing-nhs-lothian/body-systems/ear-nose-throat-infections/necrotising-otitis-externa/
- 공식/학회 근거: https://richtlijnendatabase.nl/richtlijn/necrotiserende_otitis_externa_osteomyelitis_schedelbasis/duration_of_treatment.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004673
