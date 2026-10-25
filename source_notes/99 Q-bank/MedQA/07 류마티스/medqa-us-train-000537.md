---
type: qbank
schema_version: 1
id: medqa-us-train-000537
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5c62fe37da6cb6dd689229e87c6e15b0feaf3d3f2e12e555a39f5e05d6de70eb
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "septic arthritis"
  - "rheumatoid arthritis"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpCDqtIDsoIjsl7wgKFJoZXVtYXRvaWQgQXJ0aHJpdGlzKS5tZA
  - MDcg66WY66eI7Yuw7IqkL-qwkOyXvCDqtIDsoIjsl7wgKEluZmVjdGlvdXMgQXJ0aHJpdGlzKS5tZA
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

50세 여성이 왼쪽 무릎의 통증과 부종 악화로 내원하였다. 지난 1년간 양측 무릎과 손에 통증이 있었으나, 이번처럼 심한 적은 없었다. 이 기간 동안 아침에 약 1시간 동안 움직이기 힘들었으며, 특히 밤에 평소보다 땀을 많이 흘렸다. 지난 4주 동안 새로운 파트너와 성생활을 해왔으며, 콘돔을 일관되게 사용하지 않았다. 가끔 술을 마신다. 전날 친구 생일 파티로 맥주 6잔을 마셨다. 체온은 38.5°C, 혈압은 110/70 mm Hg, 맥박은 92회/분이다. 왼쪽 무릎은 발적, 부종, 압통이 있으며 통증으로 인해 움직임이 제한된다. 양측 중수지절관절(metacarpophalangeal joints)과 근위지절관절(proximal interphalangeal joints)에 부종이 있다. 무릎 관절천자 및 활액 분석 결과 녹색의 혼탁한 액체, 백혈구 수 68,000/μL, 그람 음성 쌍구균(Gram-negative diplococci)이 확인되었다. 해당 무릎의 X-선 검사에서 가장 나타날 가능성이 높은 소견은 무엇인가?

## 선택지

A. 석회화 및 나방이 파먹은 듯한(moth-eaten) 양상의 골용해
B. 결절의 불규칙성 또는 분절화
C. 반월상 연골 및 초자 연골의 석회화
D. 관절 간격 협소화 및 골 미란

## 해설


1년간의 대칭성 MCP/PIP 관절염과 1시간의 아침 강직은 기저 류마티스관절염을 시사하며 관절간격 협소와 미란(D)을 설명한다. 현재의 급성 화농성 무릎관절염과 그람음성 쌍구균은 임균 감염을 시사한다. 급성 감염 초기에 반드시 X선 미란이 생긴다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-000537`와 직접 대조했다.
- 판정: 만성 대칭성 MCP/PIP 관절염의 기저 RA와 새 임균성 관절염을 구별. D 유지하되 급성 감염만으로 이미 X선 미란이 필연적이라는 오류 제거.
- 검수 범위: 내용·번역·해설 연결 검토(content-reviewed). 최신 치료·용량의 전면 근거 검증을 뜻하지 않는다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000537
