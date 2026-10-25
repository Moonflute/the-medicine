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
---

# MedQA US 임상문제

## 문제

50세 남성이 잠에서 깬 후 발견한 오른쪽 얼굴 마비로 응급실에 내원했다. 한 달 전 뉴햄프셔 사냥여행에서 돌아온 뒤 오른쪽 목 통증과 두통이 생겼고 일주일 후 호전되었다. 5년 동안 약물로 조절되는 고혈압이 있다. 35년 동안 하루 한 갑을 피웠고 매일 맥주 두 잔을 마신다. 활력징후는 정상이다. 오른쪽 얼굴 위·아래 절반이 처지고 웃기 어렵고 오른쪽 눈을 감을 수 없다. 나머지 진찰은 정상이다. 다음 중 진단의 다음 단계로 가장 적절한 것은 무엇인가?

## 선택지

A. 안면 피부 중합효소연쇄반응
B. 뇌척수액 분석
C. 효소결합면역흡착검사
D. 비조영 CT

## 해설

유행 지역 야외 활동 후 발생한 말초성 안면신경마비는 신경계 라임병을 의심할 역학·임상 근거가 된다. 선지 중 혈청 ELISA/EIA(C)가 적절한 시작 검사다. 진드기 물림 자체는 본문에 확인되어 있지 않다. 결과는 단독 ELISA가 아니라 양성·경계 결과의 2차 검사까지 포함한 표준 또는 수정 2단계 혈청검사로 해석한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 라임병 혈청 항체검사 C를 유지하되 단독 ELISA가 가장 민감·특이하다는 과장과 명시되지 않은 진드기 물림을 교정한다.
- 공식/학회 근거: https://www.cdc.gov/lyme/hcp/diagnosis-testing/index.html
- 공식/학회 근거: https://www.idsociety.org/practice-guideline/lyme-disease/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001502
