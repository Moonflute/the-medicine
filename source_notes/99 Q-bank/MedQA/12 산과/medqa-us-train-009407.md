---
type: qbank
schema_version: 1
id: medqa-us-train-009407
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:db56009185efdc3e79795cc0a730e8408abb7edf7dd03080baff577d8e6a7706
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "drug-induced immune hemolytic anemia"
  - "약물 유발 면역 용혈성 빈혈"
  - "positive direct antiglobulin test"
question_type: diagnosis
related_disease_slugs:
  - MDkg7ZiI7JWhL-yekOqwgOuptOyXrSDsmqntmIjshLEg67mI7ZiIIChBdXRvaW1tdW5lIEhlbW9seXRpYyBBbmVtaWEpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

임신 중 메틸도파를 사용하던 34세 산모의 혈색소가 12에서 8.7 g/dL로 떨어졌다. 망상적혈구와 간접 빌리루빈이 높고 합토글로빈이 감소했다. 직접항글로불린검사는 양성이고 혈소판과 AST는 정상이다. 가장 가능성이 높은 진단은?

## 선택지

A. HELLP 증후군
B. 메틸도파 관련 면역 용혈성 빈혈
C. 철결핍빈혈
D. 임신의 생리적 혈액희석

## 해설


직접항글로불린검사 양성에 실제 용혈이 동반되면 면역 용혈을 의심한다. 메틸도파는 이런 반응을 일으킬 수 있어 약을 중단하고 대체 혈압약을 검토한다. 검사 양성만으로 용혈을 진단하지는 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009407
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e1114a58-9ab5-486e-85ed-360365b06396
