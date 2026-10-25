---
type: qbank
schema_version: 1
id: medqa-us-validation-001090
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:dea10980ce7eab69f9f23fc4344bef5c1b45ec9626467740b01c8af3fe5c99bf
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "대량 객혈"
  - "폐암 의심 결절"
  - "기관지경검사"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-uLqOydvCDtj5DqsrDsoIggKFNQTikgKFNvbGl0YXJ5IFB1bG1vbmFyeSBOb2R1bGUpLm1k
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

58세 남성이 2시간 동안 여러 차례 다량의 선홍색 객혈을 하여 응급실에 왔다. 6개월간 운동 시 호흡곤란과 생산성 기침이 점점 악화되었고 흉부 X선에서 오른쪽 하엽에 2 cm 결절과 폐 과팽창이 보인다. 기관삽관과 기계환기를 시행하고 생리식염수를 주입 중이다. 출혈이 나는 쪽 폐를 아래로 향하게 눕힌 것 외에 가장 적절한 다음 처치는?

## 선택지

A. 방사성핵종 검사
B. 상부위장관 내시경
C. 동맥조영술
D. 기관지경검사

## 해설

반복되는 다량 객혈과 저산소혈증에서는 출혈 쪽 폐를 아래로 두어 반대쪽 폐를 보호하고 기도를 확보한다. D의 기관지경은 혈액과 혈전을 제거하고 출혈 부위를 확인하며 일시적 지혈을 시행하는 데 도움이 된다. 안정화 뒤 CTA와 기관지동맥 색전술 등 확정 치료를 병행하며, 기관지경만으로 모든 출혈의 최종 치료가 끝난다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 생명위협 객혈의 기관지경 D를 기도 확보·혈액 제거 맥락으로 명시하고 색전술의 역할도 구별.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10289864/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001090
