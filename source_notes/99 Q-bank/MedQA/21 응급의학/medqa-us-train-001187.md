---
type: qbank
schema_version: 1
id: medqa-us-train-001187
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6600537fd88e7c431c4325f8deeffeec0bc8205eca92a91e7bdc95cd1be22426
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "atrial fibrillation"
  - "coagulopathy"
question_type: management
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 남성이 교통사고 후 구급차를 타고 응급실에 내원하였다. 환자는 안전벨트를 착용한 동승자였다. 병원 도착 시 왼쪽 다리의 큰 상처에서 출혈이 심한 상태이다. 의무기록 검토 결과 심방세동(atrial fibrillation) 병력이 있으며 와파린(warfarin)을 복용 중이다. 2일 전 국제정상화비율(INR)은 2.6이었다. 신체 검진상 피부는 차고 축축하다. 활력징후는 심박수 130회/분, 혈압 96/54 mm Hg이다. 정맥 내 생리식염수를 이용한 적극적인 소생술이 시작되었다. 이 환자의 기저 응고장애를 교정하기 위한 다음 단계로 가장 적절한 것은 무엇인가?

## 선택지

A. 동결침전제제(cryoprecipitate) 투여
B. 신선동결혈장(FFP) 투여
C. 정맥 내 비타민 K 투여
D. 혈소판 투여

## 해설

활동성 대량출혈과 쇼크에서 와파린 효과를 신속히 역전하려면 응고인자 보충이 필요하다. 제시 선지 중 FFP(B)가 즉시 인자를 제공하며 비타민 K 단독은 작용이 늦다. 실제 현행 우선 요법은 4인자 PCC와 정맥 비타민 K 병합이며 PCC가 없으면 FFP를 사용한다. 현재 INR을 재측정해야 하고 이틀 전 INR 2.6을 지금의 수치로 단정하지 않는다. 출혈원 통제·혈액제제 소생도 병행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. FFP를 모든 와파린 대량출혈의 현행 1차로 단정한 오류를 PCC 우선·비타민 K 병행 권고로 제한했다. 즉시 인자 보충이라는 선지 비교에서는 B가 타당하다.
- 공식/학회 근거: https://www.jacc.org/doi/10.1016/j.jacc.2020.04.053

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001187
