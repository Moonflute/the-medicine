---
type: qbank
schema_version: 1
id: medqa-us-train-000803
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:38639d5220da0bf673f16ce91388b06dde5ab95ac81371be76ff557778eca3bc
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "gastroesophageal reflux disease"
  - "chronic diarrhea"
  - "hyperkalemia"
  - "renal failure"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITsi53rj4Qg7Jet66WYIOyniO2ZmCAoR0VSRCkgKEdhc3Ryb2Vzb3BoYWdlYWwgUmVmbHV4IERpc2Vhc2UpLm1k
  - MDUg7Iug7J6lL-qzoOy5vOulqO2YiOymnSAoSHlwZXJrYWxlbWlhKS5tZA
  - MDUg7Iug7J6lL-unjOyEsSDsvantjKXrs5EgKENLRCkgKENocm9uaWMgS2lkbmV5IERpc2Vhc2UgKENLRCkpLm1k
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2FwdG9wcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRnVyb3NlbWlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGFiZXRhbG9sLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTmlmZWRpcGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

미만형 전신경화증이 있는 55세 여성이 갑자기 두통과 혈압 188/110 mmHg, 급성 신손상으로 내원했다. 경피증 신위기로 진단됐다. 혈청 칼륨은 정상이다. 즉시 시작할 핵심 약제는?

## 선택지

A. 캅토프릴
B. 푸로세미드 단독
C. 라베타롤 단독
D. 니페디핀 단독

## 해설

경피증 신위기에서는 ACE 억제제를 신속히 시작한다. 신기능과 칼륨, 혈압을 면밀히 확인하며 다른 응급 합병증도 함께 치료한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ACEI가 K를 낮춘다는 위험한 오류를 제거하고 systemic sclerosis renal crisis의 특이 적응증 설명.
- https://ard.bmj.com/content/annrheumdis/early/2024/10/17/ard-2024-226430.full.pdf?with-ds=yes

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000803
- https://doi.org/10.1136/ard-2024-226430
