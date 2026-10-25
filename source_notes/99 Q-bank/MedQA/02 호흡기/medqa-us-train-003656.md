---
type: qbank
schema_version: 1
id: medqa-us-train-003656
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:40140895d3a9f93a79a4f707601969065fc4c07c802e639df9108cde2b826c82
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "allergic rhinitis"
  - "environmental allergen"
  - "nasal eosinophilia"
  - "boggy turbinates"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yVjOugiOultOq4sCDruYTsl7wgKEFsbGVyZ2ljIFJoaW5pdGlzKS5tZA
question_type: diagnosis
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

35세 여성이 겨울철 외출할 때 악화되는 지속적인 콧물로 내원했다. 비강 분비물 세포검사에서 호산구증가와 부은 비갑개가 관찰되었다. 가장 가능성 높은 진단은?

## 선택지

A. 추운 날씨
B. 코로나바이러스
C. 환경 알레르겐
D. 폐렴사슬알균

## 해설


겨울철 외출 시 악화되는 지속적 콧물과 비강 세포검사에서 호산구 증가 및 부은 비갑개는 알레르기성 비염의 전형적인 소견이다. 환경 알레르겐에 대한 IgE 매개 반응이 비강 점막을 부풀게 하고 호산구를 침윤시킨다. 따라서 가장 가능성 높은 진단은 환경 알레르겐에 의한 알레르기성 비염이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 비강 호산구·boggy turbinate는 선택지 중 알레르겐 C를 지지. 차가운 공기 자체가 IgE 항원이라는 의미 아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003656
