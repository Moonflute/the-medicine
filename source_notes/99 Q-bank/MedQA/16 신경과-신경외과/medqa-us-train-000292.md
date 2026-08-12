---
type: qbank
schema_version: 1
id: medqa-us-train-000292
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2e5eac90822b935f716d4ab33c4fd459834074dcb998e6e8a870d0623851b795
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "intracranial hemorrhage"
  - "diabetes insipidus"
question_type: diagnosis
related_disease_slugs:
  - MDQg64K067aE67mEL-yalOu2leymnSAoRGlhYmV0ZXMgSW5zaXBpZHVzKS5tZA
difficulty: complex
answer: C
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

관상동맥질환(coronary artery disease) 병력이 있고 관상동맥 스텐트 삽입술 후 현재 아스피린과 클로피도그렐을 복용 중인 78세 남성이 화장실에 쓰러져 있는 것을 아내가 발견하였다. 글래스고 혼수 척도(GCS) 점수는 3점이었으며 정확한 신체 검진은 제한적이다. 즉시 시행한 뇌 비조영 CT 검사에서 우측 두정엽에 주변 부종을 동반한 큰 두개내 출혈이 확인되었다. 환자는 즉시 집중치료실(ICU)로 이송되어 모니터링을 받았다. 다음 날 환자의 정신 상태는 계속 악화되었으나 반복 시행한 CT 검사에서 새로운 출혈은 보이지 않았다. 또한, 환자의 소변량은 지난 몇 시간 동안 시간당 200cc를 초과하였으며 계속 증가하고 있다. 체온은 99.0도 F(37.2도 C), 혈압은 125/72 mmHg, 맥박은 87회/분, 호흡은 13회/분이다. 다음 중 환자의 소변 비중(urine specific gravity), 소변 삼투압(urine osmolality), 혈장 삼투압(plasma osmolality), 혈청 나트륨(serum sodium) 수치에 가장 부합하는 것은 무엇인가?

## 선택지

A. 낮음, 높음, 높음, 높음
B. 낮음, 낮음, 높음, 낮음
C. 낮음, 낮음, 높음, 높음
D. 높음, 낮음, 낮음, 높음

## 해설


뇌출혈 후 다뇨와 저농축 소변, 혈장 삼투압 상승은 중추성 요붕증을 나타낸다. 중추성 요붕증에서는 소변 농도와 삼투압이 모두 낮고, 혈장 삼투압은 높으며 혈청 나트륨은 정상 또는 약간 상승한다. 따라서 해당 패턴은 낮은 소변 비중·낮은 소변 삼투압·높은 혈장 삼투압·높은 혈청 나트륨이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000292
