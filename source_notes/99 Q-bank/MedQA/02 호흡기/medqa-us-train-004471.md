---
type: qbank
schema_version: 1
id: medqa-us-train-004471
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fb22c5e25af242ba1b79877bc870f77063af69ee20333a836bfb2e618d578a70
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "인플루엔자"
  - "바이러스성 폐렴"
  - "뉴라미니다제 억제제"
related_disease_slugs:
  - MDgg6rCQ7Je8L-yduO2UjOujqOyXlOyekCAoSW5mbHVlbnphKS5tZA
  - MDIg7Zi47Z2h6riwL-u5hOygle2YlSDtj5DroLQgKEF0eXBpY2FsIFBuZXVtb25pYSkubWQ
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowOCDqsJDsl7wvT3NlbHRhbWl2aXIubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

83세 요양시설 입소자가 하루 전부터 발열과 마른기침이 생겼다. 같은 시설에 인플루엔자가 확인된 사람이 여러 명 있다. 환자는 저산소증으로 입원이 필요하고, 인플루엔자 핵산검사 결과는 아직 나오지 않았다. 원인 치료로 지금 할 일은?

## 선택지

A. 검사가 양성으로 확인될 때까지 항바이러스 치료를 보류한다
B. 검사를 진행하면서 오셀타미비르를 시작한다
C. 저산소증과 무관하게 증상 완화제만 처방한다
D. 독감 백신을 맞히고 현재 감염은 치료하지 않는다

## 해설

중증이거나 합병증 위험이 큰 고령 환자에서 인플루엔자가 강하게 의심되면 검사를 진행하면서 조기에 항바이러스제를 투여한다. 치료를 검사 결과까지 미루지 않는다. 산소 공급 및 세균 동시감염 평가는 별도로 진행한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 B 유지. 고위험 인플루엔자 의심의 초기 항바이러스 치료를 공식 CDC로 확인하고 뉴라미니다제의 바이러스 방출 기전 명료화.
- https://www.cdc.gov/flu/hcp/antivirals/summary-clinicians.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004471
- https://www.kdca.go.kr/bbs/kdca/55/310104/download.do
- https://www.idsociety.org/practice-guideline/influenza/
