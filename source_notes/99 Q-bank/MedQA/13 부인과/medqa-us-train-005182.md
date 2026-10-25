---
type: qbank
schema_version: 1
id: medqa-us-train-005182
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8af90167d51d96c82b199a431dbe1e42a0e1bd80b5c0f92c4d489ec46cddc954
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "안드로겐 불감증후군"
  - "일차성 무월경"
  - "자궁 무형성"
question_type: diagnosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-yViOuTnOuhnOqykOu2iOqwkOydkSAoQW5kcm9nZW4gSW5zZW5zaXRpdml0eSkubWQ
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

16세 여아가 아직 초경을 하지 않아 내원했다. 신체검사에서 유방과 음모·액와모 발달이 저하되어 있고 질은 짧으며 자궁경부가 보이지 않는다. 골반 초음파에서 자궁이 없다. 가장 가능성 높은 핵형은?

## 선택지

A. 45,X
B. 46,XX
C. 46,XY
D. 47,XXY

## 해설

자궁이 없고 짧은 질에 음모·액와모가 드문 외형은 제시된 핵형 중 46,XY(C)인 성발달 차이를 가장 시사한다. 기능하는 고환의 AMH로 뮐러관 구조가 퇴화하고 안드로겐 작용 이상이 있으면 이런 조합이 나타날 수 있다. 다만 완전 안드로겐 불응증은 보통 유방이 발달하므로 본문의 유방 저발달은 비전형적이며 호르몬·유전자 평가가 필요하다. 핵형 선택과 구체적 분자 진단을 같은 것으로 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 46XY핵형C는유지하되유방저발달을완전AIS전형이라고잘못단정한부분·완전성선증용어삭제.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005182
