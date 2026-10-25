---
type: qbank
schema_version: 1
id: medqa-us-train-002244
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e9aa03ec5fb6c2bcdf29126ba1b69c3fff9cc743701708e468ede50c792eca2f
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "Chagas disease"
  - "esophageal achalasia"
  - "barium swallow"
related_disease_slugs:
  - MDgg6rCQ7Je8L-q4sOyDney2qS5tZA
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
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

34세 여성이 6개월간 지속된 연하곤란과 반복적인 구토로 내원했다. 식사 후 몇 시간 뒤에도 구토물에서 음식물이 보였다. 지난 4개월 동안 체중이 약 3.0 kg 감소했다. 작년에 아르헨티나를 여행한 병력이 있다. 그 외 과거력은 특이사항이 없고 비흡연자이다. 혈압 118/75 mmHg, 호흡 17회/분, 맥박 78회/분, 체온 36.7°C, BMI 24 kg/m²이다. 복부 압통이나 팽만, 황달은 없다. 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 생검
B. 수술
C. 바륨 조영 X선 검사
D. 항생제 치료

## 해설


연하곤란과 구토가 식도 운동 장애를 시사하므로, 식도 확장 및 협착 확인을 위해 바륨 조영 검사가 가장 적절한 다음 단계이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 고형·액체 연하곤란/음식 역류로 이완불능증 의심; 주어진 선택지 중 바륨조영 C. 내시경으로 구조적 원인 배제 필요성은 별개.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002244
