---
type: qbank
schema_version: 1
id: medqa-us-train-009203
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a5840008676a65e3933c9fb0276914c729886d7ae523b7cf5d8b43398a55e0db
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "ankylosing spondylitis"
  - "강직성 척추염"
  - "sacroiliitis"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qwleyngeyEsSDsspnstpTsl7wgKEFua3lsb3NpbmcgU3BvbmR5bGl0aXMpLm1k
question_type: management
difficulty: complex
answer: A
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
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
---

# MedQA US 임상문제

## 문제

27세 남자가 요통으로 일차의료기관에 내원했다. 통증은 1년 전 시작되었지만 지난 몇 달 동안 현저히 악화되었고 아침에 가장 심하다. 과거력은 특이사항이 없으나 최근 오른쪽 눈 통증과 시야 흐림이 있었다. 척추와 골반 방사선 사진에서 양측 천장관절염이 보인다. 가장 적절한 치료는 무엇인가?

## 선택지

A. 인도메타신
B. 메토트렉세이트
C. 시클로포스파미드
D. 침상 안정

## 해설


염증성 요통, 양측 천장관절염과 눈 통증·시야흐림 병력은 axial spondyloarthritis를 시사한다. 초기 통증·강직 조절에는 운동·물리치료와 NSAID를 사용하므로 보기 중 indomethacin A가 적절하다. Indomethacin은 cyclooxygenase 억제 NSAID이며 infliximab이나 TNF inhibitor가 아니다. 생물학적 치료는 적절한 기존 치료에도 활동성이 지속될 때 별도 기준으로 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009203 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: indomethacin을 infliximab/TNF억제제로 혼동한 위험 약리오류 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/NG65/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009203
