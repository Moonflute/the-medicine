---
type: qbank
schema_version: 1
id: medqa-us-train-007080
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f93d4927703414c034d8807caf0819c3a49f172a48339ee0eba14b41069fd97f
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "만성 폐쇄성 폐질환 급성 악화"
  - "기관지경련"
  - "무스카린 길항제"
  - "이프라트로피움"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMiDtmLjtnaHquLAvSXByYXRyb3BpdW0ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

60세 남자가 지난 일주일 동안 악화된 운동 시 호흡곤란으로 응급실에 내원했다. 흉통이나 어지럼은 없지만 흰 가래를 동반한 지속적인 기침이 있다. 고혈압과 당뇨병 병력이 있다. 50갑년의 흡연력이 있으나 불법 약물이나 술은 사용하지 않는다. 체온은 101°F(38.3°C), 혈압은 154/104 mmHg, 맥박은 110회/분, 호흡수는 26회/분, 비재호흡 마스크를 통한 산소포화도는 88%이다. 신체검사에서 괴로워하는 비만 남자이며 흉곽 전후경이 증가되어 있고 양측 호흡음이 감소하며 광범위한 호기성 천명이 들린다. 다음 중 가장 적절한 치료 단계는 무엇인가?

## 선택지

A. 알파-1 차단제
B. 알파-2 차단제
C. 베타-2 차단제
D. 무스카린 차단제

## 해설

Ipratropium 같은 muscarinic길항 D는 기관지확장에 가능하며 보통 SABA와 함께 사용한다. 모든alpha/beta차단제가 COPD의절대금기는 아니다. 비재호흡마스크에서도SpO2 88로 심한호흡부전이 있어 ABG·환기보조·전신steroid·감염평가 등 긴급치료를 병행해야 하며 흡입제하나만으로 마무리하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Muscarinic blocker D는 선택지 중 맞으나 모든α/beta차단제가 COPD금기라는 오류와 중증저산소 단독처치 오용 교정.
- https://goldcopd.org/2026-gold-report-and-pocket-guide/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007080
