---
type: qbank
schema_version: 1
id: medqa-us-train-009941
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8fc707c2df493b45df83493e16070f15033d818df95e4cd4ce2aaa4b867e1985
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "nephrogenic diabetes insipidus"
related_disease_slugs:
  - MDQg64K067aE67mEL-y9qe2Mpeq4sOybkCDsmpTrtpXspp0gKE5lcGhyb2dlbmljIERpYWJldGVzIEluc2lwaWR1cykubWQ
question_type: diagnosis
difficulty: complex
answer: "D"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL05hcHJveGVuLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9EZXNtb3ByZXNzaW4ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MaXRoaXVtLm1k
curation_status: "revised"
curation_reason: "신성 신장성 이뇨증 용어 오류를 고치고 탈수·고삼투 상태에서 수분 제한 검사를 따라 하지 않도록 한계 명시."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

71세 여성이 2주간 지속된 빈번하고 다량의 배뇨를 주소로 내원하였다. 환자는 최근 유럽에서 미국으로 이주하여 손자와 함께 살게 된 신환으로, 이전 의료 기록이 없다. 과거 건강 문제에 대해 묻자 환자는 혼란스러워하며 매일 복용하는 약물로 아스피린(aspirin), 오메프라졸(omeprazole), 나프록센(naproxen), 리튬(lithium)을 보여주었다. 동행한 손자는 유럽의 이전 주치의에게 의료 기록 사본을 요청했다고 덧붙였다. 손자는 환자가 매일 약 4~5L의 물을 마시고 있다고 말한다. 체온은 37°C, 호흡수는 15회/분, 맥박은 107회/분, 혈압은 92/68 mm Hg이다. 신체 검진상 점막이 건조하다. 검사실 검사 결과는 다음과 같다:
혈장 삼투압(Posm) 310 mOsm/kg
소변 삼투압(Uosm) 270 mOsm/kg
6시간 수분 제한 후:
혈장 삼투압(Posm) 320 mOsm/kg
소변 삼투압(Uosm) 277 mOsm/kg
데스모프레신 아세테이트(DDAVP) 투여 후:
혈장 삼투압(Posm) 318 mOsm/kg
소변 삼투압(Uosm) 280 mOsm/kg
이 환자의 상태의 가장 가능성 있는 원인은 무엇인가?

## 선택지

A. 원발성 다음증(Primary polydipsia)
B. 아스피린(Aspirin)
C. 오메프라졸(Omeprazole)
D. 리튬(Lithium)

## 해설

Lithium 노출과 높은 혈장 삼투질농도에도 희석된 소변, DDAVP 후 미미한 농축 반응은 신성 요붕증을 지지한다. 원문 검사값의 해석을 묻는 문항이며 이미 저혈량·고삼투 상태인 환자에게 수분 제한 검사를 새로 진행하라는 뜻이 아니다. 실제 환자는 먼저 체액·Na·신기능 및 lithium 독성을 평가하고 안전하게 교정해야 한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009941

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 신성 신장성 이뇨증 용어 오류를 고치고 탈수·고삼투 상태에서 수분 제한 검사를 따라 하지 않도록 한계 명시.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.nbt.nhs.uk/sites/default/files/Water%20Deprivation%20Test%20in%20Adults.pdf
