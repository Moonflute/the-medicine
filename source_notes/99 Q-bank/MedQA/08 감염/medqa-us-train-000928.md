---
type: qbank
schema_version: 1
id: medqa-us-train-000928
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ef81518193fd22cc9bab2ab3472f1b8a6b995e470f3dfe1ce942056d18447911
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Hypertensive crisis"
  - "Tension headache"
  - "Major depressive disorder"
  - "Acute dystonia"
question_type: diagnosis
difficulty: complex
answer: A
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

입원 2일 후, 74세 남성이 혼란과 두통을 보입니다. 그는 지난 1시간 동안 구토도 했습니다. 체온은 36.7°C, 맥박은 98회/분, 호흡은 22회/분, 혈압은 140/80 mm Hg입니다. 환자는 기면 상태이며 사람에 대해서만 지남력이 있습니다. 진찰 결과 피부가 붉게 상기되어 있습니다. 안저 검사에서 선홍색 망막 정맥이 관찰됩니다. 혈청 검사 결과는 다음과 같습니다: Na+ 138 mEq/L, K+ 3.5 mEq/L, Cl- 100 mEq/L, HCO3- 17 mEq/L, 크레아티닌 1.2 mg/dL, 요소 질소 19 mg/dL, 젖산 8.0 mEq/L (정상 범위 0.5 - 2.2 mEq/L), 포도당 75 mg/dL. 실내 공기 상태에서 시행한 동맥혈 가스 분석 결과 pH는 7.13입니다. 이 환자의 현재 증상은 다음 중 어떤 질환에 대한 치료로 인해 발생했을 가능성이 가장 높습니까?

## 선택지

A. 고혈압 위기 (Hypertensive crisis)
B. 긴장성 두통
C. 주요 우울 장애
D. 급성 근긴장이상 (Acute dystonia)

## 해설


고혈압 위기 치료에 사용되는 질산 나트륨·니트로프루시드 등은 급성 대사성 산증(젖산 상승)과 피부 홍조, 망막 정맥 확장을 일으킬 수 있다. 환자의 저 pH와 젖산 상승은 이러한 치료 부작용을 시사한다. 따라서 정답은 A이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000928
