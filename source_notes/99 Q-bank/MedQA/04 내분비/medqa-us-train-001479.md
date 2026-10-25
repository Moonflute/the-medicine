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

그 외에는 건강한 14세 여아가 심한 갈증, 다뇨 및 체중 감소로 응급실에 내원했다. 증상은 5일 전 급성으로 시작되었다. 체온은 36.6°C (97.8°F), 혈압은 100/65 mm Hg, 맥박은 105회/분이다. 마른 체형이고 점막은 건조하지만 피부 탄력은 정상이다. 무작위 혈당은 410 mg/dL, C-펩타이드는 검출되지 않으며 혈청 베타-하이드록시부티레이트는 음성이다. 다음 중 가장 적절한 초기 치료는 무엇인가?

## 선택지

A. 메트포르민
B. 글리메피리드
C. 정맥 수액, 인슐린 주입 및 전해질 교정
D. 기저-식사 인슐린 요법

## 해설

정답은 D이다. 증상성 고혈당과 검출되지 않는 C-peptide는 새로 진단된 인슐린 결핍성 1형당뇨병을 지지한다. 그러나 혈중 β-hydroxybutyrate는 음성이며 산증이 제시되지 않아 DKA라고 설명할 수 없다. 안정된 비케톤성 1형당뇨병에는 기저와 식사 인슐린을 공급하는 basal-bolus 요법이 적합하다. 수분 상태도 평가하지만 DKA용 정맥 인슐린 주입 C를 정답처럼 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: β-hydroxybutyrate 음성을 케톤증/DKA라고 바꾼 해설과 C 처치 오연결을 교정; 원정답 D 유지.
- https://www.ispad.org/static/3b8e00b2-9f33-43a5-a84f9eda1accef64/ICPCG-Chapter-9-2024.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001479
