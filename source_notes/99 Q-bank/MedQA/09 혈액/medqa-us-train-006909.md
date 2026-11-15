---
type: qbank
schema_version: 1
id: medqa-us-train-006909
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:159397821dc6d23a9c6f5c2fe3c2e5b31fbc17d3b95bf7c8d0fb17e74ed5b549
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "의미불명 단클론감마병증"
  - "철결핍성 빈혈"
  - "단클론 단백 추적"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7LKgIOqysO2VjeyEsSDruYjtmIggKElyb24gRGVmaWNpZW5jeSBBbmVtaWEpLm1k
question_type: monitoring
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

76세 환자의 혈청에서 IgG 단클론 단백이 2.0g/dL, 골수에서 클론성 형질세포가 5% 확인됐다. 신기능·칼슘과 영상은 정상이고 빈혈은 뚜렷한 철결핍으로 설명된다. 단클론 단백에 대한 적절한 계획은?

## 선택지

A. 단클론 단백이 있으므로 골수종 항암을 시작한다
B. 철결핍을 치료하면서 단클론 감마병증은 일정 기간 뒤 재평가하고 위험도에 맞춰 추적한다
C. 골수종 골병변이 없더라도 전신 방사선 치료를 시작한다
D. 골수 형질세포가 10% 미만이므로 앞으로 검사를 하지 않는다

## 해설


골수종으로 인한 장기 손상이나 정의 사건이 없고 단클론 단백과 골수 형질세포가 진단 경계보다 낮아 MGUS에 해당한다. 보통 약 6개월 뒤 수치와 증상을 재평가하고 이후 위험도에 맞춰 추적한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006909 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: MGUS 문항에 PR 연장/AV block 해설이 붙은 명백한 오연결 교체.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.myeloma.org/imwg/mgus-smoldering-multiple-myeloma--consensus-risk-factors

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006909
- https://www.nature.com/articles/leu201060
