---
type: qbank
schema_version: 1
id: medqa-us-train-003286
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8a53a3b31b13983e37d46a3874b326c6ec497d33196d61a9f26f72633174970c
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "absence seizure"
  - "childhood absence epilepsy"
  - "3-Hz spike-and-wave"
  - "brief staring spells"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7IaM67Cc7J6RIChBYnNlbmNlIFNlaXp1cmUpLm1k
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

5세 남아가 하루에 10~20번씩 어머니에게 반응하지 않고 창밖을 바라보는 에피소드로 내원했다. 이때 평소보다 눈을 자주 깜빡이지만 이후 정상으로 돌아오며 30~60초 지속된다. 발달 이정표는 정상이고 출생과 최근 병력에 문제는 없다. 진료 중 에피소드에서 뇌파검사상 초당 3회의 극파-서파 방전이 보였다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 열성발작
B. 양성 국소간질
C. 청소년 근간대성 간질
D. 결신발작

## 해설

짧은 응시와 반응 중단, 눈 깜빡임 후 곧바로 회복하며 EEG에서 초당 3회의 극파-서파 방전이 나타나는 것은 결신발작(D)에 합당하다. 본문에는 지속시간이 30–60초로 제시되어 있으며 이를 10–20초라고 바꾸어 설명하지 않는다. 전형적인 결신발작은 대개 수초에서 수십 초로 짧지만 이 문항의 결정적 단서는 임상양상과 3 Hz 방전이다. 열이나 근간대성 경련·발작후 혼돈은 제시되지 않았다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 해설이 본문의 30–60초 지속시간을 10–20초로 바꾸어 설명한 것을 수정했다. 3 Hz 전반 극파-서파와 임상양상에 근거해 D를 유지한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003286
