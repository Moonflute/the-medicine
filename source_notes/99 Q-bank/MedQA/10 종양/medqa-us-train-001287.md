---
type: qbank
schema_version: 1
id: medqa-us-train-001287
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7a2a0d4ea229c729e8c785c67ec49cf860a30afe68e6923d8ad5007fbc012d5e
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "multiple myeloma"
  - "hypogammaglobulinemia"
  - "hypercalcemia"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uLpOuwnOqzqOyImOyihSAoTU0pIChNdWx0aXBsZSBNeWVsb21hIChNTSkpLm1k
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67KU7KCA6rCQ66eI6riA66Gc67aI66aw7ZiI7KadIChQYW5oeXBvZ2FtbWFnbG9idWxpbmVtaWEpLm1k
  - MDQg64K067aE67mEL-qzoOy5vOyKmO2YiOymnSAoSHlwZXJjYWxjZW1pYSkubWQ
question_type: mechanism
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

71세 아프리카계 미국인 남성이 2일 동안 악화된 가래 섞인 기침과 호흡곤란으로 응급실에 내원했다. 2개월 동안 전신 뼈 통증이 있었다. 지난달 신우신염으로 입원했고, 약 2개월 전에는 폐렴으로 외래 치료를 받았다. 지난 2개월 동안 필요할 때마다 일반의약품 이부프로펜을 복용했다. 불안해 보인다. 활력징후는 체온 38.8°C (101.8°F), 맥박 95회/분, 호흡수 20회/분, 혈압 155/90 mm Hg이다. 결막이 창백하다. 오른쪽 하엽에서 수포음이 들린다. 심장 진찰은 정상이다. 검사 결과는 헤모글로빈 9 g/dL, 평균 적혈구 용적 95 µm3, 백혈구 수 13,500/mm3, 분절 호중구 75%, 림프구 25%, 혈소판 수 240,000/mm3, ESR 85 mm/hr, 혈청 Na+ 135 mEq/L, K+ 4.2 mEq/L, Cl− 113 mEq/L, HCO3− 20 mEq/L, Ca+ 12.4 mg/dL, 알부민 4 g/dL, 요소질소 38 mg/dL, 크레아티닌 2.2 mg/dL이다. 흉부 X선에서 오른쪽 하엽 음영과 같은 쪽 횡격막 돔의 흐림이 보인다. 두개골과 골반 X선을 시행했다(이미지 참조). 다음 중 최근 반복 감염의 가장 가능성 높은 기저 원인은 무엇인가?

## 선택지

A. 고령
B. 저감마글로불린혈증
C. NSAID 유발 만성 신장질환
D. 해결되지 않은 폐렴

## 해설


빈혈·고칼슘혈증·신기능 저하와 뼈 통증은 다발골수종을 의심하게 한다. 이 질환에서는 단클론 면역글로불린이 증가해도 정상 다클론 항체 생성이 억제되는 immunoparesis가 생겨 반복 세균감염 위험이 높아진다. 선택지 B의 저감마글로불린혈증은 이런 기능적 정상 항체 결핍을 뜻한다. 총 감마글로불린이 모든 환자에서 낮다는 의미는 아니며, 제공되지 않은 두개골·골반 X선의 용해성 병변을 실제 관찰했다고 쓰지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001287 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 골수종의 총면역글로불린 증가와 정상 다클론 면역억제를 구분하고 누락 영상을 보았다는 설명을 제거했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001287
