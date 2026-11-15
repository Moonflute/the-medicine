---
type: qbank
schema_version: 1
id: medqa-us-train-001502
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:25f7001a362af2badddbe8e0e5a2544f1773ce73ea0fce42fccd780e2825bb74
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "Lyme disease"
  - "Bell palsy"
  - "Borrelia burgdorferi"
question_type: investigation
related_disease_slugs:
  - MDgg6rCQ7Je8L-udvOyehOuzkSAoTHltZSBEaXNlYXNlKS5tZA
  - MTcg7J2067mE7J247ZuE6rO8L-uyqOuniOu5hCAoQmVsbCdzIHBhbHN5KS5tZA
difficulty: standard
answer: D
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

환자가 라임병 유행 지역에서 야외활동을 한 뒤 한쪽 얼굴 전체가 마비됐다. 여행 중 피부에 서서히 커지는 고리 모양 발진이 있었다고 한다. 특발성 벨마비 외에 라임병을 감별할 검사는?

## 선택지

A. 안면 피부의 진균 배양
B. 소변 항원검사
C. 급성기 혈청 배양 단독
D. 혈청 라임병 2단계 항체검사

## 해설

유행 지역 노출과 확대되는 발진 뒤 말초성 안면신경마비가 생기면 라임병 가능성을 평가한다. 혈청 항체를 표준 또는 수정된 2단계 검사로 해석한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 라임병 혈청 항체검사 C를 유지하되 단독 ELISA가 가장 민감·특이하다는 과장과 명시되지 않은 진드기 물림을 교정한다.
- 공식/학회 근거: https://www.cdc.gov/lyme/hcp/diagnosis-testing/index.html
- 공식/학회 근거: https://www.idsociety.org/practice-guideline/lyme-disease/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001502
- https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=6303
