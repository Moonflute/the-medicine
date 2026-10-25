---
type: qbank
schema_version: 1
id: medqa-us-train-009585
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bc307819fda4764a18851d032764a69becab396ac54552843915fd2e728d3523
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "anovulatory bleeding"
  - "무배란성 출혈"
  - "adolescent abnormal uterine bleeding"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-u5hOygleyDgSDsnpDqtoEg7Lac7ZiIIChBYm5vcm1hbCBVdGVyaW5lIEJsZWVkaW5nKS5tZA
difficulty: simple
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

13세 여아가 4개월 동안 간헐적인 질출혈과 복통으로 내원했다. 현재 증상이 있고 오늘 패드 하나가 흠뻑 젖었다. 성생활이나 불법 약물 사용은 부인한다. 활력징후는 정상이고 건강해 보이며 복부와 골반 진찰도 국소 이상이 없다. 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 아지트로마이신과 세프트리악손 투여
B. 응고검사
C. 자궁경검사와 생검
D. 안심시키고 퇴원

## 해설

건강하고 활력징후·복부골반 진찰이 정상이며 하루 패드 한 장 정도의 출혈이면 사춘기 월경 시작에 따른 증상일 수 있어 설명·안심(D)과 경과 관찰이 적절하다. 출혈량·초경 이력·빈혈 및 출혈질환 위험을 문진하고 심한 통증, 과다출혈, 어지럼이면 재평가한다. 정상 활력징후만으로 모든 원인을 배제한 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 안정된 13세의 경미한 주기성 출혈에 안심 D 유지. 모든 청소년 출혈은 무검사 퇴원이라는 일반화를 삭제.
- https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2019/09/screening-and-management-of-bleeding-disorders-in-adolescents-with-heavy-menstrual-bleeding

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009585
