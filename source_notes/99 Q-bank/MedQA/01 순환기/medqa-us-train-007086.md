---
type: qbank
schema_version: 1
id: medqa-us-train-007086
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:57e17cf849ebcbc37d34e6ee98f2ca76d14969af2c746aa486706c1161dab22f
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "일과성 허혈발작"
  - "증상성 경동맥 협착"
  - "경동맥 스텐트"
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_snbzqs7zshLEg7ZeI7ZiIIOuwnOyekSAoVHJhbnNpZW50IGlzY2hlbWljIGF0dGFjaykubWQ
question_type: management
difficulty: complex
answer: "C"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2xvcGlkb2dyZWwubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 고령의 증상성 중증 경동맥협착에서 스텐트 일률 선택 교정."
curation_status: "revised"
curation_reason: "고령의 증상성 중증 경동맥협착에서 스텐트 일률 선택 교정."
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

79세 남자가 왼쪽의 갑작스러운 근력저하와 감각저하가 발생하여 응급실로 이송되었다. 증상은 빠르게 발생해 1분 이내에 최고조에 달했으며 10분 후부터 저절로 호전되기 시작했다. 증상 시작 40분 후 응급실에 도착했을 때 대부분 호전되어 있었다. 본태성 고혈압, 제2형 당뇨병, 만성 폐쇄성 폐질환, 50갑년의 흡연력이 있다. 3년 전 ST분절 상승 심근경색도 있었다. 조영제 없이 시행한 뇌 CT는 정상이다. 경동맥 이중초음파에서 오른쪽 내경동맥이 90% 협착되어 있다. 경흉부 심초음파에서는 심장 내 이상이 보이지 않는다. 이 환자의 상태에 가장 적절한 치료는 무엇인가?

## 선택지

A. 항혈소판제만 투여하고 재관류 적합성은 평가하지 않는다
B. 원인과 관계없이 와파린을 투여한다
C. 최적 약물치료와 함께 신속히 경동맥 내막절제술 등 재관류의 적합성을 평가한다
D. 과응고성 검사만 시행하고 치료를 미룬다

## 해설

반대쪽 일과성 신경학적 결손과 우측 내경동맥 90% 협착은 증상성 중증 경동맥협착이다. 항혈소판·지질·위험인자 치료와 함께 신속한 재관류 평가가 필요하다. 수술 적합성이 있는 고령 환자에서는 일반적으로 내막절제술을 스텐트보다 우선 고려하며, 동반질환·해부학·시술위험을 반영한다. 모든 79세 환자에게 스텐트를 자동 선택하는 것은 적절하지 않다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 고령의 증상성 중증 경동맥협착에서 스텐트 일률 선택 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.sciencedirect.com/science/article/pii/S1078588422002374

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007086

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
