---
type: qbank
schema_version: 1
id: medqa-us-train-005134
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1a1e6bd65b639f6993c6b5e9c0256d25169e7075bc941aac3c4314671c587c78
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "슬개전 윤활낭염"
  - "무릎 윤활낭염"
  - "직업성 무릎 압박"
  - "Prepatellar bursitis"
question_type: diagnosis
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-yKrOqwnOuMgO2HtCDthrXspp0g7Kad7ZuE6rWwIChQYXRlbGxvZmVtb3JhbCBQYWluIFN5bmRyb21lKS5tZA
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

37세 남자가 한 달 동안 점점 심해지는 오른쪽 무릎 부종과 통증으로 내원했다. 외상이나 이전 관절질환은 없고 카펫 시공자로 일하며 고혈압으로 하이드로클로로티아지드를 복용한다. 오른쪽 무릎이 붓고 붉으며 슬개골 아래쪽 부분의 앞에 변동성 부종이 있고, 관절선 압통은 없으며 통증 때문에 굴곡이 제한된다. 가장 가능성 높은 진단은?

## 선택지

A. 패혈성 관절염
B. 슬개전 윤활낭염
C. 골관절염
D. 오스굿-슐라터병

## 해설

무릎을 자주 꿇는 카펫 시공자에서 슬개골 앞쪽의 국소 변동성 부종·압통과 관절선 압통 부재는 슬개전 윤활낭염(B)을 지지한다. 영문의 부종은 슬개골 아래쪽 부분의 앞에 있다는 뜻이지 슬개골보다 아래에 있는 별도 슬개하 윤활낭을 확정한 것이 아니다. 관절 전체가 침범되는 화농성 관절염보다 표재성 윤활낭 분포가 합당하지만 실제로 감염 의심 소견이 있으면 감염성 윤활낭염도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 영문 직업(카펫 시공)과 병변 위치 over lower patella를 복원했다. 슬개전 윤활낭과 슬개하 영역을 혼동하는 번역을 바로잡아 B를 유지한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005134
