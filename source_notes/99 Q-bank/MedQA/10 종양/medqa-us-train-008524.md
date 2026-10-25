---
type: qbank
schema_version: 1
id: medqa-us-train-008524
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d64954a22f2174242e8911558a137f1ba453592a0d3ee722a00209b0c05f45e3
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "BRCA1 mutation"
  - "BRCA2 mutation"
  - "breast cancer screening"
related_disease_slugs:
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
question_type: prevention
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

32세 여성이 연례 신체검사를 받으러 왔다. 지난 방문 이후 가족력에 변화가 있었다. 어머니가 최근 유방암 진단을 받았고 언니가 BRCA2 돌연변이 양성 판정을 받았다. 따라서 환자도 검사를 요청했다. BRCA1 또는 BRCA2 돌연변이 양성이라면 다음 중 가장 적절한 선별검사 방법은 무엇인가?

## 선택지

A. 매년 임상 유방검사, 매년 유방촬영술, 매월 자가 유방검사
B. 6개월마다 임상 유방검사, 매년 유방촬영술, 매년 유방 MRI, 자가 유방검사
C. 매년 초음파, 매년 유방촬영술, 매월 자가 유방검사
D. 유방 MRI를 의뢰한다

## 해설


BRCA1/2 pathogenic variant가 확인된32세 여성은 유방 MRI와 mammography를 각각매년 시행하는 고위험군 검진이 필요하므로 보기 중B가 가장완전하다. 임상유방평가와 breast awareness도 중요하지만 고정된월간자가검진만으로 선별을대신하지않으며 국가별구체시작연령·프로토콜은차이가있다. 단일MRI만제시한D는장기검진계획전체가아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008524 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: BRCA32세의annualMRI+mammography B유지, 월간자가검진을획일적검진의필수요건으로격상한설명완화.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/publications/pdq/information-summaries/genetics/brca-genes-hp-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008524
