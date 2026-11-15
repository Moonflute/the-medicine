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

42세 남성이 흑색변과 어지럼으로 내원했다. 수액 뒤 혈압은 안정적이며 활동성 대량 출혈은 없다. 위와 십이지장을 충분히 관찰한 내시경에서 원인이 나오지 않았고, 아직 대장 검사는 하지 않았다. 다음 검사는?

## 선택지

A. 이중풍선 소장내시경부터 시행한다
B. 정결 후 대장내시경을 시행한다
C. 진단적 개복술을 시행한다
D. 활동성 출혈이 없어도 즉시 도자 혈관조영술을 시행한다

## 해설


흑색변은 상부에 흔하지만 우측 대장이나 소장에서도 생길 수 있다. 충분한 상부 내시경에서 출혈원을 찾지 못한 안정 환자는 아직 확인하지 않은 대장을 평가한다. 상·하부 검사 뒤에도 출혈원이 없으면 소장을 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000774 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: EGD 음성만으로 대장 출혈 확진하지 않고 미평가 대장의 내시경 B를 선택지상 다음 단계로 설명.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://acgcdn.gi.org/acgblog/uploads/2015/09/ajg2015246a.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000774
- https://www.asge.org/docs/default-source/education/practice_guidelines/suspected_small_bowel_bleeding.pdf
