---
type: qbank
schema_version: 1
id: medqa-us-train-008553
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:474dc127f90598a987fe9eca06fd9addeec2993f8863ca479935cd9fde65726e
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "Behçet disease"
  - "oral and genital ulcers"
  - "uveitis"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-uyoOyytO2KuOuzkSAoQmVow6dldCdzIERpc2Vhc2UpLm1k
question_type: prognosis
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

42세 남성이 일주일 동안 지속된 통증성 구강 궤양으로 내원했다. 지난 1년 동안 비슷한 궤양이 반복되었다. 매번 약 일주일간 지속되고 흉터 없이 치유된다. 음낭에도 비슷한 궤양이 생겼는데 흉터를 남겼다. 복용 약물은 없다. 체온 36.8°C(98.2°F)이며 나머지 활력징후는 안정적이다. 신체검사에서 오른쪽 볼 점막에 괴사성 기저부를 가진 1cm 크기의 황색 궤양이 보인다. 양쪽 정강이에는 크기가 다양한 압통성 결절이 여러 개 있다. 그중 하나의 사진이 제시되어 있다. 다음 중 현재 상태의 가장 가능성 높은 합병증은 무엇인가?

## 선택지

A. 포도막염
B. 변형성 관절염
C. 위장관 궤양
D. 폐색전증

## 해설


반복 구강 아프타, 흉터를 남기는 생식기궤양과 결절홍반양 병변은 Behçet syndrome을 시사한다. 포도막염 A는 대표적인 중요한 장기침범으로 시력 손상을 일으킬 수 있다. 다만 위장관궤양과 혈관 혈전·폐혈관병도 Behçet의 실제 합병증이며 전혀 무관한 것은 아니다. 관절염은 대개 비미란성으로 심한 변형은 전형적이지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008553 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Behcet의 GI·혈관 합병증을 연관없다고 잘못 배제한 해설 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008553
