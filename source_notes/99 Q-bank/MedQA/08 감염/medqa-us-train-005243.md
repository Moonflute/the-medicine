---
type: qbank
schema_version: 1
id: medqa-us-train-005243
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:df9be74f3c393935e79c573cefaa0ee4356fdffd2639a660562ff04ef35a7c2e
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "HPV 예방접종"
  - "청소년 예방접종"
  - "사람유두종바이러스"
  - "Human papillomavirus infection"
related_disease_slugs:
  - MTMg67aA7J246rO8L-u-sOyhsSDsvZjrlJzroZzrp4ggKENvbmR5bG9tYSBBY3VtaW5hdHVtKS5tZA
question_type: prevention
difficulty: complex
answer: B
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

2026년 5월 이후 국내에서 2014년생 남아가 처음 HPV 예방접종을 받으러 왔다. 면역저하나 접종 금기는 없다. 국가예방접종 사업으로 안내할 방법은?

## 선택지

A. 남아는 국가예방접종 사업에서 제외된다
B. HPV 4가 백신을 6개월 간격으로 총 2회 접종한다
C. HPV 백신을 1회 접종하면 사업 기준에 따라 완료된다
D. HPV 9가 백신을 0·2·6개월에 3회 무료 접종한다

## 해설


질병관리청은 2026년 5월 6일부터 2014년생 남아를 국가 HPV 예방접종 대상에 넣었다. 지원 백신은 HPV 4가이며 이 연령은 첫 접종과 6개월 뒤 접종을 받는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005243 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: HPV catch-up C 유지; Tdap 과거 접종이면 평생 추가 불필요하다는 설명 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/hpv/hcp/vaccination-considerations/
- https://www.cdc.gov/pertussis/hcp/vaccine-recommendations/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005243
- https://nip.kdca.go.kr/irhp/infm/goVcntInfo.do?menuCd=132&menuLv=1
