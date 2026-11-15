---
type: qbank
schema_version: 1
id: medqa-us-train-006699
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b80487fd8be1bf2d16b7c9d4c45c005e8f9c9673c807a09f7125334991d71730
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "병원획득폐렴"
  - "중증 폐렴"
  - "경험적 광범위 항생제"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOugtC5tZA
question_type: management
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmZXBpbWUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvRXJ0YXBlbmVtLm1k
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

69세 여성이 입원 4일째 새 폐침윤과 발열이 생겨 반코마이신과 세페핌으로 경험적 치료를 받았다. 3일 뒤 호전됐고 항생제 투여 전 양질의 호흡기 검체와 혈액 배양에서 모두 메티실린 감수성 황색포도알균(MSSA)만 분리됐다. 페니실린과 세팔로스포린 알레르기는 없다. 항생제를 어떻게 조정할까?

## 선택지

A. 반코마이신을 단독으로 유지한다
B. 반코마이신과 세페핌을 끝까지 같은 용량으로 유지한다
C. 세파졸린으로 좁혀 치료한다
D. 균혈증이 있어도 증상이 나아졌으니 모든 항생제를 중단한다

## 해설

확인된 원인균이 MSSA라면 반코마이신과 세페핌을 계속 병용하기보다 세파졸린 등 MSSA 표적 항생제로 좁힌다. 혈액에서도 MSSA가 자랐으므로 반복 혈액배양, 감염원 평가 및 균혈증에 맞춘 치료 기간을 별도로 판단한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: HAP의 C 경험요법은 유지하되 모든 중증도/내성환경에2약으로 충분하다는 일반화 제한.
- https://www.idsociety.org/practice-guideline/hap_vap/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006699
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11704733/
