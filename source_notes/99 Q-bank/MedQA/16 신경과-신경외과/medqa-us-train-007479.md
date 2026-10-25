---
type: qbank
schema_version: 1
id: medqa-us-train-007479
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2f5fd2a0c0cc9f0287fc5de7441165206463c7f24fa45e3aabbb815db4ddf124
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "편두통 전조"
  - "편두통 급성 치료"
  - "수마트립탄"
  - "박동성 두통"
  - "Migraine"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tjrjrkZDthrUgKE1pZ3JhaW5lKS5tZA
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmVyYXBhbWlsLm1k
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

28세 여자가 두통으로 일차진료의를 찾아왔다. 몇 주마다 오른쪽에 박동성 두통이 발생하며 수년 전부터 시작되었다. 오심과 시야의 밝은 반점이 동반된다. 몇 시간 동안 어둡고 조용한 방에 가만히 누워 있으면 대개 호전된다. 발작 중 근력저하, 감각저하, 저림은 없다. 여드름, 갑상선기능저하증, 비만, 자궁내막증 병력이 있으며 레보티록신, 경구피임약, 국소 트레티노인을 사용한다. 일주일에 여러 번 저녁 식사와 함께 와인 두 잔을 마시고 흡연한 적은 없다. 신체검사에서 국소 신경학적 결손은 없다. 머리 CT는 급성 이상이 없다. 다음 중 발작 중 가장 적절한 치료는 무엇인가?

## 선택지

A. 아세타졸아미드
B. 고유량 산소
C. 베라파밀
D. 수마트립탄

## 해설

반복되는 일측 박동성 두통, 구역과 시각 전조, 조용하고 어두운 곳에서의 호전은 편두통을 시사한다. 보기 중 급성 발작 치료에는 sumatriptan(D)이 적합하다. 약제는 금기·동반질환과 이전 반응에 따라 선택하며, 모든 환자에서 유일하게 가장 효과적인 약이라는 뜻은 아니다. 산소는 주로 군발두통 급성 치료에, verapamil은 군발두통 예방에 사용한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 편두통 급성 치료 D를 확인하되 모든 환자에서 트립탄이 가장 효과적이라는 과장 제거.
- 공식/학회 근거: https://www.nice.org.uk/guidance/cg150/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007479
