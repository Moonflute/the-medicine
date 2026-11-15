---
type: qbank
schema_version: 1
id: medqa-us-train-006382
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:525cfe1d2ea3132ebecaf04130fd78b3c3358d0cfa9d39bb04e403035ad5511a
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "아급성 육아종성 갑상샘염"
  - "갑상샘 압통"
  - "바이러스 감염 후 갑상샘염"
related_disease_slugs:
  - MDQg64K067aE67mEL-yVhOq4ieyEsSDqsJHsg4Hsg5jsl7wgKFN1YmFjdXRlIFRoeXJvaWRpdGlzKS5tZA
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

감기 뒤 갑상선이 아프고 누르면 압통이 있는 38세 남성의 TSH가 낮고 유리 T4는 높다. ESR이 상승했고 갑상선 섭취 스캔에서는 양쪽 섭취가 감소했다. 통증은 가벼우며 신장질환이나 소화성 궤양은 없다. 통증에 우선 쓸 약은?

## 선택지

A. 메티마졸
B. 방사성요오드
C. 이부프로펜 등 비스테로이드성 소염제
D. 레보티록신

## 해설


아급성 갑상선염의 초기 중독증은 파괴된 조직에서 저장 호르몬이 나온 결과다. 가벼운 통증은 비스테로이드성 소염제로 다스리며 항갑상선제로 호르몬 합성을 막아도 도움이 되지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 최근바이러스증상후 압통성 갑상선종은 아급성 육아종성갑상선염 C를 다른무통/섬유성질환보다 지지.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006382
- https://doi.org/10.1089/thy.2016.0229
