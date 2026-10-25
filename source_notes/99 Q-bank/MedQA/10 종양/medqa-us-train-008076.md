---
type: qbank
schema_version: 1
id: medqa-us-train-008076
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a890a4bdebed900acaa9d78d2e23c23a1575ec4fa4d85f08fa05601df2d3e96a
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "breast cancer screening"
  - "average-risk woman"
  - "mammography"
related_disease_slugs:
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
question_type: prevention
difficulty: complex
answer: B
original_answer: C
answer_change_reason: "실제49세 환자를40세미만으로 오독한 원정답·해설 오류. USPSTF2024최종권고(2026-10-25검토)는40–74세 biennial mammography를 권고하므로 B로 교정."
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

49세 여성이 20년 만에 처음으로 일차 진료를 받으러 왔다. 그동안 건강했고 29세에 유방 보형물 삽입술을 받은 것 외에는 수술력이 없다. 친구가 최근 유방암을 진단받아 자신의 위험을 걱정한다. 활력징후와 신체검사는 정상이다. 이 환자의 유방암에 대한 가장 적절한 검진은?

## 선택지

A. BRCA 유전자검사
B. 유방촬영술
C. 현재는 중재가 필요하지 않음
D. 초음파

## 해설


이 환자는49세이며 평균위험군이라도 정기 선별 유방촬영 대상이다. USPSTF는40–74세에2년 간격 mammography를 권고하므로 B가 적절하다. 기존 해설은 환자를40세미만으로 바꾸어 no intervention C를 정당화한 오류였다. 유방 보형물이 있다고 선별을 하지 않는 것은 아니며 촬영기관에 보형물 사실을 알려 적절한 촬영기법을 적용한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008076 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 환자는49세이지40세미만이 아니다. 현행 USPSTF40–74세 선별에 따라 원정답C에서B로 변경; 보형물은검진금기가아님.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/breast-cancer-screening

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008076
