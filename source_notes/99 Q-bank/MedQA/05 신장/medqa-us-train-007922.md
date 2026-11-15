---
type: qbank
schema_version: 1
id: medqa-us-train-007922
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f636cde7e81493d79354f2f386a000d549b045541c84ba5b778a0e5c03670346
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "end-stage renal disease"
  - "hemodialysis"
  - "protein intake"
related_disease_slugs:
  - MDUg7Iug7J6lL-unjOyEsSDsvantjKXrs5EgKENLRCkgKENocm9uaWMgS2lkbmV5IERpc2Vhc2UgKENLRCkpLm1k
question_type: management
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
curation_status: "retained"
curation_reason: "영문·한글·해설 대조: 투석 전 제한식에서 혈액투석 시작 뒤 단백 요구량 증가를 묻는 문항으로 정답 C 및 설명 유지."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
---

# MedQA US 임상문제

## 문제

68세 남성이 유지 혈액투석을 시작했는데 투석 전부터 하던 엄격한 저단백 식사를 계속한다. 최근 식사량과 근육량이 감소했다. 영양 관리 방향으로 적절한 것은?

## 선택지

A. 단백질을 더 제한한다
B. 칼륨 섭취를 일괄 늘린다
C. 투석에 따른 손실을 고려해 영양팀과 단백질 섭취를 늘린다
D. 소금 섭취를 늘려 입맛을 회복한다

## 해설


유지 혈액투석에서는 단백질 손실과 근육 감소 위험이 있어 투석 전의 저단백 식사를 그대로 유지하지 않는다. 영양 상태와 동반질환에 맞게 단백질과 열량을 조정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007922
- https://doi.org/10.1053/j.ajkd.2020.05.006

## 검수 근거

- 검수일: 2026-10-25
- 판정: 영문·한글·해설 대조: 투석 전 제한식에서 혈액투석 시작 뒤 단백 요구량 증가를 묻는 문항으로 정답 C 및 설명 유지.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
