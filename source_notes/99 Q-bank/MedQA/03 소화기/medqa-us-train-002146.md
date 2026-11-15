---
type: qbank
schema_version: 1
id: medqa-us-train-002146
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3e81b81f7653284631a46a2933fa32ffd5c66e36b8e79cd2a2c9a29591927c58
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "small bowel obstruction"
  - "adhesive obstruction"
  - "nasogastric decompression"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_shozsnqUg7Y-Q7IeEIChTbWFsbCBCb3dlbCBPYnN0cnVjdGlvbikubWQ
question_type: management
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMyDshoztmZTquLAvTGFjdHVsb3NlLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 남성이 복통, 구토, 복부팽만과 배변 중단으로 내원했다. 과거 개복술을 받았다. 영상 평가에서 유착에 의한 소장폐색이 확인됐지만 허혈·천공 소견이나 복막자극징후는 없다. 수액과 함께 할 초기 치료는?

## 선택지

A. 시프로플록사신과 메트로니다졸
B. 대장내시경
C. 비위관 삽입과 장 휴식
D. 수술적 장 감압

## 해설

유착성 소장폐색에 복막염, 교액, 허혈 소견이 없으면 외과 평가 아래 금식, 비위관 감압, 수액과 전해질 보충을 우선 고려한다. 악화하거나 보존 치료에 반응하지 않으면 수술을 재평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 안정적 유착성 장폐색의 초기 NG 감압·금식 C는 유지하되 보이지 않는 X선 소견을 지어내지 않음.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6006983/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002146
