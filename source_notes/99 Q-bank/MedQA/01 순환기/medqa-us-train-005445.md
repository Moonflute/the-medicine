---
type: qbank
schema_version: 1
id: medqa-us-train-005445
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1ebc205c61d49f3d43a5850cf750adf48f551a03d28993d4c23dc85ed0f40e97
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "임신 중 승모판 협착"
  - "좌심방 압력 상승"
  - "루프 이뇨제"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yKueuqqO2MkOuniSDtmJHssKkgKE1pdHJhbCBTdGVub3NpcykubWQ
question_type: management
difficulty: complex
answer: B
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

임신 2분기 3주부터 운동과 수면 중 점점 심해지는 호흡곤란과 기좌호흡이 있는 34세 초임부에게 심초음파에서 승모판 협착이 확인되었다. 다음 중 가장 적절한 초기 치료는?

## 선택지

A. 치료가 필요하지 않다
B. 루프 이뇨제
C. 개방 승모판 교련절개술
D. 판막 치환술

## 해설

임신 혈류증가가 MS의 좌심방/폐정맥압을 높여 울혈을 악화시킨다. 제시 B loop 이뇨제는 울혈완화에 가능하다. 실제 전략은 심박수·중증도에 따른 beta1차단과 필요시 조심스러운 이뇨를 포함해 과도한 혈량감소를 피한다. 약물불응시 판막형태에 따른 경피 교련절개 등을 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 임신 MS의 울혈완화 B는 유지하되 전체 초기전략을 이뇨제 단독으로 일반화하지 않음.
- https://academic.oup.com/eurheartj/article/46/43/4462/8234487

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005445
