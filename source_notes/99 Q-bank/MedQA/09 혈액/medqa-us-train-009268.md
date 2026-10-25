---
type: qbank
schema_version: 1
id: medqa-us-train-009268
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1960f54040e409e754edc25bbbdb06ce4d678e678310bc481f87e6392de10db1
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "sickle cell disease"
  - "겸상적혈구병"
  - "dactylitis"
related_disease_slugs:
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
question_type: prevention
difficulty: complex
answer: A
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmYXpvbGluLm1k
---

# MedQA US 임상문제

## 문제

2세 여아가 양손의 통증과 부종으로 응급실에 왔다. 부모에 따르면 1주 전 시작되어 점점 악화되었다. 2주 전 며칠 동안 미열과 팔 및 몸통에 그물 모양 발진이 있었다. 고통스러워 보이며 체온 38.5°C, 맥박 130회/분, 호흡수 25회/분이다. 손등과 손가락이 붉고 부어 있으며 따뜻하고 압통이 있다. 혈색소 9.1 g/dL, 백혈구 8,000/mm³이다. 말초혈액 도말 사진이 제시되었다. 증상 재발을 예방하기 위한 가장 적절한 중재는 무엇인가?

## 선택지

A. 하이드록시우레아
B. 정기적 적혈구 교환수혈
C. 예방적 페니실린
D. 세파졸린 정맥주사

## 해설


어린 소아의 양측 손·발의 통증성 부종은 SCD의 혈관폐쇄성 dactylitis를 시사한다. 재발성 혈관폐쇄 합병증 감소를 위한 선택지는 hydroxyurea(A)이다. 이는 급성 골수위축이나 수두증 예방약이라는 뜻이 아니다. 사진이 누락되어 SCD 확진 자체는 보완이 필요하지만, 본문의 양측 dactylitis와 빈혈로 예방 치료의 출제의도를 판단할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009268 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 양손 통증성 dactylitis 재발 예방 hydroxyurea A의 출제의도 유지. 손발통증을 골수위축/수두증 예방으로 설명한 무관한 문구 교체.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nhlbi.nih.gov/sites/default/files/publications/56-364NFULL.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009268
