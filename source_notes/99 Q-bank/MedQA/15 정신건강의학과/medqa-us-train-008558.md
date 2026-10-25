---
type: qbank
schema_version: 1
id: medqa-us-train-008558
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0a3fd6795a6b95d37af48e37daa11fa9f20e5e0fd2a80156bb718eb84207e72c
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "oppositional defiant disorder"
  - "irritability"
  - "defiant behavior"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yggeuMgOyggSDrsJjtla0g7J6l7JWgIChPcHBvc2l0aW9uYWwgRGVmaWFudCBEaXNvcmRlcikubWQ
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

15세 남아가 행동 악화와 수업 중 지속적인 방해로 아동심리학자에게 의뢰되었다. 지난 6개월 동안 교사가 내준 숙제를 하지 않고 수업 지시를 따르지 않아 여러 차례 꾸지람을 들었다. 교사들은 그가 매우 논쟁적이고 자신이 할 일을 하지 못하게 다른 아이들을 탓한다고 말한다. 이전에는 예의 바르고 반에서 상위권 학생이었다. 최근 큰 생활 사건이나 가정의 변화는 부인한다. 과거력은 특이사항이 없고 활력징후는 모두 정상이다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 주의력결핍 과잉행동장애
B. 품행장애
C. 주요우울장애
D. 적대적 반항장애

## 해설


학생은 과거에 정상적인 행동을 보였으나 최근 6개월 동안 지속적인 반항, 논쟁, 타인에게 책임 전가가 나타난다. 이는 규칙을 위반하고 권위에 도전하는 패턴으로, 주요 우울이나 ADHD보다 적합한 진단은 적대적 반항장애이다. 반면 품행장애는 타인의 권리나 중대한 규범을 침해하는 행동이 중심이며 반드시 폭력만으로 나타나는 것은 아니다. 이 사례에는 그 수준의 행동이 없어 적대적 반항장애가 더 적절하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008558

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. ODD 정답 유지. 품행장애에 폭력이 반드시 동반되는 듯한 표현과 선지 문자 참조 제거.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
