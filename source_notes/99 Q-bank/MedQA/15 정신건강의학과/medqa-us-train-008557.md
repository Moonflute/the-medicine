---
type: qbank
schema_version: 1
id: medqa-us-train-008557
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8a54f433acf86c03aad63be17e16c75266ca04fbeaf8ebe4edbee149775ea59a
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "antipsychotic-induced hypothermia"
  - "fluphenazine"
  - "alpha-adrenergic blockade"
  - "Hypothermia"
question_type: other
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-2VnOuereyGkOyDgSAoQ29sZCBJbmp1cnkpLm1k
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

37세 남성이 칼을 든 채 나체로 거리를 배회하다 응급실로 이송되었다. 경찰이 강제로 제압했으며 현재 난폭하다. 진정시킨 뒤 병력을 확인하자 자신이 추격당하고 있으며 그들을 모두 죽여야 한다고 말한다. 근육주사 할로페리돌과 디펜히드라민을 투여하고 정신과 병동에 입원시켰다. 과거력으로 조현병, 비만, 불안, 반복성 폐렴, 우울증이 있다. 평소 복용약을 다시 시작하고 기분안정제와 항우울제를 포함한 여러 정신과 약물을 처방받아 5일 후 퇴원했다. 일주일 후 경찰이 추운 날씨에 밖에 서 있는 그를 발견했다. 직장 체온은 93.2°F(34°C)였다. 응급실에서 소생술을 시작했다. 다음 중 어떤 약물이 현재 상태를 가장 악화시켰을 가능성이 높은가?

## 선택지

A. 리튬
B. 플루옥세틴
C. 플루페나진
D. 발프로산

## 해설

추운 환경 노출 중 항정신병약은 중추 체온조절과 행동·열보존 반응을 방해해 저체온 위험을 높일 수 있어 원문은 플루페나진을 정답으로 제시한다. 이를 강한 알파 차단이라는 단일 기전만으로 설명하거나 다른 약물은 저체온과 무관하다고 단정하지 않는다. 특히 발프로산도 고암모니아혈증 유무와 관계없이 저체온이 보고되어 실제 약물 목록·변경 시점·동반 원인과 전체 임상 상태를 평가해야 한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008557

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 항정신병약의 체온조절 장애 맥락은 유지. 강한 알파차단 하나로 확정하거나 발프로산 등은 저체온과 무관하다고 배제한 오류 교정.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정하며 최신 지침 전수 검증을 뜻하지 않음).
- https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=8bdbacb1-b38a-3282-e053-2a95a90af022
- https://cpd.mhra.gov.uk/antipsychotics/CON155606_26
