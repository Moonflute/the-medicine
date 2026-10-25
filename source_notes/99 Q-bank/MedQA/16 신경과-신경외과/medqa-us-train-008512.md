---
type: qbank
schema_version: 1
id: medqa-us-train-008512
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2251495451ce39e3e20f6f50603283041e9bfcb5d2ecd604335fb01f3158ddaf
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "transient ischemic attack"
  - "carotid artery stenosis"
  - "aspirin"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_snbzqs7zshLEg7ZeI7ZiIIOuwnOyekSAoVHJhbnNpZW50IGlzY2hlbWljIGF0dGFjaykubWQ
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_qsr3rj5nrp6Ug7ZiR7LCp7KadIChDYXJvdGlkIGFydGVyeSBzdGVub3NpcykubWQ
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

71세 여성이 약 1시간 만에 회복된 일시적인 오른팔과 손의 근력 저하로 내원했다. 정원 일을 하던 중 증상이 시작되었다. 과거력으로 고혈압, 당뇨병, 불안, 이상지질혈증이 있다. 현재 인슐린, 메트포르민, 플루옥세틴을 복용한다. 진찰에서 왼쪽 경동맥 잡음이 들린다. 경동맥 초음파에서 오른쪽과 왼쪽 경동맥 협착은 각각 35%와 50%였다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 아스피린
B. 왼쪽 경동맥 내막절제술만 시행
C. 관찰
D. 와파린

## 해설

일시적 우측 상지 약화는 좌측 경동맥 영역 TIA를 시사하며 항혈소판제는 일차예방이 아니라 이차예방이다. 보기 중 aspirin(A)이 적절하고, 관찰만 하거나 심방세동 등 적응증 없이 warfarin을 사용하지 않는다. 고위험 TIA의 조기 단기 이중항혈소판요법 적응증도 별도로 평가한다. 경동맥내막절제술은 증상성 남성 50~99%, 여성 70~99%에서 권고되며 여성 50~69%는 개별 선택이므로 '70% 이상만'이라고 일반화할 수 없다. 수술만 시행하는 B는 최적 약물치료를 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 일차예방/협착 50% 미만/수술은 70% 이상만이라는 세 오류 교정. 증상성 여성 50% 협착에서 보기 A 유지.
- 공식/학회 근거: https://www.strokebestpractices.ca/recommendations/secondary-prevention-of-stroke/management-of-extracranial-carotid-disease-and-intracranial-atherosclerosis
- 공식/학회 근거: https://www.strokebestpractices.ca/recommendations/secondary-prevention-of-stroke/anti-platelet-therapy-in-ischemic-stroke-and-tia

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008512
