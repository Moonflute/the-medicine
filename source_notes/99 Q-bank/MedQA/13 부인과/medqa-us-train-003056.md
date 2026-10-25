---
type: qbank
schema_version: 1
id: medqa-us-train-003056
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d92705c6bb0a3f7f15e5775a91640f40f7088e63a350805afa6c4574d5edd129
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "HPV vaccination"
  - "cervical cancer prevention"
  - "vaccination age recommendation"
  - "pregnancy planning"
question_type: prevention
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geqyveu2gOyVlCAoQ2VydmljYWwgQ2FuY2VyKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
original_answer: D
answer_change_reason: "27–45세HPV백신공동결정현행권고로D에서A로변경;음성임신검사필수아님."
---

# MedQA US 임상문제

## 문제

28세 여성이 자궁경부 세포검사 결과를 상담하러 내원했다. 1년 전 검사에서 의미불명 비정형 편평세포가 나왔지만 올해 검사는 음성이었다. 임신 1회와 제왕절개 분만을 했고 현재 다음 임신을 계획해 피임을 하지 않는다. 다른 질환과 가족력은 없으며 이전 검사 결과를 걱정한다. 친구에게 자궁경부암을 예방할 수 있는 백신이 있다는 말을 듣고 접종을 원한다. 다음 중 이 환자의 예방접종에 대한 올바른 설명은?

## 선택지

A. 임신검사가 음성이면 백신을 맞을 수 있다
B. 비정상 세포검사 병력이 한 번이라도 있으면 적절한 면역이 생기지 않아 이 환자에게는 부적절하다
C. HPV DNA 검사를 시행하고 음성이면 예방접종을 한다
D. 26세를 초과한 여성에게 HPV 예방접종은 권장되지 않는다

## 해설

28세 미접종자는 27–45세 공동결정을 통해 HPV 백신을 접종할 수 있어 D의 연령상 일괄 배제는 부정확하다. 임신이 아니라면 접종 가능하다는 A가 선택지 중 맞다. 다만 정기 임신검사는 필수가 아니며 임신 중에는 접종을 연기한다. 과거 ASC-US는 금기가 아니고 접종 전 HPV 검사도 필요 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 27–45세HPV백신공동결정현행권고로D에서A로변경;음성임신검사필수아님.
- https://www.cdc.gov/hpv/hcp/vaccination-considerations/
- https://www.cdc.gov/pinkbook/hcp/table-of-contents/chapter-11-human-papillomavirus.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003056
