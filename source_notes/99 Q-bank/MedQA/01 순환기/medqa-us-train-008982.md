---
type: qbank
schema_version: 1
id: medqa-us-train-008982
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c52c2f80223dae22df2964608151ab7db11ae108e4bd9150ff2db2e096d47075
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "ventricular fibrillation"
  - "ischemic cardiomyopathy"
  - "implantable cardioverter-defibrillator"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOq3vOuzkeymnSAoQ2FyZGlvbXlvcGF0aHkpLm1k
  - MDEg7Iic7ZmY6riwL-yLrOyLpCDsobDrj5ks7IS464-ZIChWZW50cmljdWxhciBmbHV0dGVyLCBmaWJyaWxsYXRpb24pLm1k
question_type: prevention
difficulty: standard
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQWRlbm9zaW5lLm1k
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTWFnbmVzaXVtU3VsZmF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

전벽 심근경색 후 좌심실 수축기능이 심하게 저하된 72세 남성이 심실세동으로 심정지를 일으켰다. 심폐소생술과 제세동으로 의식을 회복했고, 급성 허혈이나 전해질 이상 등 가역적 원인은 확인되지 않았다. 재발에 의한 돌연사를 예방하기 위한 장치는?

## 선택지

A. 경피 박동조율기
B. 삽입형 제세동기
C. 일시적 경정맥 심박동기
D. 삽입형 심전도 기록기

## 해설

가역적 원인이 없는 심실세동 심정지에서 생존하면 재발에 의한 돌연사를 예방하기 위해 삽입형 제세동기를 평가한다. 이 문항은 급성기 제세동이 아니라 회복 후 이차 예방을 묻는다. 전신 상태와 예상 생존기간도 고려한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 소생된 제세동 가능 심정지의 이차 예방 B를 설명하되 누락 ECG에서 VF 형태를 확정하지 않음.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001063

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008982
