---
type: qbank
schema_version: 1
id: medqa-us-train-009781
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:781a64ae10851da953f0a67dcc8f88396af376f9421158ae5add7f5196f46390
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "식도 천공"
  - "종격동 기종"
  - "보어하브 증후군"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rtYjrpbTtlZjruIwg7Kad7ZuE6rWwIChCb2VyaGFhdmUgU3luZHJvbWUpLm1k
question_type: investigation
difficulty: complex
answer: D
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMyDshoztmZTquLAvUGFudG9wcmF6b2xlLm1k
---

# MedQA US 임상문제

## 문제

70세 남성이 상부위장관 내시경을 받은 다음 날 심한 가슴과 상복부 통증으로 내원했다. 흉부 X선에서 새 종격동 공기가 보이며 혈압은 안정적이다. 식도천공의 위치와 누출 범위를 확인할 초기 영상검사는?

## 선택지

A. 관상동맥조영술
B. 뇌 CT
C. 검사 목적으로 일반 위내시경을 즉시 반복
D. 조영증강 흉부 CT에 필요시 수용성 경구 조영을 추가한다

## 해설


내시경 직후 새 통증과 종격동 공기는 의인성 식도천공을 의심할 소견이다. 조영증강 CT와 CT 식도조영으로 천공 위치, 종격동·흉막의 오염 정도를 평가한다. 금식과 전문팀 평가도 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009781 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 내시경 후 종격동 기종에서 수용성 식도조영 D는 주어진 선택지상 적절하나 현행 CT 식도조영보다 보편적 최선이라는 과장 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6544956/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009781
