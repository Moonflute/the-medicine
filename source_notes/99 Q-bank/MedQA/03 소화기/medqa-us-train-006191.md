---
type: qbank
schema_version: 1
id: medqa-us-train-006191
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e4aa8fa0f7e523790a6b60d5ac62dae55157e0116896a03c576291d6912f0c08
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "난치성 복수"
  - "알코올성 간경변"
  - "대량 복수천자"
  - "Alcoholic cirrhosis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITqsr3rs4Dspp0gKExpdmVyIENpcnJob3NpcykubWQ
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

52세 남성이 지난 2개월 동안 점점 심해지는 복부팽만과 체중 증가로 내원했다. 1년 전 다량의 복수를 동반한 알코올성 간경변을 진단받았고 알코올 사용과 관련된 박출률 저하 심부전도 있다. 6개월 동안 금주하고 저염식을 따랐으며 프로프라놀롤, 스피로놀락톤 및 푸로세미드를 복용한다. 체온은 36.7°C(98°F), 맥박은 분당 90회, 혈압은 109/56 mmHg이다. 손바닥 홍반, 얼굴과 몸통의 거미혈관종, 배꼽 주위의 두드러진 혈관이 있고 복부는 팽팽하게 팽창했으나 압통은 없다. 타진에서 체위에 따라 이동하는 둔탁음이 있고 팔을 뻗어 손목을 펴면 손이 퍼덕거린다. 정신상태검사에서 주의력이 감소되어 있다. 혈청 Na⁺ 136 mEq/L, 크레아티닌 0.9 mg/dL, 알부민 3.6 g/dL, 총 빌리루빈 1.9 mg/dL, INR 1.0이다. 다음 중 가장 적절한 치료의 다음 단계는 무엇인가?

## 선택지

A. 경정맥 간내 문맥전신 단락술 의뢰
B. 간이식 의뢰
C. 복막정맥 단락술 의뢰
D. 대량 복수천자 시행

## 해설

팽팽한 대량복수는 치료적 대량천자 D로 완화한다. 배액량이 크면 albumin 보충을 포함한 순환장애 예방을 적용하고 신기능/혈압을 감시한다. HE 촉발요인과 복수감염도 평가한다. 기존 HFrEF·HE는 TIPS 위험요인이며 이식평가 등 장기관리가 단지 불필요하거나 더 침습적이라 배제되는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 긴장성 복수 D를 albumin과 합병증평가에 연결하고 HFrEF/HE의 TIPS위험을 명시.
- https://aasldpubs.onlinelibrary.wiley.com/doi/full/10.1002/hep.31884

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006191
