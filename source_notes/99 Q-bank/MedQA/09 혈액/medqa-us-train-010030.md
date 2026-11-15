---
type: qbank
schema_version: 1
id: medqa-us-train-010030
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:40340cbc851bf00200fe552f7066e785cea0b994b037beb22fa173dec4c0e25a
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "파종성 혈관내 응고"
  - "패혈증"
  - "혈소판감소증"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2MqO2YiOymnSAoU2Vwc2lzKS5tZA
  - MDkg7ZiI7JWhL-2MjOyihSDtmIjqtIDrgrQg7J2R6rOgIChEaXNzZW1pbmF0ZWQgSW50cmF2YXNjdWxhciBDb2FndWxhdGlvbiwgRElDKS5tZA
question_type: diagnosis
difficulty: complex
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DYXJiYW1hemVwaW5lLm1k
---

# MedQA US 임상문제

## 문제

폐렴으로 패혈성 쇼크가 온 환자에서 정맥관 삽입 부위 출혈이 생겼다. 혈소판이 급격히 줄었고 PT는 연장됐으며 D-이합체는 상승하고 피브리노겐은 감소했다. 가장 가능성 높은 원인은?

## 선택지

A. 면역성 혈소판감소증
B. 와파린 용량 부족
C. 혈전성 혈소판감소성 자반증
D. 파종성 혈관내 응고

## 해설


패혈증에 동반된 응고 활성화로 혈소판과 응고인자가 소모된다. 여러 응고검사의 변화와 삽입 부위 출혈을 함께 보아 파종성 혈관내 응고를 의심한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-010030 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 감염성 쇼크·AKI·혈소판감소와 PT/aPTT 연장은 소비성 DIC A를 지지. Warfarin 단독 효과는 혈소판감소·전신 장기손상을 설명하지 못함.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010030
- https://pubmed.ncbi.nlm.nih.gov/40216223/
