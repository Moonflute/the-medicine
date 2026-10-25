---
type: qbank
schema_version: 1
id: medqa-us-train-009394
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e17352864d18f71ad805e81077808b6965b632e021128067e0f8bb4330441c8e
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "patellofemoral pain syndrome"
  - "슬개대퇴 통증 증후군"
  - "patellar compression test"
question_type: investigation
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-yKrOqwnOuMgO2HtCDthrXspp0g7Kad7ZuE6rWwIChQYXRlbGxvZmVtb3JhbCBQYWluIFN5bmRyb21lKS5tZA
difficulty: standard
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 여성이 오른쪽 무릎 통증으로 내원했다. 러시아에서 산길 마라톤을 뛴 뒤 미국으로 돌아오는 장거리 비행 후 통증을 처음 느꼈다. 통증은 무디고 쑤시며 슬개골 앞쪽에 국한되고 앉아 있으면 악화되지만 서면 호전된다. 아스피린은 효과가 거의 없었다. 3년 전 축구 부상으로 오른쪽 전방십자인대가 파열된 병력이 있고, 지난달 새 파트너와 성관계 후 임질 치료를 받았다. 체온 98.5°F(36.9°C), 혈압 112/63 mmHg, 맥박 75회/분, 호흡수 14회/분이다. 진단을 확립하는 데 가장 도움이 되는 검사는 무엇인가?

## 선택지

A. 무릎 MRI
B. 슬개골 부유검사
C. 무릎을 편 상태에서 슬개골 압박
D. 전방 서랍검사

## 해설

운동 후 전방 무릎통이 오래 앉기에서 악화되는 양상은 슬개대퇴 통증을 시사한다. 무릎을 편 상태에서 슬개골 압박으로 익숙한 전방 통증이 재현되는 C가 선지 중 가장 관련된 검사다. 다만 이 검사의 정확도는 제한적이며 하나만으로 진단을 확진하지 않는다. 병력과 스쿼트·계단 등에서의 통증 재현, 다른 관절질환 배제를 종합한다. 부유슬개골검사는 삼출, 전방서랍검사는 ACL 평가에 해당하며 MRI가 일률적 우선 검사는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 슬개골 압박이 통증을 완화하면 진단을 확립한다는 부정확한 설명을 수정했다. C는 선지 중 임상양상과 가장 관련된 유발검사이지 단독 확진검사는 아니다.
- 공식/학회 근거: https://doi.org/10.2519/jospt.2019.0302

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009394
