---
type: qbank
schema_version: 1
id: medqa-us-train-005242
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e8d342ca80149ea3748cca88c43c3b5a0f8ce564d4edb5bfe43f8699d0dc4970
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "급성 폐쇄각 녹내장"
  - "안압 상승"
  - "에피네프린 금기"
  - "Acute angle-closure glaucoma"
question_type: management
related_disease_slugs:
  - MTgg7JWI6rO8L-uFueuCtOyepSAoZ2xhdWNvbWEpLm1k
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL1RpbW9sb2wubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

50세 남자가 한 시간 전 시작된 심한 오른쪽 눈 통증, 전두부 두통, 메스꺼움과 구토로 응급실에 왔다. 오른쪽 눈은 붉고 단단하며 동공은 중간 정도로 확장되어 빛에 반응하지 않는다. 다음 중 이 환자에서 금기인 약물은?

## 선택지

A. 국소 티몰롤
B. 국소 에피네프린
C. 국소 아프라클로니딘
D. 경구 아세타졸아미드

## 해설

급성 폐쇄각 발작을 시사하는 통증·충혈·단단한 안구와 중간 산동이 있다. Epinephrine의 산동 작용은 좁은 전방각에서 폐쇄를 악화시킬 수 있어 B가 피해야 할 선택지이다. 다른 세 약물은 안압 하강에 쓰일 수 있지만 각각의 금기는 따로 확인해야 한다. 특히 점안 timolol도 전신 흡수가 있어 천식, 서맥 및 2·3도 방실차단 환자에게 안전하다고 일반화해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 폐쇄각에서 epinephrine B의 산동 위험은 유지하되 점안 timolol이 모든 환자에게 안전하다는 단정 제거.
- 공식/학회 근거: https://www.aao.org/education/preferred-practice-pattern/primary-angle-closure-disease-ppp
- 공식/학회 근거: https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/020963s015lbl.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005242
