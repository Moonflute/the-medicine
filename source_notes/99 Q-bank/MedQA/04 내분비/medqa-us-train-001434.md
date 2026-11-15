---
type: qbank
schema_version: 1
id: medqa-us-train-001434
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4ac24d946068946acc86571ab533cabbf2ae1866999d8413571c78c7e857dbe3
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "metabolic syndrome"
  - "insulin resistance"
  - "dyslipidemia"
related_disease_slugs:
  - MDQg64K067aE67mEL-ydtOyDgeyngOyniO2YiOymnSAoRHlzbGlwaWRlbWlhKS5tZA
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

38세 한국인 남성의 허리둘레는 92cm, 혈압 126/80 mmHg, 공복혈당 105 mg/dL, 중성지방 170 mg/dL, HDL 콜레스테롤 47 mg/dL이다. 복용 약은 없다. 국내 기준에서 대사증후군 진단을 충족하는 소견 조합은?

## 선택지

A. 공복혈당과 중성지방만 비정상이라 충족하지 않는다
B. 복부비만·공복혈당 상승·중성지방 상승으로 충족한다
C. 혈압과 HDL 이상이 모두 필요해서 충족하지 않는다
D. 공복혈당이 126 mg/dL 이상이어야 충족한다

## 해설


국내 성인 남성 허리둘레 기준은 90cm 이상이다. 공복혈당 100 mg/dL 이상과 중성지방 150 mg/dL 이상을 합치면 5개 중 3개 기준을 충족한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 한·영 본문/선지/정답 B/해설 읽음. 중심비만·공복혈당장애·고TG/저HDL·고혈압의 대사증후군에서 인슐린 저항성 기전이 일치. 약제·진료지침 검증 아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001434
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10088549/
