---
type: qbank
schema_version: 1
id: medqa-us-train-005387
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:36ba69555df674f23bbaed71918a679f7f68134a643cecca27858a1a747579db
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "중증 대동맥판막 협착"
  - "대장 혈관이형성증"
  - "Heyde 증후군"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpe2MkOuniSDtmJHssKkgKEFvcnRpYyBTdGVub3NpcykubWQ
question_type: association
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

72세 남자가 점점 심해지는 운동 시 호흡곤란과 가구를 옮길 때 발생한 심한 어지럼 두 차례로 내원했다. 우측 제2늑간에서 가장 크게 들리는 3/6 수축기 박출성 잡음과 양측 경동맥 맥박의 지연 및 감소가 있다. 다음 중 이 상태와 관련되어 가장 흔히 보이는 소견은?

## 선택지

A. 경동맥 죽상경화
B. 심부정맥혈전증
C. 대장 혈관이형성증
D. 발기부전

## 해설

지연·감소 경동맥맥박과 우상흉골연 잡음은 AS를 시사하며 대장혈관이형성 C와 Heyde증후군으로 연관된다. 높은 전단력의 고분자 vWF multimer 소실이 출혈에 기여하며 단순 장 저혈류로만 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: AS-혈관이형성 C를 단순 장 저혈류 대신 후천성 vWF 기전으로 명료화.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005387
