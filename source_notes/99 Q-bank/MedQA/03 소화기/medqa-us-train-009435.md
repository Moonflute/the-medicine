---
type: qbank
schema_version: 1
id: medqa-us-train-009435
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f62a2591aa1d9576f1605f84e56912388f1f9b470869df25da6e96a7863bed5f
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "cirrhosis with ascites"
  - "복수가 동반된 간경변"
  - "spontaneous bacterial peritonitis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_snpDrsJzshLEg7IS46regIOuzteunieyXvCAoU3BvbnRhbmVvdXMgQmFjdGVyaWFsIFBlcml0b25pdGlzKS5tZA
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITqsr3rs4Dspp0gKExpdmVyIENpcnJob3NpcykubWQ
question_type: management
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

47세 여성이 4시간 전 시작된 복통과 오른쪽 어깨 통증으로 응급실에 왔다. 오심과 두 차례 구토가 있고, 마지막 식사 후 시작된 통증은 지속적이며 강도 10점 만점에 7점이다. 지난 4개월 동안 비슷한 발작이 여러 번 있었지만 저절로 호전되었다. 하루 보드카 2파인트를 마신다. 아파 보이며 체온 38.4°C, 맥박 110회/분, 호흡수 20회/분, 혈압 165/90 mmHg이다. 발한과 몸통·등의 여러 모세혈관확장증이 있고 복부가 팽창되며 우상복부 압통, 자발성 방어, 이동성 탁음, 간비대가 있다. 백혈구 16,300/mm³, 혈소판 150,000/mm³, PT 20초(INR 1.3), 총 빌리루빈 2.1 mg/dL, 알부민 3.1 g/dL이다. 초음파에서 담낭에 작은 결석 여러 개, 담낭벽의 액체와 비후, 담낭 주위 액체 및 지방 침윤이 보인다. 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 정맥 비타민 K
B. 복수 천자
C. 복강경 담낭절제술
D. 개복 담낭절제술

## 해설


정답 B. 간경변·복수 환자가 발열과 복통으로 내원하면 조기에 진단적 복수천자를 시행해 PMN 수와 배양 등을 평가해야 한다. 그러나 이 환자는 Murphy 징후와 담낭벽 비후·주위 염증 등 담낭염 소견도 있으므로 담낭 감염원 평가와 적절한 항생제·외과 진료를 병행해야 한다. 복수천자를 기다리며 필요한 치료를 지연하지 않는다. 본문만으로 SBP를 확진하거나 다른 복강 내 감염을 제외할 수 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009435 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 복수+감염 증상의 진단적 복수천자 B 유지하되 영상상 담낭염을 무시하거나 SBP 확진이라고 단정한 부분 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://aasldpubs.onlinelibrary.wiley.com/doi/full/10.1002/hep.31884
- https://pmc.ncbi.nlm.nih.gov/articles/7643471/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009435
