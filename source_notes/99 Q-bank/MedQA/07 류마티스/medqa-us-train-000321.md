---
type: qbank
schema_version: 1
id: medqa-us-train-000321
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a8ed7a4f156810cff381bc7127e33f5fb8c7cacb0f5290bc659f472476cdfb4d
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "rheumatoid arthritis"
  - "Felty syndrome"
  - "methotrexate toxicity"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpCDqtIDsoIjsl7wgKFJoZXVtYXRvaWQgQXJ0aHJpdGlzKS5tZA
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2hsb3JvcXVpbmUubWQ
---

# MedQA US 임상문제

## 문제

62세 남성이 5일간 지속된 피로, 발열, 오한으로 내원하였다. 지난 9개월 동안 손 통증과 뻣뻣함이 점진적으로 악화되었다. 그는 3개월 전 이 증상들을 위해 새로운 약물을 복용하기 시작했다. 그 이전에 사용한 약물로는 이부프로펜(ibuprofen), 프레드니손(prednisone), 하이드록시클로로퀸(hydroxychloroquine)이 있다. 흡연이나 음주는 하지 않는다. 진찰 결과 왼쪽 팔꿈치에 피하 결절이 있고, 단추구멍 변형(boutonniere deformity)을 동반한 오래된 관절 파괴가 관찰되며, 활동성 관절 온열감이나 압통은 없다. 나머지 신체 검진 결과는 정상이다. 혈색소 농도는 10.5 g/dL, 백혈구 수는 3500/mm3, 혈소판 수는 100,000/mm3이다. 다음 중 이 환자의 검사 이상을 예방했을 가능성이 가장 높은 것은 무엇인가?

## 선택지

A. 아미포스틴(Amifostine)
B. 피리독신(Pyridoxine)
C. 류코보린(Leucovorin)
D. 메스나(Mesna)

## 해설


류마티스관절염에 새로 시작한 메토트렉세이트로 인한 골수억제를 의심한다. 빈혈·백혈구감소·혈소판감소가 함께 나타났으며, 류코보린(folinic acid)은 엽산 길항작용에 따른 독성 감소에 쓰여 C가 적절하다. 이는 정기적 혈구·간·신장기능 감시를 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-000321`와 직접 대조했다.
- 판정: RA 약물 변경 뒤 범혈구감소는 MTX 독성 가능성. C 유지; 혈소판만이 아닌 범혈구감소와 folinic acid 명칭·보충 취지 명료화.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/9273041/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000321
