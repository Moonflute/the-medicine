---
type: qbank
schema_version: 1
id: medqa-us-train-006567
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b39b970c9e39ce5cfbff100ec4f75bde6395aeafd502fed3702cebb41b47cc2a
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "비정상피종성 생식세포종양"
  - "전이성 고환암"
  - "BEP 화학요법"
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-qzoO2ZmCDsooXslpEgKFRlc3RpY3VsYXIgY2FuY2VyKS5tZA
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMCDsooXslpEvQ2lzcGxhdGluLm1k
  - ZHJ1ZzoxMCDsooXslpEvT3hhbGlwbGF0aW4ubWQ
---

# MedQA US 임상문제

## 문제

고환절제술에서 비정상피종성 생식세포종양이 확인됐다. 병기검사에서 후복막 림프절과 간 전이가 있고 수술 후에도 AFP가 높다. 폐 기능은 정상이고 블레오마이신 금기는 없다. 적절한 1차 치료는?

## 선택지

A. 시스플라틴·에토포사이드·블레오마이신 병합치료
B. 전이 부위 방사선치료 단독
C. 카보플라틴 단회 투여 뒤 관찰
D. 후복막 림프절절제만 하고 전신치료는 하지 않는다

## 해설


간 등 폐 이외 장기 전이가 있는 비정상피종성 종양은 불량 위험군이다. 블레오마이신을 쓸 수 있다면 BEP 4주기가 표준 선택이며 금기 시 대체 시스플라틴 병합을 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006567 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: AFP/hCG 상승·간 및 후복막 전이가 있는 비정상피종성 고환 germ-cell tumor에서 cisplatin기반 BEP B가 적절함을 EAU 근거 대조.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://uroweb.org/guidelines/testicular-cancer/chapter/disease-management

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006567
