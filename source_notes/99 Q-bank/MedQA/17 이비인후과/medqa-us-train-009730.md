---
type: qbank
schema_version: 1
id: medqa-us-train-009730
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b64628d725b93deddea86b875ee8c3ab232952b9dc705750c11a3419848704ca
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "Meniere disease"
  - "메니에르병"
  - "low-salt diet"
question_type: management
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-uplOuLiOyXkOultOuzkSAoTWVuaWVyZSdzIGRpc2Vhc2UpLm1k
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMiDtmLjtnaHquLAvRmx1dGljYXNvbmUubWQ
  - ZHJ1ZzowMiDtmLjtnaHquLAvU2FsbWV0ZXJvbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

59세 남자가 오심과 어지럼으로 내원했다. 증상은 불안정감에서 회전감으로 진행되었고 눕지 않으면 오심이 심해진다. 아내는 점점 심해지는 청력 저하를 관찰했다. 과거력으로 고혈압, 알코올 사용장애, COPD가 있으며 아스피린, 암로디핀, 플루티카손-살메테롤을 복용한다. 검사에서 지연성 수평 안진이 보인다. 일차 치료는 무엇인가?

## 선택지

A. 에플리 수기
B. 저염식
C. 메클리진
D. 티아민

## 해설

원정답은 B, 저염식이다. 반복되는 현훈과 청력저하는 메니에르병을 시사하며, 이 답은 증상 재발을 줄이기 위한 초기 식이·생활교육의 맥락으로 이해한다. 저염식이 급성 발작을 즉시 완화하는 가장 효과적인 치료라고 단정할 수는 없다. 급성 심한 현훈에서는 메클리진 같은 전정억제제를 짧게 사용할 수 있다. 실제 메니에르병 진단에는 발작 지속시간과 청력검사 결과를 확인해야 하고, 비대칭 청력저하의 다른 원인도 평가해야 한다. 본문의 정보만으로 확진 기준을 모두 충족했다고 주장하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 저염식을 급성 발작의 가장 효과적인 완화치료로 단정한 해설 수정. 원정답 B의 장기 생활관리 의도와 단기 전정억제제를 구분하고 청력검사/감별 필요 명시.
- 공식/학회 근거: https://aao-hnsfjournals.onlinelibrary.wiley.com/doi/abs/10.1177/0194599820909438

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009730
