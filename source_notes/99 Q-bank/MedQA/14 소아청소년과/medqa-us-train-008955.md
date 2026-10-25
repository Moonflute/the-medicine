---
type: qbank
schema_version: 1
id: medqa-us-train-008955
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2451b2f47cb78d7662d4b13a0014fe3394bd65393a45805029ff3465d26563e3
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "Fanconi anemia"
  - "radial ray anomaly"
  - "macrocytic anemia"
question_type: diagnosis
related_disease_slugs:
  - MDkg7ZiI7JWhL-2MkOy9lOuLiCDruYjtmIggKEZhbmNvbmkgQW5lbWlhKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

4개월 된 여아가 창백하고 기면해 보여 아버지와 함께 내원했다. 원래도 안색이 창백했지만 지난 한 달 동안 악화되었다. 합병증 없는 임신 후 36주에 가정분만으로 태어났고 아직 의사의 진찰을 받은 적이 없다. 머리둘레 2백분위수, 키 10백분위수, 체중 8백분위수이다. 하악왜소증, 편평한 콧등, 소안구증, 양안격리, 사시, 높은 입천장, 경추 융합과 목 주위 피부 주름이 보인다. 왼쪽 흉부에서 4/6 범수축기 심잡음이 들린다. 혈색소 6.6g/dL, 헤마토크릿 20%, 백혈구 5,400/mm³, 혈소판 183,000/mm³, MCH 41.3pg, MCHC 33%, MCV 125μm³이다. 다음 중 이 환자에서 나타날 가능성이 가장 높은 소견은 무엇인가?

## 선택지

A. 경미한 호중구감소증
B. 구형적혈구
C. 세 지절 엄지
D. 표적적혈구

## 해설

생후 수개월에 나타난 심한 거대적혈구빈혈과 두개안면·경추·심장 선천기형은 Diamond-Blackfan 빈혈(DBA) 증후군을 시사한다. 백혈구와 혈소판이 비교적 보존된 빈혈이라는 점도 범혈구감소성 골수부전보다는 DBA에 부합한다. DBA에는 세 지절 엄지(C) 같은 엄지 기형이 동반될 수 있다. Fanconi 빈혈의 요골 계열 기형과 혼동해서는 안 되며, 본문에 요골 골절은 없다. 구형적혈구나 표적적혈구는 이 조합의 대표적인 동반 소견이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: Fanconi 빈혈·방사형 골절로 잘못 연결한 해설 교체. 영아기 단독 거대적혈구빈혈과 선천기형은 Diamond-Blackfan 증후군에 부합, 세지절엄지 C 유지.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12424227/
- https://ashpublications.org/blood/article/136/11/1262/461552/Diamond-Blackfan-anemia

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008955
