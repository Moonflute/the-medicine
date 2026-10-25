---
type: qbank
schema_version: 1
id: medqa-us-train-004237
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f1e8456238172393ded3d1f9a836db0ad8200d5ce239f11db3baf38464212a80
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "포상기태"
  - "임신성 영양막 질환"
  - "융모성 부종"
question_type: 임상증례 객관식
related_disease_slugs:
  - MTMg67aA7J246rO8L-2PrOyDgeq4sO2DnCAoTW9sYXIgUHJlZ25hbmN5KS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

28세 초임부가 12시간 동안 지속된 하복부 통증과 질 출혈로 응급실에 왔다. 3주간 오심과 피로가 있었고 마지막 월경은 8주 전이다. 그 전에는 30일 간격으로 규칙적이고 4일간 지속되는 월경을 했다. 질환 병력과 복용약은 없다. 체온 37°C, 맥박 95회/분, 혈압 100/70 mmHg이다. 골반검사는 통증이 있고 자궁 크기는 임신 13주에 해당한다. 소변 임신검사는 양성, β-hCG는 106,000 mIU/mL이다. 질식 초음파에서 불명확한 무정형 태아 부분과 여러 낭성 공간을 가진 큰 태반이 보인다. 이 상태의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 태반의 자궁근층 내 착상
B. 영양막 조직의 악성 변환
C. 융모의 팽창을 동반한 영양막 증식
D. 자궁경부를 덮는 태반의 이상 위치

## 해설

무월경 8주에 비해 큰 자궁, 높은 hCG, 낭성 태반 및 비정상 태아 부분은 부분포상기태를 시사한다. 기전은 융모의 수종성 팽창과 영양막 증식(C)이다. 자궁이 13주 크기라는 뜻이지 실제 임신 주수가 13주로 확정된 것은 아니다. 영양막 증식 자체를 악성 변환과 동일시하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 포상기태의 융모 부종·영양막 증식 C 유지. 임신 주수 13주 단정 및 양수성 융모증 오역을 삭제.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004237
