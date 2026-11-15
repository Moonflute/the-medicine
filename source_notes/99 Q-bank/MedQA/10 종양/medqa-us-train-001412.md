---
type: qbank
schema_version: 1
id: medqa-us-train-001412
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f62f66fc33ae084179c63a746c63f9fd30c5804622b5a279447ccd3191f8c711
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "Pancoast tumor"
  - "brachial plexopathy"
related_disease_slugs: []
question_type: diagnosis
difficulty: complex
answer: D
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
---

# MedQA US 임상문제

## 문제

55세 흡연 남성의 오른쪽 어깨와 팔 안쪽 통증이 수주간 악화되고 손 근력이 저하됐다. 같은 쪽에 경한 눈꺼풀처짐과 동공축소가 있고 눈운동은 정상이다. 하나의 병변으로 설명할 진단은?

## 선택지

A. 경추 추간판탈출증
B. 상완신경총 신경염
C. 정중신경 포착
D. 폐첨부 종양

## 해설


폐첨부 종양은 하부 상완신경총과 교감신경줄을 함께 침범해 팔의 통증·위약과 같은 쪽 호너증후군을 일으킬 수 있다. 이런 조합이면 흉부 영상으로 폐첨부를 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001412 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Anabolic steroid가 폐첨부암의 확립된 위험인자라는 근거 없는 주장을 제거했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001412
- https://www.cancer.gov/types/lung/hp/non-small-cell-lung-treatment-pdq
