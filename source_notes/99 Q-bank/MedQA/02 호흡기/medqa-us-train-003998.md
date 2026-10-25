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
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
question_type: 임상증례 객관식
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

22세 여자가 호흡곤란을 주호소로 응급실에 왔다. 하이킹 중 갑자기 숨을 쉴 수 없다고 느껴 천천히 깊게 호흡하자 증상이 호전되었다. 스웨덴 교환학생으로 영어를 하지 못하며, 과거력과 현재 복용약은 알 수 없다. 체온 37.5°C, 혈압 127/68 mmHg, 맥박 120회/분, 호흡수 22회/분, 실내 공기 산소포화도 90%이다. 양측 공기 유입이 감소하고 빈맥이 있다. 치료를 시작했다. 다음 중 이 환자의 기저 병태를 가장 잘 설명하는 것은 무엇인가? (FEV1: 1초간 노력성 호기량, FVC: 노력성 폐활량, DLCO: 일산화탄소 확산능)

## 선택지

A. 기도 긴장도 감소
B. FEV1/FVC 증가
C. FVC 증가
D. 정상 DLCO

## 해설

젊은 환자의 발작성 호흡곤란과 공기유입 감소는 천식성 기도폐쇄를 시사한다. 천식은 폐포-모세혈관 구조가 보존되어 DLCO가 정상 또는 높을 수 있으므로 D가 부합한다. 저산소증과 진찰 이상을 단순 과호흡성 호흡알칼리증으로 설명하거나 불안만으로 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 저산소·공기유입 감소를 단순 과호흡증후군으로 설명한 오연결; 폐쇄성천식의 DLCO정상 D와 체온단위 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003998
