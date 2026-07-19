---
type: qbank
schema_version: 1
id: medqa-us-train-000484
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e8d858b303ef6351bed1d77343ec90feb8384419a6d1251d7700f1006c887321
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Epstein-Barr virus"
  - "Cytomegalovirus"
  - "Human immunodeficiency virus"
  - "Toxoplasma gondii"
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

17세 소년이 1주일간 지속된 전신 통증과 인후통으로 내원하였다. 심각한 질병 과거력은 없으며 복용 중인 약물은 없다. 부모와 함께 거주하며 최근 동물 보호소에서 고양이를 입양하였다. 한 명의 여성 파트너와 성생활을 하고 있으며 콘돔을 일관되게 사용한다. 체온은 38.7°C, 맥박은 99회/분, 혈압은 110/72 mm Hg이다. 진찰 결과 양측 후경부 림프절병증이 관찰된다. 인두는 붉고 부어 있다. 검사실 검사 결과는 다음과 같다: 헤모글로빈 15 g/dL, 백혈구 수 11,500/mm3, 분엽핵 중성구 48%, 간상핵구 2%, 호염기구 0.5%, 호산구 1%, 림프구 45%, 단핵구 3.5%. 환자의 혈청을 말 적혈구 샘플에 첨가했을 때 세포들이 응집되었다. 가장 가능성이 높은 원인 병원체는 무엇인가?

## 선택지

A. 엡스타인-바 바이러스(Epstein-Barr virus)
B. 거대세포바이러스(Cytomegalovirus)
C. 인간 면역결핍 바이러스(Human immunodeficiency virus)
D. 톡소포자충(Toxoplasma gondii)

## 해설


고양이와의 접촉 후 발열, 인후통, 림프절 비대, 비특이적 단핵구 증가, 그리고 혈청에 대한 적혈구 응집은 EBV 감염을 시사한다. EBV는 전형적인 전염성 단핵구증을 일으키며, 헤테로시그마 항원에 대한 양성 반응이 관찰된다. 따라서 가장 가능성 높은 병원체는 EBV이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000484
