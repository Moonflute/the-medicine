---
type: qbank
schema_version: 1
id: medqa-us-train-002116
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:235b51e4276d8e0eb4f3f0f7712335ee18f4e9143e8f398f001acc0cc97c9ae1
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "Horner syndrome"
  - "Pancoast tumor"
  - "apical lung cancer"
  - "sympathetic chain"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOyVlCAoTHVuZyBDYW5jZXIpLm1k
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tmLjrpbTrhIgg7Kad7ZuE6rWwIChIb3JuZXIgU3luZHJvbWUpLm1k
question_type: investigation
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

68세 남성이 정기 건강검진을 위해 내원했다. 아내는 왼쪽 눈이 오른쪽보다 작아 보인다고 했다. 3개월간 왼쪽 어깨와 팔 통증이 있었다. 고혈압과 관상동맥질환이 있다. 에날라프릴, 메토프롤롤, 아스피린, 아토르바스타틴을 복용 중이다. 30대에 임질을 앓아 치료받은 병력이 있다. 35년간 하루 담배 두 갑을 피웠다. 술은 마시지 않는다. 체온 37°C, 맥박 71회/분, 혈압 126/84 mmHg이다. 동공 크기가 다르며 어두운 곳에서 왼쪽 동공은 3 mm, 오른쪽은 5 mm이다. 왼쪽 눈꺼풀 처짐이 있다. 나머지 검사는 정상이다. 양쪽 눈에 아프라클로니딘 점안액을 넣자 왼쪽 동공은 5 mm, 오른쪽은 4 mm가 되었다. 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 압평 안압측정
B. 신속혈장리긴검사
C. 흉부 CT
D. 아세틸콜린 수용체 항체

## 해설

어두운 곳에서 더 뚜렷한 좌측 축동과 좌측 안검하수, 아프라클로니딘 후 동공부등의 역전은 좌측 Horner 증후군을 지지한다. 심한 흡연력과 같은 쪽 어깨·팔 통증은 폐첨부 종양에 의한 교감신경 경로 침범을 의심하게 하므로, 보기 중 C, 흉부 CT로 폐첨부와 인접 구조를 평가하는 것이 적절하다.

중증근무력증은 일반적으로 동공 이상을 일으키지 않으며, 안압검사나 매독 선별검사는 이 증상 조합의 원인을 가장 직접적으로 평가하지 못한다. 흉부 CT는 의심 원인을 찾기 위한 검사이며 현재 정보만으로 종양이 확진된 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Horner 해설의 반복 오기와 불명확한 병변 국소화를 수정. 원정답 C 유지; 축동/안검하수·아프라클로니딘 역전 및 어깨통증에서 폐첨부 평가 설명.
- https://www.cancer.org/cancer/types/lung-cancer/detection-diagnosis-staging/signs-symptoms.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002116
