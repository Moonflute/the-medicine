---
type: qbank
schema_version: 1
id: medqa-us-train-004994
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0752cbbe020a7620cbc8fd3fda43012bc97d2defaf7a2460b0ad9006c2d0c4ce
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "오피오이드 금단"
  - "옥시코돈 의존"
  - "메타돈 치료"
  - "Opioid withdrawal"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-usvOyniCDqtIDroKgg67CPIOykkeuPheyEsSDsnqXslaAgKFN1YnN0YW5jZS1SZWxhdGVkIGFuZCBBZGRpY3RpdmUgRGlzb3JkZXJzKS5tZA
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9PeHljb2RvbmUubWQ
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

52세 남자가 전날부터 메스꺼움, 구토, 설사, 전신 근육경련, 콧물, 근육과 관절의 통증이 있어 내원했다. 비만, 만성폐질환, 요통, 섬유근육통이 있으며 바레니클린, 옥시코돈, 알부테롤 흡입기를 복용한다. 항생제와 기존 약물의 재처방을 요청한다. 지역 공립학교에서 일하며 1주 전에도 같은 증상으로 내원해 약을 재처방받았다. 지난주 비슷한 증상의 동료들은 보존적 치료 후 귀가했다. 다음 중 가장 적절한 처치는?

## 선택지

A. 아지스로마이신
B. 메타돈
C. 메트로니다졸
D. 보존적 치료

## 해설

오피오이드 복용 환자의 설사·콧물·근육통·구토와 1주 전 재처방 후 다시 약을 요청하는 맥락은 처방약의 과사용·고갈에 따른 금단 가능성을 시사한다. 원문은 제시된 약물 중 메타돈을 정답으로 삼는다. 실제로는 복용량·마지막 투약 시점과 금단 징후, 처방 기록을 확인하고 적절한 오피오이드 사용장애·금단 치료로 연계해야 한다. 동료의 유사 증상만으로 감염이나 이 환자의 금단을 확정할 수 없고 메타돈을 단순 감기 치료로 처방하는 것은 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004994

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 원문 1주 전 같은 증상으로 약을 재처방받은 정보가 빠져 감염 사례처럼 된 번역 보완. 오피오이드 금단 추정과 동료 바이러스성 증상을 구별.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
