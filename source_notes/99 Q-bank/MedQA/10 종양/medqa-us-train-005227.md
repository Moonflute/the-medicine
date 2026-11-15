---
type: qbank
schema_version: 1
id: medqa-us-train-005227
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dd7aadfab36dad946474fd04e8a2a404af9db8d7bace604487bf183f8bf3fb9d
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "린치증후군"
  - "MLH1"
  - "MSH2"
  - "유전성 비용종성 대장암"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snKDsoITshLEg67mE7Jqp7KKF7KadIOuMgOyepeyVlCAoSE5QQ0MpIChIZXJlZGl0YXJ5IE5vbnBvbHlwb3NpcyBDb2xvcmVjdGFsIENhbmNlcikubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsrDsnqXsp4HsnqXslZQgKENvbG9yZWN0YWwgQ2FuY2VyKS5tZA
question_type: prevention
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0NlbGVjb3hpYi5tZA
---

# MedQA US 임상문제

## 문제

22세 환자가 유전상담에서 병적 MLH1 생식세포 변이를 확인받았다. 증상은 없지만 아버지가 42세에 대장암을 진단받았다. 이 환자의 대장암 감시 계획은?

## 선택지

A. 분변잠혈검사만 매년 시행한다
B. 50세부터 평균위험군과 같은 간격으로 검사한다
C. 지금 대장내시경 감시를 시작하고 대개 1~2년 간격으로 반복한다
D. 혈청 CEA만 매년 측정하고 증상이 생기면 내시경을 한다

## 해설


병적 MLH1 변이가 확인된 린치증후군에서는 대개 20~25세부터 촘촘한 대장내시경 감시가 필요하다. 시작 시점과 간격은 유전자와 가족 내 발병 연령을 함께 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005227 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: MLH1/MSH2 Lynch 위험에서20–25세부터1–2년 간격, 연간대장내시경 A가 적절함을 확인.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC4695986/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005227
- https://www.ncbi.nlm.nih.gov/books/NBK1211/
- https://doi.org/10.1007/s10147-025-02892-1
