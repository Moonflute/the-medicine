---
type: qbank
schema_version: 1
id: medqa-us-train-008193
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1004e501bd76077e33adca2a897c787963488d9187fe049e5187b74420e0e48b
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "placenta previa"
  - "marginal placenta previa"
  - "painless third-trimester bleeding"
question_type: diagnosis
related_disease_slugs:
  - MTIg7IKw6rO8L-yghOy5mO2DnOuwmCAoUGxhY2VudGEgUHJldmlhKS5tZA
difficulty: complex
answer: B
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
original_answer: A
answer_change_reason: "RCOG Green-top 27a(2026): 태반이 내자궁구를 덮으면 praevia, 태반 가장자리가 내구에서 20mm 미만이나 덮지 않으면 low-lying. 본문의 5cm→1cm는 정상→저위태반으로 B에 해당한다."
---

# MedQA US 임상문제

## 문제

34세 여성(G3P2)이 임신 33주에 최근 2주 동안 여러 차례의 혈성 점상출혈과 경미한 질 출혈로 내원했다. 출혈은 특별한 유발 요인이 없고 저절로 멎는다. 복통이나 자궁수축은 없다. 두 차례 제왕절개를 받았다. 임신 20주 초음파에서 태반 가장자리는 내자궁구에서 5 cm 떨어져 있었다. 현재 활력징후는 정상이고 자궁은 압통이 있으며 자궁수축은 없고 회음부에 혈액 줄무늬가 있지만 활동성 출혈은 없다. 초음파에서 태반 가장자리가 내자궁구에서 1 cm 떨어져 있다. 두 초음파에서 태반 위치를 가장 잘 설명한 것은?

## 선택지

A. 정상 위치 태반 → 변연 전치태반
B. 정상 위치 태반 → 저위태반
C. 변연 전치태반 → 부분 전치태반
D. 저위태반 → 변연 전치태반

## 해설

임신 20주의 태반 가장자리-내자궁구 거리가 5cm이면 정상 위치이다. 33주에 거리가 1cm(10mm)이고 내구를 덮는다고 기술되지 않았으므로 현행 분류상 저위태반(low-lying placenta)이며 B가 맞다. RCOG는 내구를 부분 또는 완전히 덮는 경우를 전치태반(praevia), 덮지 않으면서 가장자리 거리가 20mm 미만인 경우를 저위태반으로 구분한다. 원정답 A는 보존 이력에 기록하고 B로 교정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 내구에서1cm떨어지고덮지않은태반은저위태반이므로원정답A→B교정. 5cm는정상. RCOG2026직접분류근거.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13485456/
- https://www.rcog.org.uk/for-the-public/browse-our-patient-information/placenta-praevia-placenta-accreta-and-vasa-praevia

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008193
