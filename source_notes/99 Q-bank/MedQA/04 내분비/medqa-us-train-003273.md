---
type: qbank
schema_version: 1
id: medqa-us-train-003273
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cdb5ea77f66305cc29484f723d19d69e88a944328e5b44c56449715520d23e27
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "syndrome of inappropriate antidiuretic hormone secretion"
  - "small cell lung cancer"
  - "euvolemic hyponatremia"
  - "cisplatin"
related_disease_slugs:
  - MDQg64K067aE67mEL-2VreydtOuHqO2YuOultOuqrCDrtoDsoIHsoIgg67aE67mEIOymne2bhOq1sCAoU0lBREgpIChTeW5kcm9tZSBvZiBJbmFwcHJvcHJpYXRlIEFudGlkaXVyZXRpYyBIb3Jtb25lIFNlY3JldGlvbiAoU0lBREgpKS5tZA
  - MDIg7Zi47Z2h6riwL-2PkCDshozshLjtj6zslZQgKFNtYWxsIENlbGwgQ2FyY2lub21hKS5tZA
  - MDUg7Iug7J6lL-yggOuCmO2KuOulqO2YiOymnSAoSHlwb25hdHJlbWlhKS5tZA
  - MDIg7Zi47Z2h6riwL-2PkOyVlCAoTHVuZyBDYW5jZXIpLm1k
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMCDsooXslpEvQ2lzcGxhdGluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

60세 남성이 2일 동안 오심, 두통, 전신 피로로 응급실에 왔다. 3개월 전 소세포폐암과 간 전이를 진단받아 시스플라틴과 에토포시드 화학요법을 받고 있으며 마지막 주기는 일주일 전 끝났다. 만성 폐쇄성 폐질환과 제2형 당뇨병이 있고 영양실조로 보인다. 혈청 나트륨은 125 mEq/L이고 신경학적 국소 소견은 없다. 추가 검사에서 다음 중 가장 가능성 높은 결과는? 혈청 삼투질농도 | 소변 삼투질농도 | 소변 나트륨 배설. (A) 220 | 130 | 10. (B) 269 | 269 | 82. (C) 255 | 45 | 12. (D) 222 | 490 | 10. (E) 310 | 420 | 16 (단위 mOsm/kg H₂O, mOsm/kg H₂O, mEq/L).

## 선택지

A. (B)
B. (C)
C. (D)
D. (E)

## 해설

SCLC와 저나트륨혈증은 SIADH를 시사한다. 저혈청 삼투압에도 소변이 충분히 희석되지 않아 Uosm>100 mOsm/kg이고 정상 용적·적절한 염분섭취에서는 소변 Na가 보통>30 mEq/L이다. 따라서 혈청269/소변269/소변Na82인 (B)행, 즉 선택지 A가 부합한다. 소변 삼투압이 혈청보다 반드시 높아야 하는 것은 아니며 소변 Na≤10은 이 패턴이 아니다. 실제로는 부신/갑상샘·신기능 및 약물·체액상태 등 다른 원인을 배제한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: SIADH의 소변Na는 낮은≤10이 아니라 적절한섭취 시 보통>30. 선택지 A=(B) 269/269/82를 정확히 연결.
- https://academic.oup.com/ejendo/article/170/3/G1/6668028

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003273
