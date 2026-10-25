---
type: qbank
schema_version: 1
id: medqa-us-train-004997
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bd54188ea8b8a65742291e016e48e592e16675714f963f840096951feb809fbf
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "프리드라이히 운동실조"
  - "척수소뇌성 운동실조"
  - "프라탁신 유전자"
  - "Friedreich ataxia"
question_type: diagnosis
related_disease_slugs: []
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

12세 남아가 점점 서툴게 걷고 자주 넘어져 내원했다. 술에 취한 사람처럼 걷고 구음이 약간 어눌하다. 발목반사가 양쪽에서 소실되고 바빈스키 징후가 양성이며 진동감각과 고유감각이 모두 소실되어 있다. 눈을 감고 발을 모아 서게 하면 좌우로 흔들려 서 있지 못한다. 형도 같은 증상을 보였고 X선에서 경한 척추측만증, 심전도에서 광범위 T파 역전이 보이며 공복혈당은 143 mg/dL이다. 가장 가능성 높은 진단은?

## 선택지

A. 운동실조-모세혈관확장증
B. 샤르코-마리-투스병
C. 프리드라이히 운동실조
D. 근긴장성 이영양증

## 해설

진행성 보행·구음 실조, 진동·고유감각 소실, 무반사와 Babinski 징후의 공존, 가족력·척추측만 및 심장 이상은 프리드라이히 운동실조(C)에 합당하다. 대개 FXN 유전자의 GAA 반복 확장에 따른 프라탁신 결핍으로 생기는 상염색체열성 질환이며 ATXN2는 이 질환의 유전자가 아니다. 후주/감각신경·척수소뇌로·피질척수로 침범이 임상조합을 설명하며 심근병증과 당대사 이상도 동반될 수 있다. 한 번의 공복혈당 상승만으로 당뇨병이 확진되었다고 확대하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 프라탁신 유전자를 ATXN2로 오기한 핵심 오류를 FXN으로 바로잡았다. 프리드라이히 운동실조 C의 척수로·심장 연관을 설명하고 원문 고혈당 단서를 복원했다.
- 공식/학회 근거: https://medlineplus.gov/download/genetics/condition/friedreich-ataxia.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004997
