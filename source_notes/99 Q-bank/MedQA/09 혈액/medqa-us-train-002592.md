---
type: qbank
schema_version: 1
id: medqa-us-train-002592
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d969f318bbc93567f13978184e898294bdc7f94e0d486dfed9d839b3b354ce91
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "thrombotic thrombocytopenic purpura"
  - "microangiopathic hemolytic anemia"
  - "plasma exchange"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2YiOyghOyEsSDtmIjshoztjJDqsJDshowg7J6Q7IOJ67CYIChUaHJvbWJvdGljIFRocm9tYm9jeXRvcGVuaWMgUHVycHVyYSwgVFRQKS5tZA
  - MDkg7ZiI7JWhL-uvuOyEuO2YiOq0gOuzkeyEsSDsmqntmIgg67mI7ZiIIChNaWNyb2FuZ2lvcGF0aGljIEhlbW9seXRpYyBBbmVtaWEsIE1BSEEpLm1k
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9UcmFuZXhhbWljQWNpZC5tZA
---

# MedQA US 임상문제

## 문제

이전에 건강했던 32세 남성이 발작 후 응급실에 왔다. 그날 코피가 30분간 지속되었고 현재 혼란스럽고 지남력이 없다. 창백하고 몸통과 팔에 점상출혈이 있으며 혈소판 34,000/mm³, 크레아티닌 2.9 mg/dL, 비포합 빌리루빈과 LDH가 상승하고 말초혈액도말에서 많은 분열적혈구가 보인다. PT와 PTT, 섬유소분해산물은 정상이다. 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 농축적혈구 수혈
B. 혈장교환술
C. 혈소판 수혈
D. 정맥 트라넥삼산

## 해설


혈소판감소, schistocyte를 동반한 미세혈관병성 용혈, 발작·혼란과 신기능 저하에 비해 PT/PTT가 정상인 양상은 TTP를 강하게 시사한다. 보기 중 긴급 plasma exchange B가 적절하며 ADAMTS13 검체는 가능하면 교환 전에 채취하되 결과를 기다려 치료를 지연하지 않는다. 면역매개 TTP의 실제 치료에는 glucocorticoid를 병합하고 상황에 따라 rituximab·caplacizumab도 고려한다. 혈소판 수치만을 이유로 예방적 혈소판 수혈을 우선하는 선택은 적절하지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002592 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 급성 iTTP 혈장교환 B 유지하되 단독 완결 요법으로 오해하지 않게 보완.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13470878/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002592
