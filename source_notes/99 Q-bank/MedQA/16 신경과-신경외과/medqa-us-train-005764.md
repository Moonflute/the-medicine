---
type: qbank
schema_version: 1
id: medqa-us-train-005764
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9fc4af6b2e7f461e2edd91417c83fc06d16f2c843f2312f375c54c58e7426e9e
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "일과성 허혈발작"
  - "경동맥 협착"
  - "항혈소판 치료"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_snbzqs7zshLEg7ZeI7ZiIIOuwnOyekSAoVHJhbnNpZW50IGlzY2hlbWljIGF0dGFjaykubWQ
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_qsr3rj5nrp6Ug7ZiR7LCp7KadIChDYXJvdGlkIGFydGVyeSBzdGVub3NpcykubWQ
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9TaXRhZ2xpcHRpbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9BbHRlcGxhc2UubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

당뇨병이 있는 62세 남성이 오른팔 위약과 실어증을 25분간 겪고 회복됐다. 증상은 4시간 전에 발생했고 내원 혈압은 158/90 mmHg다. 영상에 출혈과 치료가 필요한 중증 협착은 없고 심방세동이나 출혈 고위험도 없다. 초기 항혈소판 계획은?

## 선택지

A. 장기간 아스피린과 클로피도그렐 병용
B. 아스피린과 클로피도그렐을 약 21일 병용한 뒤 단일요법
C. 치료 용량 항응고제를 단독 투여
D. 증상이 사라졌으므로 예방 약제를 쓰지 않는다

## 해설

이 환자의 ABCD² 점수는 6점이다. 조기에 평가된 고위험 비심장성 일과성 허혈발작은 출혈 위험을 확인하고 단기 아스피린–클로피도그렐 병용 뒤 단독요법으로 전환한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 경동맥 수술을70% 초과로만 제한한 해설을 수정했다. 이 환자는45% 협착으로 재혈관화보다 항혈소판 C가 적절하다.
- 공식/학회 근거: https://www.strokebestpractices.ca/recommendations/secondary-prevention-of-stroke/management-of-extracranial-carotid-disease-and-intracranial-atherosclerosis
- 공식/학회 근거: https://www.strokebestpractices.ca/recommendations/secondary-prevention-of-stroke/anti-platelet-therapy-in-ischemic-stroke-and-tia

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005764
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8829490/
