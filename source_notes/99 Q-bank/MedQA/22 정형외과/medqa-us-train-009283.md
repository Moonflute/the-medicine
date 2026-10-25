---
type: qbank
schema_version: 1
id: medqa-us-train-009283
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f6472259a202e0281e3ea77f8ba100e25360722469e7d41a91fbd4e6b4e8d894
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "Baker cyst"
  - "베이커 낭종"
  - "meniscal tear"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
answer: D
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

43세 남자가 2개월 전 처음 발견한 왼쪽 무릎 뒤 부종으로 내원했다. 통증은 없지만 오래 서 있으면 무릎 뒤가 아프고 아침에 무릎이 약간 뻣뻣하다가 움직이면 수분 내 사라진다. 종아리 국소 압통은 없지만 발을 강제로 발등굽힘하면 무릎 통증이 악화된다. 왼쪽 오금 안쪽에 3 cm 크기의 약간 압통 있는 고정된 종괴가 있고, 무릎을 펴면 두드러지며 굽히면 사라진다. 이 환자 상태의 가장 강력한 소인 위험요인은 무엇인가?

## 선택지

A. 퓨린이 풍부한 식단
B. 정맥류
C. 다발성 지방종증 가족력
D. 반월상연골 파열 병력

## 해설

정답은 D, 반월상연골 파열 병력이다. 오금 안쪽의 종괴가 무릎 신전 시 두드러지고 굴곡 시 줄어드는 소견은 Baker 낭종을 시사한다. 관절 내 병변으로 활액이 증가하여 뒤쪽 윤활낭으로 이동하면서 형성될 수 있으며, 성인에서는 반월상연골 파열이나 골관절염이 중요한 연관 원인이다. 제시된 네 위험요인 중 반월상연골 파열이 가장 적절하다. 발등굽힘에 따른 통증만으로 심부정맥혈전증을 배제하거나 확진할 수는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 식도이완불능/내시경 해설은 다른 증례. Baker 낭종과 반월상연골 파열 관련성 설명. 원정답 D 유지.
- 공식/학회 근거: https://www.orthoinfo.org/diseases--conditions/bakers-cyst-popliteal-cyst/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009283
