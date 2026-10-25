---
type: qbank
schema_version: 1
id: medqa-us-train-007800
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:75f7e41404b70dd9f665a7338aa75a1f0115169b4df7d127033bb9c1ac053dfc
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "polymyalgia rheumatica"
  - "giant cell arteritis"
  - "low-dose prednisone"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-2YiOq0gOyXvCAoVmFzY3VsaXRpcykubWQ
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
---

# MedQA US 임상문제

## 문제

75세 여성이 6개월간 지속된 피로 때문에 내원했다. 이 기간 동안 발열, 양측 어깨와 엉덩이 통증, 체중 5 kg 감소가 있었다. 아침에 일어난 후 약 한 시간 동안 뻣뻣함을 느낀다. 고혈압과 고콜레스테롤혈증 병력이 있고 가족력은 특이사항이 없다. 50년 동안 매일 담배 한 갑을 피웠다. 히드로클로로티아지드와 아토르바스타틴을 복용한다. 창백해 보이며 체온 38°C(100.4°F), 맥박 90회/분, 혈압 135/85 mm Hg이다. 통증 때문에 어깨와 엉덩이의 운동 범위가 감소되어 있지만 근력은 정상이다. 나머지 진찰은 정상이다. 적혈구침강속도 50 mm/h, C-반응단백 25 mg/dL(정상 0~10 mg/dL)이다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 근육 생검
B. 저용량 경구 프레드니손
C. 근전도검사
D. 항체 선별검사

## 해설


양측 어깨·골반대 통증과 아침강직, 정상 실제 근력 및 염증수치 상승은 PMR에 부합해 B가 적절하다. 치료 전 또는 동시에 GCA 증상, 감염·암·약물성/염증성 근병증 등 감별을 평가해야 하며 모든 검사를 steroid 이후로 미루는 것은 아니다. 2026 BSR의 초기 prednisolone12.5–15 mg/day 등 최소 유효용량을 개별화하고 반응·독성을 모니터한다. 비전형 경과나 불충분한 반응은 진단 재평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007800 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: PMR 저용량 prednisone B 유지, 감별 평가를 모두 steroid 후로 미루라는 부정확한 설명 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13661133/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007800
