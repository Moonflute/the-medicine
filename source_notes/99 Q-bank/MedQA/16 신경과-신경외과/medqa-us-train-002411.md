---
type: qbank
schema_version: 1
id: medqa-us-train-002411
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:301bbded69f895cfc13dbfbfae926ff68fbf92ac5391da5780fea9f7650f287c
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "transient ischemic attack"
  - "symptomatic carotid stenosis"
  - "carotid endarterectomy"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_snbzqs7zshLEg7ZeI7ZiIIOuwnOyekSAoVHJhbnNpZW50IGlzY2hlbWljIGF0dGFjaykubWQ
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_qsr3rj5nrp6Ug7ZiR7LCp7KadIChDYXJvdGlkIGFydGVyeSBzdGVub3NpcykubWQ
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

66세 남성이 1시간 전 발생한 오른팔 위약으로 응급실에 왔다. 아침 식사 중 오른팔에 갑자기 힘이 빠져 커피잔을 떨어뜨렸고 말이 어눌하며 오른다리에도 약간의 위약이 있었다. 증상은 약 30분 지속되었으나 응급실 도착 시 완전히 회복되었다. 고혈압과 고지혈증이 있지만 정기 추적진료는 받지 않고 약물도 복용하지 않는다. 목 청진에서 고음의 잡음이 들리고 CT 혈관조영술에서 좌측 내경동맥 80% 협착이 보인다. 다음 중 장기 관리의 가장 적절한 다음 단계는?

## 선택지

A. 경동맥 내막절제술
B. 뇌 MRI
C. 아스피린과 아토르바스타틴을 시작한다
D. 리시노프릴을 시작한다

## 해설

오른쪽 위약·구음장애를 동반한 TIA와 좌측 내경동맥 80% 협착은 증상성 중증 경동맥 협착이다. 수술 위험을 평가하여 경동맥 내막절제술(A)을 신속히 계획하는 것이 적절하며, 임상적으로 안정하면 일반적으로 증상 발생 후 14일 이내 시행이 권장된다. 동시에 항혈소판제·스타틴과 혈압 등 위험인자 관리도 필요하다. 따라서 A는 약물치료를 생략한다는 뜻이 아니라 적절한 약물치료만으로 끝내지 않고 재혈관화를 평가한다는 의미다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 증상성 동측 80% 내경동맥 협착에서 내막절제술 A를 유지하되 항혈소판제·스타틴을 대체하는 수술로 오해하지 않도록 시기와 병행 치료를 명시했다.
- 공식/학회 근거: https://www.strokebestpractices.ca/recommendations/secondary-prevention-of-stroke/management-of-extracranial-carotid-disease-and-intracranial-atherosclerosis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002411
