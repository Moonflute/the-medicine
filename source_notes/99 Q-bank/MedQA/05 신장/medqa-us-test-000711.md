---
type: qbank
schema_version: 1
id: medqa-us-test-000711
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:2788399227b4c4d02b3a3829ddb4d86074ba65c4d7901a21a0d019476fb22499
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "옥살산칼슘 신장결석"
  - "장 절제 후 고옥살산뇨증"
  - "지방 흡수장애"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tnaHsiJjsnqXslaAubWQ
  - MDUg7Iug7J6lL-yalOuhnOqysOyEnSAoVXJvbGl0aGlhc2lzKS5tZA
question_type: mechanism
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

62세 남성이 오른쪽 요통, 메스꺼움, 짙은 소변으로 응급실에 왔다. 지난 2일 동안 소변량이 감소했다가 일시적으로 증가하는 일이 반복되었다. 지난 1년 동안 요로감염을 두 번 앓았고 크론병으로 5년 전 소장절제술을 받았다. 메살라민과 종합비타민을 복용하며 아버지는 신장결석이 반복되었다. 활력징후는 정상이었고 오른쪽 늑골척추각 압통이 있었다. 요검사에서 적혈구 70개/고배율 시야와 봉투 모양 결정이 보였다. 복부 CT에서 오른쪽 근위 요관에 6 mm 결석과 왼쪽 신장에 4 mm 결석 두 개가 보였다. 현재 상태에 가장 크게 기여한 요인은?

## 선택지

A. 부갑상샘 선종
B. 비타민 D 과다
C. 지방산 흡수장애
D. 높은 소변 pH

## 해설

소장 절제 뒤 지방 흡수장애(C)가 생기면 장내 유리 지방산이 칼슘과 결합한다. 그 결과 옥살산을 불용성으로 묶어줄 칼슘이 줄고, 유리 옥살산의 장 흡수와 요중 배설이 증가하여 옥살산칼슘 결석 위험이 높아진다. 봉투 모양 결정도 이에 합당하다. 지방산이 옥살산과 결합하여 흡수가 감소한다는 설명은 반대다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 C 유지. 지방산-칼슘 결합으로 유리 옥살산 흡수가 증가하는 장성 고옥살산뇨 기전을 반대로 쓴 오류 교정.
- https://uroweb.org/guidelines/urolithiasis/chapter/guidelines

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000711
