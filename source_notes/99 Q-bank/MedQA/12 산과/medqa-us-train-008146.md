---
type: qbank
schema_version: 1
id: medqa-us-train-008146
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e45acd509a03df02621c43ac8438976e41e1998cd378ffd5e03f25916c5d434e
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "pregnancy"
  - "neural tube defect prevention"
  - "folic acid supplementation"
  - "Neural tube defects"
question_type: prevention
related_disease_slugs: []
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VwaGFsZXhpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MYW1vdHJpZ2luZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

26세 여성이 9주 동안 월경이 없어 여성건강클리닉에 내원했다. 대발작 병력이 있고 최근 급성 부비동염을 진단받아 라모트리진과 아목시실린을 처방받았다. 10년간 매일 담배 반 갑을 피우고 한 달에 몇 주말은 사교적으로 술을 마신다. 어머니는 61세에 유방암으로 사망했다. 소변 β-hCG가 양성이며 복부 초음파에서 마지막 월경 첫날에 맞는 배아가 보인다. 이 환자에서 신생아 선천성 기형을 줄이는 데 가장 도움이 되는 것은?

## 선택지

A. 음주 감소
B. 엽산 보충
C. 다른 항간질제로 변경
D. 세팔렉신으로 변경

## 해설

선택지 중 엽산 보충(B)은 신경관 결손 예방에 중요하며 항경련제 복용 임신에서는 전문가와 용량·약물 안전성을 상담한다. 임신 중 음주는 감소가 아니라 중단을 권고한다. 라모트리진을 임의로 바꾸거나 중단하면 발작 위험이 있으므로 약물 변경은 전문 판단이 필요하다. 엽산을 9주에 시작해도 이미 발생한 결손을 되돌리는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 음주 감소가 기형 예방 효과가 없다는 위험한 표현 삭제.
- https://www.cdc.gov/folic-acid/about/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008146
