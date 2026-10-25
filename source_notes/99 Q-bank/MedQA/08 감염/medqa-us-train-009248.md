---
type: qbank
schema_version: 1
id: medqa-us-train-009248
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8c791279907bddbae2427f9e070f77170ab4d12d1c0a0982e17bdb06e164fb20
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "tertiary syphilis"
  - "3기 매독"
  - "syphilitic aortitis"
related_disease_slugs:
  - MDgg6rCQ7Je8L-unpOuPhSAoU3lwaGlsaXMpLm1k
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

39세 남자가 지난 3개월 동안 점점 심해지는 호흡곤란으로 응급실에 왔다. 아파트 3층까지 계단을 오를 수 없을 정도다. 6년 전 HIV를 진단받았고 현재 3제 항레트로바이러스 치료를 받고 있지만 복용을 자주 빠뜨린다. 체온 38.1°C, 맥박 90회/분, 호흡수 22회/분, 혈압 160/70 mmHg이다. 오른쪽 흉골연에서 가장 크게 들리는 4/6등급 전이완기 잡음이 있다. 동공은 4 mm로 둥글고 빛에 반응하지 않지만 펜 끝을 얼굴 가까이 가져가면 수축한다. 안구운동은 정상이다. 서서 팔을 앞으로 뻗고 눈을 감으라고 하면 균형을 잃고 뒤로 한 걸음 물러난다. 흉부 X선에서 종격동 확장이 보인다. 다음 중 진단을 확인하는 데 가장 도움이 되는 검사는 무엇인가?

## 선택지

A. 항핵항체
B. 혈액배양
C. 프라탁신 수치
D. 매독 트레포네마 검사

## 해설


대동맥판 역류·종격동 확장과 빛-근접반사 해리, 감각성 실조는 후기 매독의 심혈관·신경 침범을 시사한다. 선택지 중 treponemal 검사(D)가 맞으며 TPPA나 treponemal EIA 등이 해당한다. RPR/VDRL은 비트레포네마 검사로 다른 범주이며 임상상과 두 종류의 검사 및 필요한 신경매독 평가를 함께 해석한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009248 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 대동맥염·빛근접반사 해리·감각성 실조에서 매독 treponemal 검사 D 유지. RPR/VDRL을 treponemal 검사라고 부른 오류 수정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/mmwr/volumes/73/rr/rr7301a1.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009248
