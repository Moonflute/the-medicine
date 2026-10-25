---
type: qbank
schema_version: 1
id: medqa-us-train-001839
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dda0bb96dcca90e2ddaa50f6b2e879ff2b8124f1cfeca4a85df9a377e01bcc16
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "functional abdominal pain"
  - "school avoidance"
  - "cognitive behavioral therapy"
  - "Functional abdominal pain"
question_type: management
related_disease_slugs: []
difficulty: complex
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

5세 남아가 반복되는 복통 때문에 부모와 함께 내원했다. 지난주 복통으로 수업에서 5번 조퇴해 집에 왔다. 어머니는 변이 갈색이고 피가 없으며 농도와 냄새가 정상으로 변하지 않았다고 한다. 집에서는 평소처럼 지내며 증상을 호소하지 않는다. 점심으로 쿠스쿠스, 채소, 볶음밥과 닭고기를 준비해 준다고 한다. 배변 곤란이나 기능성 통증은 없다. 활력징후와 BMP·CBC는 정상이고 복부는 부드럽고 팽창하지 않으며 압통도 없다. 아이와 증상을 탐색하는 대화를 나눈 후 다음 관리 단계는 무엇인가?

## 선택지

A. 경구 수분과 섬유질 섭취를 늘린다
B. 대변의 잠혈 적혈구와 백혈구를 확인한다
C. ciprofloxacin 치료를 시작한다
D. 인지행동치료를 시작한다

## 해설

학교에서는 복통 때문에 귀가하지만 집에서는 정상으로 지내고 제시된 진찰·기본검사에 이상이 없어 정서적·기능성 복통을 고려한다. 증상과 학교의 스트레스·회피 맥락을 탐색한 뒤 제시된 선택지 중 인지행동치료로 대처와 기능 회복을 돕는 것이 적절하다. 기본검사가 정상이라는 이유만으로 모든 기질적 원인이 완전히 배제되거나 증상을 꾀병으로 단정하는 것은 아니며 경과와 경고 소견을 추적한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001839

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. CBT 원정답 유지. 유기적 원인 완전 배제 및 CBT의 보편적 최상위 효과로 과장하지 않도록 수정.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
