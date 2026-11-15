---
type: qbank
schema_version: 1
id: medqa-us-train-008390
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5655e01cbb7555b9ee765e6dbfd126491e5c5d44d7d5430d1675e25abdede73f
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "rabies"
  - "rabies postexposure prophylaxis"
  - "animal bite"
question_type: prevention
related_disease_slugs:
  - MDgg6rCQ7Je8L-qzteyImOuzkSAoUmFiaWVzKS5tZA
  - MTEg7Jm46rO8L-uPmeusvCDrrLzrprwgKEFuaW1hbCBCaXRlKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

공수병 유행 지역에서 여행하던 20세 남성이 관찰할 수 없는 야생 포유류에 물렸다. 상처를 세척했고, 과거 공수병 노출 후 백신을 권장 일정대로 모두 맞은 기록이 있다. 이번에 필요한 예방은?

## 선택지

A. 예방 처치 없음
B. 면역글로불린만 투여
C. 백신 추가접종만 하고 면역글로불린은 투여하지 않는다
D. 백신과 면역글로불린을 모두 투여한다

## 해설

이전에 권장 백신 일정을 완료한 사람이 재노출되면 일반적으로 0일과 3일에 추가접종하고 면역글로불린은 주지 않는다. 노출 위험과 접종 기록을 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 도망간 야생 라쿤 교상을 저위험·추가 조치 불필요로 설명한 모순을 교정한다. 과거 접종 완료자 PEP 백신 D와 HRIG 제외를 확인한다.
- 공식/학회 근거: https://www.cdc.gov/rabies/hcp/clinical-care/post-exposure-prophylaxis.html
- 공식/학회 근거: https://www.cdc.gov/tetanus/hcp/clinical-guidance/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008390
- https://www.kdca.go.kr/bbs/kdca/55/306017/download.do
