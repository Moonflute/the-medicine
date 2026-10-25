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
answer: C
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

다낭성 난소 증후군(polycystic ovarian syndrome), 우울증, 만성 양측 귀 감염 병력이 있는 25세 여성이 우측 귀 고막성형술(tympanoplasty)을 받은 지 12주 후에 이비인후과 외래에 내원하였다. 1주일 전 청력 검사 결과 청력이 예상대로 20데시벨(decibels) 향상된 것으로 나타났다. 그러나 환자는 식사할 때와 귀걸이를 착용할 때 간헐적으로 찌르는 듯한 통증이 있다고 보고하였다. 환자는 지역 백화점 계산원으로 일하며 스트레스가 많고 수면 상태가 좋지 않다고 말한다. 세수를 할 때 목 통증이나 압통은 없다고 한다. 신체 검진에서 양측 이주 전(preauricular) 또는 하악 촉진 시 압통은 유발되지 않았다. 턱에서 클릭음(clicking)은 들리지 않았다. 우측 이개 후방(postauricular)을 두드렸을 때 우측 편도 부위에 압통이 발생하였다. 어금니는 양측이 대칭적이고 고르게 보였다. 목젖은 정중앙에 위치하며 구역 반사(gag reflex)는 정상이다. 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 비전형 편두통(Atypical migraine)
B. 군발 두통(Cluster headache)
C. 설인신경통(Glossopharyngeal neuralgia)
D. 삼차신경통(Trigeminal neuralgia)

## 해설

짧게 찌르는 듯한 통증이 먹을 때 발생하고 편도 부위와 귀에 연관되어 나타나는 양상은 설인신경통 C에 가장 가깝다. 설인신경은 편도·인두의 감각과 고실가지를 통한 중이 감각에 관여하여 인두통과 연관통성 이통을 설명한다. 귀 뒤 피부 전체가 설인신경의 지배영역인 것은 아니다. 하악 촉진 압통·관절 클릭이 없어 턱관절 질환은 덜 지지되며, 구역반사가 정상이어도 신경통을 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 설인신경통 C는 유지하되 설인신경이 귀 뒤 피부와 편도를 직접 잇는다는 해부학적 과장을 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000945
