---
type: qbank
schema_version: 1
id: medqa-us-train-001568
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:596211e593a484ef4e376f774eb2fbab68241b587985169302194e1097a4745a
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "sarcoidosis"
  - "noncaseating granulomas"
  - "hypercalcemia"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-ycoOycoeyiheymnSAoU2FyY29pZG9zaXMpLm1k
  - MDQg64K067aE67mEL-qzoOy5vOyKmO2YiOymnSAoSHlwZXJjYWxjZW1pYSkubWQ
question_type: mechanism
difficulty: standard
answer: A
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

35세 여성이 6개월 동안 지속된 마른기침과 운동 시 악화되는 호흡곤란으로 내원했다. 일주일에 세 번 달리기를 했지만 운동능력 저하와 양쪽 발목 통증으로 중단했다. 2개월 전 가족을 방문하기 위해 나이지리아에 몇 주 머물렀다. 고양이와 꽃가루에 알레르기가 있고 17년 동안 하루 한 갑을 피웠다. 활력징후는 정상이다. 양쪽 겨드랑이에 1.5–2 cm 크기의 압통 없는 림프절이 여러 개 있고 흉부 청진에서 수포음이 약간 들린다. 혈청 칼슘은 11.7 mg/dL이다. 흉부 X선에서 양측 폐문 림프절 비대와 양쪽 폐의 망상 음영이 보인다. 다음 중 소견의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 육아종성 염증
B. 종양성 변환
C. 바이러스 감염
D. 공기 포획

## 해설

양측 폐문 림프절병증, 폐 망상음영, 발목 관절 증상과 고칼슘혈증은 사르코이드증에 합당하다. 원인은 비건락성 육아종성 염증(A)이며 활성화된 대식세포의 비타민 D 활성화가 고칼슘혈증에 기여할 수 있다. 여행력 등이 있으므로 실제 확진에서는 감염성 육아종과 다른 원인도 감별한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A 유지. 비감소성이라는 오역을 비건락성으로 수정하고 육아종-고Ca 기전 설명.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001568
