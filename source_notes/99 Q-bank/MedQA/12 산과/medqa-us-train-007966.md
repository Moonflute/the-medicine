---
type: qbank
schema_version: 1
id: medqa-us-train-007966
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ca4f20584efb32ba29d4493d89dde1047f4c4cdcda0fd00374325bab65f98ecb
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "influenza vaccination in pregnancy"
  - "live vaccines contraindicated"
  - "prenatal care"
  - "Influenza"
question_type: prevention
related_disease_slugs:
  - MDgg6rCQ7Je8L-yduO2UjOujqOyXlOyekCAoSW5mbHVlbnphKS5tZA
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

인플루엔자 유행기에 임신 12주인 산모가 이번 절기 백신을 아직 맞지 않았다. 접종 금기는 없다. 국내 국가예방접종에서 지금 맞을 수 있는 백신은?

## 선택지

A. 비강 생백신만 접종
B. 임신 3삼분기까지 모든 인플루엔자 백신 연기
C. 불활성화 인플루엔자 주사 백신
D. 출산 뒤에만 인플루엔자 백신 접종

## 해설

국내 인플루엔자 국가예방접종은 임신 주수와 관계없이 해당 절기 임신부를 대상으로 한다. 임신 중에는 불활성화 주사 백신을 맞으며 비강 생백신은 피한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 임신 중 권장 인플루엔자 백신을 생백신으로 설명한 안전성 오류 수정.
- https://www.cdc.gov/vaccines-pregnancy/hcp/vaccination-guidelines/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007966
- https://nip.kdca.go.kr/irhp/infm/goVcntInfo.do?menuCd=134&menuLv=1
