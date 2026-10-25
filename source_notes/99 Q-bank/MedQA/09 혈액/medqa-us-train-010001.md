---
type: qbank
schema_version: 1
id: medqa-us-train-010001
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c517ebfd3c30979b81037109c4f02c9c933923ff316c5f8654da38eeade329a2
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "비타민 K 결핍"
  - "응고인자 II 결핍"
  - "지방변"
related_disease_slugs:
  - MDkg7ZiI7JWhL-u5hO2DgOuvvCBLIOqysO2VjSAoVml0YW1pbiBLIERlZmljaWVuY3kpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_sp4DrsKnrs4AgKFN0ZWF0b3JyaGVhKS5tZA
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

이전에 건강했던 9세 남아가 3개월 동안 간헐적인 복통이 있어 어머니와 함께 내원했다. 그동안 평소보다 피곤해했고 지난 2개월 동안 물을 내려도 잘 내려가지 않는 bulky한 변을 보았다. 이모에게 전신홍반루푸스가 있다. 키는 31백분위수, 체중은 5백분위수이다. 활력징후는 정상이다. 양쪽 무릎, 왼쪽 전완, 등 위쪽에 산재한 멍이 있고 복부는 약간 팽창되며 장음은 항진되어 있다. 혈색소 11.1 g/dL, 백혈구 4,500/mm³, 혈소판 243,000/mm³, MCV 78 μm³, 출혈시간 5분, 프로트롬빈 시간 24초, 부분 트롬보플라스틴 시간 45초이다. 추가 평가에서 다음 중 어떤 소견이 나타날 가능성이 가장 높은가?

## 선택지

A. 제8응고인자 결핍
B. 단백질 S 활성 증가
C. 혈청 항인지질 항체 증가
D. 제2응고인자 결핍

## 해설


지방변·저체중과 멍, 정상 혈소판 수 및 연장된 PT/aPTT는 지방 흡수장애에 따른 비타민 K 결핍을 시사한다. 비타민 K 의존 인자는 II·VII·IX·X이며 선택지 중 II인자 감소(D)가 맞다. PTT 45초도 연장된 값으로 정상이라고 설명할 수 없다. 특정 흡수장애 질환의 확진은 별도 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-010001 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 지방 흡수장애의 비타민 K 의존 II인자 감소 D 유지. PTT45를 정상이라 한 해설과 가족관계 maternal aunt를 외할머니로 오역한 본문 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010001
