---
type: qbank
schema_version: 1
id: medqa-us-train-004502
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:15348e5dc3bba04e9a248fd2fc485dd5e5f92be41ca673308f64dc5a54689b43
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "갈색세포종"
  - "MEN 2"
  - "갑상샘 수질암"
related_disease_slugs:
  - MDQg64K067aE67mEL-2BrOuhrOy5nO2ZlOyEuO2PrOyihSAoUGhlb2Nocm9tb2N5dG9tYSkubWQ
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDsho3sp4jslZQgKFRoeXJvaWQgTWVkdWxsYXJ5IENhcmNpbm9tYSkubWQ
question_type: investigation
difficulty: standard
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

갑상샘암으로 전갑상샘절제술을 받은 43세 남성이 반복되는 두통 때문에 일차진료를 받으러 왔다. 두통 전에 불안감, 두근거림과 발한이 나타난다. 유발 요인을 특정할 수 없고 예고 없이 발생한다고 한다. 아버지와 삼촌도 갑상샘암 병력이 있다. 활력징후는 체온 36.8°C, 심박수 87회, 혈압 135/93 mm Hg, 호흡수 14회, 실내 공기 산소포화도 100%이다. TSH는 정상 범위이고 레보티록신을 처방대로 복용한다고 한다. 주된 증상을 진단하기 위한 다음 단계로 가장 적절한 것은 무엇인가?

## 선택지

A. 정맥 조영제를 사용한 복부 CT
B. 24시간 소변 유리 코르티솔
C. 고용량 덱사메타손 억제검사
D. 혈장 분획 메타네프린

## 해설

갑상샘암의 가족력에 발작성 두통·심계항진·발한이 있어 MEN2 관련 pheochromocytoma를 의심하고 plasma fractionated metanephrine D를 측정한다. MTC와 pheochromocytoma는 서로 다른 종양이며 MTC 자체가 catecholamine을 분비하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 갑상샘수질암을 갈색세포종과 동일시한 오류. MEN2연관 pheo의 metanephrine D로 교정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12819074/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004502
