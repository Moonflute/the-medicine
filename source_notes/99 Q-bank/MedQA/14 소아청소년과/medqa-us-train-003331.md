---
type: qbank
schema_version: 1
id: medqa-us-train-003331
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0e44c593515f896508610b890bfdcd03fcdb3ad4a1e1a01b15b37fcaf1c5cfc8
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "intussusception"
  - "Meckel diverticulum"
  - "target sign on ultrasound"
  - "intermittent abdominal pain"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7J6l7KSR7LKp7KadIChJbnR1c3N1c2NlcHRpb24pLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsozsi6QgKERpdmVydGljdWx1bSkubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv66mU7LyIIOqyjOyLpCAoTWVja2VsJ3MgRGl2ZXJ0aWN1bHVtKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

6세 아이에게 회장결장형 장중첩증이 세 번째 생겼다. 관장 정복 뒤 현재는 안정적이다. 어린 영아의 첫 발생과 달리 추가로 고려할 것은?

## 선택지

A. 소아외과와 함께 메켈게실·용종 등 구조적 선도점을 평가한다
B. 반복 발생할수록 구조적 병변 가능성이 낮아 추가 평가가 필요 없다
C. 증상과 관계없이 한 달마다 예방적 공기 관장을 시행한다
D. 장중첩이 다시 생길 가능성을 낮추기 위해 예방 항생제를 시작한다

## 해설

비교적 나이가 많거나 여러 차례 재발한 아이에서는 장을 끌어당기는 구조적 선도점 가능성이 높아진다. 정복에 성공했더라도 메켈게실, 용종 등 원인을 전문팀과 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 모든 소아 장중첩증의 가장 흔한 원인이 메켈게실이라는 잘못된 일반화를 연령·재발 시 선두점 감별로 한정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003331
- https://pubmed.ncbi.nlm.nih.gov/39569957/
- https://www.rch.org.au/clinicalguide/guideline_index/Intussusception/
