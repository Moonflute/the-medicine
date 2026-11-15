---
type: qbank
schema_version: 1
id: medqa-us-train-008293
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fab81188ca84fbb3ebc2a367813af7aded6076539fa80d19a31975fb14a1d4d2
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "antisocial personality disorder"
  - "conduct disorder"
  - "impulsivity"
question_type: investigation
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-2SiO2WiSDsnqXslaAgKENvbmR1Y3QgRGlzb3JkZXIpLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 환자에게 성인기부터 반복되는 기만, 타인의 권리 침해와 무책임한 행동이 있다. 이러한 행동은 조증이나 물질 사용 중에만 나타난 것이 아니다. DSM 기준으로 반사회성 성격장애를 진단하기 전에 반드시 확인할 과거력은?

## 선택지

A. 15세 이전에 시작된 품행장애의 증거
B. 성인기 첫 우울 삽화
C. 가까운 가족의 동일 진단
D. 적어도 한 차례의 수감 기록

## 해설


반사회성 성격장애는 18세 이상에서 진단하며 15세 이전에 품행장애가 있었음을 뒷받침하는 정보가 필요하다. 법적 처벌을 받았는지만으로 진단하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008293
- https://www.ncbi.nlm.nih.gov/books/NBK546673/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 영·한 본문·네 선지·정답·해설 확인. 15세 전 품행문제와 성인에서 사기·무책임·규범 위반의 지속으로 반사회성 인격장애 선택 타당.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
