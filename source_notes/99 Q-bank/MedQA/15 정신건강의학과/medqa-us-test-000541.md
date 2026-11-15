---
type: qbank
schema_version: 1
id: medqa-us-test-000541
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:de239b4a4a75f556db032415ef2b2d6dce99db8046f36006ec45a138c49d54c3
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "삼환계 항우울제 중독"
  - "클로미프라민 과다복용"
  - "혼수"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yCvO2ZmOqzhCDtla3smrDsmrjsoJwg7KSR64-FIChUcmljeWNsaWMgQW50aWRlcHJlc3NhbnQgUG9pc29uaW5nKS5tZA
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9CdXByb3Bpb24ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9WZW5sYWZheGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

삼환계 항우울제 중독으로 응급실에 온 환자가 저혈압과 의식 저하를 보인다. 심전도에서 QRS가 148ms로 넓어졌다. 기도와 순환을 지원하면서 심장 독성에 우선 사용할 치료는?

## 선택지

A. 플루마제닐
B. 정맥 탄산수소나트륨
C. 아미오다론을 첫 약으로 투여
D. 경구 활성탄만 투여

## 해설

삼환계 항우울제의 심장 나트륨 통로 차단은 넓은 QRS와 저혈압을 일으킨다. 중증 심장 독성에서는 정맥 탄산수소나트륨을 투여하며 심전도와 혈역학을 감시한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 삼환계 과량복용의 심장·중추독성 근거를 확인하되 보정되지 않은 QT 450 ms 하나로 다른 약물을 확실히 배제한다는 해석을 피했다.
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=05efab58-ba3c-4e54-bf18-1e66e1b0e41a

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000541
- https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-and-pediatric-special-circumstances-of-resuscitation
