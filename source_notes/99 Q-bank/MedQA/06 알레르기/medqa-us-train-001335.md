---
type: qbank
schema_version: 1
id: medqa-us-train-001335
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3c5cbbb8ff2056d6acc6bbbdee1e3466c790e1ef3f5c5698f74752830bb908d3
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "serum sickness-like reaction"
  - "drug hypersensitivity"
  - "urticarial rash"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-2YiOyyreuzkSAoU2VydW0gU2lja25lc3MpLm1k
  - MDYg7JWM66CI66W06riwL-uRkOuTnOufrOq4sCAoVXJ0aWNhcmlhKS5tZA
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
---

# MedQA US 임상문제

## 문제

14세 남아가 세파클러를 먹은 지 8일 뒤 발열, 가려운 피부 발진과 양쪽 손목·발목의 관절통으로 내원했다. 점막 침범이 없고 소변검사와 신기능은 정상이다. 혈청병 유사반응이 의심된다. 먼저 할 조치는?

## 선택지

A. 세파클러를 끝까지 복용하면서 진통제만 사용한다
B. 세파클러를 중단하고 증상에 맞는 지지치료를 한다
C. 같은 약을 다시 투여해 반응을 확인한다
D. 원인약을 유지하고 혈장교환을 시작한다

## 해설


약 복용 1주 전후에 발진·발열·관절통이 함께 생기는 것은 혈청병 유사반응에 맞는다. 원인으로 의심되는 약을 중단하고 점막이나 장기 침범이 생기면 다른 중증 약물 반응을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-001335`와 직접 대조했다.
- 판정: 약물 중단 B 유지. 단백뇨가 있는 사례를 혈청병 유사반응으로 확정하지 않고 혈청병/유사반응 가능성으로 기술.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.rch.org.au/clinicalguide/guideline_index/Serum_Sickness_and_Serum_Sickness_like_reactions_%28SSLRs%29/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001335
