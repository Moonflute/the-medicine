---
type: qbank
schema_version: 1
id: medqa-us-train-005392
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:22db09f3a6ebdea6a63de913e17d68cbd9309a42d13111b5a45514a9f758211c
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "급성 위장관 출혈"
  - "상·하부 출혈 감별"
  - "비위관 세척"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITsnqXqtIAg7Lac7ZiILm1k
question_type: investigation
difficulty: standard
answer: C
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
original_answer: B
answer_change_reason: "초기 혈역학적 불안정 혈변은 EGD로 상부출혈을 평가하며 routine NG lavage를 필수 첫 검사로 권고하지 않음(ASGE2026/ESGE). B→C."
---

# MedQA US 임상문제

## 문제

74세 남자가 다량의 혈변 후 식은땀, 어지럼과 실신으로 내원했다. 내원 당시 혈압은 78/40 mmHg였고 초기 정맥 수액소생 후 성공적으로 안정화되었다. 위암과 대장암 가족력이 있다. 다음 중 이 증례에 접근하는 첫 단계는?

## 선택지

A. 대장내시경
B. 비위관 세척
C. 상부위장관 내시경
D. 장간막 혈관조영술

## 해설

78/40은 내원 당시 혈압이고 성공적 수액소생 후 다음 단계를 묻는다. 심한 초기 불안정을 동반한 혈변은 빠른 상부출혈일 수 있어 EGD C로 평가한다. NG세척은 하부출혈을 확진하지 못하며 모든 환자의 필수 첫 검사가 아니다. 계속 불안정/출혈이면 소생과 CTA 등 긴급경로를 선택한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 소생 후 불안정 혈변의 상부출혈 평가 EGD C로 B 교정. 내원BP를 소생후BP로 옮긴 오역도 복원.
- https://www.giejournal.org/article/S0016-5107%2826%2906857-4/fulltext
- https://www.esge.com/diagnosis-and-management-of-acute-lower-gastrointestinal-bleeding-esge-guideline

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005392
