---
type: qbank
schema_version: 1
id: medqa-us-train-003013
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:57a4d823eea890569dfcddb4103677a609ccc68920c35bce3582a8c439c20f74
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "persistent asthma"
  - "poor asthma control"
  - "inhaled corticosteroid plus LABA"
  - "salmeterol"
  - "asthma"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzowMiDtmLjtnaHquLAvRmx1dGljYXNvbmUubWQ
  - ZHJ1ZzowMiDtmLjtnaHquLAvSXByYXRyb3BpdW0ubWQ
  - ZHJ1ZzowMiDtmLjtnaHquLAvU2FsbWV0ZXJvbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

매일 플루티카손을 사용하는 경증 지속성 천식 병력이 있는 48세 남성이 지난 한 달 동안 매일 알부테롤 흡입기를 사용해 리필을 요청했다. 최근 상기도 감염은 없지만 그동안 호흡곤란이 훨씬 심해졌고 조경사로 일하면서 업무를 끝내는 데 시간이 더 걸린다. 활력징후는 정상이며 신체검사에서 양측 경미한 천명과 정상 심음이 들린다. 현재 치료요법에 어떤 변경을 해야 하는가?

## 선택지

A. 현재 요법에 살메테롤 추가
B. 플루티카손을 중단하고 살메테롤만 사용
C. 현재 요법에 크로몰린 추가
D. 플루티카손을 중단하고 이프라트로피움 추가

## 해설

매일 증상완화제 사용과 활동 제한은 조절 불량을 시사하므로 흡입법·순응도·유발인자부터 확인하고 단계 상향을 고려한다. 선택지 중 기존 ICS를 유지하면서 salmeterol을 추가하는 A가 적절하고 LABA 단독요법 B는 피한다. 현행 GINA에서는 가능한 경우 ICS-formoterol 유지·완화요법 등도 검토하며 salmeterol은 급성 완화용이 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ICS 유지+LABA A는 선택지상 적절. 흡입법·순응도 확인과 현행 ICS-formoterol 대안 및 LABA 단독 금지를 명시.
- https://ginasthma.org/reports/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003013
