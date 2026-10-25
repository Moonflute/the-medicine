---
type: qbank
schema_version: 1
id: medqa-us-test-000813
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:bdb2b5ba3cea61faf0c965ca1aff682cd645379b7bc767c14b37893fb731153c
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "폐 선암"
  - "폐첨부 결절"
  - "원발성 폐암"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkCDshKDslZQgKEFkZW5vY2FyY2lub21hKS5tZA
  - MDIg7Zi47Z2h6riwL-2PkOyVlCAoTHVuZyBDYW5jZXIpLm1k
question_type: diagnosis
difficulty: complex
answer: D
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

45세 흑인 여성이 객혈로 병원에 왔다. 8개월 동안 비생산성 기침, 피로, 체중 9 kg(20 lb) 감소가 있었다. 매일 밤 와인 한 잔을 마시고 담배는 피우지 않는다. 고혈압과 골관절염 병력이 있으나 약물은 복용하지 않는다. 해외여행력은 없고 회계사로 일한다. 체온 37.0°C(98.6°F), 맥박 94회/분, 혈압 130/90 mmHg였다. 폐 청진은 정상이었고 흉부 X선에서 왼쪽 폐첨부에 종격동·폐문 확대 없이 경계가 불규칙한 2.5 cm 결절이 보였다. 가장 가능성 높은 진단은?

## 선택지

A. 카르시노이드 종양
B. 유육종증
C. 폐 편평세포암
D. 폐 선암

## 해설


비흡연자의 불규칙 경계를 가진 말초 폐결절과 체중 감소·객혈은 폐암을 의심하게 하며 선택지 중 폐선암(D)이 가장 타당하다. 인종만으로 조직형을 결정할 수는 없고 실제 확진은 조직검사가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-test-000813`와 직접 대조했다.
- 판정: 비흡연자·불규칙 폐결절과 선암 D 연결 유지. 흑인에서 선암 빈도가 높다는 뒷받침 없는 인종 일반화 제거.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.cdc.gov/lung-cancer/nonsmokers/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000813
