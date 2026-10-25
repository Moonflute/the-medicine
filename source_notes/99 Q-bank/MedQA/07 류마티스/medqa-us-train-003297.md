---
type: qbank
schema_version: 1
id: medqa-us-train-003297
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:681c3300b9e06f16033b2cc1dfc123ba9b981d1ded064ea54e03c18b67ba53cf
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "rheumatoid arthritis"
  - "anti-CCP antibody"
  - "early inflammatory arthritis"
  - "methotrexate"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpCDqtIDsoIjsl7wgKFJoZXVtYXRvaWQgQXJ0aHJpdGlzKS5tZA
question_type: management
difficulty: complex
answer: D
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0luZmxpeGltYWIubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2hsb3JvcXVpbmUubWQ
---

# MedQA US 임상문제

## 문제

40세 여성이 2개월 동안 지속된 관절통과 아침 경직으로 내원했다. 하루가 지나면 호전되고 왼쪽 무릎도 가끔 아프다. 이부프로펜과 타이레놀로도 호전되지 않아 일상생활이 방해받는다. 손가락과 손목 관절이 붓고 압통이 있으며 왼쪽 무릎은 따뜻하다. 손의 근력은 감소했지만 감각은 정상이다. ESR 45 mm/hr, CRP 14 mg/dL, 항시트룰린화 단백질항체 43(정상 <20)이다. 다음 중 가장 적절한 치료는?

## 선택지

A. 이부프로펜
B. 하이드록시클로로퀸
C. 인플릭시맙
D. 메토트렉세이트

## 해설


대칭성 손·손목 활막염과 아침 경직, anti-CCP 양성, 염증수치 상승은 활동성 RA를 지지한다. NSAID에 반응이 부족한 이 환자는 질병조절항류마티스제 치료가 필요하며, 중등도 이상 활성도에 해당한다면 금기 평가 후 methotrexate(D) 단독이 적절한 초기 csDMARD 선택이다. 이를 곧바로 여러 DMARD 병용이 필수라는 뜻으로 해석하지 않는다. Hydroxychloroquine은 저활성도 등에서 선택 가능하며 infliximab을 처음부터 우선할 근거는 없다. 시작 전 임신 가능성·간기능·혈구·신기능과 감염 위험을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003297 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: methotrexate를 최초 병용 DMARD라고 한 표현을 초기 단독 csDMARD 선택으로 바로잡았다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/9273041/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003297
