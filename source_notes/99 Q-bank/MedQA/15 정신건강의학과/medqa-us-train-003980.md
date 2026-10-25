---
type: qbank
schema_version: 1
id: medqa-us-train-003980
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b5276bacbc4c79b332c6de818a8943c752484df04cbafd7d91af37f3bc1ca892
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "신경이완제 악성 증후군"
  - "항정신병약물"
  - "근육 경직"
  - "크레아틴키나아제 상승"
question_type: 임상증례 객관식
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOqyveydtOyZhOygnCDslYXshLEg7Kad7ZuE6rWwIChOZXVyb2xlcHRpYyBNYWxpZ25hbnQgU3luZHJvbWUpLm1k
difficulty: complex
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MYW1vdHJpZ2luZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

35세 남자가 응급의료서비스에 의해 응급실로 이송되었다. 어머니에 따르면 환자는 조현병이 있고 약물을 복용 중이며, 최근 약물 용량이 증량되었지만 정확한 약 이름은 모른다고 한다. 활력징후는 심박수 110회/분, 혈압 170/100 mmHg, 체온 102.5°F, 호흡수 22회/분이다. 질문에 대답하지 못하고 경직되어 있으며, 머리가 오른쪽으로 돌아간 채 검사 내내 그 자세를 유지한다. 백혈구 14,000/μL, 크레아틴키나아제 3,000 mcg/L이다. 가장 적절한 치료는 무엇인가?

## 선택지

A. 모르핀
B. 단트롤렌
C. 발프로산
D. 라모트리진

## 해설

항정신병약 증량 후 고열·강직·의식 변화·자율신경 항진은 신경이완제 악성증후군을 시사한다. 원인 약물 중단과 응급 지지치료가 우선이며 제시된 약물 중 단트롤렌이 적절하다. 단트롤렌은 도파민 수용체 길항제가 아니라 골격근 근소포체의 칼슘 방출을 억제하는 근이완제이다. 원문 CK 3,000 mcg/L는 통상적인 CK 활성 단위와 다른 원자료 표기여서 임의로 U/L로 환산하지 않았다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003980

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 단트롤렌을 도파민 길항제로 설명한 역방향 기전 오류 및 NMS 명칭 교정. 원문 CK 질량 단위 이상은 임의 활성값으로 바꾸지 않고 명시.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7b3ac0-604d-4c78-b545-5e0f8ea3d698
