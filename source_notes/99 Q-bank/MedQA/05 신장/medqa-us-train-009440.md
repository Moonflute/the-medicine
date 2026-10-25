---
type: qbank
schema_version: 1
id: medqa-us-train-009440
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b88b3ce5b115b1b785264f000c98ef322a0b4d3724dd9f73b46360f811d725b2
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "renal artery stenosis"
  - "신동맥 협착"
  - "secondary hyperaldosteronism"
related_disease_slugs:
  - MDUg7Iug7J6lL-yLoO2YiOq0gOyEsSDqs6DtmIjslZUgKFJlbm92YXNjdWxhciBIeXBlcnRlbnNpb24pLm1k
  - MDQg64K067aE67mEL-ydtOywqOyEsSDslYzrj4TsiqTthYzroaDspp0gKFNlY29uZGFyeSBBbGRvc3Rlcm9uaXNtKS5tZA
question_type: investigation
difficulty: complex
answer: "D"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMiDtmLjtnaHquLAvRmx1dGljYXNvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2xpbmRhbXljaW4ubWQ
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0NldGlyaXppbmUubWQ
curation_status: "revised"
curation_reason: "BMI32를 저체중이라 한 오류와 이소성 aldosterone이라는 잘못된 용어 교정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

30세 여성이 2개월간 심한 두통과 어지럼으로 내원했다. 한 달 전부터 왼쪽 귀에서 ‘쉭’ 소리가 난다. 알레르기 비염과 여드름이 있고 언니가 갑상선암 치료 중이다. 레보세티리진, 국소 클린다마이신, 아젤라스틴-플루티카손 비강 스프레이를 복용한다. 키 155 cm, 체중 77 kg, BMI 32 kg/m²이며 혈압 168/96 mmHg이다. 얼굴과 등에 낭성 여드름이 있고 왼쪽 목과 복부에서 잡음이 들린다. 신경학적 국소 소견은 없다. 추가 검사에서 가장 가능성 높은 소견은 무엇인가?

## 선택지

A. 24시간 소변 코르티솔 증가
B. 밤에 비정상 호흡 양상
C. 부갑상선 선종
D. 레닌 수치 상승

## 해설

젊은 여성의 심한 고혈압·복부 및 경부 혈관 잡음·박동성 이명은 여러 혈관을 침범한 섬유근형성이상(FMD)을 시사한다. 신동맥 저관류는 renin 분비를 자극해 이차성 고알도스테론증을 유발할 수 있다. 이 환자는 저체중이 아니라 비만이며 renin 상승만으로 FMD를 확진하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009440

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: BMI32를 저체중이라 한 오류와 이소성 aldosterone이라는 잘못된 용어 교정.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
