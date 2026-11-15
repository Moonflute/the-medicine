---
type: qbank
schema_version: 1
id: medqa-us-train-001314
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:31352f652f77e05b16466b36117b653a2199d857047e7004643e57ec058465ba
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "central line-associated bloodstream infection"
  - "Staphylococcus aureus bacteremia"
related_disease_slugs:
  - MDgg6rCQ7Je8L-uPhOq0gCDqtIDroKgg6rCQ7Je8IChDYXRoZXRlci1SZWxhdGVkIEluZmVjdGlvbikubWQ
question_type: management
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

혈액투석용 중심정맥관을 쓰던 환자가 발열하고 혈압이 떨어졌다. 말초와 관에서 채취한 혈액배양에서 모두 황색포도알균이 확인됐고 관 입구가 붉다. 다른 혈관 접근을 확보할 수 있다. 적절한 감염원 조절은?

## 선택지

A. 관을 유지하고 항생제 잠금요법만 시행한다
B. 의심되는 관을 신속히 제거한다
C. 같은 위치에서 가이드와이어로만 교체한다
D. 혈액배양이 음전된 뒤 관 제거를 검토한다

## 해설


황색포도알균에 의한 중증 카테터 관련 혈류감염에서는 전신 항생제에 더해 감염된 관을 제거한다. 추적 배양과 심내막염 등 심부 감염 평가도 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001314 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 심잡음이 없으면 심내막염 배제라는 오류를 제거; 동일S aureus의 말초·카테터 배양 근거로 B 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://academic.oup.com/cid/article/49/1/1/369414
- https://www.idsociety.org/practice-guideline/staphylococcus-aureus-bacteremia/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001314
- https://doi.org/10.1086/599376
