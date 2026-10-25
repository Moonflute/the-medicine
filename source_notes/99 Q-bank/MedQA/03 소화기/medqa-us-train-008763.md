---
type: qbank
schema_version: 1
id: medqa-us-train-008763
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:18eafe87e5e174493d4892cca272ac3f3bc2fd26e6e0635cc66f43bf63b6a853
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "iron deficiency anemia"
  - "occult gastrointestinal bleeding"
  - "colorectal cancer screening"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yyoCDqsrDtlY0g67mI7ZiIIChJcm9uIERlZmljaWVuY3kgQW5lbWlhKS5tZA
  - MTEg7Jm46rO8L-ychOyepeq0gCDstpztmIggKEdhc3Ryb2ludGVzdGluYWwgQmxlZWRpbmcpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsrDsnqXsp4HsnqXslZQgKENvbG9yZWN0YWwgQ2FuY2VyKS5tZA
question_type: investigation
difficulty: complex
answer: A
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2hsb3J0aGFsaWRvbmUubWQ
---

# MedQA US 임상문제

## 문제

65세 남성이 연례 검진을 위해 일차진료를 받으러 왔다. 노화 때문이라고 생각하는 경미한 피로 외에는 건강하다고 느낀다. 고혈압으로 클로르탈리돈을 복용한다. 매일 레드와인 한 잔을 마신다. 4개월 전 방문 이후 체중이 5파운드 감소했다. 체온 99.2°F(37.3°C), 혈압 147/98mmHg, 맥박 80회/분, 호흡수 14회/분, 산소포화도 99%이다. 비만이지만 급성 고통은 없다. 혈색소 9g/dL, 헤마토크릿 27%, MCV 72µm³, 백혈구 6,500/mm³(감별 정상), 혈소판 193,000/mm³, 전해질과 신장·간기능은 정상이고 25-OH 비타민 D는 15ng/mL이다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 대장내시경
B. 금주 상담
C. 운동요법과 체중 감량
D. 철분 보충

## 해설


노년 남성의 새 소구성 빈혈과 체중감소는 철결핍 및 위장관 출혈·악성종양 평가가 필요하다. 선택지 중 대장내시경(A)이 적절한 원인 평가에 포함된다. Ferritin 등으로 철 상태를 확인하고, 원인불명 철결핍이면 통상 상·하부 내시경을 고려한다. 철분 보충만으로 원인 평가를 대신하거나 비타민D 결핍 때문에 내시경을 미루지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008763 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원정답 colonoscopy A인데 해설이 철분 D를 정답으로 주장한 불일치 교정. 노년 남성 소구성빈혈+체중감소의 GI 원인 평가를 단순 screening과 구분.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://gastro.org/news/aga-recommends-bidirectional-endoscopy-for-most-patients-with-iron-deficiency-anemia/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008763
