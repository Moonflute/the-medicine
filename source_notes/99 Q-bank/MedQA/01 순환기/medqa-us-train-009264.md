---
type: qbank
schema_version: 1
id: medqa-us-train-009264
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:260ca4180b69a84f78991a00f325f47bca270d05c148e8531a975260a0ce893d
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "statin adverse effect"
  - "스타틴 이상반응"
  - "elevated liver enzymes"
  - "Statin-induced liver injury"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yViOyglSDtmJHsi6zspp0gKFN0YWJsZSBBbmdpbmEpLm1k
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_rj4XshLEg6rCE7Je8IChUb3hpYyBIZXBhdGl0aXMpLm1k
question_type: management
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

41세 여성이 아토르바스타틴을 복용한 지 한 달 뒤 추적 검사에서 ALT가 정상 상한의 1.6배였다. 증상은 없고 총빌리루빈은 정상이다. 투약 전 간효소는 정상이었다. 가장 적절한 대응은?

## 선택지

A. 다른 원인도 살피면서 스타틴을 유지하고 간효소를 재확인한다
B. 간부전으로 판단해 즉시 응급실로 보낸다
C. 모든 스타틴을 영구적으로 중단한다
D. 스타틴을 페노피브레이트로 즉시 대체한다

## 해설

증상이나 빌리루빈 상승 없이 경미하게 오른 간효소만으로 스타틴을 반드시 중단하지는 않는다. 다른 원인을 확인하고 추적한다. 상승폭이 크거나 지속되고, 황달이나 빌리루빈 상승이 동반되면 약제 조정과 간손상 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 선지 중 간효소 상승 A를 스타틴 부작용 전체의 최빈 현상으로 일반화하지 않음.
- https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a60cc18b-0631-4cf0-b021-9f52224ece65

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009264
- https://lipid.or.kr/reference/guideline.php?idx=1281&mode=view
