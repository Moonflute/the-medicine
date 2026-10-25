---
type: qbank
schema_version: 1
id: medqa-us-validation-000223
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:43173fae1c07129a58ce1d6c871e5c900d891b2231a1f8d2069034180bda1c5b
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "철결핍성 빈혈"
  - "잠재성 위장관 출혈"
  - "대장암"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7LKgIOqysO2VjeyEsSDruYjtmIggKElyb24gRGVmaWNpZW5jeSBBbmVtaWEpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsrDsnqXsp4HsnqXslZQgKENvbG9yZWN0YWwgQ2FuY2VyKS5tZA
question_type: investigation
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

72세 남성이 호흡곤란과 만성 피로로 진료실에 왔다. 수개월 동안 하루 종일 기운을 유지하기 어렵다고 느꼈고, 활동에 참여할 수 없어 많은 사교 모임을 빠져야 하는 것이 힘들었다. 최근에는 몇 블록만 걸어도 숨이 차다고 한다. 잘 조절되는 당뇨병 외에는 과거력이 없다. 진찰에서 결막이 중등도로 창백하다. 최근 혈액검사에서 혈색소 10.3 g/dL, 헤마토크릿 24%, 혈청 페리틴 10 ng/mL, 적혈구분포폭 16.5%였다. 다음 중 관리의 가장 적절한 다음 단계는?

## 선택지

A. 대장내시경
B. 비타민 B12 수치 측정
C. 상부위장관 내시경
D. 철분 보충

## 해설


낮은 ferritin과 빈혈은 철결핍을 시사한다. 노년 남성에서는 위장관 출혈·악성종양을 평가해야 하며 선택지 A의 대장내시경이 적절한 평가에 포함된다. 현재 원인불명 철결핍은 보통 상부내시경과 대장내시경의 양방향 평가를 권고하므로 상부내시경이 불필요하다는 뜻은 아니다. 철분 보충도 병행하되 원인 평가를 대체하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000223 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 노년 남성 철결핍의 colonoscopy A는 적절한 원인평가 일부. 상부내시경은 쓸모없고 무조건 대장만 우선이라는 해설을 양방향 평가로 한정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://gastro.org/news/aga-recommends-bidirectional-endoscopy-for-most-patients-with-iron-deficiency-anemia/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000223
