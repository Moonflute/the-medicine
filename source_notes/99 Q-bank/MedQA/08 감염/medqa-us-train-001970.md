---
type: qbank
schema_version: 1
id: medqa-us-train-001970
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9c626fdae8a869548b48057799729d91cacdab21e04d3c9ac68874a5293f271f
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "transient hypogammaglobulinemia of infancy"
  - "low IgG"
  - "immunodeficiency"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
question_type: diagnosis
difficulty: standard
answer: C
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQWRlbm9zaW5lLm1k
---

# MedQA US 임상문제

## 문제

9개월 여아가 정기검진을 위해 내원했다. 지난 4~5개월간 중이염이 여러 번 있었고 2개월 전 상기도감염으로 입원했다. 현재는 건강하며 잡고 몸을 일으켜 서기 시작했다. 습진과 알레르기비염 병력이 있고 면역결핍 가족력은 없다. 검사에서 IgG만 낮고 IgA, IgE, IgM은 정상이다. 다음 중 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 아데노신 탈아미노효소 결핍
B. Bruton 티로신키나아제 결함
C. 정상 면역글로불린의 발현 지연
D. B세포 분화 실패

## 해설


모체 IgG가 감소한 영아기에 자체 IgG 생성이 늦어지면 영아기 일과성 저감마글로불린혈증이 의심된다. 다른 면역글로불린이 비교적 보존된 이 사례에서는 C가 가장 적절하다. 영구적인 B세포 분화장애나 ADA 결핍으로 바로 진단하지 않으며, IgG가 이후 정상화되는지 추적해야 일과성인지 확인할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001970 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 발달 문장 오역과 일과성 저감마글로불린혈증 용어·추적 확인 필요성을 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001970
