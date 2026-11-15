---
type: qbank
schema_version: 1
id: medqa-us-train-004419
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3c80890c01a05248149516d135fe9e7b5e88ad12bba9e01ffaf0593874e53cf9
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "폐농양"
  - "흡인성 폐렴"
  - "혐기성 세균 감염"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkCDrho3slpEgKEx1bmcgQWJzY2VzcykubWQ
  - MDIg7Zi47Z2h6riwL-2PkOugtC5tZA
question_type: management
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUmFtaXByaWwubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2xpbmRhbXljaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

40세 남성이 수주간 발열과 악취가 나는 가래로 내원했다. 과음 뒤 의식이 떨어져 흡인한 적이 있고 구강 상태가 좋지 않다. 흉부 CT에서 주변 침윤을 동반한 공기–액체층의 폐농양이 보인다. 약제 알레르기는 없다. 적절한 초기 항생제는?

## 선택지

A. 아지트로마이신 단독
B. 세파졸린 단독
C. 메트로니다졸 단독
D. 정맥 암피실린/설박탐

## 해설

흡인과 관련된 폐농양은 구강 연쇄상구균과 혐기균 등 혼합감염을 고려한다. 암피실린/설박탐은 둘을 함께 치료할 수 있다. 메트로니다졸 단독은 혼합 구강균을 충분히 포괄하지 못한다. 농양이 없는 모든 흡인성 폐렴에 혐기균 치료를 추가한다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Klebsiella를 clindamycin민감 혐기균으로 쓴 오류. D는 선택지상 대안이며 현행 일률1차 아님.
- https://thorax.bmj.com/content/78/Suppl_1/s3

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004419
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6812437/
