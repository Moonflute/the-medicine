---
type: qbank
schema_version: 1
id: medqa-us-train-004525
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2cc6011bcd1967e8851ac12eb75918e26691e1e89989a8af8351afd601a97749
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "진통제 신병증"
  - "신유두 괴사"
  - "겸상적혈구 형질"
  - "Renal papillary necrosis"
related_disease_slugs:
  - MDUg7Iug7J6lL-unjOyEsSDsvantjKXrs5EgKENLRCkgKENocm9uaWMgS2lkbmV5IERpc2Vhc2UgKENLRCkpLm1k
question_type: mechanism
difficulty: complex
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

56세 아프리카계 미국인 남성이 간헐적인 짙은 소변과 경한 옆구리 통증으로 내원했다. 한 달 동안 선명한 붉은색 소변을 세 차례 보았다. 만성 두통과 요통 때문에 1년 동안 매일 아스피린과 이부프로펜을 복용했다. 겸상적혈구 형질이 있고 10년 동안 매일 담배 한 갑을 피웠다. 전반적으로 건강해 보인다. 체온은 37.4°C (99.3°F), 맥박은 분당 66회, 혈압은 150/90 mm Hg이다. 신체검사에서 양쪽 옆구리에 경한 압통이 있다. 혈청 크레아티닌은 2.4 mg/dL이다. 소변검사에서 혈액 3+, 단백 2+, 적혈구 10/고배율시야 초과, 백혈구 3/고배율시야가 보인다. 이 환자 혈뇨의 가장 가능성 높은 기저 원인은 무엇인가?

## 선택지

A. 화농성 신장 염증
B. 신장 재관류 손상
C. 신장 유두 허혈
D. 직접적인 신독성 손상

## 해설

NSAID의 prostaglandin억제와 sickling은 취약한 신수질/유두의 관류를 떨어뜨려 유두괴사·혈뇨를 유발할 수 있어 C가 부합한다. 신우자체의 허혈과 동일한 구조가 아니다. 흡연/혈뇨에서 종양 등 다른원인도 실제로 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Renal papilla를 renal pelvis(신우)와 혼동한 해설. NSAID·sickletrait의 유두허혈 C.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004525
