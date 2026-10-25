---
type: qbank
schema_version: 1
id: medqa-us-train-000134
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6062a8c695ef2c26fcbb0fe0763aeec649d86eca6e514fcba2f8591bae5673f5
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "Situational syncope"
  - "situational syncope"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2YiOq0gOuvuOyjvOyLoOqyveyEsSDsi6Tsi6AgKFZhc292YWdhbCBTeW5jb3BlKS5tZA
question_type: diagnosis
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

53세 남성이 1시간 전 발생한 의식 소실로 응급실에 내원했다. 환자는 소변을 본 직후 쓰러졌다. 아내가 소리를 듣고 바닥에 의식을 잃고 쓰러져 있는 환자를 발견했다. 환자는 30초 후 의식을 회복했으며 즉시 아내와 정상적으로 대화할 수 있었다. 요실금은 없었다. 내원 시 환자는 명료하고 지남력이 있었다. 심폐 검사상 이상 소견은 없었다. 신경학적 검사상 국소 신경학적 결손은 없었다. 혈청 포도당, 크레아티닌, 전해질 농도는 정상 범위 내에 있었다. 심전도상 이상 소견은 없었다. 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 상황성 실신(Situational syncope)
B. 정서적 실신(Emotional syncope)
C. 신경심장성 실신(Neurocardiogenic syncope)
D. 부정맥성 실신(Arrhythmogenic syncope)

## 해설

정답은 A이다. 배뇨 직후 짧은 의식소실과 빠르고 완전한 회복은 배뇨성 상황성 실신에 합당하다. 이는 반사성/신경매개 실신의 구체적 상황성 유형이며 넓은 신경심장성 범주와 기전이 완전히 별개라는 뜻은 아니다. 가장 구체적으로 제시된 A가 적합하고 정서성 실신도 유발인자가 있을 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 다른 반사성 실신은 유발인자가 없다는 오설명 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000134
