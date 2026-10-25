---
type: qbank
schema_version: 1
id: medqa-us-train-000031
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:70395c7cadc8fc80b7142d79baaddc895b97a40f3fc7b14536afd5b516b48fe2
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "Wernicke-Korsakoff syndrome"
  - "alcoholism"
question_type: mechanism
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-uyoOultOuLiOy8gC3svZTrpbTsgqzsvZTtlIQg7Kad7ZuE6rWwIChXZXJuaWNrZS1Lb3JzYWtvZmYgU3luZHJvbWUpLm1k
difficulty: standard
answer: A
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

38세 남성이 1주일간 지속되는 복시(double vision)를 주소로 내원하였다. 환자가 진찰실로 들어올 때, 의사는 환자가 넓은 보폭의 보행(broad-based gait)을 하는 것을 관찰하였다. 환자의 아내는 남편이 지난 5년간 알코올 의존 상태였으며 최근 몇 달간 알코올 섭취량이 상당히 증가했다고 알렸다. 또한 아내는 남편이 시간이 지남에 따라 가족들에게 무관심해졌고 자주 흥분하는 모습을 보인다고 보고하였다. 그녀는 또한 그의 기억력이 상당히 저하되었으며, 특정 세부 사항에 대해 질문받으면 종종 잘못 기억하지만, 자신의 버전이 사실이라고 주장한다고 말하였다. 신체 검진상 활력 징후는 안정적이었으나, 의사가 현재 어디에 있는지 물었을 때 환자는 혼란스러워 보였다. 신경학적 검진에서는 안구진탕(nystagmus)이 관찰되었다. 이 환자의 중추신경계 병태생리에서 가장 먼저 나타나는 변화를 설명하는 것은 다음 중 무엇인가?

## 선택지

A. 성상교세포(astrocyte) 내 α-케토글루타르산 탈수소효소(α-ketoglutarate dehydrogenase) 활성 감소
B. 세포외 글루타메이트(glutamate) 농도 증가
C. 성상교세포 내 젖산(lactate) 증가
D. 혈액-뇌 장벽(blood-brain barrier)의 파괴

## 해설

안구운동 이상, 실조와 혼돈 및 기억 장애는 알코올 관련 티아민 결핍의 베르니케-코르사코프 양상을 시사한다. 티아민 이인산은 α-케토글루타르산 탈수소효소 등의 보조인자다. 성상교세포 티아민 결핍 실험에서는 해당 효소 활성 감소가 더 늦은 글루타메이트 운반 장애 등에 앞서 관찰되어 A가 출제 의도에 부합한다. 알코올이 직접 해당 효소를 억제한다고 단순화하거나 모든 환자에서 세포 변화의 시간 순서가 동일하게 측정됐다고 해석하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 알코올이 직접 해당 효소만 억제한다는 인상을 피하고 티아민 결핍을 매개로 한 초기 에너지 대사 장애를 일차 실험 근거와 연결했다.
- https://pubmed.ncbi.nlm.nih.gov/12838509/
- https://pubmed.ncbi.nlm.nih.gov/9489735/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000031
