---
type: qbank
schema_version: 1
id: medqa-us-train-004464
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:169892a8a112c3d8aaf4c6577f6848083c4b7fb4e67868026ae0fb08f53b2da0
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "장중첩증"
  - "소아 급성 복통"
  - "혈성 점액변"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7J6l7KSR7LKp7KadIChJbnR1c3N1c2NlcHRpb24pLm1k
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

2세 여아가 지난 2일 동안 간헐적으로 발생하는 심한 복통과 구토로 소아과에 왔다. 지난주 가족 전체가 며칠 동안 가벼운 발열, 식욕부진과 설사를 동반한 장염을 앓았지만 모두 완전히 회복했다. 현재 통증은 감염 당시와 다르다. 통증이 시작되면 아이는 울면서 다리를 공중으로 차올리거나 가슴 쪽으로 끌어당긴다. 부모는 점액성 변과 간헐적으로 선홍색 피와 점액이 섞인 변도 관찰했다. 잠시 후 통증이 가라앉으면 평소 활동으로 돌아온다. 다음 중 이 환자 관리에서 가장 적절한 단계는 무엇인가?

## 선택지

A. 공기 관장
B. 복부 CT
C. 복부 방사선촬영
D. 24시간 관찰

## 해설

장중첩증을 의심하며 초음파가 권장되는 초기 확인 검사이다. 제시된 보기에서는 천공·복막염 등의 금기가 없는 경우 공기관장(A)이 진단과 비수술적 정복에 이용될 수 있다. 초음파가 보기에서 빠져 있다는 이유로 공기관장이 항상 가장 민감한 초기 검사라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 공기관장을 최고 민감도 초기 진단검사로 단정한 설명을 초음파 우선·관장 정복의 역할로 교정.
- https://www.rch.org.au/clinicalguide/guideline_index/intussusception_guideline/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004464
