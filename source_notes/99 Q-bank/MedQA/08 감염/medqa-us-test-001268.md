---
type: qbank
schema_version: 1
id: medqa-us-test-001268
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:764b91a87141487b038b6e2cf4fe18c3dcf94f46f83ae7c735397ea9cda3851f
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "열대열 말라리아"
  - "Plasmodium falciparum"
  - "말라리아 용혈"
related_disease_slugs:
  - MDgg6rCQ7Je8L-unkOudvOumrOyVhCAoTWFsYXJpYSkubWQ
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

서아프리카에서 귀국한 환자에게 고열과 황달이 생겼다. 혈액도말에서 열대열 말라리아가 확인됐고, 환자는 혼돈을 보이며 혈압이 78/48mmHg다. 수액 등 초기 소생을 시행하면서 우선 투여할 항말라리아제는?

## 선택지

A. 경구 아르테메테르/루메판트린 단독
B. 정맥 아르테수네이트
C. 경구 클로로퀸
D. 경구 프리마퀸 단독

## 해설


의식장애와 쇼크는 중증 말라리아 소견이다. 가능한 한 신속히 정맥 아르테수네이트를 시작하고, 안정된 뒤 지침에 맞는 경구 후속요법을 마친다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-001268 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 인도 여행후 말라리아 B 유지. 누락된 불완전 chloroquine 예방 복용력을 복구하고 다른종은 중증용혈 불가라는 단정 제거.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001268
- https://www.kdca.go.kr/bbs/kdca/55/307327/download.do
