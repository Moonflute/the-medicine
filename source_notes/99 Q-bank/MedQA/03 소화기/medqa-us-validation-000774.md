---
type: qbank
schema_version: 1
id: medqa-us-validation-000774
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:4bfbae890506e5c99449a6f10009645a48acb564a6e92e13334beda37e0bdffb
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "멜레나"
  - "위내시경 음성 위장관 출혈"
  - "대장내시경"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_sg4HrtoAg7JyE7J6l6rSAIOy2nO2YiCAoVXBwZXIgR2FzdHJvaW50ZXN0aW5hbCBUcmFjdCkubWQ
question_type: investigation
difficulty: complex
answer: B
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

42세 남성이 며칠간 반복된 검은 타르변과 어지러움으로 응급실에 왔다. 위내시경에서 출혈이 보이지 않았고 헤모글로빈은 10 g/dL이다. 가장 적절한 다음 처치는?

## 선택지

A. 이중풍선 소장내시경
B. 대장내시경
C. 개복술
D. 혈관조영술

## 해설


정답 B. 소생 후 EGD에서 출혈원을 찾지 못했으므로 아직 평가하지 않은 대장을 내시경으로 확인하는 것이 제시된 선택지 중 적절하다. 우측 대장이나 소장 출혈도 흑색변을 만들 수 있으므로 EGD 음성만으로 출혈이 반드시 대장에 있다고 확진하지 않는다. 상·하부 평가 후에도 원인이 불명확하면 소장 검사나 재검을 임상 상태에 따라 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000774 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: EGD 음성만으로 대장 출혈 확진하지 않고 미평가 대장의 내시경 B를 선택지상 다음 단계로 설명.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://acgcdn.gi.org/acgblog/uploads/2015/09/ajg2015246a.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000774
