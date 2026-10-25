---
type: qbank
schema_version: 1
id: medqa-us-train-008980
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1ffc296a33db039832e2e473bbb8d246fd912a89699e09c130e333db481f32ae
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "vitamin A toxicity"
  - "hypervitaminosis A"
  - "supplement adverse effect"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67mE7YOA66-8IEEg64-F7ISx7KadIChWaXRhbWluIEEgVG94aWNpdHkpLm1k
question_type: diagnosis
difficulty: complex
answer: B
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

17세 여아가 오심, 구토, 두통, 흐린 시야로 진료실에 내원했다. 기말고사를 준비하며 어머니가 학교에 유행하는 ‘바이러스 질환’ 때문이라며 여러 보충제와 허브 제제를 먹이기 시작했다. 이런 치료에도 계속 악화되었고 어제 치어리딩 연습 중 구토와 어지럼으로 빠져야 했다. 어지럼 때문에 한 동작 중 넘어져 다른 학생의 정강이에 머리를 부딪혔다. 어지럼은 때때로 어질어질한 느낌이라고 한다. BMI 19kg/m²이고 최근 설사와 스트레스 때문이라고 생각하는 비특이적 전신 가려움이 있다. 불안, 우울증, 과도한 운동 습관 병력이 있다. 의식과 지남력은 정상이고 학교 참여나 집중력 저하는 없다. 피부가 건조하고 벗겨지며 약간 노랗다. 기억력과 뇌신경 III, IV, VI 검사는 정상이다. 다음 중 증상의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 두부 외상
B. 보충제 사용
C. 특발성 두개내압 상승
D. 전조가 있는 편두통

## 해설


정답 B. 보충제 시작 이후 악화된 두통·구토·시야흐림과 피부 건조/박탈은 고용량 preformed vitamin A 노출을 고려하게 한다. 증상은 머리 충돌보다 먼저 시작해 외상이 일차 원인일 가능성은 낮다. 이 소견들이 vitamin A 독성에만 특이한 것은 아니며 실제 제품 성분·용량과 다른 두개내압 상승 원인도 확인해야 한다. 보충제 사용이 가장 부합하는 선택지다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008980 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 보충제 후 두통·피부박탈의 vitaminA 독성 의심 B 유지, 특이적/성분확정이라는 과장 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://ods.od.nih.gov/factsheets/VitaminA-HealthProfessional/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008980
