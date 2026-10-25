---
type: qbank
schema_version: 1
id: medqa-us-train-005811
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8e3b04143f57eb2f5620b8325eb38f3d39ff72a2c17dcf73006b7727703dd303
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "일과성 단백뇨"
  - "기립성 단백뇨"
  - "소아 단백뇨 평가"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4sOumveyEsSDri6jrsLHrh6ggKE9ydGhvc3RhdGljIFByb3RlaW51cmlhKS5tZA
question_type: investigation
difficulty: standard
answer: "C"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "아직 확인되지 않은 단백 변동을 창작하지 않고 기립성·운동성 단백뇨를 구별."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

15세 남자가 일주일 전 충수절제술 후 추적 진료를 위해 소아과에 왔다. 복통, 발열, 오한, 오심, 구토, 설사 또는 변비는 없고 고형식과 액체를 문제없이 먹고 마신다. 학교 농구팀 활동도 어려움 없이 재개했다. 소변이 평소보다 호박색으로 보여 탈수 때문일 것 같다고 한다. 신체검사는 정상이고 복강경 절개 부위는 발적 없이 깨끗하다. 소변검사에서 상피세포 소량, 포도당 음성, 단백 3+, 백혈구 3/HPF, 세균 없음, 백혈구에스테라제 음성, 아질산염 음성이었다. 3일 후 재방문하도록 했으나 소변검사도 비슷하다. 다음 중 관리의 최선의 다음 단계는 무엇인가?

## 선택지

A. 기본 대사 패널
B. 신장 생검
C. 아침과 오후에 소변검사지 검사
D. 소변 전해질과 크레아티닌

## 해설

무증상 청소년의 반복 단백뇨에서는 밤새 누워 있다가 얻은 첫 아침 소변과 활동 후 검체를 비교해 기립성 단백뇨를 평가할 수 있다. 현재 자료로 변동이 확인된 것은 아니다. 기립성은 자세와 관련되며 운동성 단백뇨와 같은 말이 아니다. 아침에도 지속되거나 다른 이상이 있으면 단백 정량과 신기능 평가가 필요하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005811

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 아직 확인되지 않은 단백 변동을 창작하지 않고 기립성·운동성 단백뇨를 구별.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
