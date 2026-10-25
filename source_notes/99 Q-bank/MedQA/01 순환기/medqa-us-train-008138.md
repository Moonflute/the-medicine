---
type: qbank
schema_version: 1
id: medqa-us-train-008138
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6aad7f2af7c54508cf1b0d09c10e898fa64086e616b690b362394b475e5592dc
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "cardiac tamponade"
  - "pericardial effusion"
  - "right ventricular collapse"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOyepSDriIzrprzspp0gKENhcmRpYWMgVGFtcG9uYWRlKS5tZA
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

당뇨병, 만성폐쇄성폐질환, ST분절 상승 심근경색 병력이 있고 현재 투석 중인 67세 남자가 2시간 동안 호흡곤란으로 내원했다. 최근 투석을 빠뜨렸고 다른 약물도 잘 복용하지 않았다. 오늘 아침 절친이 사망했다는 소식을 듣고 상태가 더 나빠졌다. 체온 98.7°F(37.1°C), 혈압 87/48 mmHg, 맥박 130회/분, 호흡수 27회/분, 산소포화도 92%이다. 침상 초음파에서 심장을 둘러싼 무에코 테두리, 심한 심장 수축저하, 전반적 운동저하, 흉막 미끄럼은 보존된 상태에서 우심실 허탈이 보인다. 트로포닌은 0.72와 0.71 ng/mL이다. 가장 가능성 높은 진단은?

## 선택지

A. 심장눌림증
B. 심근경색
C. 타코츠보 심근병증
D. 긴장성 기흉

## 해설


초음파에서 심낭에 무에코 테두리와 우심실 붕괴가 보이며 저혈압·빈맥이 동반된 경우 심장압전이 의심된다. 심근경색이나 폐색전증은 이러한 초음소견을 보이지 않는다. 따라서 가장 가능성 높은 진단은 심장눌림증이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 투석 누락 후 저혈압과 심낭액·우심실 허탈의 명시적 초음파 소견은 심낭압전 A를 지지.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008138
