---
type: qbank
schema_version: 1
id: medqa-us-train-007057
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fcbf3477e9f815e619ab396e0e1996b87691db8615f53f2d3bfb7dec814604f7
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "심부정맥혈전증"
  - "유발성 혈전증"
  - "아픽사반"
question_type: management
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIChEZWVwIFZlaW4gVGhyb21ib3NpcykubWQ
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9BcGl4YWJhbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9EYWJpZ2F0cmFuLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

78세 여자가 선택적 좌측 무릎 전치환술을 위해 정형외과에 내원했다. 25년 동안 본태성 고혈압이 있었고 35년 동안 제2형 당뇨병이 있었다. 40년 동안 하루 20~30개비의 담배를 피웠다. 수술은 합병증 없이 끝났다. 수술 후 3일째 왼쪽 다리 통증과 부종을 호소한다. 진찰에서 왼쪽 다리가 붉고 부어 있으며 발에 표재정맥이 확장되어 있다. 웰스 기준으로 유발성 심부정맥혈전증으로 진단되었다. 다음 중 이 환자의 가장 적절한 초기 치료는 무엇인가?

## 선택지

A. 경구 다비가트란 단독요법
B. 경구 아픽사반 단독요법
C. 장기간 아스피린
D. 완전한 침상 안정

## 해설

보기 중 아픽사반(B)은 급성 DVT 치료를 시작할 때 별도의 헤파린 선행 치료 없이 사용할 수 있다. 반면 다비가트란은 급성 VTE 치료에서 먼저 비경구 항응고 치료가 필요하다. Wells 점수는 검사 전 확률을 추정하는 도구이지 그 자체로 DVT를 확진하지 않으므로 압박 초음파 등 적절한 진단 절차가 필요하다. 수술 후 출혈 위험과 신기능을 평가하여 치료를 정하며, 반드시 발병 3일 안에만 치료할 수 있다는 제한이나 고령만으로 특정 약을 선택한다는 설명은 잘못이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 아픽사반 B는 유지하되 Wells 점수만으로 DVT 확진, 3일 내 치료라는 가상의 기한을 교정한다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng158/chapter/Recommendations
- 공식/학회 근거: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a454cd24-0c6d-46e8-b1e4-197388606175&version=38

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007057
