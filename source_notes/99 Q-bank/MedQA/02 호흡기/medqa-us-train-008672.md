---
type: qbank
schema_version: 1
id: medqa-us-train-008672
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2db0df845e2b43d5afd0d78339dc529e7d9988f4d6d5ad44120e4a28e7c3d1f2
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "spontaneous pneumomediastinum"
  - "Hamman sign"
  - "subcutaneous emphysema"
  - "Pneumomediastinum"
related_disease_slugs: []
question_type: management
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

17세 남성이 한 시간 전부터 시작된 심한 흉통으로 응급실에 내원했다. 무거운 물건을 들어 올린 직후 갑자기 시작되었고 통증은 지속된다. 중대한 질환 병력이나 복용 약물은 없다. 혈압 125/85mmHg, 맥박 89회/분, 호흡수 15회/분, 체온 36.7°C(98.1°F)이다. 쇄골상절흔의 피부가 약간 부어 있고 촉진 시 염발음이 난다. 왼쪽으로 누운 자세에서 전흉부를 청진하면 심장박동마다 딸깍하는 소리가 들린다. 그 외 검사는 정상이다. 흉부 X선이 제시되어 있다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 흉관 삽입
B. 바늘 흡인
C. 보충 산소
D. 수술적 탐색

## 해설

무거운 물건을 든 후 발생한 피하기종과 심박동에 맞춘 Hamman 징후는 자발성 종격동기종을 시사한다. 안정적이고 장기 손상이나 동반 기흉이 없는 경우에는 관찰, 진통 등 보존적 치료를 시행하며 필요에 따라 C의 보충 산소를 사용할 수 있다. 종격동기종 자체만으로 흉관을 삽입하지 않는다. 실제로는 누락된 흉부 영상으로 동반 기흉과 이차성 원인을 확인해야 한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Hamman 징후를 기흉과 혼동하고 원정답 C와 반대로 흉관 삽입을 주장한 해설을 교체.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10089890/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008672
