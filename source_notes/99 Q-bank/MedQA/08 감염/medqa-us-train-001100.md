---
type: qbank
schema_version: 1
id: medqa-us-train-001100
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2e473cd1114df3834e86df3ef9d2914a190a9dbdfdc4baa903340b8d69f7c622
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Central line-associated blood stream infection"
  - "Catheter-associated urinary tract infection"
  - "Bowel ischemia"
  - "Surgical site infection"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7JqU66GcIOqwkOyXvCAoVXJpbmFyeSBUcmFjdCBJbmZlY3Rpb24pLm1k
  - MDgg6rCQ7Je8L-uPhOq0gCDqtIDroKgg6rCQ7Je8IChDYXRoZXRlci1SZWxhdGVkIEluZmVjdGlvbikubWQ
  - MDgg6rCQ7Je8L-ybkOuCtOqwkOyXvC5tZA
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmFzb3ByZXNzaW4ubWQ
---

# MedQA US 임상문제

## 문제

중심정맥관을 사용하는 입원 환자에게 발열이 생겼다. 같은 시점에 같은 양으로 채취한 배양에서 관 검체는 채취 8시간 뒤, 말초혈액은 12시간 뒤 같은 균이 검출됐다. 시간 차이는 무엇을 뒷받침하는가?

## 선택지

A. 감염원 해석에 도움이 되지 않는 결과
B. 말초혈액 검체의 단순 오염
C. 심내막염 확진
D. 카테터 관련 혈류감염

## 해설


같은 균이 검출되고 관 검체가 말초혈액보다 2시간 이상 먼저 양성이면 카테터 관련 혈류감염을 뒷받침한다. 임상 소견과 다른 감염원도 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001100 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 단순 양성 혈액배양만으로 카테터 원인을 확정한 설명 대신 동일 균·동시 채혈 후 양성시간 차를 설명. 원문 수술일 시간축 불일치는 보존.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://academic.oup.com/cid/article/49/1/1/369414

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001100
- https://doi.org/10.1086/599376
