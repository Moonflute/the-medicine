---
type: qbank
schema_version: 1
id: medqa-us-train-004974
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1bb72fb40b01c3cb8b5b22da759549d58619537fdb1e8a8545982547dc7f3bc7
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "고혈압성 심부전"
  - "레닌-안지오텐신-알도스테론계"
  - "신장 수출세동맥 수축"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
question_type: mechanism
difficulty: complex
answer: A
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

65세 남자가 2개월 동안 악화되는 피로와 운동 시 호흡곤란으로 내원했다. 과거에는 4~5블록을 걸었지만 현재는 2블록마다 쉬어야 한다. 5개월 동안 매일 밤 한 번 이상 소변을 보려고 깨고, 최근에는 밤에 기침과 급성 호흡곤란으로 깨지 않으려고 베개 2개를 사용한다. 양쪽 다리에 2+ 함요부종, 제4심음, 양쪽 폐기저부 수포음이 있다. 이 환자에서 예상되는 병태생리 변화는?

## 선택지

A. 신장 수출세동맥 긴장도 증가
B. 폐포 표면장력 감소
C. 좌심실 순응도 증가
D. 칼륨 저류 증가

## 해설

심부전의 유효순환량 감소는 RAAS를 활성화한다. AngII는 특히 수출세동맥의 긴장을 높여 A에 해당한다. 이는 큰 신동맥 자체를 말하는 것이 아니다. Aldosterone은 K배설을 촉진하며 이완기능장애에서 심실 순응도는 감소한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: AngII 효과를 신동맥 전체가 아니라 수출세동맥 긴장 A로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004974
