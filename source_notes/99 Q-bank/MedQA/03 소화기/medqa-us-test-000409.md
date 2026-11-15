---
type: qbank
schema_version: 1
id: medqa-us-test-000409
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:8801bb0e01f543b922495e47378d58d8dce29babf735db0f26afbd28f629199b
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "만성 C형간염"
  - "HCV 유전자형 1"
  - "직접작용 항바이러스제"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_rp4zshLEgQ-2YlSDqsITsl7wgKENocm9uaWMgSGVwYXRpdGlzIEMgKEhDVikpLm1k
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNCDqsITri7Tst4wvRW50ZWNhdmlyLm1k
  - ZHJ1ZzowNCDqsITri7Tst4wvU29mb3NidXZpci5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 남성이 두 차례 검사에서 C형간염 바이러스 RNA 양성으로 확인됐다. 이전에 치료한 적 없고 섬유화 평가에서 간경변은 없다. 신기능은 정상이고 중요한 약물 상호작용도 없다. 대한간학회 권고에 부합하는 범유전자형 경구 치료는?

## 선택지

A. 소포스부비르/벨파타스비르
B. 테노포비르와 엔테카비르
C. 인터페론과 리바비린
D. 소포스부비르 단독

## 해설


대한간학회는 이전에 치료하지 않은 적절한 환자에서 범유전자형 직접작용 항바이러스제를 권고한다. 보기 중 소포스부비르/벨파타스비르가 해당한다. 간경변의 단계, 과거 치료와 병용약은 요법을 고르기 전에 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: HCV RNA 양성 genotype 1의 활성 감염에 제시된 유효 DAA 조합은 A ledipasvir/sofosbuvir. tenofovir 조합과 구식 interferon을 구별.
- https://www.hcvguidelines.org/guidance/treatment-naive-genotype-1-without-cirrhosis/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000409
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12835810/
