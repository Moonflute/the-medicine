---
type: qbank
schema_version: 1
id: medqa-us-train-004888
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2b0b7f077dc6bfffe2d5809fbe94bb9257bfc0468612395f3a00055831e2e777
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "중증근무력증"
  - "단일 근섬유 근전도검사"
  - "흉선종"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_spJHspp0g6re866y066Cl7KadIChNeWFzdGhlbmlhIGdyYXZpcykubWQ
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

32세 여성이 말을 오래 하거나 음식을 오래 씹으면 목소리와 저작 힘이 약해지고 저녁에는 복시가 생긴다. 반사는 정상이다. 항체와 반복신경자극검사가 진단적이지 않아 신경근 전달 평가가 더 필요하다. 민감한 검사는?

## 선택지

A. 요추천자
B. 흉부 CT
C. 단일근섬유 근전도검사
D. 근육 조직검사

## 해설

단일근섬유 근전도검사는 신경근 전달의 시간 변동을 확인하는 민감한 검사다. 이상 결과가 중증근무력증에만 특이적이지 않으므로 임상과 함께 해석한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. SFEMG의 이상 소견을 재발성 전위로 잘못 설명한 것을 jitter 증가·차단으로 교정했다. 주어진 진단검사 중 C를 유지하며 민감도와 특이도를 구별한다.
- 공식/학회 근거: https://www.aanem.org/docs/default-source/documents/aanem/practice/guidelines/myastheniagravis_reaffirmed.pdf?sfvrsn%3D178424ec_3=
- 공식/학회 근거: https://www.neurology.org/doi/10.1212/WNL.29.1.68

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004888
- https://pubmed.ncbi.nlm.nih.gov/40129481/
