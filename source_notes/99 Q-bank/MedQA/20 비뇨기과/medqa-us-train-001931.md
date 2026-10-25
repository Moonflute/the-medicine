---
type: qbank
schema_version: 1
id: medqa-us-train-001931
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c16cb19c18a83421dd2a00ad013ff91a8c6649ed550c4b4a8cd61a08cb3154bc
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "testicular torsion"
  - "epididymitis"
  - "scrotal ultrasound"
question_type: investigation
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-qzoO2ZmOyXvOyghCAoVGVzdGljdWxhciB0b3JzaW9uKS5tZA
  - MjAg67mE64eo6riw6rO8L-q4ieyEsSDrtoDqs6DtmZjsl7wgKEFjdXRlIGVwaWRpZHltaXRpcykubWQ
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

22세 남성이 4시간 동안 진행한 왼쪽 음낭 통증으로 응급실에 왔다. 욱신거리는 통증이 10점 만점에 6점이고 병원으로 오는 길에 한 번 구토했다. 4일간 배뇨통이 있었고 지난 1년간 여성 2명과 성관계를 했으며 콘돔은 일관되게 사용하지 않았다. 왼쪽 고환이 붓고 압통이 있으며 왼쪽 음낭이 홍반성이다. 소변 leukocyte esterase 양성, 백혈구가 보인다. 다음 중 가장 적절한 관리 단계는 무엇인가?

## 선택지

A. 복부·골반 CT
B. 수술적 탐색
C. 음낭 초음파
D. 혈청 유행성이하선염 IgG 역가 측정

## 해설

정답은 C, 음낭 초음파이다. 배뇨통·농뇨와 성접촉력은 부고환염을 지지하지만 급성 통증·구토가 있어 고환염전을 감별해야 한다. 진찰과 검사만으로 확실히 구분되지 않으면 도플러 초음파가 유용하다. 단, 염전 가능성이 매우 높으면 즉시 비뇨의학과 평가/수술을 진행하며 영상검사 때문에 지연하지 않는다. 초음파 하나가 부분 염전을 항상 배제하는 것도 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 급성음낭통증 모두 초음파부터라는 일반화 수정. 애매한 임상에서 Doppler C 유지, 염전 고의심시 영상으로 수술 지연 금지.
- 공식/학회 근거: https://www.cdc.gov/std/treatment-guidelines/epididymitis.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001931
