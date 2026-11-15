---
type: qbank
schema_version: 1
id: medqa-us-test-000981
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:4dab27a04df34697322de3ecce7e688cd8b280f62863726653ba5dd6ff6993e1
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "반복 중기 유산"
  - "자궁 기형"
  - "자궁난관조영술"
  - "Fallopian tube obstruction"
question_type: investigation
related_disease_slugs: []
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 2분기 유산을 반복한 여성이 현재 임신하지 않은 상태로 내원했다. 2차원 초음파에서 자궁강이 두 갈래처럼 보인다. 자궁중격과 쌍각자궁처럼 자궁강과 바깥 윤곽이 모두 중요한 구조 이상을 평가할 우선 검사는?

## 선택지

A. 갑상샘자극호르몬 검사
B. 3차원 질식 초음파
C. 자궁경만 시행해 자궁 바깥 윤곽까지 판정
D. 자궁난관조영술만 시행해 자궁 바깥 윤곽까지 판정

## 해설

3차원 질식 초음파는 자궁강과 자궁저부의 바깥 곡선을 함께 보여 선천성 자궁 구조 이상을 구분하는 데 유용하다. 자궁경이나 자궁난관조영술만으로 바깥 윤곽을 충분히 평가하기 어렵다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: HSG가 자궁외임신·관류장애 진단 검사라는 오류 수정.
- https://www.asrm.org/practice-guidance/practice-committee-documents/recurrent-pregnancy-loss-a-committee-opinion-2026

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000981
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6276652/
