---
type: qbank
schema_version: 1
id: medqa-us-train-009889
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9f6792ab7f0978659e400eb274b3e1090a954fe362ad14d4997305bf17bdf0f6
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "바레니클린"
  - "금연 치료"
  - "우울증 선별"
question_type: investigation
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-usvOyniCDqtIDroKgg67CPIOykkeuPheyEsSDsnqXslaAgKFN1YnN0YW5jZS1SZWxhdGVkIGFuZCBBZGRpY3RpdmUgRGlzb3JkZXJzKS5tZA
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
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 남성이 건강검진을 위해 내원했다. 불안하고 기분이 계속 가라앉아 있다고 호소한다. 동반 질환으로 헬리코박터 파일로리 제균 치료를 받은 만성 위염과 1기 만성콩팥병을 동반한 만성 신우신염이 있다. 심한 흡연자였던 할아버지가 전이성 폐암으로 최근 사망했다. 환자는 8년간 흡연해 왔고 흡연의 결과를 걱정한다. 니코틴 패치로 여러 번 금연을 시도했지만 불쾌한 증상과 불안이 다시 나타나 실패했다고 한다. 직장과 가족 문제로 불안이 증가해 지난 12개월 동안 담배 사용량도 늘었다. 건강을 위해 여전히 금연을 원한다. 활력징후와 신체검사는 특이사항이 없다. 의사는 부분 니코틴 작용제를 처방하려 하며, 이 약물에 적합한지 확인하기 위해 추가 검사를 시행한다. 이 환자에게 약물을 고려하면서 기분저하를 추가 평가하는 데 가장 적절한 도구는?

## 선택지

A. 식도위십이지장내시경
B. 간이 정신상태검사
C. 9문항 환자건강설문지
D. 심초음파

## 해설

지속 기분저하와 불안을 호소하므로 제시된 도구 중 PHQ-9로 우울 증상의 정도를 평가하는 것이 적절하다. 이는 모든 바레니클린 처방 전에 법적·허가상 반드시 통과해야 하는 자격검사라는 뜻은 아니다. FDA는 2016년 임상시험 검토 후 바레니클린의 중증 신경정신 부작용 boxed warning을 제거했지만, 기존 정신건강 상태·자살위험과 치료 중 기분·행동 변화에 대한 평가·관찰은 계속 중요하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009889

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. PHQ-9를 바레니클린 처방의 보편적 필수/자격 검사로 설명한 오류 교정. 이 환자의 지속 기분저하 평가에 유용한 선택으로 한정.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.fda.gov/files/drugs/published/Drug-Safety-Communication--FDA-revises-description-of-mental-health-side-effects-of-the-stop-smoking-medicines-Chantix-%28varenicline%29-and-Zyban-%28bupropion%29-to-reflect-clinical-trial-findings-%28PDF%29.pdf
