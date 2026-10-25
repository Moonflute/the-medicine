---
type: qbank
schema_version: 1
id: medqa-us-train-008785
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f52df0ff04ebe3e4a96112283b3f6f375fb4cfb5d224af63bed8568ddc506862
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "major depressive episode"
  - "anhedonia"
  - "concentration difficulty"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOyalCDsmrDsmrgg7J6l7JWgIChNYWpvciBEZXByZXNzaXZlIERpc29yZGVyKS5tZA
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

28세 여성이 지난 한 달 동안 대부분의 날에 지속된 우울한 기분으로 내원했다. 지난 3주 동안 식욕도 감소했다. 증상으로 업무 수행이 크게 저하되어 곧 직장을 그만둬야 할 것 같다고 한다. 취미에 대해 묻자 예전에는 춤과 음악을 즐겼지만 이제는 하고 싶은 마음이 없다고 한다. 남편은 지난달 밤에 잠을 이루지 못한 날이 많았다고 말한다. 흡연, 음주, 불법 약물 사용은 부인한다. 과거력과 신체검사는 특이사항이 없고 일상 검사실 결과도 정상이다. 주요우울 삽화를 확진하려면 현재 증상 외에 다음 중 어떤 임상 특징이 반드시 있어야 하는가?

## 선택지

A. 체중 감소
B. 집중력 저하
C. 통제력을 잃을 것에 대한 극심한 공포
D. 전향성 기억상실

## 해설

주요우울삽화는 같은 2주에 총 다섯 개 이상의 해당 증상이 있어야 하며 우울감 또는 흥미·즐거움 상실 중 하나를 포함한다. 이 사례에는 우울감·흥미 상실·식욕 저하·불면이라는 네 범주가 제시되어, 선택지 중 집중력 저하가 별도 다섯 번째 증상 범주를 더한다. 체중 감소와 식욕 변화는 같은 기준 범주이므로 따로 두 개로 세지 않는다. 집중력 저하가 모든 주요우울삽화에 반드시 필요한 단일 증상이라는 뜻은 아니며 빈도·기능장애·물질/의학적 감별도 확인한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008785

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. MDE에 핵심 두 증상 외 5개가 더 필요하다는 오류 및 집중력 저하가 모든 우울삽화에 필수라는 오류 교정. 같은 범주인 체중·식욕을 중복 계산하지 않아 원정답 B 유지.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.ncbi.nlm.nih.gov/books/NBK498652/table/depress-diab.T.dsm5__major_depressive_ep/?report=objectonly
