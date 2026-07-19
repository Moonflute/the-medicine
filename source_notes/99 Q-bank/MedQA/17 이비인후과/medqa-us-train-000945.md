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
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
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


귀 수술 후 귀 뒤쪽을 두드렸을 때 편도 부위 통증이 나타나는 것은 설인신경(혀인두신경) 경로의 통증을 의미한다. 설인신경은 편도와 귀 뒤쪽을 연결하며, 삼키거나 귀에 압력이 가해질 때 통증을 유발한다. 따라서 설인신경통이 가장 가능성 높은 진단이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000945
