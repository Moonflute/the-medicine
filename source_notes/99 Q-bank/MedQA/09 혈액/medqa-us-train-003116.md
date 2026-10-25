---
type: qbank
schema_version: 1
id: medqa-us-train-003116
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5e156863558c5b4b78a4500826a653785179c21061b714bcf777137f59d85e4e
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "vitamin B12 deficiency"
  - "macrocytic anemia"
  - "subacute combined degeneration"
  - "methylmalonic acid"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67mE7YOA66-8IEIg6rKw7ZWN7KadIChWaXRhbWluIEIgRGVmaWNpZW5jeSkubWQ
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
---

# MedQA US 임상문제

## 문제

67세 남성이 정기 추적 진료를 위해 내원했다. 경미한 피로와 양쪽 발의 간헐적 저림이 있고 지난 한 달 동안 세 번 넘어졌다. 제2형 당뇨병을 23년, 고혈압을 15년 앓아 메트포르민과 에날라프릴을 복용한다. 혈압 126/82 mmHg, 맥박 78회/분, 호흡수 15회/분이다. 혈색소 10 g/dL, 헤마토크리트 30%, 평균적혈구용적 110 fL, 혈청 비타민 B12 210 pg/mL이다. 다음 중 가장 적절한 관리 단계는?

## 선택지

A. 내인성 인자 항체
B. 실링검사
C. 엽산 보충
D. 메틸말론산 수치

## 해설


B12 210 pg/mL는 불확정 범위이며 대구성 빈혈, 감각 증상과 낙상이 있어 기능적 결핍 평가로 serum MMA D가 적절하다. MMA는 신기능 등 다른 요인의 영향을 받을 수 있어 맥락에 따라 해석한다. 신경학적 증상이나 빈혈의 악화 위험이 있으면 검사 검체를 확보하면서 B12 보충을 시작할 수 있고 결과만을 기다려 치료를 미루지 않는다. 엽산만 보충하면 B12 신경손상 평가·치료를 놓칠 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003116 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 경계 B12에서 MMA 검사 D 유지, 신경증상 때문에 치료를 검사결과까지 지연하지 않도록 한계 보완.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/ng239/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003116
