---
type: qbank
schema_version: 1
id: medqa-us-train-006844
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2ce8417ce0b0e821214c5677cc53f47fb390525efbeb1bfe61a851c2228c4970
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "포르피리아 큐타네아 타르다"
  - "수포성 광과민성 피부질환"
  - "소변 우로포르피린"
question_type: diagnosis
related_disease_slugs:
  - MDQg64K067aE67mEL-2PrOultO2UvOumsOymnSAoUG9ycGh5cmlhKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

40세 여성이 6일 동안 손, 전완 및 얼굴에 통증 없는 물집이 생겨 내원했다. 일부 물집은 터져 맑은 액체가 나왔다. 그 외 건강하다. 수년간 야간 경비원으로 일하다 2주 전 주간 근무로 바꾸었고 지난주 새 금속 손목시계를 착용하기 시작했다. 어머니도 과거 유사한 발진이 있었다. 유일한 약물은 에스트로겐 기반 경구피임약이다. 매일 맥주 2잔, 주말에는 가끔 더 많이 마신다. 과거 정맥주사 헤로인을 사용했으나 20년 전 중단했다. 활력징후는 정상이다. 팔, 손등, 귀 및 얼굴에 다양한 치유 단계의 수포와 진물 나는 미란, 위축성 흰 흉터와 과색소침착 반점이 있다. 구강검사는 정상이다. 추가 평가에서 다음 중 어떤 소견이 나타날 가능성이 가장 높은가?

## 선택지

A. 항-Smith 항체 상승
B. 수두-대상포진 바이러스 항체 상승
C. 피부 첩포검사 양성
D. 소변 우로포르피린 증가

## 해설

손등·얼굴 등 광노출 부위의 취약성 수포·미란·흉터와 과색소침착은 PCT를 지지한다. Estrogen·음주와 간질환 위험 등이 연관될 수 있고 소변 uroporphyrin 증가(D)가 예상된다. 이는 감염이 아니라 uroporphyrinogen decarboxylase 기능 저하와 연관된 heme 합성 대사질환이다. 가족력만으로 특정 유전형을 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. PCT D를 감염이라고 한 오류를 비감염성 heme 합성 대사질환으로 교정한다.
- 공식/학회 근거: https://www.bad.org.uk/pils/porphyria-cutanea-tarda

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006844
