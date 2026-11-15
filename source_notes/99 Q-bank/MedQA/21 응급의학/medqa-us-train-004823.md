---
type: qbank
schema_version: 1
id: medqa-us-train-004823
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e006db1b5a7d5f9b7a92d9e5dc718d55d5e06293a5e803e2e57c1aad46ac0a4c
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "섬망"
  - "급성 초조"
  - "저활동성·과활동성 섬망"
  - "delirium"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yVjOy9lOyYrCDquIjri6gg7ISs66edIChBbGNvaG9sIFdpdGhkcmF3YWwgRGVsaXJpdW0pLm1k
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yErOunnSAoRGVsaXJpdW0pLm1k
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

고관절 골절로 입원한 환자가 갑자기 주의집중을 못 하고 정맥로를 뽑으며 스스로 크게 다칠 위험이 생겼다. 원인 평가와 교정을 진행했고 환경 조절과 말로 안정시키는 데 실패했다. 다음 중 고려할 처치는?

## 선택지

A. 모든 섬망에 벤조디아제핀 투여
B. 심전도와 금기를 확인하고 최단 기간 저용량 항정신병약 사용
C. 24시간 신체 억제를 자동 처방
D. 원인 평가를 중단하고 진정제만 투여

## 해설

섬망의 치료는 원인 교정과 비약물적 관리다. 그럼에도 자신이나 타인을 다치게 할 위험이 크면 짧게 약물 진정을 고려할 수 있다. QT 연장, 파킨슨병 및 루이소체치매 등 위험을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 항정신병약을 모든 과활동 섬망의 최선 치료로 설명한 과장 교정.
- 공식/학회 근거: https://www.nice.org.uk/guidance/cg103/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004823
