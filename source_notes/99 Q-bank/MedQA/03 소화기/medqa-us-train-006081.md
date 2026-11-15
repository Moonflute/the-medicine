---
type: qbank
schema_version: 1
id: medqa-us-train-006081
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:75418457e2ebc328c25b397098e898868db510cbe3b4ac9abb444541afbc58c4
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "자가면역 간염"
  - "항평활근 항체"
  - "문맥 주위 조각괴사"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_snpDqsIDrqbTsl60g6rCE7Je8IChBdXRvaW1tdW5lIEhlcGF0aXRpcykubWQ
question_type: investigation
difficulty: complex
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

하시모토 갑상선염이 있는 50세 여성의 AST·ALT와 IgG가 높고 바이러스 간염 검사는 음성이다. 간생검에서 형질세포가 많은 경계면 간염이 보인다. 이 진단을 지지하는 항체는?

## 선택지

A. 항평활근 항체
B. 항미토콘드리아 항체
C. 항조직 트랜스글루타미나제 항체
D. 항이중가닥 DNA 항체

## 해설

아미노전이효소와 IgG 상승, 경계면 간염, 항평활근 항체는 제1형 자가면역간염을 지지한다. 항체 하나만으로 확진하지 않고 조직·혈청 소견과 다른 원인 배제를 합쳐 판단한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 자가면역간염 AIH와 용혈성빈혈 AIHA, SMA와 ANA의 약어 혼동을 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006081
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10366804/
