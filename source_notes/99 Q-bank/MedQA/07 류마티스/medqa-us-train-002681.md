---
type: qbank
schema_version: 1
id: medqa-us-train-002681
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f6201c5f2e071fd4aa23f011bbfdf823f29b0c0ed45d138a92db6530d7624f5a
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "systemic sclerosis"
  - "scleroderma"
  - "anti-topoisomerase I antibody"
  - "interstitial lung disease"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yghOyLoCDqsr3tmZTspp0gKFN5c3RlbWljIFNjbGVyb3NpcykubWQ
  - MDIg7Zi47Z2h6riwL-qwhOyniOyEsSDtj5Dsp4jtmZggKEludGVyc3RpdGlhbCBsdW5nIGRpc2Vhc2UpLm1k
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

43세 여성이 2개월간 지속된 간헐적 작열성 흉통으로 내원했다. 양성자펌프억제제를 사용했지만 호전되지 않았고 5 kg 체중이 감소했다. 손가락 피부가 팽팽하고 두꺼워진 피부에 작은 만성 궤양이 있으며 양쪽 폐기저부에서 미세 수포음이 들린다. 다음 중 진단과 가장 관련된 항체는?

## 선택지

A. c-ANCA
B. 항토포이소머레이스 항체
C. 항히스톤 항체
D. 항-Ro/SSA 및 항-La/SSB 항체

## 해설


손가락 피부경화와 만성 손끝 궤양, 식도 관련 증상 및 양측 폐기저부 미세 수포음은 전신경화증과 간질성 폐질환 가능성을 시사한다. 선택지 중 anti-topoisomerase I(anti-Scl-70, B)가 이 진단과 관련되고 특히 간질성 폐질환과 연관된다. 전신경화증의 항체에는 항중심체·항RNA polymerase III 등도 있어 Scl-70만이 유일한 특이 항체라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002681 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 전신경화증의 단일 최특이 항체라는 단정 대신 anti-topoisomerase I와 폐 침범의 연관으로 정답을 설명했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002681
