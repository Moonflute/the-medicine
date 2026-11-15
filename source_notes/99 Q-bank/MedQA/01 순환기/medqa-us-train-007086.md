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

79세 남성이 갑작스러운 왼쪽 팔다리 힘 빠짐이 15분 뒤 회복되어 내원했다. 평가에서 오른쪽 내경동맥 90% 협착이 확인됐다. 심한 장애는 없고 수술 가능성이 있다고 판단됐다. 항혈소판제·지질치료와 함께 할 조치는?

## 선택지

A. 약물만 쓰고 재혈관화 적합성은 평가하지 않는다
B. 뇌허혈 기전과 관계없이 와파린을 시작한다
C. 신속히 경동맥 내막절제술 적합성을 평가한다
D. 첫 증상이 회복되었으므로 1년 뒤 초음파만 반복한다

## 해설

우측 내경동맥 공급 영역에 일과성 뇌허혈이 생긴 증상성 고도 협착이다. 최적 약물치료와 함께 조기 재혈관화를 평가한다. 고령에서 수술이 가능하면 내막절제술을 우선 고려할 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 고령의 증상성 중증 경동맥협착에서 스텐트 일률 선택 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.sciencedirect.com/science/article/pii/S1078588422002374

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007086
- 대한뇌졸중학회 증상성 내경동맥 협착 진료지침: https://stroke.or.kr/guidelines/view.php?sid=76

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
