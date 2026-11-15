---
type: qbank
schema_version: 1
id: medqa-us-train-008331
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f27b8ae4b417db98c0ef2795ecac99f7592c01896fff4636ecc150df48adcef1
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "Crohn disease"
  - "ileocolitis"
  - "budesonide"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tgazroaDrs5EgKENEKSAoQ3JvaG4ncyBEaXNlYXNlIChDRCkpLm1k
question_type: management
difficulty: complex
answer: A
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
  - ZHJ1ZzowMiDtmLjtnaHquLAvQnVkZXNvbmlkZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
---

# MedQA US 임상문제

## 문제

말단 회장과 우측 대장에 깊은 궤양이 있는 크론병 환자가 단기 전신 스테로이드에 반응했다. 활동성 감염은 없고 증상이 가라앉았다. 이후 치료 전략으로 적절한 것은?

## 선택지

A. 스테로이드를 감량하며 질병 위험도에 맞는 스테로이드 없는 유지요법을 계획한다.
B. 재발 방지를 위해 유도 용량의 전신 스테로이드를 계속 쓴다.
C. 증상이 없어졌으므로 염증 평가는 더 하지 않는다.
D. 직장 메살라진만으로 회장 병변을 유지 치료한다.

## 해설


전신 스테로이드는 관해를 유도하는 데 쓰지만 유지 약제가 아니다. 감량하면서 질병 위험과 이전 치료에 맞춰 스테로이드 없는 유지요법을 선택하고, 증상 외에도 내시경과 염증 지표로 반응을 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008331 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 경증 회맹부/우측대장 Crohn의 관해 유도 budesonide A 유지, 유지요법이 아님을 명시. 점막 내시경생검으로 전층을 볼 수 있다는 원문 한계도 구분.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://gut.bmj.com/content/74/Suppl_2/s1

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008331
- https://doi.org/10.4166/kjg.2026.092
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13714433/
