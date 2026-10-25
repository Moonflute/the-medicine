---
type: qbank
schema_version: 1
id: medqa-us-train-001750
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b3566c56205eab8cc71cb2a1d3c5ac87988e75d787b9c765ed44fb25000bfd43
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "bilateral renal artery stenosis"
  - "ACE inhibitor"
  - "acute kidney injury"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
  - MDUg7Iug7J6lL-yLoO2YiOq0gOyEsSDqs6DtmIjslZUgKFJlbm92YXNjdWxhciBIeXBlcnRlbnNpb24pLm1k
question_type: adverse_effect
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcmFsYXppbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmVyYXBhbWlsLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

최근 고혈압 진단을 받은 61세 비만 남성이 추적 진료와 혈압 확인을 위해 일차진료기관에 내원했다. 그는 1주 전에 새 혈압약을 시작한 뒤 변화 없이 잘 지낸다고 말한다. 과거력은 특이사항이 없다. 혈압약 외에 atorvastatin과 매일 종합비타민을 복용한다. 25갑년의 흡연력이 있고 주말에 사교적으로 술을 마신다. 오늘 신체검사는 정상이다. 활력징후와 검사 결과가 표에 제시되어 있다. 2주 전과 오늘의 혈압은 각각 159/87 mm Hg와 164/90 mm Hg, 심박수는 90/min과 92/min이다. 나트륨은 140 mE/L와 142 mE/L, 칼륨은 3.1 mE/L와 4.3 mE/L, 염소는 105 mE/L와 103 mE/L, 이산화탄소는 23 mE/L와 22 mE/L, BUN은 15 mg/dL와 22 mg/dL, 크레아티닌은 0.80 mg/dL와 1.8 mg/dL이다. 자기공명혈관조영술에서 양측 신동맥 협착이 보인다. 다음 중 급성 신부전을 일으킨 새 약물은 무엇일 가능성이 가장 높은가?

## 선택지

A. 베라파밀
B. 하이드랄라진
C. 캅토프릴
D. 하이드로클로로티아지드

## 해설

정답은 C이다. 양측 신동맥협착에서는 사구체여과를 유지하는 데 angiotensinII의 수출세동맥 수축이 중요하다. captopril로 이를 차단하면 여과압과 GFR이 감소하여 creatinine이 급증할 수 있다. 신장 전체 혈류가 반드시 급감한다는 설명과 구별한다. 다른 약보다 새 ACEI 노출의 시간관계와 영상이 가장 합당하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ACEI 유발 AKI를 신혈류 감소가 아니라 수출세동맥 확장/사구체여과압 감소로 설명.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001750
