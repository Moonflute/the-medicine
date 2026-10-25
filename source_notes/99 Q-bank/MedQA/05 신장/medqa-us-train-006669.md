---
type: qbank
schema_version: 1
id: medqa-us-train-006669
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:52e9ad70f95c1afd87e51300059a0b8a74ef215e7b9a4d8204474dc0c62dd4d2
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "IgA 신병증"
  - "재발성 육안적 혈뇨"
  - "메산지움 IgA 침착"
  - "IgA nephropathy"
related_disease_slugs:
  - MDUg7Iug7J6lL0lnQSDsvantjKXrs5Hspp0gKElnQU4pIChJZ0EgTmVwaHJvcGF0aHkpLm1k
question_type: diagnosis
difficulty: complex
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
curation_reason: "혈액에 IgA가 침착된다는 표현을 사구체 메산지움 침착으로 교정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

15세 남아가 아침부터 소변이 분홍색으로 보여 내원했다. 지난 2일 동안 인후통과 연하곤란이 있었고 미열도 있다. 배뇨통이나 빈뇨 변화는 없다. 지난 2년 동안 인후통과 분홍색 소변이 동반된 유사한 에피소드가 두 번 있었다. 누나가 전신홍반루푸스를 앓고 있다. 체온은 38.3°C(101°F), 맥박은 분당 76회, 혈압은 120/80 mm Hg이다. 구강 진찰에서 인두 홍반과 편도 비대가 보인다. 검사에서 백혈구 20,000/mm³, 혈액요소질소 8 mg/dL, 크레아티닌 1.4 mg/dL, 소변 혈액 3+, 단백 1+, 변형 적혈구 15~17/고배율시야, 적혈구 원주 다수이다. 양쪽 신장 초음파는 정상이다. 신장 생검에서 다음 중 어떤 소견이 나타날 가능성이 가장 높은가?

## 선택지

A. 사구체 기저막 분열
B. 피브린과 혈장 단백질의 반월체
C. IgA 메산지움 침착
D. IgG, IgM 및 C3 보체의 과립성 침착

## 해설

상기도 감염과 거의 동시에 반복되는 육안 혈뇨는 IgA 신병증을 지지한다. 변형 적혈구·적혈구 원주는 사구체 기원을 뒷받침하며 대표 생검 소견은 메산지움의 IgA 우세 침착이다. 감염 후 잠복기를 두는 전형적인 PSGN과 구별한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006669

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 혈액에 IgA가 침착된다는 표현을 사구체 메산지움 침착으로 교정.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
