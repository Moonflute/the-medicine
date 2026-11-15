---
type: qbank
schema_version: 1
id: medqa-us-train-006066
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dab1901e125bd7c45b7c6dc4bf405658255bcc103622362d232fd6ad85271031
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "중증근무력증 위기"
  - "겐타마이신 유발 악화"
  - "혈장교환술"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_spJHspp0g6re866y066Cl7KadIChNeWFzdGhlbmlhIGdyYXZpcykubWQ
difficulty: complex
answer: D
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
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

중증근무력증 환자가 감염 후 연하·호흡근 약화로 삽관됐다. 감염 치료와 유발 약물 평가를 진행 중이다. 위기에서 빠른 단기 효과를 기대할 면역치료는?

## 선택지

A. 피리도스티그민만 증량한다
B. 아자티오프린 단독치료를 시작한다
C. 계획 흉선절제술만 바로 시행한다
D. 혈장교환을 시행한다

## 해설

중증근무력 위기에서는 환기 지원과 함께 혈장교환 또는 정맥 면역글로불린을 사용한다. 감염과 신경근 전달을 떨어뜨리는 약도 함께 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. MG 위기에서 PLEX C 유지. IVIG도 대안이며 gentamicin 악화 가능성을 확인, PLEX의 무조건적 우월성 제거.
- 공식/학회 근거: https://www.neurology.org/doi/10.1212/wnl.0000000000002790
- 공식/학회 근거: https://myasthenia.org/understanding-mg/learn-more-about-mg-treatments/mg-brochures/cautionary-drugs/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006066
- https://pubmed.ncbi.nlm.nih.gov/40940171/
