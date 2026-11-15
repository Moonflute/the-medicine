---
type: qbank
schema_version: 1
id: medqa-us-train-005834
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a9a330a4be1e12d55a90fb2881716520b2a489a2540b2be2cf751b3a14f846ae
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "버드-키아리 증후군"
  - "진성적혈구증가증"
  - "간정맥 혈전증"
related_disease_slugs:
  - MDkg7ZiI7JWhL-ynhOyEsSDsoIHtmIjqtazspp3qsIDspp0gKFBWKSAoUG9seWN5dGhlbWlhIFZlcmEgKFBWKSkubWQ
  - MDMg7IaM7ZmU6riwL-uyhOuTnC3tgqTslYTrpqwg7Kad7ZuE6rWwIChCdWRkLUNoaWFyaSBTeW5kcm9tZSkubWQ
question_type: investigation
difficulty: complex
answer: B
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

58세 남성이 갑자기 시작된 오른쪽 윗배 통증과 복부 팽만으로 내원했다. 진성적혈구증가증이 있고 진찰에서 압통성 간비대와 복수가 있다. 혈청-복수 알부민 차는 1.6 g/dL이다. 의심되는 간정맥 유출로 폐쇄를 평가할 첫 검사는?

## 선택지

A. 경흉부 심초음파
B. 간정맥·하대정맥 도플러 초음파
C. 상부위장관 내시경
D. 복부 단순 X선

## 해설

혈전 위험이 높은 환자에서 복통, 간비대와 복수가 새로 생기면 버드–키아리 증후군을 의심한다. 도플러 초음파는 간정맥과 하대정맥의 혈류를 확인하는 첫 검사다. 필요하면 조영 CT 또는 MRI로 보완한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: PV의 Budd-Chiari 초기 초음파 B를 Doppler 혈류평가로 명료화.
- https://aasldpubs.onlinelibrary.wiley.com/doi/10.1002/hep.31646

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005834
- EASL 간혈관질환 진료지침: https://pubmed.ncbi.nlm.nih.gov/41224629/
