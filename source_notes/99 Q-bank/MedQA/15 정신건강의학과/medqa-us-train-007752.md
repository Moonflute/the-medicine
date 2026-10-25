---
type: qbank
schema_version: 1
id: medqa-us-train-007752
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e82c99022783313a51f844cf2d1a0f918f477656d68050a2169dd07f06286086
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "pulmonary embolism"
  - "antipsychotic-associated thrombosis"
  - "chlorpromazine"
question_type: mechanism
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOyDieyghOymnSAoUHVsbW9uYXJ5IEVtYm9saXNtKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbHByYXpvbGFtLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

38세 남자가 3시간 동안 지속된 흉통과 호흡곤란으로 응급실에 왔다. 기침, 콧물이나 코막힘, 재채기, 두근거림은 없다. 최근 수술이나 입원은 없지만 6개월 전 정신과적 질환을 진단받아 정신과 의사의 처방에 따라 약물을 복용 중이다. 심장이나 호흡기 질환의 과거력은 없다. 체온 38.1°C(100.5°F), 맥박 112회/분, 혈압 128/84 mm Hg, 호흡수 24회/분이다. 흉부 청진에서 우측 견갑골 아래 부위의 수포음과 호흡음 감소가 들린다. 심음은 정상이고 심잡음은 없다. 혈장 D-이합체가 상승해 있다. 조영증강 흉부 CT에서 우측 두 분절 폐동맥에 충만 결손이 보인다. 다음 중 이 환자 상태를 일으킬 가능성이 가장 높은 약물은?

## 선택지

A. 알프라졸람
B. 클로르프로마진
C. 할로페리돌
D. 리튬

## 해설

CT의 폐동맥 충만결손은 폐색전증을 나타낸다. 클로르프로마진(B) 같은 페노티아진계 항정신병약은 정맥혈전색전증과의 연관성이 보고되어 원정답의 의도에 부합한다. 다만 위험은 한 약물에만 고유하지 않고 활동 저하·환자 요인 등의 교란도 있어, 본문만으로 특정 약물의 인과를 확정할 수 없다. 저역가(low potency)는 저용량이라는 뜻이 아니며 5-HT2/알파1 차단으로 혈관수축이 입증됐다고 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 저역가와 저용량을 혼동한 표현 및 입증되지 않은 혈관수축/수용체 기전을 확정한 설명을 제거했다.
- https://www.gov.uk/drug-safety-update/antipsychotics-risk-of-venous-thromboembolic-events

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007752
