---
type: qbank
schema_version: 1
id: medqa-us-train-000120
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:27532e36c34a2cee0a43d360c838e1dfef1058a4809066a53fb8d9b8ecf49438
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "adenocarcinoma of the colon"
  - "urinary tract infection"
  - "type 2 diabetes mellitus"
  - "osteoporosis"
  - "hypertension"
  - "atrial fibrillation"
  - "conjunctival hemorrhage"
  - "holosystolic murmur"
  - "retinal hemorrhages"
  - "right bundle branch block"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkCDshKDslZQgKEFkZW5vY2FyY2lub21hKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7JqU66GcIOqwkOyXvCAoVXJpbmFyeSBUcmFjdCBJbmZlY3Rpb24pLm1k
  - MDQg64K067aE67mEL-ygnDLtmJUg64u564eo67ORIChUeXBlIDIgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDQg64K067aE67mEL-qzqOuLpOqzteymnSAoT3N0ZW9wb3Jvc2lzKS5tZA
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRmb3JtaW4ubWQ
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
---

# MedQA US 임상문제

## 문제

74세 여성이 2주간 지속된 쇠약감과 오한으로 응급실에 내원했다. 환자는 또한 지난 3일간 호흡 곤란을 호소했다. 8주 전, 환자는 결장 선암종(adenocarcinoma of the colon)으로 좌측 반결장절제술(left hemicolectomy)을 받았다. 이후 심각한 요로감염이 발생하여 중환자실에서 4일간 치료를 받았고, 3주 전에 퇴원했다. 환자는 제2형 당뇨병, 요통을 동반한 골다공증, 고혈압, 심방세동을 앓고 있다. 50년간 매일 한 갑씩 흡연했다. 술은 마시지 않으며 불법 약물을 사용한 적은 없다. 현재 복용 중인 약물은 와파린(warfarin), 메트포르민(metformin), 리시노프릴(lisinopril), 아스피린(aspirin)이다. 환자는 기면 상태로 보이며 좌측 눈에 큰 결막하 출혈이 있다. 체온은 39.3°C, 맥박은 112회/분, 호흡수는 25회/분, 혈압은 126/79 mm Hg이다. 심장 청진상 심첨부에서 새로운 전수축기 잡음(holosystolic murmur)이 들린다. 복부 검사상 상복부 전반에 걸친 경미한 압통과 잘 치유된 12cm 길이의 정중옆 흉터가 관찰된다. 손가락 끝 바닥 면에 압통이 있는 다수의 결절이 있다. 안저 검사상 중심부가 창백한 망막 출혈이 보인다. 심전도(ECG)상 심방세동과 우각차단(right bundle branch block)이 확인된다. 이 환자의 상태에 대한 가장 가능성 높은 기저 원인은 무엇인가?

## 선택지

A. 폐 전이
B. Streptococcus sanguinis 감염
C. Cardiobacterium hominis 감염
D. Enterococcus faecalis 감염

## 해설


최근 요로감염과 대장암 수술 후 새로운 전수축기 잡음, 색전성 증상은 장기성 엔도카르디티스의 원인으로 요로 감염에 흔히 연관된 Enterococcus faecalis가 가장 가능성 높다. Streptococcus sanguinis는 구강 출처이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000120
