---
type: qbank
schema_version: 1
id: medqa-us-train-002632
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8af4db4f7bf8a3ebd05807809b5390b45449f39a44557b829bd26fc817f89168
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "essential tremor"
  - "propranolol"
  - "asthma contraindication"
question_type: adverse_effect
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rs7jtg5zshLEg65ao66a8IChFc3NlbnRpYWwgdHJlbW9yKS5tZA
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

78세 여성이 손 떨림으로 내원했다. 아침에 커피를 따르거나 셔츠 단추를 잠글 때 손이 떨리지만 저녁에 맥주를 마시면 호전된다. 손을 무릎에 올리면 떨림이 없고 손가락-코 검사에서 저진폭 떨림이 보인다. 과거력으로 고혈압, 심방세동, 중등도 지속성 천식, 급성 간헐성 포르피린증 및 요폐가 있으며 히드로클로로티아지드, 와파린, 베타네콜, 흡입 플루티카손과 필요시 알부테롤을 사용한다. 폐진찰에서 경한 천명이 있다. 다음 중 이 상태의 일차 치료에 대한 금기는?

## 선택지

A. 급성 간헐성 포르피린증
B. 천식
C. 요폐
D. 와파린 사용

## 해설

본태성떨림에 쓰는 비선택적베타차단제 프로프라놀롤은 기관지수축을 일으킬 수 있어 기관지천식(B)에 금기이다. 이는 모든베타차단제를 같은위험도로 취급한다는 뜻이 아니다. 이환자는 원문상 중등도지속천식/천명이 있어 특히중요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 원문에 있는천식/AIP/요폐/warfarin병력누락 복원. propranolol의천식금기 B 설명.
- 공식/학회 근거: https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=1f0f5fb3-5292-4d04-b590-3c90a663eec8&type=display

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002632
