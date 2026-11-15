---
type: qbank
schema_version: 1
id: medqa-us-test-000008
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:eddea596a5d735a79cdc5316eaf5991ca3340e01ac8a7c3140a3cdecca35ddea
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "급성관상동맥증후군"
  - "이중 항혈소판요법"
  - "클로피도그렐"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDqtIDsg4Hrj5nrp6Ug7Kad7ZuE6rWwIChBQ1MpLm1k
question_type: management
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2xvcGlkb2dyZWwubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTmlmZWRpcGluZS5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9Fbm94YXBhcmluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 남성이 비ST분절 상승 심근경색으로 약물방출스텐트를 삽입했다. 경구 항응고 적응증은 없고 담당팀은 출혈 위험과 약물 내약성을 검토한 뒤 클로피도그렐을 P2Y₁₂ 억제제로 선택했다. 초기 이중 항혈소판요법은?

## 선택지

A. 아스피린과 니페디핀
B. 아스피린과 에녹사파린
C. 아스피린과 클로피도그렐
D. 클로피도그렐과 티카그렐러

## 해설


스텐트 시술 후 이중 항혈소판요법은 아스피린과 P2Y₁₂ 억제제 한 가지를 조합한다. 이 환자에서는 클로피도그렐을 선택한 상태다. 실제 약제와 투여기간은 출혈 및 허혈 위험에 따라 달라진다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: troponin 양성 ACS의 PCI 후 aspirin에 추가하는 선택지는 C clopidogrel. 보존 EF만으로 spironolactone 적응증이 되지 않음.
- https://www.ahajournals.org/hyp/doi/pdf/10.1161/CIR.0000000000001309

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000008
- 대한심근경색학회 급성 심근경색 약물치료 합의문: https://pmc.ncbi.nlm.nih.gov/articles/PMC7515755/
