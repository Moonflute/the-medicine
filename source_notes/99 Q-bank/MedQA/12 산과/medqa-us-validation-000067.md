---
type: qbank
schema_version: 1
id: medqa-us-validation-000067
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:6c445038c18315eb91e42fa26b0736fa42907318ff01ec74006dab41075b7072
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신오조"
  - "저염소성 대사성 알칼리증"
  - "소변 염소"
  - "Hyperemesis gravidarum"
question_type: investigation
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoCDsnoXrjacgKEh5cGVyZW1lc2lzIEdyYXZpZGFydW0pLm1k
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

임신 8주인 24세 초임부가 5일간 오심과 구토로 응급실에 왔다. 음식과 음료를 거의 못 먹고 여러 경구 항구토제도 효과가 제한적이었다. 점막 건조, 차가운 사지, 지연된 모세혈관 재충만이 있고 동맥혈가스에서 pH 7.56, HCO₃ 30 mEq/L였다. 진단을 위해 다음 중 측정할 항목은?

## 선택지

A. 혈청 삼투질농도차
B. 혈청 음이온차
C. 소변 알부민/크레아티닌 비
D. 소변 염소 농도

## 해설

지속적인 구토로 위산과 염소가 소실되고 체액량이 감소하면 염소 반응성 대사성 알칼리증이 생긴다. pH와 중탄산염이 상승한 이 사례에서 소변 염소 농도(D)를 측정하면 원인 분류에 도움이 되며 대개 낮게 나타난다. 이는 염소 결핍과 유효순환혈액량 감소에 대해 신장이 염소를 보존하기 때문이지, 염소 재흡수가 감소해서가 아니다. 혈청 음이온차나 삼투질농도차, 소변 알부민/크레아티닌 비는 이 상황의 우선 원인 감별 지표가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10947768/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000067
