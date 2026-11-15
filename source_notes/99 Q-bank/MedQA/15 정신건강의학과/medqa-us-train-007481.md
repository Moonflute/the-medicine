---
type: qbank
schema_version: 1
id: medqa-us-train-007481
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ff9732f359714560a3ef2517fff859bb25b506fa2809062fbaaf86393a3041ac
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "비전형 우울증"
  - "플루옥세틴"
  - "MAO 억제제"
  - "세로토닌 증후군"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yEuOuhnO2GoOuLjCDspp3tm4TqtbAgKFNlcm90b25pbiBTeW5kcm9tZSkubWQ
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9CdXByb3Bpb24ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

우울장애 환자가 플루옥세틴을 중단했다. 전문팀이 다른 선택을 검토한 뒤 모노아민산화효소 억제제로 전환하려 한다. 세로토닌 독성을 예방하기 위한 최소 약물 간격은?

## 선택지

A. 플루옥세틴 중단 후 적어도 5주
B. 마지막 플루옥세틴을 복용한 뒤 24시간
C. 플루옥세틴 중단 후 3일
D. 1주 동안 두 약을 겹쳐 투여

## 해설

플루옥세틴과 활성 대사체는 오래 남는다. 모노아민산화효소 억제제 시작 전 최소 5주 간격이 필요하며, 치료 기간이나 용량 등에 따라 더 길게 잡을 수 있다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007481
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=023cef65-c9c2-4d70-af66-198fb1b57714

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. SSRI-MAOI 병용 금기 답 유지. 다른 전환·증강도 자동으로 안전하다는 단정 제거하고 플루옥세틴의 긴 휴약 필요성 명시.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=7cc62309-cb23-4888-afba-bb774658a748&type=display
