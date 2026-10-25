---
type: qbank
schema_version: 1
id: medqa-us-train-003989
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:866e157db2b07279e89d97826106282fc3e59a770c2fc1ce725689b97a0579f6
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "조증 삽화"
  - "양극성장애"
  - "감별진단을 위한 TSH"
  - "임신 검사"
question_type: 임상증례 객관식
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-q4sOu2hCDsnqXslaAgKEJpcG9sYXIgYW5kIFJlbGF0ZWQgRGlzb3JkZXJzKS5tZA
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yWkeq3ueyEsSDsnqXslaAgKEJpcG9sYXIgRGlzb3JkZXIpLm1k
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
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 여자가 지난 1주일간 이상한 행동과 앞뒤가 맞지 않게 지나치게 말하는 증상으로 룸메이트에게 이끌려 응급실에 왔다. 룸메이트는 환자가 밤에 방 가구를 재배치하고 값비싼 옷을 여러 벌 온라인으로 주문했다고 한다. 환자는 “생애 최고로 기분이 좋고” 에너지가 넘친다고 말한다. 어릴 때 소발작이 있었고 발프로산이 간을 손상시켜 중단해야 했던 것을 기억한다. 그 외에는 건강하며 복용 약물은 없다. 남자친구와 성생활을 하고, 흡연·음주·불법 약물 사용은 하지 않는다. 신체 및 신경학적 검사는 정상이다. 정신상태검사에서 압박된 말, 와해된 언어, 사고비약, 병식 결여, 정동 불안정이 보인다. 이 상태의 치료를 결정하기 전에 시행할 가장 적절한 초기 단계는 무엇인가?

## 선택지

A. 전혈구검사, 간기능검사, β-hCG 검사
B. 자살사고 평가와 심장초음파
C. TSH, β-hCG, 혈청 크레아티닌 검사
D. BMI, HbA1c, 지질 수치, 프로락틴 수치 검사

## 해설

조증 양상과 발프로산 간독성 병력이 있어 대안으로 리튬 등을 고려하기 전 신기능·갑상선기능·임신 여부를 확인하는 선택이 적절하다. TSH는 갑상선 질환의 감별과 리튬 투여 전 기준치 평가에 필요하며 조증과 우울증을 단독으로 구별하는 검사가 아니다. 혈청 크레아티닌은 신기능, β-hCG는 임신 여부 평가 목적이다. 실제 안전성 평가는 이 세 검사만으로 모두 완료되는 것은 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003989

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. TSH 검사를 조증-우울증 구분 검사로 잘못 설명한 해설 수정. 가임기·발프로산 간독성 병력에서 리튬 고려 전 기본검사 맥락 명시.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
