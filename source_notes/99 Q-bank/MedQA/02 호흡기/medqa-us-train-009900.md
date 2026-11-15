---
type: qbank
schema_version: 1
id: medqa-us-train-009900
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8881a2a3400669b62d7b7a88defe72660ddb541098a7549be01930b519398bbd
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "운동 유발 기관지수축"
  - "운동 유발 천식"
  - "알부테롤"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yatOuPmSDsnKDrsJwg7LKc7IudIChFeGVyY2lzZS1JbmR1Y2VkIEFzdGhtYSkubWQ
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzowMiDtmLjtnaHquLAvRmx1dGljYXNvbmUubWQ
  - ZHJ1ZzowMiDtmLjtnaHquLAvTW9udGVsdWthc3QubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 여성이 필요시 저용량 부데소니드/포르모테롤로 천식을 잘 조절하고 있다. 운동유발 기관지수축이 확인됐고, 배구를 할 때만 숨이 찬다. 운동을 계속하기 위한 적절한 방법은?

## 선택지

A. 평소 완화제로 쓰는 저용량 부데소니드/포르모테롤을 운동 전에 사용한다
B. 살메테롤 단독을 새로 추가해 운동 직후 사용한다
C. 배구를 완전히 중단한다
D. 운동할 때마다 경구 스테로이드를 미리 복용한다

## 해설

필요시 저용량 흡입 스테로이드/포르모테롤을 쓰는 환자는 같은 흡입기를 운동 전에 사용해 증상을 예방할 수 있다. 운동을 일률적으로 금지하지 않는다. 운동 시 제한이 계속되면 흡입법과 전체 천식 조절을 다시 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 운동 전 알부테롤 D는 유지하되 성인 천식의 장기 SABA 단독치료를 승인하지 않음.
- https://ginasthma.org/reports/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009900
- https://new.lungkorea.org/board/guide/view/14959
- https://ginasthma.org/2026-gina-strategy-report/
