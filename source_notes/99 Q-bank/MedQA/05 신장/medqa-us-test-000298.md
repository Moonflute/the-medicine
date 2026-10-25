---
type: qbank
schema_version: 1
id: medqa-us-test-000298
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:f9625c38bdb6712afe71f96d85648e24bf6834b4efeb721c993c02ccf9b74639
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "항이뇨호르몬 부적절 분비 증후군"
  - "저나트륨혈증"
  - "경막하혈종"
related_disease_slugs:
  - MDQg64K067aE67mEL-2VreydtOuHqO2YuOultOuqrCDrtoDsoIHsoIgg67aE67mEIOymne2bhOq1sCAoU0lBREgpIChTeW5kcm9tZSBvZiBJbmFwcHJvcHJpYXRlIEFudGlkaXVyZXRpYyBIb3Jtb25lIFNlY3JldGlvbiAoU0lBREgpKS5tZA
  - MDUg7Iug7J6lL-yggOuCmO2KuOulqO2YiOymnSAoSHlwb25hdHJlbWlhKS5tZA
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9EZXNtb3ByZXNzaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

낙상 후 입원한 지 2일째인 77세 여성이 피로와 두통을 호소한다. 낙상 당시 오른쪽 경막하혈종을 입었다. 고혈압과 고지혈증이 있으며 입원 전 복용약은 히드로클로로티아지드와 아토르바스타틴이었다. 활력징후는 정상이었고 신체 및 신경학적 진찰에서도 이상이 없었다. 혈청 나트륨 130 mEq/L, 칼륨 4.0 mEq/L, 염소 103 mEq/L, 중탄산염 24 mEq/L, 요소질소 14 mg/dL, 크레아티닌 1.1 mg/dL, 삼투질농도 270 mOsm/kg H₂O였다. 소변 나트륨은 45 mEq/L, 소변 삼투질농도는 326 mOsm/kg H₂O였다. 두부 CT에서 오른쪽 경막하혈종은 변하지 않았다. 다음 중 가장 적절한 처치는?

## 선택지

A. 머리를 높인다
B. 톨밥탄
C. 데스모프레신
D. 수분을 제한한다

## 해설

정답은 D이다. 저삼투성 저나트륨혈증에서 소변이 부적절하게 농축되어 있고 요중 Na가 높은 결과는 두개내 병변 관련 SIADH에 합당할 수 있다. 다만 최근 hydrochlorothiazide 사용과 체액량 상태를 확인해야 하며 SIADH는 배제 진단이다. 안정된 경도 저나트륨혈증에서 SIADH가 유력하면 원인 약물을 중단하고 수분 제한을 시행한다. 저혈량성 저나트륨혈증이나 뇌성 염분소실에 무조건 수분 제한을 적용해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: SIADH가 의심되지 않는다는 모순을 교정하고 thiazide/체액량이라는 진단 제한을 추가.
- https://academic.oup.com/ejendo/article/170/3/G1/6668028

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000298
