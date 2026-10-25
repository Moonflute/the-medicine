---
type: qbank
schema_version: 1
id: medqa-us-train-003625
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6bab0eac7a5643c188bab3554471cc866f488e8d51f2c05d21c0296a4e9ac37c
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "intussusception"
  - "Meckel diverticulum"
  - "currant jelly stool"
  - "technetium-99m scan"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7J6l7KSR7LKp7KadIChJbnR1c3N1c2NlcHRpb24pLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsozsi6QgKERpdmVydGljdWx1bSkubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv66mU7LyIIOqyjOyLpCAoTWVja2VsJ3MgRGl2ZXJ0aWN1bHVtKS5tZA
difficulty: complex
answer: C
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

2세 남아가 2일간 간헐적으로 반복되는 복통으로 내원했다. 각 에피소드는 몇 분간 지속되고 그 사이에는 건강해 보였다. 무릎을 가슴에 붙이고 쪼그려 앉으면 호전되며, 3일 전 혈액이 섞인 변을 두 차례 보았다. 복부 오른쪽 위에서 2×4 cm의 원통형 종괴가 만져졌다. 다음 중 가장 가능성 높은 소견은?

## 선택지

A. 헤노흐-쇤라인 자반증
B. 양성 대변배양
C. 테크네튬-99m 스캔 양성
D. 식이 조절로 호전

## 해설

간헐적 통증과 원통형 복부 종괴는 장중첩증을 시사한다. 통증에 앞선 출혈은 이소성 위점막을 포함한 메켈게실 같은 선두점의 가능성을 높이며, 보기 중 C의 양성 99mTc-pertechnetate 스캔이 출제 의도다. 이 검사는 메켈게실 내 기능성 이소성 위점막을 찾는 검사이지 모든 장중첩증이 양성이거나 급성 장중첩 진단/처치의 첫 단계가 되어야 한다는 뜻은 아니다. 음성 스캔도 위점막 없는 게실을 배제하지 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 장중첩·메켈게실 관련 검사를 잘못 이름 붙이고 장중첩 자체의 표준검사처럼 설명한 오류를 교정했다.
- https://tech.snmjournals.org/content/42/3/163

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003625
