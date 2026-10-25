---
type: qbank
schema_version: 1
id: medqa-us-train-000171
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c487f00d7140c993d8bf9501033dc086a065c260544cc2ee97ea102b95a7fda5
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "insomnia"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-u2iOuptCDsnqXslaAgKEluc29tbmlhIERpc29yZGVyKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

74세 여성이 수년간 지속된 수면 장애로 남편과 함께 내원하였다. 환자는 지난 2년간 매일 밤 수면 시간이 점차 줄어들었다고 말한다. 매일 밤 잠드는 데 20~25분이 걸리며 예전보다 아침에 더 일찍 깬다. 평균적으로 매일 밤 5~6시간을 잔다. 또한 밤에 여러 번 깨며 다시 잠들기까지 약 20분이 걸린다고 한다. 오후에 약간의 피로감을 느끼지만 낮잠은 자지 않는다. 남편은 환자가 코를 골지 않는다고 보고하였다. 환자는 매일 아침 커피 두 잔을 마시지만, 흡연이나 음주는 하지 않는다. 이틀에 한 번씩 남편, 반려견과 함께 45분간 산책을 한다. 키는 160cm, 체중은 55kg이며, 체질량지수(BMI)는 21kg/m2이다. 활력 징후는 정상 범위 내에 있다. 정신 상태 검사에서 환자는 협조적이며 약간 불안한 기분과 정상적인 정동 범위를 보인다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 수면 제한(Sleep restriction)
B. 플루라제팜(Flurazepam)
C. 안심시키기(Reassurance)
D. 역설적 의도(Paradoxical intention)

## 해설

이 사례는 노화에 따른 수면의 분절화와 이른 각성을 경험하지만, 입면·재입면에 약 20분이 걸리고 현저한 주간 기능 저하는 제시되지 않았다. 선택지 중에서는 수면 변화에 대한 설명과 안심(C), 수면 습관 평가가 적절하다. 그렇다고 모든 고령자에게 5~6시간 수면이 충분하다는 뜻은 아니며 고령자도 일반적으로 충분한 수면이 필요하다. 지속적인 피로·기능 저하, 우울증, 약물·의학적 원인이 있으면 재평가한다. 만성 불면장애가 확인되면 CBT-I 등 치료를 고려하지만, 이 문항에서 수면제한을 곧바로 정답으로 바꾸는 근거는 없다. 장시간 작용 벤조디아제핀인 플루라제팜을 일률적으로 쓰지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 정답 C와 다르게 수면제한 A를 정답이라 한 해설 교체. 노화 관련 변화에 대한 평가·교육을 설명하되 노인은5~6시간이면 충분하다는 오해 방지.
- https://www.nia.nih.gov/health/sleep/sleep-and-older-adults?c=Homepage&pid=Web&shortlink=dc203038&source_caller=ui
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12478568/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000171
