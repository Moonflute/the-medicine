---
type: qbank
schema_version: 1
id: medqa-us-train-002791
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:877da15f210cd87931eea3fa1ba807c938aa96867b2629416b2c6a827c31ccfb
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "asbestosis"
  - "pleural plaques"
  - "occupational asbestos exposure"
  - "interstitial lung disease"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yEneuptO2PkOymnSAoQXNiZXN0b3NpcykubWQ
  - MDIg7Zi47Z2h6riwL-qwhOyniOyEsSDtj5Dsp4jtmZggKEludGVyc3RpdGlhbCBsdW5nIGRpc2Vhc2UpLm1k
question_type: risk_factor
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

70세 남성이 계단을 오르거나 개를 산책시킬 때 간헐적으로 발생하는 호흡곤란으로 내원했다. 약 한 달 전 시작되어 점점 악화되는 것 같고 마른기침도 생겼다. 천명, 발열, 오한, 최근 체중감소 또는 안정 시 호흡곤란은 없다. 7년 전 호지킨 림프종으로 화학요법과 흉부 방사선치료를 받았다. 고혈압으로 리시노프릴을 복용하고 10년 전 조선업에서 은퇴했다. 21세부터 하루 반 갑의 담배를 피웠다. 활력징후는 정상이다. 폐 청진에서 양측 기저부에 경미한 수포음이 들린다. 흉부 X선에서 양측 폐기저부의 간유리 음영과 양측 석회화 흉막판이 보인다. 다음 중 현재 상태의 가장 큰 위험 요인은?

## 선택지

A. 직업적 노출
B. 고령
C. 가족력
D. 방사선치료

## 해설


양측 폐기저부 석회화와 흉막판은 석면 노출에 의한 석면증(석면증)에서 흔히 보이며, 이는 장기간 흡입한 직업적 노출이 가장 큰 위험 요인이다. 다른 선택지는 해당 방사선성 석회화와는 연관성이 낮다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 조선업 노출력·기저부 간질음영·양측 석회화 흉막판으로 석면 직업노출 A. 흉막판만으로 모든 섬유화를 확진한 것은 아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002791
