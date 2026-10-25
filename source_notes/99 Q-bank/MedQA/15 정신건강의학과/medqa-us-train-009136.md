---
type: qbank
schema_version: 1
id: medqa-us-train-009136
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cd69ddbd8d2ddcd68944cdf20e50c845285e3650fad72f42c27e74b16756a5dd
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "conduct disorder"
  - "품행장애"
  - "antisocial personality disorder"
question_type: prognosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-2SiO2WiSDsnqXslaAgKENvbmR1Y3QgRGlzb3JkZXIpLm1k
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
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

13세 남아가 여러 행동 문제를 평가하기 위해 부모와 함께 내원했다. 부모에 따르면 아들은 지난 1년 동안 학교에서 여러 급우를 괴롭혔다. 그동안 지역 상점에서 물건을 훔친 혐의로 두 번 적발되었고, 특별한 이유 없이 이웃집 아들을 때리기도 했다. 아들이 개를 고문했다는 사실을 알고 개를 다른 곳에 입양 보내야 했다. 개인 및 가족력에 중증 질환은 없다. 지역 중학교에 다니지만 급우보다 학업 성적이 낮다. 숙제를 자주 잊고 교사와 말다툼한다. 담배를 피우는 모습도 적발되었다. 활력징후는 정상이고 신체검사에서 이상은 없다. 주의력이 떨어지고 일부 질문에는 대답하지 않는다. 자신의 행동에 대해 긍정적으로 대답할 때도 “그래서 뭐?”라고 반응한다. 이 환자에게 앞으로 가장 잘 발생할 질환은 무엇인가?

## 선택지

A. 주요우울장애
B. 강박장애
C. 양극성장애
D. 반사회성 인격장애

## 해설

괴롭힘·절도·폭력·동물 학대와 타인의 피해에 대한 무관심은 품행장애를 시사한다. 이런 행동은 성인 반사회성 인격장애 위험과 관련되어 제시된 향후 질환 중 해당 진단이 가장 적절하다. 13세에서 성인 인격장애로 확진하거나 성인 범죄·장애가 반드시 지속된다고 단정하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009136

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 13세를 현재 반사회성 인격장애로 진단하거나 향후 범죄 진행을 필연시한 오류 교정. 품행장애의 성인 위험 예측 답 유지.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
