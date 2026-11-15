---
type: qbank
schema_version: 1
id: medqa-us-test-000761
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:943984493cc8a2ae5743b83f72b1bc78dc30a9e03b6b5e02deec6f24320a09ba
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "섬망"
  - "탈수"
  - "전해질 이상"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yErOunnSAoRGVsaXJpdW0pLm1k
  - MDUg7Iug7J6lL-yghO2VtOyniCDsnbTsg4EubWQ
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

77세 환자가 며칠 동안 거의 못 먹고 못 마신 뒤 갑자기 산만해졌다. 대화에 집중하지 못하고 저녁이면 혼란이 심해졌다가 낮에는 비교적 또렷하다. 혈당은 정상이고 최근 이뇨제를 복용했다. 적절한 초기 계획은?

## 선택지

A. 알츠하이머병으로 새로 진단하고 도네페질을 시작한다
B. 새 환각이 있으므로 일차성 정신병부터 가정한다
C. 섬망을 의심하고 수분·전해질 상태와 약물, 감염 등 유발 원인을 평가한다
D. 밤에 더 불안하므로 로라제팜만 투여한다

## 해설


급성으로 시작한 주의력 저하와 하루 중 변동은 섬망에 합당하다. 노인 섬망에서는 탈수·전해질 이상, 약물과 감염 등 교정 가능한 원인을 먼저 찾는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000761
- https://www.nice.org.uk/guidance/cg103/chapter/Recommendations

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 영·한 본문·선지·답 대조. 급성 주의력 저하 및 섭취 감소·티아지드 노출 맥락에서 혈청 전해질 확인이 선택지 중 우선이라는 해설 유지.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
