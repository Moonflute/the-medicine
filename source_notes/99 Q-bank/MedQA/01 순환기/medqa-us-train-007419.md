---
type: qbank
schema_version: 1
id: medqa-us-train-007419
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:879d3ee03f8d3c68c6774c2d4939cb9a36f715d8f1cef378fc87b108760620d8
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "상행 대동맥 박리"
  - "스탠퍼드 A형 대동맥 박리"
  - "베타차단제"
  - "혈압 조절"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpSDrsJXrpqwgKEFvcnRpYyBEaXNzZWN0aW9uKS5tZA
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 남자가 갑자기 시작된 심한 찢어지는 듯한 흉통으로 응급실에 내원했다. 90분 전 시작되어 현재 등 위쪽으로 방사된다. 17년 동안 본태성 고혈압이 있었고 27년 동안 매일 담배 20~30개비를 피웠다. 체온은 36.8°C(98.2°F), 심박수 105회/분이며 혈압은 오른팔 192/91 mmHg, 왼팔 159/81 mmHg이다. 오른쪽 다리 맥박은 없고 왼쪽은 감소되어 있다. 심전도에서 동성 빈맥, 흉부 X선에서 종격동 확장이 보인다. 경흉부 심초음파에서 상행 대동맥에서 시작해 왼쪽 쇄골하동맥까지 이어지는 내막판이 보인다. 정맥 모르핀을 시작했다. 다음 중 가장 적절한 치료 단계는 무엇인가?

## 선택지

A. 정맥 메토프롤롤
B. 정맥 히드랄라진
C. 경구 아스피린
D. D-이합체

## 해설

상행대동맥의 내막판은 A형 대동맥박리를 뜻하므로 즉각적인 심장혈관외과 및 응급수술 평가가 필요하다. 동시에 A의 정맥 메토프롤롤 등으로 심박수와 전단력을 낮추는 항충격력(anti-impulse) 치료를 시행한다. 관류를 보존하도록 감시하면서 용량을 조절하고, 추가 혈관확장제는 베타차단 후 검토한다. 약물만 투여하면서 수술을 미루지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: TypeA박리의초기IV beta차단 A를응급수술의대체가아닌병행조치로명시.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001106

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007419
