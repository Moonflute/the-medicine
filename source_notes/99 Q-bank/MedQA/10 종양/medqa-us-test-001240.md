---
type: qbank
schema_version: 1
id: medqa-us-test-001240
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:9e148d8bc4efca5b1c18cb4f454dce826e5d65b7367b4fd7072727bf89ea6f4a
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "버킷 림프종"
  - "턱 종괴"
  - "EBV"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uyhO2CtyDrprztlITsooUgKEJ1cmtpdHQncyBMeW1waG9tYSkubWQ
  - MDgg6rCQ7Je8L-yXoeyKpO2DgOyduC3rsJQg67CU7J2065-s7IqkIOqwkOyXvCAoRUJWKSAoRXBzdGVpbi1CYXJyIFZpcnVzIEluZmVjdGlvbiAoRUJWKSkubWQ
question_type: diagnosis
difficulty: complex
answer: C
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

7세 남아가 2개월간 점점 커지는 오른쪽 턱 부종으로 진료를 받으러 왔다. 여러 항생제를 사용했지만 호전되지 않았고 발열, 오한, 야간발한은 없었다. 나이지리아에서 한 달 전 이주했으며 오른쪽 아래턱에 8×8 cm의 단단하고 움직이지 않으며 압통성인 종괴가 있고 치아와 구강점막이 변형되어 있었다. 생검의 조직병리 소견과 관련된 미생물은?

## 선택지

A. Bartonella henselae
B. 거대세포바이러스
C. 엡스타인-바 바이러스
D. Yersinia pestis

## 해설


나이지리아 출신 소아의 빠르게 커지는 하악 종괴는 endemic Burkitt 림프종을 시사하고 EBV(C)와 강한 연관이 있다. 실제 병리 그림은 없어 특정 현미경 소견을 확인한 것은 아니며 임상 단서와 선택지 비교로 C를 지지한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-001240 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 아프리카 소아 하악 종괴의 endemic Burkitt와 EBV C 유지. 누락 병리를 본 듯한 확정/내인성 표현 제거.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001240
