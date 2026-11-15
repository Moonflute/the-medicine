---
type: qbank
schema_version: 1
id: medqa-us-train-003869
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2076ec2f2729d2c83c9404f3206e8c55b863bafc1375790b8157f04db77be77b
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "Cushing syndrome"
  - "hypercortisolism"
  - "striae"
  - "dexamethasone suppression test"
related_disease_slugs:
  - MDQg64K067aE67mEL-y_oOyLsSDspp3tm4TqtbAgKEN1c2hpbmcncyBTeW5kcm9tZSkubWQ
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
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

55세 남성에게 쉽게 드는 멍, 넓은 자주색 복부 선조와 근위부 근력 저하가 생겼다. 최근 고혈압과 고혈당도 나빠졌다. 경구·주사·흡입 스테로이드 노출은 없다. 쿠싱증후군의 첫 생화학 검사로 적절한 것은?

## 선택지

A. 1 mg 야간 덱사메타손 억제검사
B. 뇌하수체 MRI
C. 혈장 ACTH 단독 검사
D. 코신트로핀 자극검사

## 해설

의심할 임상 소견이 여러 개라면 외부 스테로이드 사용을 확인한 뒤 저용량 덱사메타손 억제검사 등으로 코르티솔 과다부터 평가한다. ACTH와 영상은 과다 분비를 확인한 뒤 원인을 감별하기 위한 검사다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Cushing 선별 A 유지. 원인검사 때문에 중증HTN 치료를 미루거나 metformin을 혈압약으로 부른 오류 수정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12963774/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003869
- https://doi.org/10.1507/endocrj.EJ25-0492
