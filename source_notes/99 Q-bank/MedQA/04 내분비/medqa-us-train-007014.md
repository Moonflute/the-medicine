---
type: qbank
schema_version: 1
id: medqa-us-train-007014
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1b386ece8c6dcd318aa41f98c048ad4682e679af518be97b7f997a95e38ef83f
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "제1형 당뇨병"
  - "인슐린 결핍"
  - "삼투성 이뇨"
  - "다뇨"
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDHtmJUg64u564eo67ORIChUeXBlIDEgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: mechanism
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

12세 남아가 한 달 동안 소변을 자주 보아 의사에게 내원했다. 밤에도 소변을 보기 위해 자주 깬다. 지난 2개월 동안 체중이 3.2kg(7lb) 감소했다. 심각한 질환의 개인력이나 가족력은 없다. 키와 체중은 40백분위수이다. 활력징후는 정상이고 신체검사에서 이상은 없다. 혈청 전해질, 크레아티닌, 삼투질농도는 정상 범위이다. 소변검사에서 혈액 음성, 단백 음성, 포도당 1+, 백혈구 에스터라제 음성, 삼투질농도 620 mOsm/kg H₂O이다. 이 소견의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 인슐린 저항성
B. 티록신 수치 상승
C. 요로 감염
D. 인슐린 결핍

## 해설

정상 체격의 12세 소아에서 체중감소와 다뇨·야간뇨, 요당 양성이 함께 나타나면 인슐린 결핍에 의한 제1형 당뇨병을 우선 의심한다. 인슐린 부족으로 혈당이 증가하여 포도당이 소변으로 배출되면 삼투성 이뇨가 발생한다. 따라서 보기 중 가장 가능성 높은 원인은 D, 인슐린 결핍이다.

소변 삼투질농도 620 mOsm/kg은 포도당 같은 용질 배설에 의한 이뇨와 양립하며, 요붕증의 전형적인 희석뇨 소견이 아니다. 백혈구 에스터라제 음성이고 감염 단서도 부족하다. 확진에는 혈당과 당뇨병 진단기준에 따른 평가가 필요하며 요당 하나만으로 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 아나필락시스 해설을 소아 제1형 당뇨병/인슐린 결핍에 의한 당뇨와 삼투성 이뇨 설명으로 교체. 원정답 D 유지.
- https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes/type-1-diabetes

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007014
