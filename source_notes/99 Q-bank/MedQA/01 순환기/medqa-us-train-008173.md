---
type: qbank
schema_version: 1
id: medqa-us-train-008173
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3340b8236955d11fa4130cef9e8a4b27a7b0a822366f5a7a533e16d77bad8e77
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "peripheral artery disease"
  - "intermittent claudication"
  - "cilostazol"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uPmeunpeqyve2ZlOyEsSDrp4zshLEg64-Z66elIO2PkOyDiSAoQXRoZXJvc2NsZXJvdGljIENocm9uaWMgQXJ0ZXJpYWwgT2NjbHVzaW9uKS5tZA
question_type: management
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2lsb3N0YXpvbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

70세 남자가 6개월 동안 하지의 통증, 경련, 저림으로 내원했다. 두 블록 이상 걸으면 증상이 악화되고 쉬면 완전히 호전된다. 지난 3개월 동안 감독하 운동치료에도 호전이 없다. 제2형 당뇨병이 있고 현재 메트포르민, 아토르바스타틴, 아스피린을 복용한다. 50년간 하루 담배 한 갑을 피웠지만 3개월 전 금연했다. 하지 피부의 털이 줄고 온도가 낮으며 대퇴동맥 맥박은 만져지지만 족부 맥박은 없다. 가장 적절한 치료는?

## 선택지

A. 실로스타졸 투여
B. 압박 스타킹
C. 내막절제술
D. 우회술

## 해설

보행 시 악화되고 휴식으로 호전되는 하지 통증, 차가운 피부와 털 소실, 족부 맥박 소실은 말초동맥질환에 의한 간헐적 파행을 시사한다. 금연과 감독하 운동치료를 시행했고 이미 아스피린과 스타틴을 복용하므로, 보기 중 증상과 보행거리를 개선하기 위한 다음 약제는 A, 실로스타졸이다.

실로스타졸은 심부전이 있으면 중증도와 관계없이 투여하지 않는다. 압박 스타킹은 동맥성 파행의 치료가 아니며, 혈관재개통술은 해부학적 평가와 최적 약물·운동치료 후에도 기능을 제한하는 증상 등을 고려하여 결정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 전두측두치매 해설을 PAD 간헐파행의 실로스타졸 설명으로 교체. 원문에서 누락된 메트포르민·아토르바스타틴·아스피린 복용 복원. 원정답 A 유지 및 심부전 금기 명시.
- https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000001251

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008173
