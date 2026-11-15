---
type: qbank
schema_version: 1
id: medqa-us-train-001607
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3aa66f9e8ce293db7df8ac8f539e08a49d4cb85c593a51bdac8ba696d132776a
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "acute ischemic stroke"
  - "atrial fibrillation"
  - "intracranial hemorrhage exclusion"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tl4jtmIjshLEg64eM7KG47KSRIChJc2NoZW1pYyBzdHJva2UpLm1k
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
---

# MedQA US 임상문제

## 문제

65세 환자가 심방세동과 함께 작은 허혈성 뇌경색을 겪었다. 급성 재관류 평가는 끝났고 영상에 출혈성 변환은 없다. 기계판막·중등도 이상 승모판협착·신기능 저하는 없다. 재발 방지 계획은?

## 선택지

A. 아스피린만 평생 투여한다
B. 경색 크기와 출혈 위험을 평가해 적절한 시점에 직접경구항응고제를 시작한다
C. 아스피린과 클로피도그렐을 평생 병용한다
D. 모든 환자에게 응급 정맥 헤파린을 시작하고 단독 유지한다

## 해설


비판막성 심방세동 관련 뇌경색의 재발 예방에는 경구 항응고가 중요하다. 시작 시점은 경색 크기, 출혈성 변환과 임상 경과를 종합해 결정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001607
- https://pubmed.ncbi.nlm.nih.gov/39491870/
- https://www.ahajournals.org/doi/10.1161/STR.0000000000000513
