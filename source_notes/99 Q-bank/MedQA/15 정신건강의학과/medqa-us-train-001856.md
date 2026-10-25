---
type: qbank
schema_version: 1
id: medqa-us-train-001856
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d5f13940d02e8a2d70e3e187b77ff37f893b5549741c486928a0c062ae842b6a
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "tardive dyskinesia"
  - "fluphenazine"
  - "antipsychotic adverse effect"
  - "Tardive dyskinesia"
question_type: adverse_effect
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOuzkSAoU2NoaXpvcGhyZW5pYSkubWQ
  - MjEg7J2R6riJ7J2Y7ZWZL-2VnOuereyGkOyDgSAoQ29sZCBJbmp1cnkpLm1k
  - MDQg64K067aE67mEL-qzoO2UhOuhnOudve2LtO2YiOymnSAoSHlwZXJwcm9sYWN0aW5lbWlhKS5tZA
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

30세 남성이 추적진료를 위해 정신과에 왔다. 6개월 전 조현병 진단을 받고 fluphenazine을 복용 중이다. 약물로 증상이 잘 조절되어 더 이상 환청이 없고 망상과 다른 정신병적 증상도 크게 호전되었다. 그러나 정신과 의사는 대화 중 되돌릴 수 없을 가능성이 있는 부작용을 발견하고 약을 중단하라고 말한다. 의사가 관찰한 소견은 무엇이었을 가능성이 가장 높은가?

## 선택지

A. 안정 시 떨림
B. 다리를 계속 꼬았다 풀기
C. 걸을 때 자발운동 감소
D. 얼굴의 무도성 무정위운동

## 해설

플루페나진 등 도파민 수용체 차단 약물 사용 뒤 나타나는 안면의 무도성 무정위운동은 지연성 운동이상증에 부합한다. 약물 조정 뒤에도 지속될 수 있어 조기 평가와 치료 계획 재검토가 필요하다. 안정 시 떨림·자발운동 감소는 약물 유발 파킨슨증, 계속 다리를 움직이는 것은 정좌불능증에 더 가깝다. 실제 약물 중단·감량·교체는 정신병 재발 위험과 함께 전문적으로 결정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001856

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 지연성 운동이상증 원정답 유지; 선지 문자 참조 제거, 무조건 영구 신경손상·즉시 임의 중단 단정 완화.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
