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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
  - ZHJ1ZzowOCDqsJDsl7wvSXZlcm1lY3Rpbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9SaXZhcm94YWJhbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

59세 남성이 일주일 동안 지속된 심한 가려움으로 보건소에 내원했다. 침대에 누워 있는 밤에 더 심하다. 과거력으로 고지혈증, 심방세동과 대장암이 있다. 리바록사반, 심바스타틴과 아스피린을 복용한다. 대장절제술, 충수절제술과 편도절제술을 받은 수술력이 있다. 거의 매일 밤 맥주 6팩을 마시고 하루에 담배 두 갑을 피우며 지난 6개월 동안 노숙자 보호소에서 살았다. 피부검사에서 양쪽 손목과 손가락 사이에 작은 딱지성 상처와 표재성 물결 모양의 회색 선이 보이고, 작은 수포와 긁은 자국도 있다. 가장 적절한 치료는 무엇인가?

## 선택지

A. 퍼메트린
B. 이버멕틴
C. 아시클로버
D. 디클록사실린

## 해설

야간 소양증과 손목·손가락 사이의 사행성 굴, 구진·수포는 옴에 합당하다. Permethrin 5% 국소제(A)는 권고되는 일차 치료이며 적절한 전신 도포가 중요하다. 한 번으로 치료될 수 있지만 약 1주 간격의 추가 도포가 필요할 수 있다. 경구 ivermectin도 유효한 대안이므로 무효한 선지로 배제하지 않는다. 접촉자 평가·동시 치료 및 재노출 관리도 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 옴의 permethrin A는 적절하나 단회가 항상 최선·충분이라는 과장을 교정하고 ivermectin도 유효한 대안임을 설명한다.
- 공식/학회 근거: https://www.cdc.gov/scabies/hcp/clinical-care/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004696
