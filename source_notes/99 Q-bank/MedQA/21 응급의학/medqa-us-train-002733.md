---
type: qbank
schema_version: 1
id: medqa-us-train-002733
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ec9e9f447beeb93e2fc11cd47f05764517e644e5b3505abaa20c734c3f40fbb6
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "dog bite"
  - "rabies postexposure management"
  - "healthy dog observation"
  - "rabies prophylaxis"
  - "Rabies"
question_type: management
related_disease_slugs:
  - MDgg6rCQ7Je8L-qzteyImOuzkSAoUmFiaWVzKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

8세 남아가 이웃집 개에게 물린 지 3시간 후 응급실에 왔다. 막대기를 들고 개를 쫓아가다가 개가 공격했다. 이전에도 여러 번 그 개에게 먹이를 주었고, 개가 문 적은 없었다. 아버지가 사건 2시간 후 개를 보았을 때 행동은 정상으로 보였다. 가족력이나 개인력에 중대한 질환은 없다. 남아가 마지막으로 받은 예방접종은 2년 전 수두 백신이며 광견병 예방접종은 받은 적이 없다. 급성 고통은 없고 활력징후는 정상이다. 검사에서 왼쪽 종아리에 2 cm의 자상과 주위의 경미한 홍반이 보인다. 나머지 진찰은 정상이고 전혈구검사도 정상이다. 상처를 생리식염수와 클로르헥시딘 용액으로 세척했다. 다음 중 가장 적절한 관리 단계는?

## 선택지

A. 개를 10일간 관찰한다
B. 개를 안락사시키고 광견병 검사를 한다
C. 광견병 면역글로불린을 투여한다
D. 광견병 백신을 투여한다

## 해설

미국 MedQA 맥락에서 건강하고 관찰 가능한 이웃집 개의 유발된 물림은 공중보건·수의 당국과 협의하여10일간 격리 관찰(A)할 수 있다. 관찰 중 발병·사망하거나 동물을 관찰할 수 없으면 즉시 재평가한다. 유행지역에서는 관찰만을 이유로 필요한 PEP를 지연하지 않는다. PEP가 필요한 경우 과거 적절한 접종자도 통상0일·3일 추가 백신을 받으며 면역글로불린은 투여하지 않는다. 상처·파상풍·세균감염 위험도 별도로 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 관찰 가능한 건강한 개의10일 관찰 A는 유지하되, 과거 접종자는 노출 후 백신을 쓰지 않는다는 오류를 수정하고 지역 공중보건 판단 조건을 명시했다.
- 공식/학회 근거: https://www.cdc.gov/rabies/hcp/veterinarians/
- 공식/학회 근거: https://www.cdc.gov/rabies/hcp/clinical-care/post-exposure-prophylaxis.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002733
