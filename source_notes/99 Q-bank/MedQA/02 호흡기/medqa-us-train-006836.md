---
type: qbank
schema_version: 1
id: medqa-us-train-006836
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3f0962ebc0961c0d8ce3f50aab4aac6a29dd47df7be3a10e15506ed4bd6ea96f
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "흡인성 폐농양"
  - "구강 세균 감염"
  - "클린다마이신 치료"
related_disease_slugs:
  - MDgg6rCQ7Je8L-y5mOyEsSDqsJDsl7wgKE9kb250b2dlbmljIEluZmVjdGlvbikubWQ
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2xpbmRhbXljaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

51세 남성이 일주일 전 시작된 지속적 발열로 내원했다. 체온은 37.8~39.1°C(100~102.5°F)이고 악취 나는 가래를 동반한 기침이 지속된다. 특별한 병력은 없지만 한 달 동안 치아우식이 있었고 바빠서 치과에 가지 못했다. 혈압은 120/70 mm Hg, 호흡수는 분당 18회, 체온은 38.5°C(101.3°F), 실내 공기 산소포화도는 90%이다. 오른쪽 폐야의 호흡음이 감소하고 부드러운 흡기성 수포음이 들린다. 가래검사와 흉부 영상검사를 의뢰했다. 병력과 진찰을 근거로 다음 중 처치로 가장 적절한 다음 단계는?

## 선택지

A. 외과적 배액
B. 메트로니다졸
C. 기관지경검사
D. 클린다마이신

## 해설

치과감염·악취가래·발열은 혐기성/혼합구강균 관련 폐감염/농양을 의심해 선택지중 clindamycin D가 가능하다. 영상으로농양/폐색을 확인하고 저산소를평가한다. 현재는 co-amoxiclav 등 beta-lactam/beta-lactamase억제제를 흔히 선호하며 clindamycin은 C.difficile위험 등을 고려한 대안이다. Metronidazole단독은 혼합균을 충분히 포괄하지못한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Clindamycin D를 모든흡인성폐농양의유일1차로 설명한 과거권고 한정.
- https://thorax.bmj.com/content/78/Suppl_1/s3

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006836
