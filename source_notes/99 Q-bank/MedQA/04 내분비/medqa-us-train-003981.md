---
type: qbank
schema_version: 1
id: medqa-us-train-003981
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7de81e87aa7f381a61f5c51ec613f3a7600b61e6d30bf83863252b2bb2a71263
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "갑상샘기능항진증"
  - "그레이브스병"
  - "갑상샘자극호르몬"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVydGh5cm9pZGlzbSkubWQ
  - MDQg64K067aE67mEL-q3uOugiOydtOu4jOyKpOuzkSAoR3JhdmVzJyBEaXNlYXNlKS5tZA
question_type: 임상증례 객관식
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: machine-generated
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

35세 여자가 수개월간 지속된 열불내성으로 내원했다. 남편과 작은 아파트에 살며 에어컨을 세게 틀어도 항상 덥고 땀이 난다고 한다. 추가로 의도하지 않은 4.5kg 체중 감소가 있었다. 심박수 102회/분, 혈압 150/80 mmHg이다. 피부는 따뜻하고 약간 습하며, 팔을 뻗었을 때 손에 미세한 떨림이 있다. 다음 중 이 환자에서 가장 낮을 가능성이 높은 검사 수치는 무엇인가?

## 선택지

A. 칼시토닌
B. 삼요오드티로닌(T3)
C. 티록신(T4)
D. 갑상샘자극호르몬(TSH)

## 해설


갑상선 기능 항진증에서는 TSH가 억제되어 가장 낮은 수치를 보인다. 따라서 환자의 검사 중 가장 낮을 가능성이 높은 수치는 TSH이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 열불내성·체중감소·빈맥·떨림의 원발성 갑상샘항진은 TSH억제 D.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003981
