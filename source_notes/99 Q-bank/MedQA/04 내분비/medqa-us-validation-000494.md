---
type: qbank
schema_version: 1
id: medqa-us-validation-000494
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:4283073a5a9264dd670be4fb5d2d17f14dd007d4687bdf13596ff979e0dacefa
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "이소성 ACTH 증후군"
  - "쿠싱증후군"
  - "소세포폐암"
related_disease_slugs:
  - MDQg64K067aE67mEL-y_oOyLsSDspp3tm4TqtbAgKEN1c2hpbmcncyBTeW5kcm9tZSkubWQ
  - MDIg7Zi47Z2h6riwL-2PkCDshozshLjtj6zslZQgKFNtYWxsIENlbGwgQ2FyY2lub21hKS5tZA
  - MDQg64K067aE67mEL-uUtOqzsyDrtoDsi6Dqsonsp4jsnpDqt7ntmLjrpbTrqqwg7Kad7ZuE6rWwIChFY3RvcGljIEFDVEggU3luZHJvbWUpLm1k
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
---

# MedQA US 임상문제

## 문제

48세 남성에게 넓은 자주색 복부선조, 근위부 근력 저하와 고혈압이 있다. 외부 스테로이드 사용은 없고 두 가지 검사에서 내인성 고코르티솔혈증이 확인됐다. 원인 감별의 첫 단계는?

## 선택지

A. 바로 부신 CT만 촬영
B. 바로 뇌하수체 수술을 의뢰
C. 고용량 덱사메타손에 억제되지 않으면 폐암으로 확진
D. 혈장 ACTH 측정

## 해설


고코르티솔혈증을 확인한 뒤 ACTH로 의존성과 비의존성을 먼저 나눈다. ACTH 의존성일 때 뇌하수체와 이소성 분비를 구별하며 고용량 덱사메타손 결과 하나로 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000494 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: ACTH 미측정·고용량 검사만으로 이소성 확진 불가; 선택지 중 흡연 D 연관성의 제한 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.endocrine.org/clinical-practice-guidelines/diagnosis-of-cushing-syndrome

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000494
- https://doi.org/10.1507/endocrj.EJ25-0492
