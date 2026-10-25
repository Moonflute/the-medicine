---
type: qbank
schema_version: 1
id: medqa-us-train-003935
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:427b6a57a42361e97e10f147a741abaaf84883912312b80d30bff2d969c93b77
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "central retinal artery occlusion"
  - "amaurosis fugax"
  - "relative afferent pupillary defect"
  - "retinal ischemia"
question_type: diagnosis
related_disease_slugs:
  - MTgg7JWI6rO8L-unneunieykkeyLrOuPmeunpe2PkOyHhCAoY2VudHJhbCByZXRpbmFsIGFydGVyeSBvY2NsdXNpb24pLm1k
difficulty: complex
answer: A
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

65세 남성이 2시간 동안 통증 없이 갑자기 왼쪽 눈의 시력을 잃었다. 한 달 전에도 몇 초간 지속된 비슷한 증상이 있었다. 두통이나 근골격 통증은 없었다. 허혈성 심질환, 고혈압, 당뇨병과 장기 흡연력이 있었다. 왼쪽 눈은 빛을 인지하지 못하고 상대구심성 동공운동장애가 있었다. 다음 중 소견을 가장 잘 설명하는 것은?

## 선택지

A. 중심망막동맥 폐색
B. 탈수초성 시신경염
C. 측두동맥염
D. 습성 황반변성

## 해설

갑작스러운 심한 무통성 단안 시력저하, RAPD와 선행 일과성 단안 시력소실은 혈관 위험이 있는 환자에서 A, 중심망막동맥폐쇄를 가장 지지한다. 탈수초 시신경염은 흔히 안구운동통·색각저하와 더 아급성 경과를 보이고, 습성 AMD만으로 광각 없는 전체 시력 소실을 설명하기는 어렵다. 고령의 시력소실에서는 거대세포동맥염도 반드시 임상 평가하지만 이 문항에는 두통·근육통이 없다. CRAO는 급성 허혈성 응급으로 즉시 평가해야 하며, 치료 가능성을 평가하기 전에 이미 회복 불가능하다고 단정해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 급성 망막 허혈의 정답 A를 유지하면서 반드시 이미 영구 실명이라는 단정을 제거하고 원문의 혈관위험·GCA 음성 단서 복원.
- 공식/학회 근거: https://professional.heart.org/en/science-news/management-of-central-retinal-artery-occlusion

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003935
