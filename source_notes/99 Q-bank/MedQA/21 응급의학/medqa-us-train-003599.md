---
type: qbank
schema_version: 1
id: medqa-us-train-003599
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dbc599ed44f2f2e0c4b3197ab2b62634e037bd463cb5f9bc4ab9cf5dfd20baea
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "carbon monoxide poisoning"
  - "tissue hypoxia"
  - "lactic acidosis"
  - "decreased oxygen delivery"
question_type: mechanism
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-ydvOyCsO2ZlO2DhOyGjCDspJHrj4UgKENhcmJvbiBNb25veGlkZSBQb2lzb25pbmcpLm1k
  - MDUg7Iug7J6lL-yCsOymnSAoQWNpZG9zaXMpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

30세 남성이 엔진이 켜진 차고 안의 차에서 의식을 잃은 채 발견되어 응급실에 왔다. 중증 우울증으로 플루옥세틴을 복용 중이었다. 혼란스러웠고 호흡수는 10회/분, 산소포화도는 100%였다. 100% 산소를 투여했지만 동맥혈가스에서 pH 7.20, pCO2 23 mmHg, HCO3 10 mEq/L였다. 다음 중 이 산-염기 이상을 일으킨 원인은?

## 선택지

A. 분당환기량 감소
B. 조직으로의 산소 전달 감소
C. 대사율 증가
D. 조직의 산소 이용 능력 감소

## 해설

밀폐된 차고의 엔진 노출은 CO 중독을 시사한다. CO-Hb 형성으로 유효 산소 운반량이 줄고 산소 해리가 방해되어 조직 저산소증·젖산산증이 생기므로 B가 핵심 기전이다. 일반 pulse oximetry나 계산 포화도가 정상처럼 보여도 유효 산소화가 정상인 것은 아니다. CO는 세포 수준 산소 이용도 방해할 수 있어 B만이 유일한 독성 경로라는 뜻은 아니며, co-oximetry로 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. CO 중독에서 산소포화도가 실제 정상이라는 오해 교정.
- 공식/학회 근거: https://www.cdc.gov/carbon-monoxide/hcp/clinical-guidance/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003599
