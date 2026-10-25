---
type: qbank
schema_version: 1
id: medqa-us-train-006738
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0fa1afbc68d8ea1f34fb73e9e50c55c6f97f51c8a35cbf36fc008f003efd5404
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "임신 중 유방암"
  - "침윤성 소엽암"
  - "HER2 양성 유방암"
related_disease_slugs:
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
  - MTMg67aA7J246rO8L-y5qOycpOyEsSDsnKDrsKnslZQgKEludmFzaXZlIEJyZWFzdCBDYW5jZXIpLm1k
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
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

비만한 34세 초임부가 임신 20주에 2주 전 발견한 왼쪽 유방 종괴의 추적 진찰을 위해 내원했다. 임신 전까지 11세부터 월경은 30~40일 간격으로 발생했다. 활력징후는 정상이다. 왼쪽 유방 상외측에 3.0cm 크기의 움직이지 않고 단단하며 압통이 없는 종괴가 있고 액와 림프절은 만져지지 않는다. 자궁 크기는 임신 20주에 해당한다. 유방촬영술과 중심부 바늘 생검에서 침윤성 소엽암이 확인되었고 에스트로겐 및 HER2 수용체 양성, 프로게스테론 수용체 음성이다. 병기검사에서 원격 전이는 없다. 다음 중 처치로 가장 적절한 것은?

## 선택지

A. 외과적 절제와 방사선치료
B. 외과적 절제와 화학요법
C. 외과적 절제
D. 방사선치료와 화학요법

## 해설


임신 중 HER2 양성 침윤성 소엽암은 수술 후 재발 위험이 높아 임신 중에도 안전한 항HER2 치료는 없으므로, 수술 후 임신을 유지하면서 화학요법(예: 안트라사이클린 기반)만 시행한다. 방사선은 태아에 위험하므로 제외한다. 따라서 외과적 절제와 화학요법이 적절하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006738 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 임신20주 유방암에 수술+임신중기 허용 화학요법 B 및 임신 중 방사선/HER2 표적치료 회피 설명을 현행 NCI와 대조 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/breast/hp/pregnancy-breast-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006738
