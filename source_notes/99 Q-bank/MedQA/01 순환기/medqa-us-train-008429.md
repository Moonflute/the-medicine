---
type: qbank
schema_version: 1
id: medqa-us-train-008429
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a926383fd6ffc68b2f770f8d54d35fdbbc46f3f464cfcbe9a5a53ed893eeda55
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "hypertensive emergency"
  - "acute coronary syndrome"
  - "labetalol"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDqtIDsg4Hrj5nrp6Ug7Kad7ZuE6rWwIChBQ1MpLm1k
question_type: management
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

51세 남성이 혈압 201/111mmHg로 응급진료센터에 내원했다. 심한 두통과 흉통을 호소한다. 신체검사에서 심음은 규칙적이고 양쪽 폐음은 깨끗하다. 심전도에서 허혈성 변화가 관찰된다. 이 환자의 고혈압에 대한 가장 적절한 치료는 무엇인가?

## 선택지

A. 경구 베타차단제 투여—첫 1시간 동안 평균동맥압 감소폭이 초기값의 25%를 넘지 않게 한다
B. 정맥 라베탈롤 투여—혈압이 정상 범위가 될 때까지 반복 투여한다
C. 정맥 라베탈롤 투여—첫 1시간 동안 평균동맥압 감소폭이 초기값의 50%를 넘지 않게 한다
D. 정맥 라베탈롤 투여—첫 1시간 동안 평균동맥압 감소폭이 초기값의 25%를 넘지 않게 한다

## 해설

흉통과 허혈성 ECG 변화가 동반된 고혈압은 급성 장기손상을 평가하며 감시하에 정맥 약제로 치료한다. D의 목표는 첫 1시간에 평균동맥압을 초기값에서 25%를 넘지 않게 감소시키는 것이지, 초기값의 25% 이하까지 떨어뜨리는 것이 아니다. 급격한 정상화는 장기 저관류를 일으킬 수 있다. 실제 목표와 약제는 ACS 등 동반 상태에 맞춰 조절한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ‘no more than 25% 감소’를 ‘25% 이하까지 낮춤’으로 오독하는 번역을 선지와 해설에서 교정.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001356

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008429
