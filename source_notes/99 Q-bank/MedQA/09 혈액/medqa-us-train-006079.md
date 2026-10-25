---
type: qbank
schema_version: 1
id: medqa-us-train-006079
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ded3c8b71d416f76765a6d05dade1c342d5f8cf541cbdc3ca8fae0d39f320d71
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "수혈 관련 급성 용혈반응"
  - "IgA 결핍"
  - "수혈 부작용"
related_disease_slugs:
  - MTEg7Jm46rO8L-yImO2YiOu2gOyekeyaqS5tZA
  - MDYg7JWM66CI66W06riwL-yVhOuCmO2VhOudveyLnOyKpCAoQW5hcGh5bGF4aXMpLm1k
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

65세 남성이 어지럼증으로 응급실에 왔다. 차고에서 작업하다가 기절할 것 같았다고 한다. 체온은 98.8°F(37.1°C), 혈압은 125/62 mmHg, 맥박은 분당 117회, 호흡수는 분당 14회, 산소포화도는 98%이다. 검사에서 혈색소 7 g/dL, 헤마토크릿 22%, 백혈구 6,500/mm³(감별계수 정상), 혈소판 197,000/mm³이다. 혈액제제를 시작한 뒤 몇 분 후 체온은 99.5°F(37.5°C), 혈압은 87/48 mmHg, 맥박은 분당 180회로 변했고 호흡이 힘들어졌다. 다음 중 함께 나타날 가능성이 높은 소견은 무엇인가?

## 선택지

A. 반복적인 위장관 및 호흡기 감염 병력
B. 적혈구 항원에 대한 자가면역 반응
C. 흉부 방사선에서 양측 폐의 광범위한 백색화
D. 혈관의 갑작스러운 파열

## 해설


수혈 수분 내 저혈압·빈맥·호흡곤란은 아나필락시스 가능성을 시사하며 선택지 A의 반복 위장관/호흡기 감염은 IgA 결핍 연관 단서가 될 수 있다. IgA 결핍의 일부 환자에서 anti-IgA 관련 중증 수혈반응이 발생하지만 이 병력/기전이 모든 반응의 원인은 아니다. 급성 용혈성 반응·세균오염·TRALI 등을 신속히 감별하고 수혈을 중단하여 대응한다. 이를 적혈구 자가면역 용혈과 동일시하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006079 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 즉시 저혈압·호흡곤란 반응을 급성 용혈로 설명하면서 IgA 감염 병력을 연결한 오류 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://professionaleducation.blood.ca/en/transfusion/publications/anaphylactic-transfusion-reactions-and-iga-deficiency

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006079
