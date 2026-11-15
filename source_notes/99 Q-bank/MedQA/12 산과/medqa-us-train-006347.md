---
type: qbank
schema_version: 1
id: medqa-us-train-006347
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c4784fbd2bdf31e57c7af35cac8a2c4a0104b204e05bdd18e313656d3452fba3
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신 중 수두 노출"
  - "수두-대상포진 바이러스"
  - "수두-대상포진 면역글로불린"
question_type: prevention
related_disease_slugs:
  - MTIg7IKw6rO8L-yImOuRkCAoVmFyaWNlbGxhKS5tZA
  - MDgg6rCQ7Je8L-yImOuRkC3rjIDsg4Htj6zsp4Qg67CU7J2065-s7IqkIOqwkOyXvCAoVmFyaWNlbGxhLVpvc3RlciBWaXJ1cyBJbmZlY3Rpb24pLm1k
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvR2FuY2ljbG92aXIubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 37주 산모가 수두 환자와 이틀 전 실내에서 밀접 접촉했다. 수두 IgG는 음성이고 산모에게 아직 발진이나 발열은 없다. 우선 고려할 노출 후 예방은?

## 선택지

A. 수두 특이 면역글로불린을 가능한 빨리 투여한다
B. 임신 중 생수두백신을 바로 맞힌다
C. 발진이 생기기 전 정맥 간시클로버를 투여한다
D. 만삭이므로 감염 가능성을 평가하지 않는다

## 해설

면역이 없는 임신부의 의미 있는 수두 노출은 특이 면역글로불린을 신속히 평가할 상황이다. 국내 질병관리청 안내는 해당 고위험 노출에서 가능한 한 빨리, 노출 후 10일 이내 투여하도록 한다. 임신 중 생수두백신은 쓰지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: VZIG 목적은 산모 감염 예방/완화이며 태아 감염 감소를 보장하지 않음.
- https://www.cdc.gov/chickenpox/hcp/clinical-guidance/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006347
- https://www.kdca.go.kr/bbs/kdca/55/307403/download.do
