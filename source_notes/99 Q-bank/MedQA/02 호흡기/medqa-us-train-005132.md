---
type: qbank
schema_version: 1
id: medqa-us-train-005132
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ce24db7f288d5fa06a3322792fcfd805a4bcc9a73b45651936269510928ab21a
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "객혈"
  - "폐암 의심"
  - "흡연 관련 기도질환"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOyDieyghOymnSAoUHVsbW9uYXJ5IEVtYm9saXNtKS5tZA
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: investigation
difficulty: standard
answer: A
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

57세 여성이 몇 주 사이 세 차례 객혈을 했다. 흡연력은 60갑년이다. 활력징후는 안정적이고 흉부 X선에서 뚜렷한 이상은 없었다. 출혈 원인을 찾기 위해 다음으로 시행할 영상검사는?

## 선택지

A. 조영증강 흉부 CT
B. 같은 날 흉부 X선을 반복한다
C. 흉부 초음파만 시행한다
D. 증상이 없을 때까지 영상검사를 하지 않는다

## 해설

국내 영상 지침은 반복 객혈 또는 폐암 위험이 높은 성인의 객혈에서 조영증강 흉부 CT를 권고한다. 고령·장기 흡연 환자에서 정상 흉부 X선만으로 폐암이나 다른 출혈 원인을 배제할 수 없다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 객혈 초기 CXR A가 악성을 배제하거나 종양 크기를 확정한다는 과장 교정.
- https://acsearch.acr.org/list/TopicNarrativePdf?topicId=107

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005132
- https://doi.org/10.3348/kjr.2018.19.5.866
