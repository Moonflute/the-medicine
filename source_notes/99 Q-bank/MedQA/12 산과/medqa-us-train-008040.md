---
type: qbank
schema_version: 1
id: medqa-us-train-008040
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cdad55879a2198e8a6843f7e7cd0792b30983885cf39007571ffd79fff4a6212
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "asymptomatic bacteriuria in pregnancy"
  - "E. coli"
  - "nitrofurantoin"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-ustOymneyDgSDshLjqt6Drh6ggKEFzeW1wdG9tYXRpYyBCYWN0ZXJpdXJpYSkubWQ
  - MDgg6rCQ7Je8L-uMgOyepeq3oCAoRS4gY29saSkubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qtqTslpHshLEg64yA7J6l7Je8IChVQykgKFVsY2VyYXRpdmUgQ29saXRpcykubWQ
difficulty: complex
answer: B
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

임신 10주인 18세 초임부가 첫 산전 방문을 위해 내원했다. 간헐적 구토를 동반한 오심이 있지만 출혈, 요로 증상, 복통은 없다. 고등학교를 갓 졸업했고 지역 식료품점에서 일한다. 복용 약물이나 약물 알레르기는 없다. 초기 검사에서 혈청 전해질, 신장기능, 간기능, 혈구 수치는 정상이다. 소변에서 백혈구 20/HPF, 검사 항생제에 모두 감수성인 E. coli 100,000 CFU 이상이 검출되었다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 증상이 생기면 관찰 및 치료
B. 7일간 니트로푸란토인
C. 관찰하고 1주 후 배양 반복
D. 임신 기간 내내 니트로푸란토인

## 해설

증상은 없어도 임신 중 E. coli ≥100,000 CFU/mL는 치료하며 감수성·금기에 맞는 5–7일 요법을 사용한다. 선택지 B의 7일 니트로푸란토인이 적절하다. 주된 근거는 산모 신우신염 및 불량 임신 결과 감소이지 태아 직접 감염만의 예방이 아니다. 첫 단회 감염에 임신 내내 예방약을 자동 사용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: pan-sensitive를 범발성으로 오역; ASB 치료 목적 교정.
- https://www.acog.org/clinical/clinical-guidance/clinical-consensus/articles/2023/08/urinary-tract-infections-in-pregnant-individuals

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008040
