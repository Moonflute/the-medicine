---
type: qbank
schema_version: 1
id: medqa-us-train-007187
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:74e2f77ff169a5b6372dac050394e8190b9dd9ccdf8d6fa954f54b264ecc8c97
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "자궁경부 무력증"
  - "LEEP 병력"
  - "자궁경부 길이"
  - "질식 초음파"
question_type: investigation
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOq2geqyveu2gCDrrLTroKXspp0gKEluY29tcGV0ZW50IEludGVybmFsIE9zIG9mIENlcnZpeCkubWQ
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

임신 18주 산모에게 과거 임신 21주에 진통 없이 자궁경부가 열려 임신을 잃은 병력이 있다. 지금 증상은 없고 경부를 평가해 예방 계획을 정하려 한다. 경부 길이를 가장 정확히 재는 방법은?

## 선택지

A. 경복부 초음파로 태아 양두정골 지름 측정
B. 자궁경부 세포검사로 경부 길이 평가
C. 촉진만으로 닫힌 경부 길이를 확정
D. 질식 초음파로 자궁경부 길이 측정

## 해설

중기 자궁경부 길이는 표준화된 질식 초음파로 평가한다. 이전 무통성 중기 임신 소실은 봉축술 등 별도의 예방 계획을 전문팀과 논의할 이유다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 중기 질식 경부 길이 평가와 경부무력증 진단 구분.
- https://med.uc.edu/docs/default-source/obstetrics-and-gynecology-docs/ob-mfm-protocols/q-z/short-cervix-protocol-2022.pdf?sfvrsn=27a7db17_2

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007187
- https://pubmed.ncbi.nlm.nih.gov/38754603/
