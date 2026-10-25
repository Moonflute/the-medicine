---
type: qbank
schema_version: 1
id: medqa-us-train-007966
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ca4f20584efb32ba29d4493d89dde1047f4c4cdcda0fd00374325bab65f98ecb
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "influenza vaccination in pregnancy"
  - "live vaccines contraindicated"
  - "prenatal care"
  - "Influenza"
question_type: prevention
related_disease_slugs:
  - MDgg6rCQ7Je8L-yduO2UjOujqOyXlOyekCAoSW5mbHVlbnphKS5tZA
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
---

# MedQA US 임상문제

## 문제

임신 12주인 26세 초임부가 첫 산전 진료를 받으러 왔다. 흡연, 음주, 불법 약물, 성매개감염 병력은 없고 최근 해외여행도 없다. 3일 후 추수감사절에 캐나다 가족을 방문할 예정이다. 체온 97.5°F(36.3°C), 혈압 119/76 mmHg, 맥박 90회/분, 호흡수 20회/분, BMI 22 kg/m², 태아 맥박 136회/분이다. 혈액형은 B 음성이고 유행성이하선염과 풍진 항체가 음성이다. 이번 방문에서 가장 적절한 권고는?

## 선택지

A. 인플루엔자 예방접종
B. 홍역-유행성이하선염-풍진(MMR) 예방접종
C. PCV23 예방접종
D. Rh-D 면역글로불린

## 해설

임신 중 인플루엔자 예방에는 불활성화 또는 재조합 주사용 백신(A)을 임신 어느 시기에도 투여할 수 있다. 비강 생약독화 인플루엔자 백신은 임신 중 금기이다. MMR은 출산 후 접종하며 RhIG 정기 예방은 통상 28주에 시행하고 별도 감작 사건이 있으면 추가 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 임신 중 권장 인플루엔자 백신을 생백신으로 설명한 안전성 오류 수정.
- https://www.cdc.gov/vaccines-pregnancy/hcp/vaccination-guidelines/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007966
