---
type: qbank
schema_version: 1
id: medqa-us-train-000907
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1a539856ae2d56fec0552d32a0fee0438dd4b18d00fbbec19e18f824f420e792
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "pulmonary embolism"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOyDieyghOymnSAoUHVsbW9uYXJ5IEVtYm9saXNtKS5tZA
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

36세 남성이 3시간 전부터 시작된 호흡 곤란으로 내원하였다. 흉통, 기침, 두근거림의 과거력은 없다. 환자는 만성 흡연자이며 한 달 전 선택적 담낭절제술(cholecystectomy)을 받았다. 만성 또는 재발성 기침, 쌕쌕거림(wheezing) 또는 호흡 곤란의 과거력은 없다. 체온은 38.2°C, 맥박은 108회/분, 혈압은 124/80 mm Hg, 호흡수는 25회/분이다. 맥박 산소 측정기로 측정한 실내 공기에서의 동맥혈 산소 포화도는 98%이다. 상세한 신체 검진 후, 의사는 혈장 D-dimer 수치를 검사하였고, 수치가 상승되어 있었다. 흉부 조영 증강 컴퓨터 단층촬영(CT) 결과 좌측 분절 폐동맥(segmental pulmonary artery)에서 충만 결손(filling defect)이 관찰되었다. 이 환자의 흉부 신체 검진 시 의사가 관찰했을 가능성이 가장 높은 징후는 무엇인가?

## 선택지

A. 양측성 쌕쌕거림(Bilateral wheezing)
B. 좌측 흉골연에서의 수축기 잡음
C. 흉막 마찰음(Pleural friction rub)
D. 국소적 수포음(Localized rales)

## 해설


폐색전증 환자는 폐동맥 폐색 부위에 해당하는 폐실질이 무혈관성으로 변하면서 해당 부위에 국소적인 수포음(폐실질에서의 작은 맹울음)이 들린다. 이는 폐색전증 특이적인 청진소견이다. 따라서 의사는 국소적 수포음을 관찰했을 가능성이 가장 높다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000907
