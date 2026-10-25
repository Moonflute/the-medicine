---
type: qbank
schema_version: 1
id: medqa-us-train-001474
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:947bd58efd847b58d3c8db716c8f5d185bf0467ee0933ab538dab2744865aea2
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "cholelithiasis"
  - "choledocholithiasis"
  - "biliary colic"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_sk7jqsJzrj4wgKEdhbGxzdG9uZSkubWQ
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 여성이 10시간 동안 간헐적으로 발생한 날카로운 오른쪽 상복부 통증과 오심으로 응급실에 내원했다. 세 차례 구토했으나 발열, 오한, 설사 또는 요로 증상은 없다. 고등학생인 두 자녀가 있다. 키는 165 cm (5 ft 5 in), 체중은 86 kg (190 lb), BMI는 32 kg/m2이다. 체온은 37°C (98.6°F), 맥박은 100회/분, 혈압은 140/90 mm Hg이다. 경미한 공막 황달이 있고 복부는 부드럽고 팽만이 없으며 오른쪽 상복부 압통이 있으나 근육 방어나 반발통은 없다. 장음은 정상이다. 헤모글로빈 14 g/dL, 백혈구 9,000/mm3, 혈소판 160,000/mm3, ALP 238 U/L, AST 60 U/L, 총 빌리루빈 2.8 mg/dL, 직접 빌리루빈 2.1 mg/dL이다. 다음 중 진단의 다음 단계로 가장 적절한 것은 무엇인가?

## 선택지

A. 복부 CT
B. 경복부 초음파
C. 내시경적 역행성 담췌관조영술
D. 담도 HIDA 스캔

## 해설

정답은 B이다. 안정된 우상복부 통증·직접황달과 담즙정체성 검사 이상에서 경복부 초음파로 담낭결석과 담관 확장을 우선 평가한다. 비침습적인 초기 검사라는 의미이며 모든 총담관결석에 가장 민감한 검사는 아니다. 결과와 임상 위험에 따라 MRCP/EUS 또는 치료 ERCP를 선택한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 초음파는 초기 담도검사지만 모든 담관결석에 가장 민감하다는 과장 제거.
- https://acsearch.acr.org/list/TopicNarrativePdf?topicId=132
- https://www.asge.org/docs/default-source/guidelines/asge-guideline-on-the-role-of-endoscopy-in-the-evaluation-and-management-of-choledocholithiasis-2019-june-gie.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001474
