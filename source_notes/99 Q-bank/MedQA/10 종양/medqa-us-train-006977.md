---
type: qbank
schema_version: 1
id: medqa-us-train-006977
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2f7b245b98a1c1548c3e9bbecdb85a47fd8b4d0c3e63021e43b8d7fe3ca60365
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "카르시노이드 증후군"
  - "세로토닌"
  - "신경내분비종양"
  - "삼첨판 역류"
related_disease_slugs:
  - MTAg7KKF7JaRL-y5tOultOyLnOuFuOydtOuTnCDspp3tm4TqtbAgKENhcmNpbm9pZCBTeW5kcm9tZSkubWQ
question_type: management
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvT25kYW5zZXRyb24ubWQ
---

# MedQA US 임상문제

## 문제

54세 여자가 반복되는 홍조 발작으로 일차진료의를 찾아왔다. 처음에는 호르몬 변화 때문이라고 생각했지만, 최근에는 폭발적으로 발생하는 물 같은 설사도 겪고 있다. 심계항진도 새로 시작되었다. 활력징후는 정상이다. 신체검사에서 경정맥압이 상승해 있고 심초음파에서 삼첨판 역류가 보인다. 소변 5-HIAA가 상승해 있다. 다음 중 가장 적절한 치료는 무엇인가?

## 선택지

A. 옥트레오타이드
B. 메토클로프라미드
C. 온단세트론
D. 프로메타진

## 해설


홍조, 수양성 설사, 삼첨판 역류와 urine5-HIAA 상승은 carcinoid syndrome에 부합한다. Octreotide A는 somatostatin analogue로 신경내분비종양의 호르몬 분비를 억제하여 설사·홍조를 조절한다. Serotonin 수용체 길항제는 아니다. 이는 증상 조절 약제 선택이며 종양의 위치·병기와 심장병변에 대한 추가 치료를 대체하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006977 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: octreotide를 serotonin 길항제라 부른 기전 오류를 somatostatin analogue로 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.dailymed.nlm.nih.gov/dailymed/getFile.cfm?setid=ad30bb58-5e16-43c4-8fdc-5cef8261eb8f&type=pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006977
