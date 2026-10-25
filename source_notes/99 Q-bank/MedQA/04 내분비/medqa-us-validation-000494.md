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
question_type: diagnosis
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

48세 남성이 체중증가와 피로, 고혈압으로 진료를 받으러 왔다. 복부에 선조가 있고 24시간 소변 유리 코르티솔이 상승했지만 고용량 덱사메타손에도 코르티솔 억제가 없으며 복부 CT는 정상이다. 가장 가능성 높은 진단과 관련된 소견은?

## 선택지

A. 부신 선종
B. ACTH 감소
C. 얼굴뼈 비대
D. 흡연력

## 해설


정답 D. 고코르티솔 표현형과 고용량 dexamethasone에도 억제되지 않는 cortisol은 이소성 ACTH를 감별하게 하며 흡연 관련 소세포폐암이 그 원인 중 하나다. 그러나 ACTH가 제시되지 않았고 고용량 억제검사의 판별능도 완전하지 않아 이소성/폐암을 확진할 수는 없다. 정상 복부 CT 하나로 모든 부신 원인을 배제하지도 않는다. 본 문항은 선택지 중 연관성을 묻는 범위로 해석한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000494 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: ACTH 미측정·고용량 검사만으로 이소성 확진 불가; 선택지 중 흡연 D 연관성의 제한 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.endocrine.org/clinical-practice-guidelines/diagnosis-of-cushing-syndrome

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000494
