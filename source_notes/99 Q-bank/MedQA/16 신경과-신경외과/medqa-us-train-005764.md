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
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
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

62세 남성이 30분 전 시작된 우측 근력저하와 주관적인 감각저하로 응급실에 왔다. 증상은 발생 5분 후 완화되기 시작했고 현재는 완전히 사라졌다. 고혈압, 고지혈증 및 제2형 당뇨병이 있으며 40년 동안 하루 한 갑씩 흡연했다. 현재 리시노프릴, 메트포르민 및 시타글립틴을 복용한다. 키는 183cm, 체중은 105kg, BMI는 32kg/m²이다. 상태는 양호하고 체온은 36.5°C(97.7°F), 맥박은 분당 80회, 혈압은 150/88 mmHg이다. 신경학적 검사는 정상이며 심장검사에서 규칙적인 리듬과 좌측 경동맥 잡음이 들린다. 전혈구검사, 혈당 및 전해질은 정상이다. 심전도는 정상 동리듬과 좌축편위를 보인다. 조영제를 사용하지 않은 뇌 CT는 정상이고, 경동맥 도플러에서 좌측 45%, 우측 15% 협착이 보인다. 다음 중 가장 적절한 관리의 다음 단계는 무엇인가?

## 선택지

A. 경동맥 내막절제술
B. 경흉부 심초음파
C. 항혈소판 치료
D. 정맥 내 알테플라제 치료

## 해설

완전히 소실된 일과성 편측 증상은 TIA에 합당하며 출혈이 배제되고 심방세동이 확인되지 않은 상황에서 항혈소판 치료(C)를 신속히 시작하는 것이 적절하다. 좌측 경동맥45%는 내막절제술 적응증이 아니다. 그러나 모든70% 미만 협착에 수술이 배제되는 것은 아니며 증상성50–69%의 선별 환자도 수술 이득을 평가할 수 있다. 고위험 TIA에서는 출혈 위험·금기 등을 확인하여 단기 이중항혈소판 후 단독요법을 고려하고 스타틴·혈압·금연도 함께 관리한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 경동맥 수술을70% 초과로만 제한한 해설을 수정했다. 이 환자는45% 협착으로 재혈관화보다 항혈소판 C가 적절하다.
- 공식/학회 근거: https://www.strokebestpractices.ca/recommendations/secondary-prevention-of-stroke/management-of-extracranial-carotid-disease-and-intracranial-atherosclerosis
- 공식/학회 근거: https://www.strokebestpractices.ca/recommendations/secondary-prevention-of-stroke/anti-platelet-therapy-in-ischemic-stroke-and-tia

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005764
