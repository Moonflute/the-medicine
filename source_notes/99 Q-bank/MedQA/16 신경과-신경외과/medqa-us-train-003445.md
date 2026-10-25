---
type: qbank
schema_version: 1
id: medqa-us-train-003445
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d31e635b57c2c58b314cc7723f6b3d6ddddfc942e252bfb56ea12292e2c34a09
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "lateral medullary syndrome"
  - "Wallenberg syndrome"
  - "ipsilateral ataxia"
  - "contralateral pain and temperature loss"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tl4jtmIjshLEg64eM7KG47KSRIChJc2NoZW1pYyBzdHJva2UpLm1k
difficulty: standard
answer: B
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

55세 남성이 갑자기 시야가 흐려지고 어지러우며 한쪽으로 기울다가 넘어져 응급실에 왔다. 신경학적 검사에서 수평 안진, 오른팔 3/5 근력, 오른팔 운동실조, 왼팔과 왼다리의 통각 감각 소실이 있었다. 머리 CT는 정상이었다. 다음 중 중추신경계 병변의 가장 가능성 높은 위치는?

## 선택지

A. 앞쪽 척수
B. 외측 연수
C. 일차 체성감각피질
D. 시상

## 해설

수평 안진·몸의 오른쪽 기울어짐과 오른팔 실조는 전정핵 및 아래소뇌다리 주변 병변을, 왼쪽 팔다리 통각저하는 오른쪽 척수시상로 병변을 시사한다. 주어진 선지에서는 오른쪽 외측 연수(B)가 이 교차성 소견을 가장 잘 설명한다. 다만 오른팔 3/5의 명확한 근력저하는 전형적인 순수 외측연수증후군에서는 흔하지 않으므로 병변 확장 또는 검사 해석을 추가 평가해야 한다. 본문에 없는 구토나 구개·연하 장애를 관찰된 소견처럼 덧붙이지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 본문에 없는 구토를 추가하고 부정확한 신경로를 나열한 해설을 교정했다. 안진·동측 실조·반대측 통각저하로 B를 지지하되 근력저하는 전형적 순수 외측연수증후군과 불일치함을 명시했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003445
