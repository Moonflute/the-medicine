---
type: qbank
schema_version: 1
id: medqa-us-test-000718
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:6a37b6bfd7d5ed0cd81fdfe058d1ce27b21c01718b9e0731ba26d17844cfe8a9
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "만성신장병"
  - "이차성 부갑상샘기능항진증"
  - "신성 골이영양증"
related_disease_slugs:
  - MDQg64K067aE67mEL-u2gOqwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVycGFyYXRoeXJvaWRpc20pLm1k
  - MDUg7Iug7J6lL-unjOyEsSDsvantjKXrs5EgKENLRCkgKENocm9uaWMgS2lkbmV5IERpc2Vhc2UgKENLRCkpLm1k
question_type: diagnosis
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9TZXJ0cmFsaW5lLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

장기간 투석 중인 63세 여성의 칼슘은 8.1 mg/dL, 인은 6.8 mg/dL, 온전한 PTH는 640 pg/mL이다. 비슷한 검사 소견이 반복되며 칼슘이 높았던 적은 없다. 가장 가능성 높은 진단은?

## 선택지

A. 삼차성 부갑상선기능항진증
B. 만성콩팥병에 의한 이차성 부갑상선기능항진증
C. 부갑상선기능저하증
D. 원발성 부갑상선기능항진증

## 해설

진행된 만성콩팥병에서는 인산 배설과 활성 비타민 D 생성이 줄어 PTH가 보상적으로 증가한다. 반복된 고인산혈증과 낮은 칼슘은 자율 분비에 의한 고칼슘혈증이 동반되기 쉬운 삼차성과 구별하는 단서다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 B 유지. 인산 저하가 아니라 인산 저류·활성 비타민 D 감소에 따른 CKD-MBD/이차성 PTH 상승으로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000718
- https://kdigo.org/guidelines/ckd-mbd/
