---
type: qbank
schema_version: 1
id: medqa-us-train-007118
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e688e53e3c0d3f2ec274f99b5fbfba22dc2591ae66529d329622e0e26097c82e
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "대동맥판 역류"
  - "이완기 잡음"
  - "넓은 맥압"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpe2MkOuniSDsl63rpZggKEFvcnRpYyBSZWd1cmdpdGF0aW9uKS5tZA
question_type: diagnosis
difficulty: standard
answer: C
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

62세 남자가 운동능력 감소로 내원했다. 지난 4개월 동안 개를 산책시킬 때 호흡곤란이 점점 심해졌고 밤에 침대에 누워 있을 때도 숨이 찬다. 체온은 36.4°C(97.5°F), 맥박은 82회/분, 호흡수는 19회/분, 혈압은 155/53 mmHg이다. 심장검사에서 제2심음 직후에 발생하고 왼쪽 흉골연에서 가장 잘 들리는 고음의 감쇠형 잡음이 있다. 제3심음이 들리며 경동맥 맥박은 강하다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 승모판 역류
B. 삼첨판 역류
C. 대동맥판 역류
D. 승모판 탈출

## 해설


고음의 감쇠형 잡음과 넓은 맥압, 제3심음, 강한 경동맥 맥박은 대동맥판 역류를 시사한다. 승모판·삼첨판 역류는 다른 청진 소견을 보이며, 승모판 탈출은 중수축기 클릭을 동반한다. 따라서 대동맥판 역류가 가장 가능성 높은 진단이다

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: S2직후고음감쇠잡음·넓은맥압·강한경동맥맥은AR C와일치.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007118
