---
type: qbank
schema_version: 1
id: medqa-us-train-006615
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:eadfa86e06130d73e1c3d648365e42134a52b5d346549495e435638f771cc391
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "인슐린종"
  - "공복 저혈당"
  - "72시간 공복검사"
  - "Insulinoma"
related_disease_slugs:
  - MDQg64K067aE67mEL-yggO2YiOuLuSAoSHlwb2dseWNlbWlhKS5tZA
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMiDtmLjtnaHquLAvQnVkZXNvbmlkZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

60세 남성이 식사를 거른 날 식은땀과 혼돈을 반복하고 주스를 마시면 좋아진다. 당뇨약 복용은 없고, 진료 중에는 증상과 저혈당을 포착하지 못했다. 공복 저혈당을 재현해 검체를 채취할 방법은?

## 선택지

A. 경구 포도당부하 검사
B. 수분제한 검사
C. 의료진 감시하 최대 72시간 공복검사
D. 증상 없이 한 차례 인슐린만 측정

## 해설

자연 발작 때 검체를 얻기 어렵고 공복 저혈당이 의심되면 의료진 감시하에 공복검사를 한다. 저혈당이 확인되면 정해진 기준에 따라 채혈하고 종료한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 72시간 공복 C는 감시하 저혈당 재현검사이며 증상만으로 insulinoma확진한 설명 한정.
- https://academic.oup.com/jcem/article/94/3/709/2596247

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006615
