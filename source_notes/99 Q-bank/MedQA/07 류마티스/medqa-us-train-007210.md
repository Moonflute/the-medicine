---
type: qbank
schema_version: 1
id: medqa-us-train-007210
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0ca3f256e99b6e6ea75984cc12a726b6eba894383e371c8a73ff10650630932f
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "류마티스관절염"
  - "베이커 낭종"
  - "오금오목 종괴"
  - "염증성 관절염"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpCDqtIDsoIjsl7wgKFJoZXVtYXRvaWQgQXJ0aHJpdGlzKS5tZA
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpC5tZA
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9HbGltZXBpcmlkZS5tZA
---

# MedQA US 임상문제

## 문제

류마티스관절염으로 무릎 삼출이 있고 오금낭종을 진단받은 48세 여성이 갑자기 한쪽 종아리가 붓고 아프다고 한다. 낭종 파열과 심부정맥혈전증을 구분할 첫 검사는?

## 선택지

A. 무릎 단순촬영만 시행
B. 혈청 항CCP 항체 재검
C. 하지 정맥 압박 도플러 초음파
D. 근전도 검사

## 해설


오금낭종이 파열돼도 깊은정맥혈전증처럼 종아리가 아프고 부을 수 있다. 압박 초음파로 혈전을 먼저 확인하고 필요하면 낭종이나 액체의 분포도 살핀다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007210 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Baker를 골낭으로 오역한 부분을 오금낭종으로 수정하고 RA 연관과 확진 한계를 설명했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007210
- https://acsearch.acr.org/docs/69416/Narrative/
