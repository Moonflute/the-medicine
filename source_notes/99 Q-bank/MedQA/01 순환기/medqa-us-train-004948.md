---
type: qbank
schema_version: 1
id: medqa-us-train-004948
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c83ecbe31c85b03a5274d6f3cecf9246ef139d49a155e7487a1a98614bcb56a6
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "바이러스성 심근염"
  - "확장성 심근병증"
  - "엔테로바이러스"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2ZleyepeyEsSDsi6zqt7zrs5Hspp0gKERpbGF0ZWQgQ2FyZGlvbXlvcGF0aHkpLm1k
question_type: diagnosis
difficulty: standard
answer: C
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

55세 남자가 한 달 동안 서서히 진행하는 호흡곤란과 피로로 내원했다. 계단을 오르거나 가벼운 운동을 하면 숨이 차고, 편히 자려면 베개를 여러 개 사용해야 한다. 몇 주 전 발열, 권태감, 흉통이 있었고 고혈압, 고지혈증, 제2형 당뇨병, 10년 전 비만수술 병력이 있다. 3일 전 처음 코카인을 사용했으나 이후 사용하지 않았다. 양쪽 폐기저부 수포음, 제3심음, 좌측으로 치우친 심첨박동이 보인다. 다음 중 증상의 가장 가능성 높은 원인은?

## 선택지

A. 알코올 사용
B. 코카인 사용
C. 엔테로바이러스
D. 약물 부작용

## 해설


엔테로바이러스 감염은 급성 바이러스성 심근염을 일으켜 좌심실 기능 저하와 호흡곤란을 초래한다. 환자의 증상과 청진 소견은 심근염에 부합한다. 따라서 엔테로바이러스가 가장 가능성 높은 원인이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 코카인 최초사용보다 앞선 심부전·바이러스성 전구증상은 제시 원인 중 enterovirus C를 지지하며 감염확진을 의미하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004948
