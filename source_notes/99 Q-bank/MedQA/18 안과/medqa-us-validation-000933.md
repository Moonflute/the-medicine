---
type: qbank
schema_version: 1
id: medqa-us-validation-000933
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:b09fb6dc5b3ad3cb06aebcf4c184876733cbb4380f1921caf7ba5bfc7aa3544c
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "신경섬유종증 1형"
  - "리쉬 결절"
  - "시신경교종"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Iug6rK9IOyErOycoOyiheymnSAoTmV1cm9maWJyb21hdG9zaXMpLm1k
difficulty: standard
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

6세 남아가 정기 건강검진을 위해 아버지와 함께 왔다. 피부에 색소 침착 부위가 여러 개 있고 살색의 돌기가 몇 개 있으며, 왼쪽 눈의 시야가 흐려졌다. 아버지에게도 비슷한 피부 소견이 있다. 시력은 왼쪽 20/50, 오른쪽 20/20이고 세극등검사에서 색소성 홍채 결절이 보인다. 피부에는 갈색 반점 8개와 등·가슴·복부에 부드럽고 압통이 없으며 유경성인 병변이 많이 있다. 가장 적절한 다음 처치는?

## 선택지

A. 뇌 자기공명영상(MRI)
B. 뇌파검사
C. B-scan 초음파
D. 전방각경검사

## 해설

정답은 A, 뇌 MRI이다. 카페오레반점·신경섬유종·홍채 Lisch 결절과 가족력은 신경섬유종증 1형(NF1)을 지지한다. 이 환자는 왼쪽 시야 흐림과 시력저하가 있으므로 시신경/시각경로 교종 등 원인을 평가하기 위해 시각경로를 포함한 MRI와 전문 안과 평가가 필요하다. NF1 환자 모두에게 증상과 관계없이 뇌 MRI를 반복 선별하라는 의미는 아니다. 홍채 결절 자체가 시력저하의 원인이라고 단정해서도 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. NF1에서 시력저하 동반 시 MRI A 유지. 모든 무증상 NF1의 일괄 MRI 선별로 오해되지 않도록 증상 기반 시각경로종양 평가 명시.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC9845795/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000933
