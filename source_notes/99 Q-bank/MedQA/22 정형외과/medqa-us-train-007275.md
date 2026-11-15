---
type: qbank
schema_version: 1
id: medqa-us-train-007275
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:03479e1a4e6a501cb0ed3a7e97bca0d51181811ae70d3ca3d9fd9af4c70f0a2d
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "일과성 활막염"
  - "소아 고관절 통증"
  - "상기도 감염 후 활막염"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv64yA7Ye06rOo65GQIOqzqOuLqCDrtoTrpqzspp0gKFNsaXBwZWQgQ2FwaXRhbCBGZW1vcmFsIEVwaXBoeXNpcykubWQ
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

감기를 앓은 지 일주일 된 7세 남아가 가벼운 고관절 통증으로 절뚝거린다. 열이 없고 걸을 수 있으며 염증수치와 X선은 정상이다. 일과성 활막염 가능성이 높을 때 초기 관리는?

## 선택지

A. 고용량 경구 스테로이드
B. 진통과 상대적 휴식, 짧은 간격의 재평가
C. 장기간 비체중부하 석고
D. 정맥 항생제를 사용하고 추적은 하지 않는다

## 해설


감염 가능성이 낮은 일과성 활막염은 상대적 휴식과 진통으로 호전되는 경우가 많다. 열이 나거나 통증이 심해지고 걷지 못하면 화농성 관절염을 다시 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 상기도감염 후 무열·전신상태 양호·보행 가능·낮은 CRP·정상 방사선은 일과성 활막염을 지지. 본문/선지/정답 B/해설 영어 대조 후 유지. 정상 CRP 하나로 감염을 완전히 배제한 것으로 해석하지 않으며 임상 경과 재평가 필요.
- 공식/학회 근거: https://www.rch.org.au/clinicalguide/guideline_index/The_limping_or_non-weight_bearing_child/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007275
