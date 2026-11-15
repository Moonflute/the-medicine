---
type: qbank
schema_version: 1
id: medqa-us-train-002813
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8b2a7054677e27d7c022989d89913b6f811e5fa4ebee306abf4c7918b6bf8076
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "cat-scratch disease"
  - "Bartonella henselae"
  - "regional lymphadenitis"
  - "immunocompetent host"
related_disease_slugs:
  - MDgg6rCQ7Je8L-usmOyGjOuzkSAoQ2F0IFNjcmF0Y2ggRGlzZWFzZSkubWQ
question_type: management
difficulty: complex
answer: C
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

건강한 18세 환자가 고양이할큄병으로 진단됐다. 열은 없고 같은 쪽 겨드랑이 림프절 하나가 작아지고 있으며, 화농이나 다른 장기 침범은 없다. 적절한 처치는?

## 선택지

A. 모든 환자에게 아지트로마이신을 반드시 처방한다
B. 확진 직후 림프절을 수술로 제거한다
C. 진통 등 증상 조절과 경과 관찰을 한다
D. 파종성 감염과 같은 장기 병합 항생제를 시작한다

## 해설


면역정상 환자의 경증 국소 고양이할큄병은 흔히 저절로 호전된다. 림프절이 계속 커지거나 전신·장기 침범이 의심되면 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002813 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 단순 고양이긁힘병의 관찰 D는 가능한 선택이나 항생제가 중증·면역저하에만 가능하다는 과도한 배제와 물림 오역 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/bartonella/hcp/clinical-overview/cat-scratch-disease.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002813
