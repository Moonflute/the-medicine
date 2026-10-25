---
type: qbank
schema_version: 1
id: medqa-us-validation-001013
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:804372a3c499c150faf3dc1595b539b58dd321a2fe8579af380d7a196831a212
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "조기 부신성숙"
  - "고인슐린혈증"
  - "안드로겐 과다"
  - "Insulin resistance"
related_disease_slugs: []
question_type: mechanism
difficulty: standard
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
---

# MedQA US 임상문제

## 문제

6세 아프리카계 미국인 여아가 겨드랑이털과 치모가 생겨 진료를 받으러 왔다. 이마에 여러 농포가 있고 3개월간 피부가 지성으로 변했으며 체취가 난다. 키는 95백분위수, 체중과 BMI는 99백분위수이고 유방 조직은 만져지지 않는다. 양쪽 겨드랑이와 대음순에 굵고 검은 털이 있다. 이 소견의 가장 가능성 높은 설명은?

## 선택지

A. 높은 인슐린 수치
B. 부신 효소 결핍
C. 뇌하수체 종양
D. 난소 낭종

## 해설


정답 A. 유방 조직 없이 음모·겨드랑이털·체취·여드름이 먼저 생기면 조기 부신성숙을 고려한다. 비만과 insulin저항성/고insulin혈증은 조기 androgen 발현과 연관될 수 있어 선택지 중 A가 부합한다. 고insulin혈증이 확인됐거나 모든 소견의 유일 원인이라는 뜻은 아니며 급속 성장/남성화가 있으면 CAH 등 다른 androgen 과다 원인도 평가한다. 본문에는 고혈압이 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001013 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 비만 관련 hyperinsulinemia–조기부신성숙 A의 연관성을 한정; 고혈압/다모증 직접원인 확정과 유방발달 없는 CPP 혼동 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pedsendo.org/patient-resource/premature-adrenarche/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001013
