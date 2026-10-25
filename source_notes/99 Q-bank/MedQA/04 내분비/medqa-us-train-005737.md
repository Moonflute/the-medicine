---
type: qbank
schema_version: 1
id: medqa-us-train-005737
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1eb56128136edb944afd4f1f04327902334d435a14ef79cb4ba3bbfaf3e8e67b
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "제2형 당뇨병 진단 확인"
  - "재발성 요로감염"
  - "HbA1c 재검"
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDLtmJUg64u564eo67ORIChUeXBlIDIgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7JqU66GcIOqwkOyXvCAoVXJpbmFyeSBUcmFjdCBJbmZlY3Rpb24pLm1k
question_type: investigation
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

47세 여성이 4일 동안 배뇨통, 요의 절박감 및 빈뇨가 있어 일차진료를 받으러 왔다. 지난 7개월 동안 같은 증상이 세 번째 발생했다. 최근 칸디다 간찰진을 치료받았다. 체온은 36.7°C(98.0°F), 혈압은 110/70 mmHg, 맥박은 분당 75회이며 신체검사는 고도비만 외에 정상이다. 아버지는 말기 만성신장질환으로 합병된 제2형 당뇨병이 있다. HbA1c는 8.5%이다. 환자에게 요로 증상에 대한 처방을 했다. 다음 중 이 환자에게 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 메트포르민
B. 메트포르민에 설포닐우레아 추가
C. 기저-식사 인슐린
D. HbA1c 재검

## 해설

당뇨 확진력이 없고 A1c8.5%가 한번 제시되었으며 명백한 고혈당 위기나 고전적 고혈당 증상이 확인되지 않아 D의 반복검사로 진단을 확증한다. 다른 진단검사와 두번째 비정상 결과로도 확증할 수 있다. UTI로 인한 빈뇨를 곧바로 고혈당성 다뇨로 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: A1c 재검 D의 목적을 이미 당뇨환자 추적이 아닌 신규진단 확증으로 교정.
- https://diabetesjournals.org/care/article/49/Supplement_1/S27/163926/2-Diagnosis-and-Classification-of-Diabetes

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005737
