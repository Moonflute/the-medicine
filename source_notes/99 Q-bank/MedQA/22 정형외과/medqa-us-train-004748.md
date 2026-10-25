---
type: qbank
schema_version: 1
id: medqa-us-train-004748
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5937f02b41d962987c364a16c99fb757987ad588f4410487e715759c445690da
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "골형성부전증"
  - "반복 골절"
  - "난청"
question_type: association
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv6rOo7ZiV7ISx67aA7KCE7KadIChPc3Rlb2dlbmVzaXMgSW1wZXJmZWN0YSkubWQ
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

8세 여아가 건강검진을 위해 내원했다. 2세 이후 가벼운 외상으로 여러 차례 골절이 있었다. 지난 1년 동안 넘어져 왼쪽 상완골과 오른쪽 쇄골이 골절되었다. 아버지도 반복적인 골절 병력이 있다. 키는 5백분위수, 체중은 20백분위수이다. 신체검사에서 흉추의 후만이 증가되어 있다. 앞으로 굽히기 검사에서 흉요추 부위의 비대칭이 보인다. 양쪽 경골이 휘어 있고 왼쪽 다리가 오른쪽보다 2cm 길다. 상하지 관절의 가동성이 증가되어 있다. 다음 중 추가로 나타날 가능성이 가장 높은 소견은 무엇인가?

## 선택지

A. 수정체 탈구
B. 청력 장애
C. 영구치 사이가 넓음
D. 뇌 동맥류

## 해설

경미한 외상 후 반복 골절, 비슷한 아버지 병력, 휘어진 장골·후만 및 관절 과운동성은 골형성부전증을 시사한다. 대표적으로 제1형 콜라겐 이상이 관련되며 청력장애(B), 청색 공막 및 상아질형성부전이 동반될 수 있다. 본문의 흉추 뒤쪽 볼록함은 후만이며 전만이 아니다. 수정체 탈구나 뇌동맥류는 이 증례의 대표적 추가 소견이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 흉추 convexity를 전만으로 반대로 번역한 것을 후만으로 교정했다. 유전성 취약골절과 청력장애 B는 유지한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004748
