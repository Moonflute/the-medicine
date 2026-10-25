---
type: qbank
schema_version: 1
id: medqa-us-train-009868
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:20380acaed0b37b4033dffcb5ff2db5977c5c38820cf991662538657eefeb5b5
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "특발성 폐섬유증"
  - "벌집모양 폐"
  - "곤봉지"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2KueuwnOyEsSDtj5DshKzsnKDspp0gKElQRikgKElkaW9wYXRoaWMgUHVsbW9uYXJ5IEZpYnJvc2lzKS5tZA
question_type: diagnosis
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

53세 남성이 지속적인 기침과 점점 악화되는 호흡곤란으로 긴급진료센터에 내원했다. 수주 동안 증상이 있었으며 예전에는 운동할 때만 숨이 찼지만 이제는 안정 시에도 호흡이 어렵다. 수개월 동안 경도에서 중등도의 호흡곤란과 피로가 있었다고 한다. 과거력으로 여러 차례 화학요법을 받아 현재 관해 상태인 림프종이 있다. 매일 저용량 아스피린과 종합비타민을 복용한다. 담배와 시가를 피우며 지난 30년 동안 매일 적어도 반 갑을 피웠다. 가족력으로 삼촌 한 명이 폐질환을 앓았지만 정확한 병명은 모른다. 활력징후는 심박수 분당 101회, 호흡수 분당 23회, 혈압 125/85 mmHg, 체온 37.0°C이다. 심폐 진찰에서 흡기 시 모든 폐야에 미만성 수포음이 들리고 경도의 곤봉지가 보인다. 특발성 폐섬유증으로 예비 진단했다. 다음 중 이 환자에게도 예상되는 추가 소견은?

## 선택지

A. 쿠싱증후군
B. 석면에 대한 급성 노출
C. 금연 시 증상 호전
D. CT에서 폐 간질 내 낭성 공기 공간

## 해설

간질성 폐섬유화에서는 섬유화된 폐의 구조가 파괴되어 벌집모양 낭성 공기 공간이 CT에 나타날 수 있으므로 D가 적합하다. 이는 일반적인 가역성 기도폐쇄와 다르다. 다만 항암치료력이 있으므로 약물성 등 이차 원인을 평가해야 하며, 이 소견만으로 특발성 폐섬유증을 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 항암치료력을 무시하고 IPF를 확진하는 오용을 막고 벌집모양 D의 구조를 설명.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009868
