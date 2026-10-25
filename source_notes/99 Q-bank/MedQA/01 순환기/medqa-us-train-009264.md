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

41세 여성이 이상 검사 결과로 일차의료기관에 내원했다. 회사 건강 프로그램의 일환으로 1주일 전 검사를 받았다고 한다. 지난 한 달 동안 하루 3마일씩 걷고 과일과 채소 섭취를 늘렸다. 비만, 고혈압, 폐쇄성 수면무호흡증이 있고 히드로클로로티아지드를 복용하며 밤에는 지속적 양압기를 사용한다. Na⁺ 140, K⁺ 4.1, Cl⁻ 101 mEq/L, BUN 16 mg/dL, 혈당 95 mg/dL, 크레아티닌 0.9 mg/dL이다. 총콜레스테롤 255 mg/dL(정상 <200), LDL 115(정상 <100), HDL 40(정상 >50), 중성지방 163 mg/dL(정상 <150)이다. 아토르바스타틴을 시작했다. 이 약물의 가장 흔한 이상반응은 무엇인가?

## 선택지

A. 간효소 상승
B. 홍조
C. 젖산산증
D. 횡문근융해증

## 해설

선택지 중 아토르바스타틴과 관련된 비교적 흔한 검사 이상은 A의 경미한 간효소 상승이다. 횡문근융해증은 드물고, 홍조와 젖산산증은 전형적인 스타틴 부작용이 아니다. 다만 간효소 상승이 모든 이상반응 중 가장 흔하다거나, 경미한 상승이 곧 중증 간손상이라는 뜻은 아니다. 원문에 제시된 지질 수치 사이의 불일치나 실제 처방 적응증을 이 부작용 문항의 판정으로 승인하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 선지 중 간효소 상승 A를 스타틴 부작용 전체의 최빈 현상으로 일반화하지 않음.
- https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a60cc18b-0631-4cf0-b021-9f52224ece65

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009264
