---
type: qbank
schema_version: 1
id: medqa-us-train-004940
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9b57c34d280bcdac9cc245ba209eaa3b1f3cd7f5aa9cc1479f26ef92718b361c
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "자살 고위험"
  - "구체적 자살계획"
  - "정신과 입원"
  - "Suicide"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yekOyCtCAoU3VpY2lkZSkubWQ
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
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

만성 통증으로 진료받는 환자가 가까운 시일 내 자살할 구체적인 계획이 있고 수단에 접근할 수 있다고 말한다. 그 생각을 실행하지 않겠다고 약속하기는 어렵다고 한다. 가장 적절한 초기 대응은?

## 선택지

A. 혼자 두지 않고 안전을 확보해 즉시 응급 정신건강 평가와 보호적 치료를 연결한다
B. 통증 약만 조정하고 다음 날 혼자 다시 오게 한다
C. 안전하겠다는 서약서에 서명하면 귀가시킨다
D. 수단을 치웠다고 하면 추가 평가 없이 귀가시킨다

## 해설


구체적 자살 계획, 가까운 실행 시점과 수단 접근은 즉각적인 안전 조치가 필요한 단서다. 혼자 두지 않고 응급평가를 진행해 보호와 입원 필요성을 검토한다. 서약만으로 안전을 판단하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004940
- https://www.nice.org.uk/guidance/ng225/chapter/recommendations

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 영·한 본문·네 선지·답·해설 대조. 총기 접근·가까운 시일의 자살계획이 있는 환자를 입원 평가·안전 확보하는 원정답 타당. 총기 제거만 하고 귀가시키지 않음.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
