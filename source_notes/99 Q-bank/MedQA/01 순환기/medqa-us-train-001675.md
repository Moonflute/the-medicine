---
type: qbank
schema_version: 1
id: medqa-us-train-001675
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:df61afccbb19031bb5a5367d5b7ce320511a6dbb8b0f5b2a027a40d6cf52d387
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "aortic regurgitation"
  - "bicuspid aortic valve"
  - "Corrigan pulse"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpe2MkOuniSDsl63rpZggKEFvcnRpYyBSZWd1cmdpdGF0aW9uKS5tZA
question_type: diagnosis
difficulty: complex
answer: D
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

20세 남성이 2시간 동안 심계항진과 경미한 호흡곤란으로 내원했다. 과거에도 비슷한 에피소드가 있었으나 20분 안에 호전되었고 한 달 전 첫 마라톤 훈련을 시작한 뒤 악화되었다. 10년 전 연쇄상구균 인두염으로 페니실린 10일 치료를 받았다. 외삼촌이 40세에 심장질환으로 갑자기 사망했다. 키 180 cm, 체중 85 kg, BMI 26.2 kg/m2이다. 활력징후는 정상이고 왼쪽 흉골 가장자리에서 초기 이완기 감퇴성 잡음이 들리며 머리가 매초 조금씩 끄덕여진다. 다음 중 가장 가능성 높은 소견은 무엇인가?

## 선택지

A. 비대칭 중격 비후
B. 항연쇄상구균 용혈소 O 항체
C. 점액종성 변성
D. 이첨 대동맥판막

## 해설

정답은 D이다. 왼쪽 흉골연 초기 이완기 감쇠성 잡음과 심박에 맞춘 머리 끄덕임(de Musset sign)은 대동맥판 역류의 소견이다. 젊은 성인에서는 선천 이첨 대동맥판이 관련 구조 이상으로 가장 합당하다. 이를 수축기 박출성 대동맥판 협착이나 단순 빠른 맥박의 소견이라고 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 초기 이완기잡음과 head bobbing을 대동맥협착으로 설명한 오류 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001675
