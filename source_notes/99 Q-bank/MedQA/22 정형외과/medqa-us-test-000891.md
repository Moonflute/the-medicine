---
type: qbank
schema_version: 1
id: medqa-us-test-000891
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:21318bba20622cb1136e784afebce8757e89f9e535ed3ec522c3eb32b1501af6
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "골다공증"
  - "저에너지 골절"
  - "비스포스포네이트"
question_type: management
related_disease_slugs:
  - MDQg64K067aE67mEL-qzqOuLpOqzteymnSAoT3N0ZW9wb3Jvc2lzKS5tZA
  - MjIg7KCV7ZiV7Jm46rO8L-qzqOygiCDstJ3roaAgKEZyYWN0dXJlIEdlbmVyYWwgUHJpbmNpcGxlcykubWQ
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
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9BbGVuZHJvbmF0ZS5tZA
  - ZHJ1ZzoxMCDsooXslpEvVGFtb3hpZmVuLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

51세 백인 여성이 정기 건강검진을 받으러 왔다. 2년 전 콜리스 골절이 있었고 그 외 병력은 특이하지 않다. 주로 앉아서 생활하며 30년 동안 하루 한 갑씩 흡연했고 음주는 중등도이다. 어머니는 60대 후반에 손목 골절을 했다. 진찰은 정상이었다. 이중에너지 X선 흡수계측에서 고관절 T점수는 -3.2 표준편차였다. 낙상 위험 교육, 운동 및 금연 지원, 적절한 식이와 칼슘·비타민 D 보충을 시행했다. 약물치료의 다음 단계로 가장 적절한 것은?

## 선택지

A. 알렌드로네이트
B. 칼시토닌
C. 에스트로겐
D. 타목시펜

## 해설

정답은 A, 알렌드로네이트이다. 고관절 T점수 -3.2는 골다공증 범위이며 기존 손목 골절력도 골절 위험 평가에 중요하다. 알렌드로네이트 자체가 비스포스포네이트이며, 적절한 환자에서 골절 위험을 줄이는 초기 치료 선택지이다. 70세 이상에서만 사용하거나 비스포스포네이트 금기 이후에 쓰는 약물이 아니다. 매우 높은 골절 위험에서는 골형성제 등 다른 전략을 고려할 수 있지만, 제시된 선지 중에는 알렌드로네이트가 가장 적절하다. 실제 처방 시 폐경 여부, 신장기능, 식도질환 등 금기를 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 51세 문항에 70세 이상 기준을 덧붙이고 알렌드로네이트를 비스포스포네이트 금기 후 2차제로 기술한 오류 수정. 원정답 A 유지.
- 공식/학회 근거: https://www.endocrine.org/clinical-practice-guidelines/osteoporosis-in-postmenopausal-women

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000891
