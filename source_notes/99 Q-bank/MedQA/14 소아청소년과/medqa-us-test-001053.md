---
type: qbank
schema_version: 1
id: medqa-us-test-001053
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:fb534cf4f3bcf5ca19a42b24e5571465fe1c9731c3abdb66836e2295398e8710
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "신생아 파상풍"
  - "Clostridium tetani"
  - "근긴장 증가"
  - "Neonatal tetanus"
question_type: diagnosis
related_disease_slugs: []
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
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

생후 7일 된 남아가 수유 불량으로 응급실에 왔다. 최근 미국으로 이주한 부모에게서 전통적인 가정분만으로 태어났고 의료진 진료를 받은 적이 없다. 산모는 산전 진료를 받지 않았고 예방접종도 하지 않았다. 24시간 전까지 모유수유를 잘했지만 이후 젖을 물기 어려워했고 지난 12시간 동안 완전히 수유를 거부했다. 체온 98.6°F(37.0°C), 맥박 180회/분, 호흡 52회/분, 혈압 70/50 mmHg이며 근긴장 증가, 턱 굳음, 머리처짐 없음, 손을 꽉 쥔 상태였다. 가장 가능성 높은 원인균은?

## 선택지

A. Clostridium botulinum
B. Clostridium tetani
C. B군 연쇄구균
D. Listeria monocytogenes

## 해설

예방접종을 받지 않은 산모의 비의료기관 분만 후 생후 7일에 수유 불능, 턱 굳음과 전신 근긴장 증가가 나타나 신생아 파상풍을 시사한다. 원인균은 Clostridium tetani(B)이며 독소가 억제성 신경전달을 방해하여 경직을 일으킨다. 본문 체온은 37°C이므로 고열을 진단 근거로 만들어서는 안 된다. 보툴리눔독소증은 보통 근긴장 저하·이완성 마비로 구별한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 37°C인데고열·저혈압창작한해설삭제. 신생아파상풍의근긴장·개구장애와C.tetani B.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001053
