---
type: qbank
schema_version: 1
id: medqa-us-train-002942
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:22cb02e33fd8162f946d32e39f9a37d6dcf90320229a7918a902db1ae20a6f40
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "warfarin-associated coagulopathy"
  - "bowel obstruction"
  - "elevated INR"
  - "preoperative reversal"
related_disease_slugs:
  - MTEg7Jm46rO8L-yepSDtj5Dsg4kgKEJvd2VsIE9ic3RydWN0aW9uKS5tZA
question_type: management
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTmlmZWRpcGluZS5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

와파린을 복용 중인 73세 환자가 장허혈이 의심돼 응급 개복술이 필요하다. INR은 3.2이고 수술을 미룰 수 없다. 4인자 프로트롬빈 복합농축제(4F-PCC)를 바로 사용할 수 있다. 가장 적절한 역전 방법은?

## 선택지

A. 정맥 프로타민
B. 4F-PCC와 정맥 비타민 K
C. 경구 비타민 K만 투여
D. 와파린만 중단하고 바로 수술

## 해설

4F-PCC는 응고인자를 보충해 와파린 효과를 신속히 역전하고, 정맥 비타민 K는 역전 효과를 유지한다. 비타민 K만으로 바로 필요한 교정을 얻기 어렵다. PCC를 사용할 수 없는 경우 혈장 투여를 고려한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 응급수술 VKA 역전의 선택지 B는 유지하되 4F-PCC 우선·대체 FFP 및 protamine/heparin 기전을 명확히.
- https://www.jacc.org/doi/10.1016/j.jacc.2020.04.053

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002942
- https://academic.oup.com/eurheartj/article/43/39/3826/6675076
