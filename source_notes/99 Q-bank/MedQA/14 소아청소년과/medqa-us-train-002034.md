---
type: qbank
schema_version: 1
id: medqa-us-train-002034
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5cac3224bfb4a4fb002bf2d2575c3a9d409fa08a7a5f95b201d2b90f684c689d
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "fifth disease"
  - "parvovirus B19"
  - "erythema infectiosum"
question_type: prevention
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7KCE7Je87ISxIO2ZjeuwmCAoRXJ5dGhlbWEgSW5mZWN0aW9zdW0pLm1k
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

10세 여아가 가렵고 붉은 발진으로 내원했다. 2일 전 뺨에 구강 주위 창백을 동반해 시작되어 팔과 몸통으로 퍼졌다. 일주일 전 39.4°C (102.9°F)의 고열, 두통, 근육통과 독감 같은 증상이 있었지만 acetaminophen으로 2일 만에 호전되었다. 양쪽 뺨에 구강 주위 창백을 동반한 대칭성 홍반성 반구진 발진이 몸통, 팔, 엉덩이까지 퍼져 있다. 다음 중 최선의 관리 단계는 무엇인가?

## 선택지

A. 정맥 면역글로불린 투여
B. 전혈 수혈
C. 즉시 학교에 돌아가도 된다고 설명하고 귀가
D. 발진이 사라진 후 학교에 돌아가도록 설명하고 귀가

## 해설

감기 유사 전구 후 뺨의 홍반과 입 주위 창백은 전염성 홍반(제5병)에 합당하다. 면역정상 아이는 발진이 나타날 때 대개 전염기가 지나고 현재 열·전신증상이 없으므로 등교(C)가 가능하다. 입술 자체의 홍반이 진단 근거가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 파보 B19 발진기의 등교 C 유지. 구순 홍반 오역을 뺨 발진으로 교정.
- https://www.cdc.gov/parvovirus-b19/prevention-treatment/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002034
