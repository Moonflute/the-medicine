---
type: qbank
schema_version: 1
id: medqa-us-train-007108
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fe81d3ea3ee8732c8731e7f935a4556957fa9b1b8a8e76b56e38264cb62c5480
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "벤조디아제핀 과다복용"
  - "알프라졸람 중독"
  - "호흡억제"
  - "플루마제닐"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-uypOyhsOuUlOyVhOygnO2VgCDspJHrj4UgKEJlbnpvZGlhemVwaW5lIFBvaXNvbmluZykubWQ
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvRmx1bWF6ZW5pbC5tZA
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTmFsb3hvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 여자가 남자친구에게 바닥에서 반응 없이 발견된 지 30분 후 응급실로 이송되었다. 구급대원은 옆에 빈 약병 여러 개가 있는 것을 발견했다. 남자친구에 따르면 불면증과 범불안장애 병력이 있고 최근 우울증을 진단받았다. 체온은 36°C(96.8°F), 맥박은 64회/분, 호흡수는 10회/분으로 얕고, 혈압은 112/75 mmHg이다. 눈을 뜨지 못하고 이해할 수 없는 소리를 내며 통증 자극에 사지를 뻗는다. 동공은 3mm이고 빛에 반응한다. 각막반사는 정상이나 구역반사는 없다. 전반적인 근긴장도와 심부건반사가 감소되어 있다. 심폐검사에서 이상은 없다. 기도 보호를 위해 기관 삽관을 시행하고 기계환기와 0.9% 생리식염수 주입을 시작했다. 다음 중 이 환자의 상태를 가장 잘 역전시킬 약물은 무엇인가?

## 선택지

A. 플루마제닐
B. 중탄산나트륨
C. 포도당
D. 날록손

## 해설

저긴장, 반사 저하와 중추신경 억제는 진정제 중독에 부합하며, 보기 중 벤조디아제핀의 진정 효과를 역전하는 약은 플루마제닐(A)이다. 플루마제닐은 GABAA 수용체의 벤조디아제핀 결합 부위에 경쟁적으로 길항하며 수용체를 직접 활성화하지 않는다. 벤조디아제핀 중독이 본질적으로 저혈당을 일으킨다는 설명도 부정확하다. 다만 이 사례의 여러 빈 약병과 우울증 병력은 혼합 중독 가능성을 남기므로, 실제로는 만성 벤조디아제핀 의존이나 삼환계 항우울제 동시 중독에 따른 발작 위험 등을 평가해야 한다. A가 약리학적으로 역전제라는 사실이 원인 미상의 혼수에 경험적으로 투여하라는 뜻은 아니며, 기도·환기 보조가 우선이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 벤조디아제핀 효과를 역전하는 A의 약리학적 정답은 유지하되 GABAA 직접 활성화·저혈당이라는 오류를 교정한다. 여러 약병과 항우울제 병력 때문에 실제 혼합 중독에서 일률적으로 투여해서는 안 됨을 명시한다.
- 공식/학회 근거: https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=93b8ae30-aafb-4808-879e-dffe5194fdf6&type=display

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007108
