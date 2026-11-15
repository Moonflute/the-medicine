---
type: qbank
schema_version: 1
id: medqa-us-train-000945
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3a26607c751facaa02a00a28d03ac657223a6b7366bde591709ecf264944310c
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "polycystic ovarian syndrome"
  - "depression"
  - "chronic bilateral ear infections"
  - "atypical migraine"
  - "cluster headache"
  - "glossopharyngeal neuralgia"
  - "trigeminal neuralgia"
question_type: diagnosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-uLpOuCrSDrgpzshowg7Kad7ZuE6rWwIChQb2x5Y3lzdGljIE92YXJ5IFN5bmRyb21lKS5tZA
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-uFuOuFhOq4sCDsmrDsmrjspp0gKEdlcmlhdHJpYyBEZXByZXNzaW9uKS5tZA
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tjrjrkZDthrUgKE1pZ3JhaW5lKS5tZA
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_qtbDrsJzrkZDthrUgKENsdXN0ZXIgaGVhZGFjaGUpLm1k
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_sgrzssKjsi6Dqsr3thrUgKFRyaWdlbWluYWwgbmV1cmFsZ2lhKS5tZA
  - MTcg7J2067mE7J247ZuE6rO8L-unjOyEse2ZlOuGjeyEseykkeydtOyXvCAoQ2hyb25pYyBzdXBwdXJhdGl2ZSBvdGl0aXMgbWVkaWEpLm1k
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

47세 환자가 침을 삼키거나 말할 때마다 왼쪽 편도 깊은 곳에서 귀까지 전기가 오는 통증을 느낀다. 수초간 지속되고 발작 사이 귀와 인두 진찰은 정상이다. 가장 가능성 높은 진단은?

## 선택지

A. 삼차신경통
B. 설인신경통
C. 급성 중이염
D. 턱관절장애

## 해설

편도·혀뿌리·깊은 귀에 짧게 뻗치는 통증이 삼킴이나 말하기로 유발되면 설인신경통을 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 설인신경통 C는 유지하되 설인신경이 귀 뒤 피부와 편도를 직접 잇는다는 해부학적 과장을 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000945
- https://ichd-3.org/13-painful-cranial-neuropathies-and-other-facial-pains/13-2-glossopharyngeal-neuralgia/13-2-1-glossopharyngeal-neuralgia/
