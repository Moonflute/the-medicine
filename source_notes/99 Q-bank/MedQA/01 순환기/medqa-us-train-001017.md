---
type: qbank
schema_version: 1
id: medqa-us-train-001017
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:54e20ec2a9ec0b93a57bd4bd237dc164cad2d70c6ef5402810d33442d362e0e4
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "aortic stenosis"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpe2MkOuniSDtmJHssKkgKEFvcnRpYyBTdGVub3NpcykubWQ
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

75세 남성이 의식을 잃은 후 20분 만에 응급실로 이송되었다. 3세 손녀와 놀던 중 갑자기 쓰러져 1분 동안 반응이 없었다. 의식을 회복한 후에는 정상적으로 반응했다. 지난 2개월 동안 특히 자동차를 수리할 때 경미한 흉통과 복부 불편감을 겪었다. 고혈압이 있어 하이드로클로로티아자이드(hydrochlorothiazide)로 치료 중이다. 환자는 명료해 보인다. 체온은 37.1°C, 맥박은 분당 89회로 규칙적이며, 혈압은 110/88 mm Hg이다. 진찰 결과 우측 흉골연에서 경동맥으로 방사되는 3/6 등급의 후기 수축기 잡음이 들린다. 하지의 부종이나 발적은 없다. 신경학적 검사에서 국소적인 이상 소견은 없다. 이 환자 증상의 가장 가능성 있는 원인은 무엇인가?

## 선택지

A. 동방결절의 섬유화
B. 비대칭 중격 비대
C. 대동맥판막의 석회화
D. 폐동맥의 색전

## 해설

정답은 C이다. 노인의 운동 관련 흉통·실신과 우측 흉골연에서 경동맥으로 방사하는 후기 peak 수축기 잡음은 대동맥판 협착을 시사한다. 이 연령에서는 판막 석회화가 가장 합당한 원인이다. LVH/HCM이나 동방결절 섬유화는 이 청진 양상을 잘 설명하지 못한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 우흉골연→경동맥 방사를 좌흉골연 방사로 바꾼 해설 수정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001017
