---
type: qbank
schema_version: 1
id: medqa-us-train-001479
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2f9690e5a6356dfe67337a2cbc58bdb218c5e3c74508caa731abc797acf20c70
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "type 1 diabetes mellitus"
  - "new-onset diabetes"
  - "hyperglycemia"
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDHtmJUg64u564eo67ORIChUeXBlIDEgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9HbGltZXBpcmlkZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

14세 여아가 다뇨·갈증과 체중 감소로 내원했다. 혈당 310 mg/dL, GAD 항체 양성이고 혈중 케톤과 정맥 pH는 정상이다. 수분을 마실 수 있고 혈역학적으로 안정적이다. 처음 시작할 혈당 조절 방법은?

## 선택지

A. 메트포르민 단독
B. 글리메피리드 단독
C. 케톤산증 치료용 정맥 인슐린 지속 주입
D. 피하 기저 인슐린과 식사 인슐린 요법

## 해설

케톤산증이 없어도 제1형 당뇨병에는 인슐린이 필요하다. 안정된 환자에게 피하 기저–식사 요법을 시작하고 혈당·탄수화물 계산 및 저혈당 대처를 교육한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: β-hydroxybutyrate 음성을 케톤증/DKA라고 바꾼 해설과 C 처치 오연결을 교정; 원정답 D 유지.
- https://www.ispad.org/static/3b8e00b2-9f33-43a5-a84f9eda1accef64/ICPCG-Chapter-9-2024.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001479
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12270580/
