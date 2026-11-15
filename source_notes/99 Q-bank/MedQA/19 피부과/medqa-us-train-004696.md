---
type: qbank
schema_version: 1
id: medqa-us-train-004696
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2a9f3b2b02f7ed076e3d4aa508ad0405c6a6940ccb8ab2d2c807e067f5b33bc3
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "옴"
  - "Sarcoptes scabiei"
  - "야간 소양감"
question_type: management
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-yYtCAoU2NhYmllcykubWQ
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
  - ZHJ1ZzowOCDqsJDsl7wvSXZlcm1lY3Rpbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9SaXZhcm94YWJhbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

59세 남성이 밤에 심해지는 가려움으로 내원했다. 손목과 손가락 사이에 작은 구진과 가느다란 굴이 있고, 함께 사는 가족도 최근 가렵다고 한다. 가장 적절한 관리는?

## 선택지

A. 환자에게 국소 스테로이드를 처방하고 가족은 경과 관찰한다
B. 환자에게만 5% 퍼메트린을 바르고 가족은 증상이 심해질 때 치료한다
C. 환자에게 5% 퍼메트린을 사용하고 밀접접촉자는 증상이 없어도 함께 치료한다
D. 가족 모두에게 국소 항생제를 처방한다

## 해설

밤에 심한 가려움과 손가락 사이의 굴은 옴을 시사한다. 5% 퍼메트린은 국내 일차 치료이며, 밀접접촉자를 동시에 치료해야 반복 감염을 줄일 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 옴의 permethrin A는 적절하나 단회가 항상 최선·충분이라는 과장을 교정하고 ivermectin도 유효한 대안임을 설명한다.
- 공식/학회 근거: https://www.cdc.gov/scabies/hcp/clinical-care/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004696
- https://kdca.go.kr/bbs/kdca/55/260011/download.do
