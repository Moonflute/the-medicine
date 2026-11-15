---
type: qbank
schema_version: 1
id: medqa-us-train-006321
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:41780201a16ea92a27e97ec8769b89d861c9016392be868dbc4cabe20fdfbe9e
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "유전성 혈색소침착증"
  - "간세포암"
  - "철 과부하"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITshLjtj6zslZQgKEhlcGF0b2NlbGx1bGFyIENhcmNpbm9tYSkubWQ
  - MDkg7ZiI7JWhL-ycoOyghOyEsSDtmIjsg4nshozsuajssKnspp0gKEhlcmVkaXRhcnkgSGVtb2Nocm9tYXRvc2lzKS5tZA
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

45세 남성이 피부색이 짙어지고 양손 둘째·셋째 중수지관절이 아프다. 최근 당뇨병을 진단받았고 페리틴은 620 μg/L다. 철 과부하 가능성을 우선 평가하려면 어떤 검사를 추가하는가?

## 선택지

A. 혈청 가용성 트랜스페린 수용체
B. 트랜스페린 포화도
C. 혈청 알파태아단백
D. 혈청 세룰로플라스민

## 해설

혈색소침착증이 의심되면 페리틴과 트랜스페린 포화도를 함께 본다. 페리틴은 염증이나 간질환에서도 오르므로 단독 상승으로 철 과부하를 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Ferritin250을 남성에서 명백히 높다고 한 수치해석과 HCC가 모든철과부하의 최다합병증이라는 과장 교정.
- https://easl.eu/wp-content/uploads/2022/06/PIIS01688278220021121.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006321
- https://pubmed.ncbi.nlm.nih.gov/35662478/
