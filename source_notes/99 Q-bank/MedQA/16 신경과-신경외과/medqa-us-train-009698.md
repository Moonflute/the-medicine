---
type: qbank
schema_version: 1
id: medqa-us-train-009698
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7114a0dda9ba8b1726b972853aa0a002ae138e742a553fb374ec5bbf8b85a8e0
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "traumatic brain injury"
  - "외상성 뇌손상"
  - "enteral nutrition"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4zsp4Ttg5UgKENvbmN1c3Npb24pLm1k
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

2층 건물 지붕에서 추락해 입원한 지 3일 된 27세 남자가 중환자실에서 모니터링 중이다. 도착 당시 기면 상태이고 지남력이 없었으며 두부 CT에서 45 cm³ 경막외출혈과 7 mm 정중선 이동이 보였다. 응급 개두술과 혈종 제거술을 시행하고 출혈 혈관을 결찰했다. 수술 후 인공호흡기를 사용하며 체온 37°C, 맥박 67회/분, 혈압 117/78 mmHg, FIO₂ 55%, 일회호흡량 520 mL, PEEP 5.0 cmH₂O이다. 정맥 수액 외에 영양 공급으로 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 경구 수유
B. 총정맥영양
C. 비위관을 통한 경장영양
D. 경피적 내시경 위루관을 통한 경장영양

## 해설

기계환기 중이며 경구섭취가 불가능하지만 장 기능을 사용할 수 있다면 조기 경장영양(C)을 우선 고려한다. 비위관은 초기 단기 접근으로 적합하고, 장기 필요성이 확정되지 않은 입원 3일째에 바로 PEG를 선택할 근거는 부족하다. 정맥영양은 경장영양이 불가능하거나 충분하지 않은 상황에서 평가하며 '전신 영양'이라는 별도 치료가 아니다. 투여 경로는 흡인 위험과 두개저 손상 여부 등도 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 초기 비위관 경장영양 C 확인. 비위관을 장기 영양용으로 단정하고 정맥영양을 '전신 영양'으로 번역한 해설 교정.
- 공식/학회 근거: https://ww2.facs.org/media/vgfgjpfk/best-practices-guidelines-traumatic-brain-injury.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009698
