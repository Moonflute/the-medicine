---
type: qbank
schema_version: 1
id: medqa-us-train-001616
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:56a604af6e5eea93effe9e3f5d80d6bfa43b5939102f9fa042be8465ee9752c7
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "adenoviral conjunctivitis"
  - "epidemic keratoconjunctivitis"
question_type: management
related_disease_slugs:
  - MTgg7JWI6rO8L-qysOyEseyXvCAoQ29uanVuY3Rpdml0aXMpLm1k
  - MTgg7JWI6rO8L-ycoO2WieqwgeqysOunieyXvCAoZXBpZGVtaWMga2VyYXRvY29uanVuY3Rpdml0aXMpLm1k
difficulty: standard
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
  - ZHJ1ZzowMiDtmLjtnaHquLAvQmVjbG9tZXRhc29uZS5tZA
  - ZHJ1ZzowMiDtmLjtnaHquLAvTW9udGVsdWthc3QubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

6세 아이가 한쪽부터 양쪽으로 번진 충혈과 수양성 눈물을 보인다. 귀앞 림프절이 만져지지만 시력은 정상이고 각막 침윤이나 심한 통증은 없다. 초기 관리는?

## 선택지

A. 인공눈물과 냉찜질을 하고 손 위생과 수건을 따로 쓰도록 안내한다
B. 모든 환자에게 항생제 점안과 경구 투여를 한다
C. 고용량 스테로이드 점안제를 바로 시작한다
D. 항진균 점안제를 쓴다

## 해설

이 양상은 흔한 바이러스 결막염에 맞아 대증치료를 한다. 손 위생과 물품 분리가 전파 예방에 중요하고, 통증·빛공포·시력 변화 시 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 아데노바이러스 각결막염의 지지요법 답 A 유지. 눈물 흘림을 치료처럼 적은 표현과 스테로이드의 무조건 금지 일반화 수정.
- 공식/학회 근거: https://aao.org/education/preferred-practice-pattern/conjunctivitis-ppp-2023

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001616
- https://www.aaojournal.org/article/S0161-6420%2824%2900009-5/fulltext
