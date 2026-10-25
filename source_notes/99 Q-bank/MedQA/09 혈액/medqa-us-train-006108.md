---
type: qbank
schema_version: 1
id: medqa-us-train-006108
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b632d3ef951dc736fbd201362221b32cc26534a53d281379343caf10dfed1c37
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "겸상적혈구병"
  - "Salmonella 골수염"
  - "소아 골수염"
  - "Sickle cell disease"
related_disease_slugs:
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

14개월 아프리카계 미국인 남아가 6일 동안 지속된 발열, 무기력 및 식욕부진으로 응급실에 왔다. 10일 전 기저귀 교환대에서 떨어져 좌측으로 착지한 뒤 그 부위가 아팠다고 한다. 체온은 38.0°C(100.4°F), 혈압은 85/41 mmHg, 맥박은 분당 132회이다. 결막이 창백하고 좌측 고관절 운동범위가 감소되어 있으며 CRP가 상승했다. MRI에서 좌측 대퇴골 골수강과 주변 연조직의 감염 소견이 보이고 혈액배양에서 Salmonella가 자랐다. 다음 중 기저 진단을 확인하는 데 가장 도움이 되는 검사는 무엇인가?

## 선택지

A. 말초혈액도말
B. 혈색소 전기영동
C. 전혈구검사
D. 철분 검사

## 해설


Salmonella 골수염은 SCD와 잘 알려진 연관이 있어 기저 혈색소 이상 확인에 hemoglobin electrophoresis B가 가장 적절하다. SCD와 thalassemia는 구별되는 혈색소병이며 복합 유전형은 가능하다. 말초도말은 보조 단서를 줄 수 있지만 세균성 감염을 확진하는 검사는 아니며 이 감염은 이미 배양/MRI로 평가된 상태다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006108 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: SCD와 thalassemia를 같은 질환이라고 한 오류 교정; Salmonella 골수염 배경 혈색소 평가 B 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006108
