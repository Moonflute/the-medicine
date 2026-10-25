---
type: qbank
schema_version: 1
id: medqa-us-test-000515
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:10ec69af5437d2512516f21d4557b6ab331ef284fc0a47d3d39cb76bb60aa277
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "선택적 IgA 결핍증"
  - "지아르디아증"
  - "재발성 감염"
question_type: prognosis
related_disease_slugs:
  - MDgg6rCQ7Je8L-uptOyXreyggO2VmOyekCDqsJDsl7wgKEltbXVub2NvbXByb21pc2VkIEhvc3QgSW5mZWN0aW9uKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

3세 여아가 3일 동안의 발열, 기침, 화농성 콧물로 병원에 왔다. 지난 2년 동안 각각 2~5일 지속되는 비슷한 증상을 7번 겪었다. 지난 1년 동안 간헐적인 복부 경련과 악취가 나는 지방성 설사가 반복되었다. 키는 55백분위수, 체중은 35백분위수였다. 체온 38.9°C(102°F), 맥박 100회/분, 호흡 24회/분, 혈압 110/60 mmHg였다. 삼출물 없는 인두 홍반과 전두-사골동 압통이 있었고 복부는 팽창되어 있으나 압통이 없고 타진상 고실음이었으며 장음은 항진되어 있었다. 대변 현미경검사에서 배 모양의 다편모충이 보였다. 이 환자가 다음 중 어떤 상태에 걸릴 위험이 증가하는가?

## 선택지

A. 수혈 후 아나필락시스 반응
B. 피부 육아종
C. 비호지킨 림프종
D. 파종성 결핵

## 해설

Giardia와 반복 호흡기 감염은 IgA 결핍을 시사한다. 항-IgA 관련 수혈 아나필락시스(A)는 고전적 연관이지만 실제 발생은 드물고 IgA가 낮아도 대부분 경험하지 않는다. 수혈 필요 시 병력에 따라 전문 평가하며 IgA 결핍만으로 모든 수혈을 금지하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: Giardia·반복 점막감염의 IgA 결핍과 수혈 아나필락시스 A 연관 유지. 높은 절대 위험이라는 인상 교정.
- https://professionaleducation.blood.ca/en/transfusion/publications/anaphylactic-transfusion-reactions-and-iga-deficiency

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000515
