---
type: qbank
schema_version: 1
id: medqa-us-train-006820
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:72d9fe2ad3b0d52c89a82d4df0dc86bd05c179ffb47dcfc22589b251e1e0b611
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "판코스트 종양"
  - "상대정맥증후군"
  - "호너증후군"
related_disease_slugs:
  - MTAg7KKF7JaRL-yDgeuMgOygleunpSDspp3tm4TqtbAgKFN1cGVyaW9yIFZlbmEgQ2F2YSBTeW5kcm9tZSkubWQ
question_type: diagnosis
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

72세 남성이 2개월 동안 지속된 기침과 흉통으로 내원했다. 지난 한 달 동안 체중이 5kg(11lb) 감소했다. 비교적 건강했지만 갑작스러운 건강 변화가 걱정된다. 때때로 얼굴과 팔이 붓고 누우면 더 심하다. 최근 시야도 불편해졌다. 가끔 술을 마시며 25년간 흡연했지만 지난해 금연했다. 진찰에서 흉부와 팔의 정맥 및 경정맥이 팽창되어 있다. 오른쪽 눈꺼풀 처짐과 오른쪽 동공 축소가 보이고 폐 청진은 정상이다. 추가 평가를 위해 X선을 촬영했다. 다음 중 CT에서 결절이 발견될 가능성이 가장 높은 부위는?

## 선택지

A. 왼쪽 상엽
B. 중심 폐문 부위
C. 오른쪽 상엽
D. 뇌간 전이

## 해설

우측축동·안검하수는 우측폐첨부종양의 교감신경경로 침범을 시사하여 C의 우상엽이 적합하다. 얼굴/팔부종과 정맥확장은 동반SVC폐쇄를 시사하지만 Horner와는 다른기전이다. SVC압박 자체가 Horner의 동의어나 직접원인은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Horner와SVC증후군을 동일시하고 SVC압박이축동 원인이라 한 해부기전 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006820
