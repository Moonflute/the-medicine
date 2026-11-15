---
type: qbank
schema_version: 1
id: medqa-us-validation-000153
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:a44522c7f53d605622d1b0315376b306ce176e5a72bd064f49bd4a7621cb9a4b
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "환자 비밀보호"
  - "약물 과다복용"
  - "의료윤리"
question_type: management
related_disease_slugs: []
difficulty: complex
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
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

입원 환자의 이웃이 의사에게 ‘친한 사이’라며 환자가 왜 입원했고 어느 병동에 있는지 묻는다. 이웃은 진료에 관여하지 않고, 환자의 동의나 공개할 법적 근거도 없다. 적절한 답변은?

## 선택지

A. 걱정하시는 건 이해하지만 환자 정보를 알려드릴 수 없습니다
B. 입원 이유는 말할 수 없지만 병동은 알려드리겠습니다
C. 의료인이시니 진료에 관여하지 않아도 검사 결과는 알려드릴 수 있습니다
D. 가까운 이웃임을 확인하면 입원 이유를 알려드릴 수 있습니다

## 해설

의료법 제19조는 법령에서 허용한 경우가 아니면 업무 중 알게 된 환자 정보를 누설하지 못하게 한다. 의료인이라는 신분이나 친분만으로 확인하거나 공개할 수 없다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000153
- https://www.law.go.kr/LSW/lsSideInfoP.do?docCls=jo&joBrNo=00&joNo=0019&lsiSeq=283899&urlMode=lsScJoRltInfoR

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 치료 정보는 본인·법정대리인에게만 공개 가능하다는 과도한 개인정보 규칙을 교정. 비치료 동료의 사적 호기심에는 비공개 원정답 유지.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정하며 최신 지침 전수 검증을 뜻하지 않음).
- https://www.hhs.gov/hipaa/for-professionals/faq/when-does-hipaa-allow-a-health-care-provider-to-dicuss-information-with-family/index.html
