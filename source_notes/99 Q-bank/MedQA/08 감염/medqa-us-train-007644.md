---
type: qbank
schema_version: 1
id: medqa-us-train-007644
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0c46d1031d05b41e722af5c04d4eff0a1d615a3e51fcd36e4bfa223a8ced12b2
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "sepsis"
  - "postoperative pneumonia"
  - "systemic inflammatory response syndrome"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2MqO2YiOymnSAoU2Vwc2lzKS5tZA
  - MDIg7Zi47Z2h6riwL-uzkeybkO2ajeuTnSDtj5DroLQgKEhvc3BpdGFsLUFjcXVpcmVkIFBuZXVtb25pYSkubWQ
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

수술 뒤 폐렴으로 패혈증이 발생한 환자다. 항생제와 초기 수액을 투여했고 수액 반응은 더 이상 없지만 평균동맥압은 56mmHg, 젖산은 4.2mmol/L다. 우선 시작할 혈압상승제는?

## 선택지

A. 도파민
B. 바소프레신 단독
C. 노르에피네프린
D. 페닐에프린

## 해설


초기 수액 후에도 저혈압이 지속되는 패혈성 쇼크에서는 노르에피네프린이 1차 혈압상승제다. 평균동맥압은 초기에는 대개 65mmHg를 목표로 하고 관류와 환자 상태에 따라 조정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007644 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 패혈증을 반드시 저혈압/SIRS로 정의한 구식 해설 교정; C 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.sccm.org/survivingsepsiscampaign/guidelines-and-resources/surviving-sepsis-campaign-adult-guidelines

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007644
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11617831/
