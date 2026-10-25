---
type: qbank
schema_version: 1
id: medqa-us-train-004534
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:86dd90a6150696a1fc0a3269ddcadb214e9282fce348dd6353adc44b691fdca4
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "감염성 단핵구증"
  - "Epstein-Barr 바이러스"
  - "비인두암"
related_disease_slugs:
  - MDgg6rCQ7Je8L-qwkOyXvC5tZA
question_type: association
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
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
---

# MedQA US 임상문제

## 문제

15세 여아가 2주 동안 지속된 인후통과 주관적 발열로 내원했다. 무기력하고 학교에 갈 수 없다. 여러 차례 연쇄상구균 인두염을 앓아 아목시실린으로 치료받았다. 10년 전 가족과 함께 중국에서 미국으로 이민 왔다. 마른 체형이다. 체온은 37.8°C (100°F), 맥박은 분당 97회, 혈압은 90/60 mm Hg이다. 진찰에서 인두 발적, 삼출물이 있는 편도 비대와 구개 점상출혈이 보인다. 경부 림프절병증이 있다. 비장은 왼쪽 늑골연 아래 2cm 만져진다. 헤모글로빈은 12 g/dL, 백혈구는 14,100/mm3이고 림프구 54% (비정형 림프구 12%)이며 혈소판은 280,000/mm3이다. 이종친화 항체 응집검사는 양성이다. 이 환자 증상의 기저 원인은 다음 중 어떤 질환의 위험을 증가시키는가?

## 선택지

A. 카포시 육종
B. 비인두암
C. 괴사성 망막염
D. 사구체신염

## 해설


이종친화항체 양성의 단핵구증을 일으키는 EBV는 비인두암 B 등 특정 종양과 인과적으로 연관된다. 그러나 급성 EBV 감염의 인후통·림프절비대가 현재 비인두암이 발생했다는 뜻은 아니며 대부분의 감염자가 암으로 진행하는 것도 아니다. Kaposi육종은 주로 HHV8과 연관된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004534 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: EBV와 비인두암 연관 B 유지; 현재 단핵구증이 곧 암 발생을 시사한다는 설명 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004534
