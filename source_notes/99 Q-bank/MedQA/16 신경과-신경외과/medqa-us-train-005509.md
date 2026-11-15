---
type: qbank
schema_version: 1
id: medqa-us-train-005509
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:db585ccb3b81a45326365b496b26dfba55c204b05e51d998b21c18e917b3d802
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "다발성경화증 재발"
  - "횡단척수염"
  - "고용량 정맥 스테로이드"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_ri6TrsJzshLEg6rK97ZmU7KadIChNdWx0aXBsZSBzY2xlcm9zaXMpLm1k
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

다발성경화증 환자에게 중증 척수염으로 양다리 마비와 요폐가 생겼다. MRI에서 압박은 없고 감염은 평가했다. 고용량 정맥 메틸프레드니솔론을 완료했지만 심한 기능 저하가 지속된다. 고려할 구제치료는?

## 선택지

A. 인터페론 베타를 단회 증량한다
B. 릴루졸을 시작한다
C. 경구 저용량 스테로이드로 바꾸고 3개월 기다린다
D. 혈장교환을 시행한다

## 해설

중증 염증성 탈수초 재발에 고용량 스테로이드 반응이 불충분하면 혈장교환을 고려한다. 감염이나 압박 등 다른 원인도 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 급성 염증성 척수증상에서 B를 유지하며 혈장교환이 급성기에 효과 없다는 오류를 스테로이드 불응 시 구제치료로 교정했다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng220/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005509
- https://pubmed.ncbi.nlm.nih.gov/42728304/
