---
type: qbank
schema_version: 1
id: medqa-us-train-003998
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a539c2f39f3d340e139b09a4c927498dbc81cffaa10c71d1915774c05bbceb82
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "천식"
  - "기관지수축"
  - "폐기능검사"
  - "일산화탄소 확산능"
question_type: 임상증례 객관식
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

22세 여자가 호흡곤란을 주호소로 응급실에 왔다. 하이킹 중 갑자기 숨을 쉴 수 없다고 느껴 천천히 깊게 호흡하자 증상이 호전되었다. 스웨덴 교환학생으로 영어를 하지 못하며, 과거력과 현재 복용약은 알 수 없다. 체온 37.5°F, 혈압 127/68 mmHg, 맥박 120회/분, 호흡수 22회/분, 실내 공기 산소포화도 90%이다. 양측 공기 유입이 감소하고 빈맥이 있다. 치료를 시작했다. 다음 중 이 환자의 기저 병태를 가장 잘 설명하는 것은 무엇인가? (FEV1: 1초간 노력성 호기량, FVC: 노력성 폐활량, DLCO: 일산화탄소 확산능)

## 선택지

A. 기도 긴장도 감소
B. FEV1/FVC 증가
C. FVC 증가
D. 정상 DLCO

## 해설


급성 호흡곤란 발작에서 증상이 심호흡 시 호전되는 것은 과호흡에 의한 호흡성 알칼리증을 시사한다. 과호흡성 저탄산혈증에서는 폐환기능은 정상이며, 확산능(DLCO)은 보통 정상이다. 따라서 정상 DLCO가 가장 적절한 설명이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003998
