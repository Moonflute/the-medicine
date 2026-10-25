---
type: qbank
schema_version: 1
id: medqa-us-validation-000329
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:6caf582d5974b1f6a3d431405fb98dea3e566bafc20b7a78e5d6d10ce6930324
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "당뇨병성 신증"
  - "사구체 과여과"
  - "미세알부민뇨"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvantjKXrs5Hspp0gKERpYWJldGljIE5lcGhyb3BhdGh5KS5tZA
question_type: mechanism
difficulty: complex
answer: "A"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "당뇨병성 단백뇨와 요당을 단순 여과면적 증가 하나로 설명한 오류 교정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

56세 남성이 건강검진을 받으러 왔다. 20년간 제2형 당뇨병이 있고 불면증이 있으며 메트포르민과 NPH 인슐린을 복용한다. 매일 담배 반 갑을 피우고 하루 맥주 1~2잔, 주말에는 더 많이 마신다. 활력징후는 정상이고 비만해 보인다. 발 검사에서 이상은 없었다. 소변검사에서 포도당(++), 단백질(+++)이 보인다. 이 소견을 설명하는 것은?

## 선택지

A. 사구체 과여과
B. 신동맥 협착
C. 내피하 면역복합체 침착
D. 간질 위축

## 해설

당뇨병의 초기 사구체 과여과·사구체 내압 상승은 장기적인 여과 장벽 손상과 albuminuria에 기여한다. 따라서 선택지 중 A가 의도한 기전이다. 오랜 당뇨와 단백뇨만으로 현재 GFR이 높다고 확정할 수는 없다. 요당은 주로 포도당 재흡수 능력을 넘어선 부하와 관련되며 단백뇨와 같은 기전으로 묶지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000329

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 당뇨병성 단백뇨와 요당을 단순 여과면적 증가 하나로 설명한 오류 교정.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
