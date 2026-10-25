---
type: qbank
schema_version: 1
id: medqa-us-train-006117
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f272fe1457efb5d4974637794ba890a51e36044f4513bda466e2f57e35bcc67f
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "전치태반"
  - "태아 서맥"
  - "응급 제왕절개"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yghOy5mO2DnOuwmCAoUGxhY2VudGEgUHJldmlhKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0JldGFtZXRoYXNvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 32주인 25세 G2P1001 여성이 통증 없는 질 출혈로 병원에 왔다. 집에서 빨래를 하던 중 양수가 터지는 느낌과 함께 사타구니가 피로 덮였다고 한다. 산전기록은 특이하지 않지만 지난 14주 동안 산과 진료를 받지 않았다. 이전 분만은 전치태반으로 응급 제왕절개를 했다. 체온은 95°F(35°C), 혈압은 125/75 mmHg, 맥박은 분당 79회, 호흡수는 분당 18회, 산소포화도는 98%이다. 자궁경부에 많은 피가 보이고 태아 머리는 만져지지 않으며 태아심박동 모니터에서 감속과 서맥이 나타난다. 정맥 수액을 시작했다. 다음 중 가장 적절한 관리의 다음 단계는 무엇인가?

## 선택지

A. 베타메타손
B. 제왕절개
C. 요추 경막외 차단
D. 적혈구 수혈

## 해설

파수 직후 무통성 출혈과 태아 서맥·감속은 전치혈관 파열 등 태아 출혈을 의심하게 하는 응급 상황이다. 산모가 안정해도 태아는 급속 악화할 수 있어 응급 제왕절개(B)가 적절하다. 태아 머리가 만져지지 않는다는 사실은 무자궁이나 태아가 탈출했다는 뜻이 아니다. 진단 확정을 기다려 분만을 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 무자궁·태아탈출이라는 해설 오류를 파수 후 출혈 및 태아 급성 저산소증으로 교체.
- https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/vasa-praevia-diagnosis-and-management-green-top-guideline-27b/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006117
