---
type: qbank
schema_version: 1
id: medqa-us-train-001520
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8dfed2e2fe36ac41cf46aac49b82d519f3fb7a8a0ccc03f6871a46aaab5f3241
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "hyperprolactinemia"
  - "galactorrhea"
  - "amenorrhea"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzoO2UhOuhnOudve2LtO2YiOymnSAoSHlwZXJwcm9sYWN0aW5lbWlhKS5tZA
  - MTMg67aA7J246rO8L-ustOyblOqyvSAoQW1lbm9ycmhlYSkubWQ
question_type: management
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
  - ZHJ1ZzoxMCDsooXslpEvVGFtb3hpZmVuLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MZXZvZG9wYS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

34세 임신 2회·분만 2회 여성이 새로 시작된 유방 분비물로 산부인과에 내원했다. 며칠 전 브래지어에서 처음 발견했으나 이제는 때때로 블라우스까지 젖어 매우 당황스럽다고 한다. 3개월 동안 생리가 없어 임신도 걱정했다. 진료실에서 β-hCG는 음성이고 유두 분비물 구아이악검사도 음성이다. 다음 중 가장 적절한 치료는 무엇인가?

## 선택지

A. 타목시펜
B. 할로페리돌
C. 카베르골린
D. 카비도파-레보도파

## 해설

정답은 C이다. 임신이 배제된 여성의 무월경·유즙분비는 고prolactin혈증을 시사한다. cabergoline은 도파민 작용제로 prolactin 분비를 억제하는 치료 선택지이다. 실제 치료 전 prolactin, 갑상샘기능·약물 등 원인을 확인하고 필요 시 뇌하수체 평가를 시행한다. 저prolactin 농도가 투여 근거라는 뜻이 아니며 본문에 종양이나 측정된 호르몬 수치가 이미 있다는 설명은 하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 저prolactin 및 비prolactinoma에 cabergoline이라는 반대 설명 교정.
- https://www.nature.com/articles/s41574-023-00886-5

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001520
