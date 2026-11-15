---
type: qbank
schema_version: 1
id: medqa-us-test-001009
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:67581ec114f7aa5fc26a2d64aa79b0a8adba970407eaa955a8700ca2b0d00bb0
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "무증상 세균뇨"
  - "Enterobacter 집락화"
  - "노인 환자"
related_disease_slugs:
  - MDUg7Iug7J6lL-ustOymneyDgSDshLjqt6Drh6ggKEFzeW1wdG9tYXRpYyBCYWN0ZXJpdXJpYSkubWQ
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMiDtmLjtnaHquLAvSXByYXRyb3BpdW0ubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9NZW1hbnRpbmUubWQ
---

# MedQA US 임상문제

## 문제

요양시설에 거주하는 83세 환자의 소변배양에서 대장균이 나왔다. 평소와 다름없이 지내며 배뇨통, 새 빈뇨, 발열이 없다. 점막 손상을 동반하는 비뇨기 시술 계획도 없다. 적절한 처치는?

## 선택지

A. 배양 감수성에 맞춰 항생제를 투여한다
B. 농뇨가 있으면 증상이 없어도 치료한다
C. 증상이 없으므로 항생제를 투여하지 않는다
D. 배양이 음성이 될 때까지 정기적으로 검사하고 치료한다

## 해설


무증상 세균뇨는 장기요양시설 고령자에서도 표준적으로 치료하지 않는다. 임신 또는 점막 손상을 동반하는 비뇨기 시술 전 등은 예외다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-test-001009`와 직접 대조했다.
- 판정: 국소 요로증상·전신 감염징후 없이 배양/농뇨만 있어 무증상 세균뇨 D 유지. 인지저하만으로 치료하지 않는 IDSA 권고 확인.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.idsociety.org/practice-guideline/asymptomatic-bacteriuria/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001009
