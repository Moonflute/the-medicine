---
type: qbank
schema_version: 1
id: medqa-us-train-006160
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cbc3355f63ba113657084e8db38d10b9128dccb6200bad52571c250738562ca3
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "제2형 당뇨병"
  - "비만"
  - "메트포르민"
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDLtmJUg64u564eo67ORIChUeXBlIDIgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
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
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9TaXRhZ2xpcHRpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

BMI 34 kg/m²인 49세 제2형 당뇨병 환자가 식사·운동 조절과 메트포르민에도 HbA1c 8.6%다. 심혈관·신장질환은 없고 저혈당을 피하면서 체중도 줄이길 원한다. 금기나 접근성 문제는 없다. 어느 약을 추가할까?

## 선택지

A. 글리메피리드
B. 세마글루타이드
C. 피오글리타존
D. 시타글립틴

## 해설

세마글루타이드는 혈당과 체중을 함께 낮추고, 단독 계열 효과로는 저혈당 위험이 낮다. 설포닐우레아와 피오글리타존은 체중이 늘 수 있고 시타글립틴은 대체로 체중에 중립적이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Metformin B는 선택지 중 적절하나 A1c9.1의 모든 환자에 단독치료만이 현재1차라는 일반화 제한.
- https://diabetesjournals.org/care/article/49/Supplement_1/S183/163934/9-Pharmacologic-Approaches-to-Glycemic-Treatment

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006160
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12620687/
