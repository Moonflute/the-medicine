---
type: qbank
schema_version: 1
id: medqa-us-validation-000970
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:ea716f858e42b1cfa95dfab1f4f166082c4252b6c8886d29990e26f4bb55fcbe
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "강직성 척추염"
  - "천장관절염"
  - "천장관절 MRI"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qwleyngeyEsSDsspnstpTsl7wgKEFua3lsb3NpbmcgU3BvbmR5bGl0aXMpLm1k
question_type: investigation
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

25세 남성이 2년간 지속된 요통으로 진료를 받으러 왔다. 정육점에서 일하며 최근 무거운 고기 덩어리를 옮겼다. 통증은 아침에 심하고 수영 외에는 호전시키는 것이 없다. 척추의 네 방향 운동 범위가 제한되어 있다. 과거력은 단백동화 steroid 남용, 여드름, 고혈압과 비만이며 hydrochlorothiazide, ibuprofen, benzoyl peroxide 및 acetaminophen을 사용한다. 척추 촉진 압통은 없다. 가장 가능성 높은 진단을 확진하는 데 도움이 되는 검사는?

## 선택지

A. 척추 방사선촬영
B. 하지직거상검사와 임상 양상
C. 천장관절 자기공명영상
D. HLA 유형 검사

## 해설


젊은 성인의 운동으로 호전되는 만성 아침 요통과 척추 운동제한은 axial SpA를 의심하게 한다. 보기 중 sacroiliac MRI C가 염증성 천장관절병변 확인에 가장 도움이 된다. 실제 진단 경로에서는 SI joint 단순촬영을 먼저 고려하고 불확실하면 MRI를 시행하는 등 임상과 결합한다. 척추 단순촬영은 천장관절 표적검사와 다르며 HLA-B27만으로 확진할 수 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000970 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 천장관절MRI C는 적절하나 MRI단독만으로 언제나확진·일반첫검사라는 과장 제거. 원문 병력/약물 누락복구.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/NG65/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000970
