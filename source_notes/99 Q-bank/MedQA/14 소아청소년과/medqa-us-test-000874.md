---
type: qbank
schema_version: 1
id: medqa-us-test-000874
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:c82ce9d50df43acf170d5d2aad39e96234799acb786322a0d6322bd042815691
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "주산기 B형간염 전파"
  - "B형간염 백신"
  - "HBIG"
question_type: prevention
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
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

B형간염 표면항원(HBsAg) 양성 산모에게서 만삭 남아가 태어났다. 출생 후 2시간이 지났고 체중은 3.2 kg이다. 국내 주산기 감염 예방 조치는?

## 선택지

A. B형간염 백신만 투여
B. B형간염 면역글로불린(HBIG)만 투여
C. B형간염 백신과 HBIG를 각각 다른 부위에 투여
D. 신생아 B형간염 항원 결과가 나온 뒤 예방 여부 결정

## 해설

HBsAg 양성 산모에게서 태어난 신생아에게는 출생 12시간 이내에 B형간염 백신과 HBIG를 서로 다른 부위에 투여한다. 이후 백신 접종 일정을 완료하고 권장 시기에 혈청검사를 시행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: HBsAg 양성 산모 노출아 백신+HBIG C 유지. 불명확한 기존 문장과 투여 시점 누락 교정.
- https://www.cdc.gov/hepatitis-b/hcp/perinatal-provider-overview/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000874
- 질병관리청, B형간염 주산기감염 예방사업: https://nip.kdca.go.kr/irhp/infm/goVcntInfo.do?menuCd=133&menuLv=1
