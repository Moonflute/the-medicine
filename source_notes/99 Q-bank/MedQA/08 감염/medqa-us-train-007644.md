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
question_type: diagnosis
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

68세 여성이 선택적 우측 결장반절제술을 위해 입원했다. 독립적으로 걸을 수 있고 장도 직접 본다. 제2형 당뇨병을 20년, 본태성 고혈압을 15년, 운동 시 협심증을 6년째 앓고 있으며 30갑년의 흡연력이 있다. 수술은 합병증 없이 끝났다. 수술 후 5일째 혼돈이 발생했다. 체온 38.5°C, 호흡수 28회/분, 산소 2 L 투여 시 산소포화도 92%이다. 맥박은 118회/분, 혈압은 110/65 mm Hg이다. 흉부 청진에서 우측 폐기저부에 거친 수포음이 들린다. 수술 상처는 잘 아물고 있고 복부는 부드러우며 압통이 없다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 비감염성 전신 염증 반응 증후군(SIRS)
B. 다발장기 기능장애 증후군
C. 패혈증
D. 약물 유발 발열

## 해설


수술 후 폐렴 의심 감염에 새 의식저하·저산소증 등 장기기능장애가 나타나 sepsis C를 의심한다. 현재 정의의 핵심은 감염에 대한 조절장애 숙주반응으로 인한 생명위협성 장기기능장애이며 저혈압이 반드시 있어야 하는 것은 아니다. SIRS만 있으면 모두 sepsis라고 하지 않으며 원인 감염·산소화/순환을 신속히 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007644 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 패혈증을 반드시 저혈압/SIRS로 정의한 구식 해설 교정; C 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.sccm.org/survivingsepsiscampaign/guidelines-and-resources/surviving-sepsis-campaign-adult-guidelines

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007644
