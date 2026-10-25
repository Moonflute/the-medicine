---
type: qbank
schema_version: 1
id: medqa-us-train-008522
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4c431bf6a902f9b2bd348897d65f6bd8306d25f8454c8a9f2c86394b40b7cdd9
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "Marfan syndrome"
  - "aortic root dilation"
  - "ectopia lentis"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uniOultO2MoSDspp3tm4TqtbAgKE1hcmZhbiBTeW5kcm9tZSkubWQ
question_type: investigation
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

4세 남아가 영유아 건강검진을 위해 부모와 함께 내원했다. 건강했고 모든 발달 이정표를 달성했다. 예방접종은 최신 상태이다. 키는 97백분위수, 체중은 50백분위수이며 활력징후는 정상이다. 폐 청진은 깨끗하다. 심장 청진에서 고주파의 중간 수축기 클릭이 왼쪽 제5늑간에서 가장 잘 들린다. 구강검사에서 높은 입천장이 보인다. 손가락과 발가락이 비정상적으로 길고 가늘다. 반대쪽 손목을 잡게 하자 새끼손가락과 엄지가 겹친다. 세극등검사에서 양측 수정체가 상외측으로 아탈구되어 있다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 핵형검사
B. 심초음파
C. IGF-1 측정
D. 혈장 호모시스테인 농도 측정

## 해설


마르판 증후군은 대동맥 근위부 확장을 동반할 수 있으므로 조기 발견을 위해 심초음파 검사가 필요하다. 핵형검사·IGF‑1·호모시스테인 검사는 각각 다른 질환을 평가한다. 따라서 가장 적절한 다음 검사는 심초음파이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 상외측 수정체 아탈구·거미손가락·손목징후는 Marfan을 시사하며 대동맥근부 평가를 위한 심초음파 B가 적합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008522
