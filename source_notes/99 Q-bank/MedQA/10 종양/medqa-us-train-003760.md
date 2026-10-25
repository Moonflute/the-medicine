---
type: qbank
schema_version: 1
id: medqa-us-train-003760
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a7ad474be9ae2c36db50ca274de98a8d9f393a44478fc16836fd2317a570c326
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "palpable breast mass"
  - "diagnostic mammography"
  - "breast cancer evaluation"
  - "postmenopausal breast mass"
related_disease_slugs:
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
question_type: management
difficulty: standard
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

59세 여성이 6개월간 지속된 유방 종괴로 내원했다. 왼쪽 유방에서 2×2 cm 종괴가 만져졌고 액와 림프절병증은 없었다. 다음 중 병력에 근거한 가장 적절한 다음 처치는?

## 선택지

A. 일반외과 의뢰
B. 유방촬영술
C. 종괴 생검
D. 유방 자가검진을 계속한다

## 해설


6개월간 지속된 2 cm 크기의 촉진 가능한 유방 종괴는 영상 검사가 우선이다. 유방촬영술은 종양의 형태와 밀도를 평가하고, 추가 조직검사의 필요성을 판단한다. 따라서 가장 적절한 다음 처치는 유방촬영술이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003760 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 59세의 지속 촉지 유방 종괴에서 진단 유방촬영 B가 적절한 초기 영상이라는 원문·해설을 ACR/RSNA 안내와 대조했다. 음성 영상이 임상적으로 의심되는 종괴의 추가 초음파·생검을 배제하지 않는다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.radiologyinfo.org/en/info/acs-palpable-breast-masses

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003760
