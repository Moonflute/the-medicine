---
type: qbank
schema_version: 1
id: medqa-us-train-003662
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5eeb23a67f32faae6d6f4acef82311932ec423ae594db1445707e0e362f2f4f8
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "carcinoid syndrome"
  - "neuroendocrine tumor"
  - "5-HIAA"
  - "tricuspid regurgitation"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yCvOyyqO2MkOuniSDsl63rpZggKFRyaWN1c3BpZCBSZWd1cmdpdGF0aW9uKS5tZA
  - MTAg7KKF7JaRL-y5tOultOyLnOuFuOydtOuTnCDspp3tm4TqtbAgKENhcmNpbm9pZCBTeW5kcm9tZSkubWQ
question_type: diagnosis
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

48세 남성이 수개월간 악화되는 설사와 체중감소로 내원했다. 개울물을 여과하지 않고 마신 뒤 얼굴이 간헐적으로 뜨겁고 붉어지는 느낌이 생겼다. 왼쪽 아래 흉골연에서 심잡음이 들리고 양쪽 폐에서 천명이 있었다. 다음 중 가장 적절한 초기 처치는?

## 선택지

A. 심초음파
B. 혈장 유리 메타네프린 수치
C. 폐기능검사
D. 소변 5-하이드록시인돌아세트산 수치

## 해설

반복 홍조·천명과 우측 판막 잡음이 만성 설사·체중감소에 동반되어 carcinoid syndrome을 의심하므로 소변 5-HIAA D를 측정한다. 오염된 물은 Giardia 등 별도 감별의 단서이지 carcinoid 종양을 일으키는 원인이 아니다. 증상과 검사조건을 고려하고 단일 소변검사만으로 종양 위치까지 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 개울물 노출을 carcinoid의 원인처럼 서술한 오류. 만성설사+홍조/천명/우측판막 소견을 근거로 D 유지.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003662
