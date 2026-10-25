---
type: qbank
schema_version: 1
id: medqa-us-train-002787
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8b71fbb8f3a026d12bb869f520fa7155215fe9c1cf21a3818e6e61b7197e2cc6
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "membranous nephropathy"
  - "nephrotic syndrome"
  - "subepithelial immune complex deposits"
  - "hepatitis B association"
related_disease_slugs:
  - MDUg7Iug7J6lL-unieyEsSDsgqzqtazssrTsi6Dsl7wgKE1lbWJyYW5vdXMgTmVwaHJvcGF0aHkpLm1k
  - MDUg7Iug7J6lL-yLoOymne2bhOq1sCAoTmVwaHJvdGljIFN5bmRyb21lKS5tZA
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
question_type: risk_factor
difficulty: simple
answer: C
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

42세 남성이 최근 다리가 붓기 시작했고 이제 허벅지 아래쪽까지 부종이 퍼져 주치의를 찾아왔다. 때로 신발과 바지를 입기 어렵고 지난 3주 동안 눈 밑이 부었다. 24시간 소변 수집에서 단백뇨가 하루 5 g으로 확인되었다. 신장 생검의 전자현미경에서 가시와 돔 모양의 상피하 침착물이 보인다. 다음 중 이 환자의 상태와 관련된 것은?

## 선택지

A. HIV 감염
B. 높은 HbA1c
C. B형간염 감염
D. 단클론성 단백질 첨탑

## 해설

신증후군과 spike-and-dome의 상피하 면역침착은 막성신증을 시사한다. B형간염 C는 이차성 막성신증의 관련 원인 중 하나이다. 침착 위치는 사구체기저막의 상피하 측이지 하위피질이라는 해부학적 부위가 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 막성신증 침착 위치는 하위피질이 아니라 사구체기저막 상피하. HBV 연관 C 유지.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002787
