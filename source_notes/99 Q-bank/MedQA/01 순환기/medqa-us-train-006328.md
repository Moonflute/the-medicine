---
type: qbank
schema_version: 1
id: medqa-us-train-006328
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9ff63416745b17e801db0afeadeb4e1e039484bee8ce184a7700cd60b4a28847
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "심장압전"
  - "이완기 압력 평형"
  - "폐쇄성 쇼크"
  - "Cardiac tamponade"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOyepSDriIzrprzspp0gKENhcmRpYWMgVGFtcG9uYWRlKS5tZA
question_type: diagnosis
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

57세 남성이 교통사고 후 응급실에 내원했다. 시속 25마일로 달리던 차량이 뒤에서 추돌했을 때 뒷좌석에서 안전벨트를 매고 있었다. 과거력으로 당뇨병, 고혈압 및 만성폐쇄성폐질환이 있다. 체온은 97.5°F(36.4°C), 혈압은 97/68 mmHg, 맥박은 분당 130회, 호흡수는 분당 22회, 실내 공기에서 산소포화도는 99%이다. 이후 흉부 방사선 촬영, 심전도, FAST 검사 및 혈청 화학검사를 시행했다. 심장 도관술에서 모든 심장방의 이완기 압력이 같아지는 소견이 보였다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 울혈성 심부전
B. 패혈성 쇼크
C. 심장압전
D. 긴장성 기흉

## 해설

외상 후 심낭내 혈액 등으로 심장이 압박되면 심실충만이 제한되고 이완기압이 평준화될 수 있어 C의 압전이 적합하다. 이는 폐쇄성쇼크의 저박출·저혈압 기전이지 '저출혈'이 특징이라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 외상성 압전 C의 정맥압/저박출 기전을 잘못된 저출혈 표현 대신 정확히 설명.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006328
