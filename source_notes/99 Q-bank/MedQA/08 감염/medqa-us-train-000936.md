---
type: qbank
schema_version: 1
id: medqa-us-train-000936
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fe876efb9988df8b2c65cb7cf5c7b5301086eaaf8abd73fc3c5fa50fdafb1078
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "HIV"
  - "tetanus"
  - "diphtheria"
  - "hepatitis B"
  - "chickenpox"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2MjOyDge2SjSAoVGV0YW51cykubWQ
  - MTIg7IKw6rO8L-yImOuRkCAoVmFyaWNlbGxhKS5tZA
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

34세 남성이 정기 건강 검진을 위해 내원했다. 그는 8년 전 HIV 진단을 받았다. 현재 3제 항레트로바이러스 치료(triple antiretroviral therapy)를 받고 있다. 성생활을 하고 있으며 콘돔을 일관되게 사용한다. 6주 후 35번째 생일을 기념하기 위해 파트너와 태국 여행을 계획 중이다. 마지막 파상풍 및 디프테리아 추가 접종은 4년 전에 받았다. 5년 전에 B형 간염 백신을 3회 접종받았다. 어린 시절 수두를 앓았다. 기타 예방접종 기록은 알 수 없다. 활력 징후는 정상 범위 내에 있다. 심폐 검사상 이상 소견은 없다. 백혈구 수는 8,700/mm3이고, CD4+ T-림프구 수는 480 cells/mm3(정상 ≥ 500)이다. 항-HBs(anti-HBs)는 150 mIU/mL이다. 현재 가장 적절한 권고 사항은 무엇인가?

## 선택지

A. BCG(Bacillus Calmette Guerin) 백신
B. 홍역, 볼거리, 풍진(MMR) 백신
C. 황열 백신
D. 예방접종 없음

## 해설


면역 증거가 없는 HIV 성인은 CD4 ≥200/mm³이고 ART로 HIV가 조절되는 등 생백신 금기 조건이 없으면 MMR 두 회를 최소 28일 간격으로 접종한다. 제시된 ART 복용 및 CD4 480의 환자에서는 B가 보기 중 적절하되, 접종 전 면역 기록과 바이러스 조절 상태를 확인한다. BCG는 HIV에서 권고하지 않으며 황열백신은 실제 노출·입국 요건과 면역 상태를 따져 결정하므로 태국 여행 자체가 접종 적응증은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000936 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: HIV에서 MMR의 면역·ART 조건과 태국 여행만으로 황열백신이 필요하지 않음을 명확화.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://clinicalinfo.hiv.gov/sites/default/files/guidelines/documents/adult-adolescent-oi/immunizations-adult-adolescent-oi.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000936
