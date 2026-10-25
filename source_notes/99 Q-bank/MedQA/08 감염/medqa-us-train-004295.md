---
type: qbank
schema_version: 1
id: medqa-us-train-004295
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5e0dac9e4ee695d6aac8cba9c40d14722275c33011469a3907c9f5745fc4370b
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "감염성 단핵구증"
  - "엡스타인-바 바이러스"
  - "단핵구증 반점검사"
related_disease_slugs:
  - MDgg6rCQ7Je8L-qwkOyXvC5tZA
question_type: 임상증례 객관식
difficulty: complex
answer: A
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

19세 여자가 2주간 지속된 인후통으로 가정의학센터에 내원했다. 낮에 점점 피곤하고 대학 수업 중 깨어 있기 어렵다. 영양상태는 좋아 보이지만 활력이 낮다. 심박수 82회/분, 호흡수 14회/분, 체온 37.8°C, 혈압 112/82 mmHg이다. 인두 사진이 제시되어 있고 목에서 후경부 림프절병증이 만져진다. 막은 긁어도 출혈하지 않는다. 이 증후군을 가장 특이적으로 검출하는 소견은 무엇인가?

## 선택지

A. 양성 단핵구증 반점검사
B. 양성 신속 연쇄상구균 검사
C. 트랜스아미나제 상승
D. 뢰플러 배지에서 균 성장

## 해설


인후통·심한 피로·후경부 림프절병증은 전염성 단핵구증을 시사하여 선택지 중 heterophile antibody 기반 Monospot A가 가장 관련된다. 다만 위양성/위음성이 가능하고 특히 이른 시기나 어린 소아에서 음성일 수 있어 EBV 자체를 확진하는 유일 검사는 아니다. 필요한 경우 EBV 특이 VCA/EBNA 항체로 평가한다. 사진이 없으므로 관찰되지 않은 인두 형태를 추가하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004295 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Monospot A는 해당 선택지에서 유용하나 EBV 확진/모든 연령 최민감 검사로 과장하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/epstein-barr/php/laboratories/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004295
