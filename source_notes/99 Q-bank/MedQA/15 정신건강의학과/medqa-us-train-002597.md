---
type: qbank
schema_version: 1
id: medqa-us-train-002597
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a35a4a38c5ca6dc19a9f109cb8175bedae1f71c4047942d2756eb8715a9fbc33
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "cocaine"
  - "methamphetamine"
  - "monoamine reuptake inhibition"
  - "monoamine release"
  - "cocaine use disorder"
question_type: mechanism
related_disease_slugs: []
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTm9yZXBpbmVwaHJpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

19세 남성 두 명이 각각 3년간 서로 다른 각성제(약물 A와 B)를 주기적으로 사용해 물질남용 치료를 위해 의뢰되었다. 한 달 전 급성 중독으로 응급실에 왔고 저혈압, 서맥, 발한, 오한, 산동, 오심, 정신운동성 초조가 있었다. 약물 A는 코카잎에 자연적으로 존재하는 알칼로이드이고 약물 B는 일반의약품 비충혈제거제로 만들 수 있다. 다음 중 두 약물의 작용기전을 가장 잘 설명하는 것은?

## 선택지

A. 약물 A는 보상회로의 세포외 도파민을 일시적으로 증가시키지만 약물 B는 그렇지 않다
B. 약물 A는 주로 시냅스의 도파민·세로토닌·노르에피네프린 재흡수 억제로 작용하지만, 약물 B의 주된 작용은 이와 다르다
C. 약물 A는 주로 시냅스로의 도파민·세로토닌·노르에피네프린 방출 증가로 작용하지만, 약물 B의 주된 작용은 이와 다르다
D. 약물 A는 노르에피네프린 활성을 증가시키지만 약물 B는 그렇지 않다

## 해설

코카인(A)의 주된 작용은 모노아민 재흡수 수송체 차단이며, 메스암페타민(B)은 수송체를 통한 방출 증가·역수송 등이 중요하다. 따라서 주된 작용을 대비한 B가 적절하다. 메스암페타민도 재흡수에 영향을 줄 수 있으므로 '재흡수 억제가 전혀 없다'고 단정하면 안 된다. 원문 자체의 저혈압·서맥 서술은 전형적 각성제 중독과 다르며 이를 전형적 소견으로 가르치지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 영어 원문의 predominantly를 누락해 두 각성제 기전을 절대적으로 배타적인 것처럼 번역한 오류를 교정했다.
- https://www.ncbi.nlm.nih.gov/books/NBK576550/
- https://nida.nih.gov/sites/default/files/b-methamphetamine-lecture.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002597
