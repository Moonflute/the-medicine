---
type: qbank
schema_version: 1
id: medqa-us-train-007390
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1bb94b38327b5c8d09b1f5cd7ab9738a2c1895119fc9c11c1aca32ac0cb57cbf
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "윌슨병"
  - "각막환"
  - "간-기저핵 질환"
  - "페니실라민"
question_type: management
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_snIzsiqjrs5EgKFdpbHNvbidzIERpc2Vhc2UpLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MZXZvZG9wYS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 남자가 3개월 동안 지속된 오른손 떨림으로 내원했다. 떨림이 점점 심해져 일상생활을 할 수 없다. 아침에 일어나면 베개가 침으로 흠뻑 젖어 있다. 이 기간 동안 대학 수업에 집중하지 못했고 지난 한 달 동안 여러 차례 넘어졌다. 심각한 질환 병력은 없다. 건강해 보이고 활력징후는 정상이다. 보행은 넓은 기저면이고 오른손이 왼손보다 심한 저주파 떨림이 있다. 양팔을 완전히 벌리고 팔꿈치를 굽힌 자세에서 양측 팔에 저주파 떨림이 나타나며 팔을 들고 있을수록 진폭이 커진다. 사지 근력은 정상이고 감각은 보존되어 있다. 심부건반사는 양측 4+이고 측정장애가 있다. 눈 사진이 제시되어 있다. 정신상태검사에서 제한된 정동이 보이지만 말의 속도와 리듬은 정상이다. 다음 중 가장 적절한 약물치료는 무엇인가?

## 선택지

A. 페니실라민
B. 데페록사민
C. 프레드니손
D. 레보도파

## 해설

젊은 환자의 날개짓 양상 저주파 떨림, 구음·연하 관련 침흘림, 운동실조와 행동/정서 변화는 Wilson 병을 시사한다. 보기 중 구리 킬레이트제인 penicillamine(A)이 적합하다. 신경증상 환자는 치료 초기에 악화할 수 있어 전문적으로 약제를 선택하고 추적한다. Kayser-Fleischer 고리는 중요한 안과 소견이지만 이 자료에 누락된 사진에서 실제 고리를 확인했다고 단정할 수 없다. 본문 임상 단서와 선택지 비교만으로 A를 유지한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 윌슨병의 날개짓 떨림을 임상적으로 대조하여 A 유지. 눈 사진을 본 것처럼 해설한 오류와 Kayser-Fleischer 명칭 교정.
- 공식/학회 근거: https://onlinelibrary.wiley.com/doi/full/10.1002/hep.32805

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007390
