---
type: qbank
schema_version: 1
id: medqa-us-train-002010
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d29267a160e09bccdea5f3e48a4aa0e50d21dec6235854833ed3763faa5734ef
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "oppositional defiant disorder"
  - "behavioral therapy"
  - "school conduct"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yggeuMgOyggSDrsJjtla0g7J6l7JWgIChPcHBvc2l0aW9uYWwgRGVmaWFudCBEaXNvcmRlcikubWQ
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG96YXBpbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MaXRoaXVtLm1k
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

9세 아이가 적대적 반항장애를 진단받았다. 집과 학교에서 자주 어른에게 반발하지만 심한 공격 행동은 없고 동반 ADHD도 없다. 우선 제안할 치료는?

## 선택지

A. 항정신병약 단독치료
B. 반항할 때마다 벌을 강화하도록 권고
C. 부모 관리훈련과 가정·학교의 일관된 행동 계획
D. 메틸페니데이트 단독치료

## 해설


적대적 반항장애에서는 보호자가 바람직한 행동을 강화하고 일관되게 한계를 정하도록 돕는 부모 관리훈련이 우선이다. 학교와 행동 계획을 연계할 수 있다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002010
- https://www.nice.org.uk/guidance/cg158/chapter/Recommendations

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 영문 May 누락 복원해 8월~다음 5월의 반항성 행동 지속기간을 명확화. CBT 원정답 일치.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
