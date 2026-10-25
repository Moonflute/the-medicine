---
type: qbank
schema_version: 1
id: medqa-us-validation-000463
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:af2677893f836bf04e31922093b6c00ff2937ceeed8f27dbab0dc86d2cb3b96f
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "외상후스트레스장애"
  - "급성스트레스장애"
  - "증상 지속 기간"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yZuOyDgSDtm4Qg7Iqk7Yq466CI7IqkIOyepeyVoCAoUFRTRCkubWQ
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-q4ieyEsSDsiqTtirjroIjsiqQg7J6l7JWgIChBY3V0ZSBTdHJlc3MgRGlzb3JkZXIpLm1k
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
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 해병대원이 2년 전 아프가니스탄 파병에서 돌아온 뒤 최근 2주간 반복적인 악몽, 전쟁 뉴스 회피, 가족·친구와의 단절, 분노 폭발을 보인다. 외상후스트레스장애가 의심될 때 정확한 진단에 가장 중요한 소견은?

## 선택지

A. 증상의 지속 기간
B. 과각성 상태
C. 유발 요인 회피
D. 부정적 기분

## 해설

PTSD 진단에는 관련 증상 군이 1개월을 넘게 지속되는지 확인해야 하므로 제시된 정보에서 증상 지속 기간이 중요하다. 그러나 증상이 짧으면 언제나 급성스트레스장애가 되는 것은 아니다. 급성스트레스장애는 외상 후 3일~1개월의 시간창과 해당 증상 기준을 충족해야 한다. 이 환자는 외상/파병 복귀 2년 뒤 증상이 최근 2주 지속됐으므로 전체 경과·추가 외상·지연 발현 등을 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000463

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. PTSD의 증상1개월 기준과 급성스트레스장애의 외상 직후 시간창을 혼동한 오류 교정. 기간 확인 원정답 유지.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정하며 최신 지침 전수 검증을 뜻하지 않음).
- https://www.ptsd.va.gov/professional/treat/essentials/acute_stress_disorder.asp
