---
type: qbank
schema_version: 1
id: medqa-us-train-005918
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f3b01dd5abe1115cb6338dab208815c68c00fd3114bc3116d78d44a15e37f224
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "폐색전증"
  - "객혈"
  - "CT 폐혈관조영술"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOyDieyghOymnSAoUHVsbW9uYXJ5IEVtYm9saXNtKS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

60세 남성이 흉막성 흉통으로 응급실에 왔다. 최근 독일 여행에서 돌아온 다음 날 아침 호흡곤란과 흉통을 느꼈다. 대체로 건강하지만 3주 전 발목 수술을 받아 활동량이 줄었다. 체온은 99.0°F(37.2°C), 혈압은 137/88 mmHg, 맥박은 분당 120회, 호흡수는 분당 22회, 실내 공기 산소포화도는 96%이다. 하지가 따뜻하고 부어 있다. 최근 기침 때문에 흉막염 가능성을 높게 보고 있다. 다음 중 CT 혈관조영술로 추가 평가해야 하는 소견은 무엇인가?

## 선택지

A. 양측 천명
B. 폐 특정 부위의 호흡음 감소
C. 객혈
D. 폐 특정 부위의 호흡음 증가

## 해설

제시 소견 중 객혈 C는 PE 가능성을 높인다. 그러나 이 환자는 이미 최근 수술/부동·빈맥·종창한 하지·흉막성 통증으로 PE의 사전확률을 평가해야 하며 객혈이 없어도 PE-likely이면 CTPA 등 신속평가가 필요하다. 최근 기침만으로 단순 흉막염에 고정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 객혈 C는 PE 단서이나 객혈을 기다려야 CTPA한다는 위험한 전제 교정.
- https://www.nice.org.uk/guidance/ng158/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005918
