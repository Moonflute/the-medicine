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

74세 남성이 다량의 선홍색 혈변으로 실신했다. 초기 혈압 78/40 mmHg였지만 수액으로 안정됐다. 앞서 커피색 구토와 흑색변이 있었고 NSAID를 자주 복용했다. 현재는 출혈이 잠시 멎었다. 먼저 확인할 검사는?

## 선택지

A. 대장내시경
B. 비위관 세척만 시행한다
C. 상부위장관 내시경
D. 소장 캡슐내시경

## 해설

빠르고 많은 상부위장관 출혈은 선홍색 혈변으로도 나타날 수 있다. 커피색 구토와 흑색변이 선행한 이 환자는 소생 후 상부위장관 내시경으로 출혈원을 보고 필요하면 지혈한다. 모든 혈변의 첫 검사가 위내시경이라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 소생 후 불안정 혈변의 상부출혈 평가 EGD C로 B 교정. 내원BP를 소생후BP로 옮긴 오역도 복원.
- https://www.giejournal.org/article/S0016-5107%2826%2906857-4/fulltext
- https://www.esge.com/diagnosis-and-management-of-acute-lower-gastrointestinal-bleeding-esge-guideline

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005392
- https://pubmed.ncbi.nlm.nih.gov/36735555/
