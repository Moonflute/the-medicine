---
type: qbank
schema_version: 1
id: medqa-us-validation-000971
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:049cd1881e6acf90c03ee0859d75b15bfc70fd3c3a26ccaa9522fafdc537a2d9
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "요붕증"
  - "겸상적혈구병"
  - "지염"
related_disease_slugs:
  - MDQg64K067aE67mEL-yalOu2leymnSAoRGlhYmV0ZXMgSW5zaXBpZHVzKS5tZA
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
  - MDcg66WY66eI7Yuw7IqkL-uwmOydkeyEsSDqtIDsoIjsl7wgKFJlYWN0aXZlIEFydGhyaXRpcykubWQ
question_type: diagnosis
difficulty: complex
answer: "D"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9EZXNtb3ByZXNzaW4ubWQ
curation_status: "revised"
curation_reason: "중추성 DI·신장 염증이라는 틀린 해설을 겸상적혈구 관련 수질 농축장애로 교정하고 누락된 빈혈·혈뇨 복원."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

42세 아프리카계 미국인 여성이 과도한 갈증과 소변량 증가로 진료를 받으러 왔다. 혈색소는 10.5g/dL, 헤마토크릿은 25%이며 소변 적혈구는 6/hpf이고 요당은 음성이다. 혈청 나트륨은 145 mEq/L이고 소변 비중은 1.006이다. 수분 제한 후 혈청 삼투질농도는 305 mOsm/kg, 소변 삼투질농도는 400 mOsm/kg이었다. 데스모프레신 투여 후 소변 삼투질농도가 490 mOsm/kg으로 증가했고 항이뇨호르몬 수치는 정상이다. 이 환자의 상태와 연관될 수 있는 소견은?

## 선택지

A. 거친 떨림
B. 환청
C. 무월경
D. 지염

## 해설

빈혈·혈뇨와 신장 농축장애의 조합에서 겸상적혈구병에 의한 수질 허혈·손상을 고려한다. 겸상적혈구병은 소아기에 손발의 통증성 지염(dactylitis)을 동반할 수 있어 D가 의도한 연관 소견이다. 지염은 신장 염증이 아니며 중추성 ADH 결핍을 뜻하지 않는다. 제시된 부분 농축 반응만으로 원인을 확진하지 않고 혈색소 검사 등으로 확인한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000971

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 중추성 DI·신장 염증이라는 틀린 해설을 겸상적혈구 관련 수질 농축장애로 교정하고 누락된 빈혈·혈뇨 복원.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
