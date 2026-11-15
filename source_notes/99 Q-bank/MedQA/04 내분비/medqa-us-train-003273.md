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

소세포폐암으로 새로 진단된 60세 남성의 혈청 Na는 124 mmol/L이고 임상적으로 정상 체액 상태다. 이뇨제를 사용하지 않으며 신기능, 갑상선기능과 부신기능은 정상이다. 항이뇨 부적절 증후군에 가장 맞는 소견은? (혈청 삼투질농도 / 소변 삼투질농도 / 소변 Na)

## 선택지

A. 260 mOsm/kg / 310 mOsm/kg / 62 mmol/L
B. 260 mOsm/kg / 65 mOsm/kg / 12 mmol/L
C. 310 mOsm/kg / 380 mOsm/kg / 16 mmol/L
D. 260 mOsm/kg / 380 mOsm/kg / 8 mmol/L

## 해설

저장성 혈청인데도 소변 삼투질농도가 100 mOsm/kg을 넘고, 정상 체액 상태에서 소변 Na가 30 mmol/L를 넘는 패턴이 맞는다. 신부전, 부신·갑상선 기능 이상 및 약물의 영향 등을 배제한 뒤 판단한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: SIADH의 소변Na는 낮은≤10이 아니라 적절한섭취 시 보통>30. 선택지 A=(B) 269/269/82를 정확히 연결.
- https://academic.oup.com/ejendo/article/170/3/G1/6668028

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003273
- https://www.kjim.org/journal/view.php?number=170730
