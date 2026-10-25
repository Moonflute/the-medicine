---
type: qbank
schema_version: 1
id: medqa-us-train-005440
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7a8f6c746e9ff4607add11e237b1f7e2a63587c1128e5711980249eef7ba16d3
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "유착태반"
  - "전치태반"
  - "제왕절개 자궁절제술"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yghOy5mO2DnOuwmCAoUGxhY2VudGEgUHJldmlhKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 35주인 36세 임신 4회·출산 3회의 여자가 일주일간 무통성 질출혈로 입원했다. 이전에 제왕절개를 2번 받았고 22주 초음파에서 부분 전치태반과 태반 뒤 공간 소실이 보인다. 질식 초음파에서 태반 가장자리와 내자궁구 거리는 1.5 cm이다. 관리 원칙을 가장 잘 설명하는 것은?

## 선택지

A. 37주에 하부 자궁분절 계획 제왕절개
B. 필요하면 제왕절개로 전환하는 비계획 질식분만
C. 양수천자로 태아 폐 성숙도를 확인한 뒤 분만 방법 결정
D. 제왕절개 자궁절제술 고려

## 해설

1.5 cm는 태반 가장자리와 내자궁구 사이 거리로 저위태반을 뜻한다. 반복 제왕절개와 전방 저위태반, 태반 뒤 공간 소실은 태반유착스펙트럼(PAS)을 의심하게 한다. 전문센터 다학제 분만 계획 및 제왕절개 자궁절제술(D)을 고려한다. 근거는 PAS 위험이지 1.5 cm 이하에서 자궁파열한다는 규칙이 아니다. 태반을 억지로 떼면 대량출혈할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 1.5cm를 태반–자궁벽 거리·자궁파열 기준으로 오해한 해설 수정.
- https://www.acog.org/clinical/clinical-guidance/obstetric-care-consensus/articles/2018/12/placenta-accreta-spectrum

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005440
