---
type: qbank
schema_version: 1
id: medqa-us-train-000110
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7f676f7eef6ecb96758fefabc37d46aa41bf4c09131277f436edbd14ab69fb3a
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "Type 1 Diabetes Mellitus"
  - "metabolic acidosis"
  - "hyperkalemia"
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDHtmJUg64u564eo67ORIChUeXBlIDEgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDUg7Iug7J6lL-qzoOy5vOulqO2YiOymnSAoSHlwZXJrYWxlbWlhKS5tZA
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 여성이 기숙사에서 룸메이트에 의해 발견되었습니다. 환자는 제1형 당뇨병(Type 1 Diabetes Mellitus) 과거력이 있으며 전날 밤 지역 술집에서 친구들과 폭음을 했습니다. 환자는 응급실로 이송되었으며 활력 징후는 다음과 같습니다: 체온 97.3 F, 심박수 119 bpm, 혈압 110/68 mmHg, 호흡수 24회/분, 실내 공기(RA)에서 산소포화도 100%. 신체 검진상 환자는 피부가 축축하고 점막이 건조하며, 전반적으로 졸리고 지남력이 없습니다. 손가락 끝 혈당은 342 mg/dL입니다. 추가 검사 결과는 다음과 같습니다: Na 146, K 5.6, Cl 99, HCO3 12, BUN 18, Cr 0.74. 동맥혈 가스 분석(ABG) 결과: pH 7.26, PCO2 21, PO2 102. 이 환자의 전해질 및 산-염기 상태에 관하여 다음 중 옳은 설명은 무엇입니까?

## 선택지

A. 환자는 일차성 호흡성 알칼리증과 보상성 대사성 산증이 있다
B. 환자는 총 체내 칼륨 증가로 인한 고칼륨혈증을 동반한 대사성 산증이 있다
C. 환자는 음이온 차이(anion gap) 대사성 산증과 호흡성 산증이 있다
D. 환자는 음이온 차이(anion gap) 대사성 산증과 총 체내 칼륨 감소가 있다

## 해설

정답은 D이다. 음이온차는 146−99−12=35로 증가해 있고 DKA에서는 요중 손실 등으로 총체내 칼륨이 부족할 수 있으나 혈청 K는 높게 측정된다. 또한 HCO3 12일 때 Winter 공식의 예상 PaCO2는 약 26±2 mmHg인데 실제 21로 더 낮아 동반 호흡성 알칼리증 가능성도 있다. 따라서 순수한 단일 장애로 단정하지 않으며, 제시된 선택지 중 D의 두 진술이 맞다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 총체내 K 결핍 D를 유지하고 예상보다 낮은 PaCO2의 혼합 산염기 이상 가능성 추가.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000110
