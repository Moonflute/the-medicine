---
type: qbank
schema_version: 1
id: medqa-us-validation-000261
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:670d7addaa466d66c804d36df437604b6bf04f9d7e93af084c3ab58bccba3582
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "유방암 선별검사"
  - "유방촬영술"
  - "폐경 후 건강관리"
question_type: prevention
related_disease_slugs: []
difficulty: standard
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

65세 여성이 은퇴와 직장 건강보험 상실 후 다시 진료를 받기 위해 가정의학과를 방문했다. 정기 검진을 받을 시간이 없었다고 한다. 일주일에 3~4회 운동하고 붉은 고기는 드물게 먹는다. 직장 동료들과 사교적으로 술을 마시고 담배를 피웠지만 집이나 휴가 중에는 그러지 않았다. 아침에 손목과 팔꿈치가 쑤셔 컴퓨터 키보드를 수년간 사용한 탓이라고 생각한다. 52세에 폐경을 마쳤고, 아버지 쪽 가족력에 관상동맥질환, 어머니 쪽에 대장암이 있다. 5년 전 대장내시경은 정상이었다. 활력징후와 신체진찰은 대체로 정상이다. 이 환자가 받아야 할 진단검사는?

## 선택지

A. 흉부 방사선촬영
B. 대장내시경
C. 유방촬영술
D. 골반 초음파

## 해설

환자는 65세이고 최근 유방 선별 이력이 제시되지 않아 유방촬영(C)이 적절하다. USPSTF는 평균위험 40–74세에 2년마다 유방촬영을 권고한다. 대장암 가족력의 구체적 위험과 이전 검사 간격은 별도로 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 65세 유방촬영 C 유지. 환자 나이를 40세로 둔 오류와 일률적 연 1회 권고 교정.
- https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/breast-cancer-screening

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000261
