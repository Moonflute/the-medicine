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

49세 여성이 유방암 검진을 받으러 왔다. 20년 전 유방 보형물을 삽입했고 현재 유방 증상이나 고위험 가족력은 없다. 국내 국가 유방암 검진의 기본 검사는?

## 선택지

A. BRCA 유전자검사
B. 유방촬영술
C. 유방 MRI
D. 유방 초음파

## 해설


국가 유방암 검진은 40세 이상 여성에게 2년마다 유방촬영술을 시행한다. 보형물 삽입력은 기본 검진을 생략하거나 다른 검사로 일률적으로 바꾸는 이유가 아니다. 촬영기관에는 보형물이 있음을 미리 알린다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008076 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 환자는49세이지40세미만이 아니다. 현행 USPSTF40–74세 선별에 따라 원정답C에서B로 변경; 보형물은검진금기가아님.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/breast-cancer-screening

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008076
- 국가암정보센터, 국가암검진 사업: https://www.cancer.go.kr/lay1/S1T261C262/contents.do
