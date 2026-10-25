---
type: qbank
schema_version: 1
id: medqa-us-train-004609
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7a2da0c40800d5f64072f8f4dcdc95f5e93740aff13b8e23ee7e50c26ed89a29
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "어루러기"
  - "Malassezia 감염"
  - "저색소성 반점"
question_type: diagnosis
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-yWtOujqOufrOq4sCAoVGluZWEgVmVyc2ljb2xvcikubWQ
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

최근 브라질에서 이민 온 19세 남성이 내원했다. 내과적, 수술력과 가족력은 알려진 것이 없다. 여러 명의 고정 성 파트너가 있다고 한다. 오늘 등 피부에 발진이 생겼다고 호소한다. 언제 시작되었는지는 확실하지 않지만 파트너 중 한 명이 알려주면서 알게 되었다. 그 외 문진은 음성이다. 신체검사에서 등 위쪽에 저색소성 피부 병변이 여러 개 보인다. 햇빛을 쬐어도 색이 진해지지 않는다고 한다. 등 중앙에 직경 5cm (1.9인치)의 저색소 반점이 있고 그 위에 미세한 인설이 덮여 있다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 어루러기
B. 균상식육종
C. 장미색 비강진
D. 이차 매독

## 해설

몸통에 미세 인설이 있고 주변 피부처럼 햇볕에 짙어지지 않는 다발 저색소 반점은 어루러기(A)에 합당하다. Malassezia 효모와 연관되며 단순 성생활 정보만으로 이차매독을 우선하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 어루러기 A는 맞지만 19세 남성 한 명을 두 명이 함께 내원한 것으로 번역한 문장을 교정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004609
