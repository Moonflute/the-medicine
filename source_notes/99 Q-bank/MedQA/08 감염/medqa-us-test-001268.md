---
type: qbank
schema_version: 1
id: medqa-us-test-001268
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:764b91a87141487b038b6e2cf4fe18c3dcf94f46f83ae7c735397ea9cda3851f
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "열대열 말라리아"
  - "Plasmodium falciparum"
  - "말라리아 용혈"
related_disease_slugs:
  - MDgg6rCQ7Je8L-unkOudvOumrOyVhCAoTWFsYXJpYSkubWQ
question_type: diagnosis
difficulty: complex
answer: B
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

29세 여성이 인도에서 농촌 주택 건설 NGO 활동 후 돌아온 지 일주일 만에 고열, 두통, 근육통으로 진료를 받으러 왔다. 여행 일주일 전 chloroquine 한 회, 여행 중 추가 한 회를 복용했다. 체온 39.3°C(102.7°F), 황달, 혈색소 10 g/dL, 말초혈액도말에서 분열적혈구와 적혈구 내 고리모양 봉입체가 보였다. 감염 원인으로 가장 가능성 높은 것은?

## 선택지

A. Plasmodium ovale
B. Plasmodium falciparum
C. 치쿤구니야 바이러스
D. A형간염 바이러스

## 해설


유행지 여행 후 발열·빈혈·황달과 적혈구 내 고리형 기생충은 말라리아를 시사하며 선지 중 P. falciparum(B)이 가장 타당하다. Chloroquine을 간헐적으로 복용한 사실만으로 예방이 적절했다고 볼 수 없다. 고리형 소견만으로 모든 종 감별이 완료되는 것은 아니며 다른 종도 중증 질환을 일으킬 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-001268 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 인도 여행후 말라리아 B 유지. 누락된 불완전 chloroquine 예방 복용력을 복구하고 다른종은 중증용혈 불가라는 단정 제거.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001268
