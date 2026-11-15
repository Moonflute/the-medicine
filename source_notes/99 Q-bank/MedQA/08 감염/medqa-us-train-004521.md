---
type: qbank
schema_version: 1
id: medqa-us-train-004521
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:086b74617d9671a642730c9d4c3f23eb67043869597bd81ec6ecee575b6f616a
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Streptococcus bovis 균혈증"
  - "대장암"
  - "감염성 심내막염"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qwkOyXvCDsi6zrgrTrp4nsl7wgKEluZmVjdGl2ZSBFbmRvY2FyZGl0aXMpLm1k
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
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

65세 환자의 혈액배양 두 세트에서 Streptococcus gallolyticus 아종 gallolyticus가 확인됐다. 경식도 심초음파에 증식물은 없고 항생제로 급성 상태는 안정됐다. 추가로 계획할 검사는?

## 선택지

A. 대장내시경
B. 저선량 흉부 CT
C. 위내시경만 시행
D. 복부 단순 X선

## 해설


이 균의 균혈증은 대장 선종이나 암과 연관된다. 심내막염이 확인되지 않더라도 안정된 뒤 대장내시경으로 대장 병변을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004521 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: S. bovis/gallolyticus와 대장 병변의 연관 B 유지; 균혈증이 암을 일으킨다거나 항생제 완료까지 반드시 기다린다는 오해 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://academic.oup.com/eurheartj/article/44/39/3948/7243107

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004521
- https://pubmed.ncbi.nlm.nih.gov/41087105/
