---
type: qbank
schema_version: 1
id: medqa-us-train-003322
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7e61b7db610b24e6d6363eee23057c68f61cdd784f3f82386942b8cc4129e560
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "lymphangiosarcoma"
  - "Stewart-Treves syndrome"
  - "chronic lymphedema"
  - "postmastectomy angiosarcoma"
related_disease_slugs:
  - MDkg7ZiI7JWhL-umvO2UhOyihSAoTHltcGhvbWEpLm1k
question_type: investigation
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

유방암 수술 후 15년 동안 오른팔에 림프부종이 있는 여성이 내원했다. 같은 팔에 보라색 반점과 결절이 여럿 생겨 빠르게 커지고 일부는 궤양이 됐다. 원인을 확인할 다음 조치는?

## 선택지

A. 림프부종 치료용 압박 강도만 높인다
B. 봉와직염으로 보고 경구 항생제만 투여한다
C. 정맥 초음파가 정상이면 추가 검사를 하지 않는다
D. 보라색 피부 병변의 조직검사를 한다

## 해설


만성 림프부종 부위에 커지는 보라색 병변이 나타나면 드물지만 혈관육종을 의심해 생검한다. 단순 멍이나 감염으로 단정해 평가를 미루지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003322 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 유방절제 후 수십년 만성 림프부종 팔의 보라색 궤양성 판은 Stewart-Treves/림프관육종 A와 일치한다. 원문·선지·해설을 직접 대조했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003322
- https://pubmed.ncbi.nlm.nih.gov/32721135/
