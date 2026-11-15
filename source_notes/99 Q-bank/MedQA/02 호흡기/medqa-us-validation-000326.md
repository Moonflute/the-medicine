---
type: qbank
schema_version: 1
id: medqa-us-validation-000326
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:626be631d7e72f535ece5f753ea99e83ab1b99f0fc0e8fc7615315a0efffeb99
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "황색포도상구균 괴사성 폐렴"
  - "인플루엔자 후 폐렴"
  - "폐공동"
related_disease_slugs:
  - MDgg6rCQ7Je8L-yduO2UjOujqOyXlOyekCAoSW5mbHVlbnphKS5tZA
  - MDIg7Zi47Z2h6riwL-2PkOugtC5tZA
question_type: diagnosis
difficulty: complex
answer: A
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

70세 남성이 인플루엔자로 발열이 있었다가 호전됐다. 며칠 뒤 다시 고열, 객혈과 급격한 저산소증이 생겼고 흉부 CT에서 다발성 공동과 괴사성 침윤이 보인다. 이 경과에서 특히 의심할 이차 세균성 감염은?

## 선택지

A. 황색포도알균에 의한 괴사성 폐렴
B. 폐렴마이코플라스마 감염
C. 폐렴클라미디아 감염
D. 단순 바이러스성 기관지염

## 해설

인플루엔자 후 잠시 호전됐다 다시 급격히 악화되고 공동·괴사가 나타나면 황색포도알균에 의한 이차 폐렴이 중요하다. 영상만으로 균을 확진하지 못하며 중증도와 위험에 따라 MRSA도 고려하고 배양 결과로 조정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 황색포도상구균 감염을 같은 균의 괴사성 폐렴과 대조하는 자기모순을 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000326
- https://www.idsociety.org/practice-guideline/influenza/
