---
type: qbank
schema_version: 1
id: medqa-us-train-006460
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4de7a61905bd2a312f2508dc45c960a30e6473fba3c7d8033bc5c4bedba58014
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "복잡성 부 parapneumonic effusion"
  - "농흉"
  - "흉관 배액"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-u2gO2PkOugtOyEsSDtnYnsiJggKFBhcmFwbmV1bW9uaWMgRWZmdXNpb24pLm1k
question_type: management
difficulty: complex
answer: C
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
---

# MedQA US 임상문제

## 문제

61세 남성이 3일 동안 지속된 호흡곤란과 오른쪽 흉통으로 응급실에 내원했다. 통증은 날카롭고 깊게 숨쉴 때 악화된다. 5일 동안 발열과 누런 가래를 동반한 기침도 있었다. 체온은 38.1°C(100.5°F), 맥박은 분당 85회, 호흡수는 분당 22회, 혈압은 132/85 mm Hg이다. 진찰에서 오른쪽 폐기저부 타진이 둔하고 오른쪽 중엽과 하엽의 호흡음이 감소되어 있다. 흉부 X선에서 오른쪽 늑횡격막각이 무뎌져 있다. 진단적 흉강천자로 얻은 흉수의 pH는 7.1, 포도당 농도는 55 mg/dL이다. 광범위 항생제와 함께 다음 중 처치로 가장 적절한 다음 단계는?

## 선택지

A. 흉강 내 데옥시리보뉴클레아제 투여
B. 흉막 박피술
C. 흉관 삽입
D. 흉강경적 변연절제술

## 해설

폐렴 임상과 pH7.1의 삼출은 복잡성 폐렴연관흉수/흉막감염 고위험이다. 초음파로 안전한 접근이 가능하면 항생제와 함께 흉관배액 C가 적절하다. 고름이 확인된 농흉과 모든 저pH흉수를 동일시하지 않으며 DNase단독은 초기배액의 대체가 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: pH7.1의 복잡성 폐렴연관삼출 C 배액을 명확히 하고 비농성도 농흉이라고 동일시하지 않음.
- https://www.brit-thoracic.org.uk/clinical-resources/guidelines/pleural-disease-full-guideline/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006460
