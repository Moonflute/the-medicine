---
type: qbank
schema_version: 1
id: medqa-us-train-009190
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4bf10bf522e2c788790238ed89f6123be8f4bfc4240c452419a3ed673d773546
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "endometriosis"
  - "자궁내막증"
  - "chronic pelvic pain"
question_type: investigation
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2gSDrgrTrp4nspp0gKEVuZG9tZXRyaW9zaXMpLm1k
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 여성이 골반통으로 일차의료기관에 내원했다. 수년간 월경 직전에 가장 심해지는 만성 통증이 있었고, 지난 2개월 동안 성교 중 통증도 악화되었다. 배뇨곤란, 질 분비물 또는 질 가려움은 없다. 임신한 적이 없으며 과거 피임을 위해 구리 자궁내장치를 사용했지만 월경과다를 악화시켜 1년 전에 제거했다. 현재 약 1년째 복합 경구피임약을 복용한다. 피임약으로 월경과다는 호전되었지만 통증은 호전되지 않았다. 과거력은 그 외 특이사항이 없다. 체온 98.0°F(36.7°C), 혈압 124/73 mmHg, 맥박 68회/분, 호흡수 12회/분이다. 질 진찰에서 자궁경부를 옆으로 움직일 때 압통이 있다. 골반 초음파는 정상이고 소변 임신검사는 음성이다. 진단을 확정하기 위한 다음 단계로 가장 적절한 것은 무엇인가?

## 선택지

A. 복부 초음파
B. 골반 MRI
C. 자궁경검사
D. 복강경검사

## 해설

주기적 골반통·성교통은 자궁내막증을 시사하며 정상 초음파도 표재성 병변을 배제하지 못한다. 이 환자는 경험적 피임약에도 통증이 지속되므로 상담 후 복강경 진단·치료(D)를 고려할 수 있다. 모든 의심 환자에게 수술을 거쳐야만 임상 진단이나 치료가 가능한 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 경험적 복합 피임약에도 지속되는 통증·정상 초음파에서 복강경 D는 합당한 선택. 모든 내막증 확진에 필수라는 단정 교정.
- https://www.acog.org/news/news-releases/2026/02/acog-publishes-new-endometriosis-clinical-guidance-aiming-shorten-time-diagnosis-improve-access-care
- https://www.nice.org.uk/guidance/ng73/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009190
