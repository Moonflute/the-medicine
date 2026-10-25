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

제왕절개로 태어난 지 2시간 된 체중 3.2 kg(7.0 lb)의 남아를 당직 레지던트가 평가하고 있다. 산모는 B형간염이 있는 임신 2회, 출산 0회의 여성이다. 산전 진료를 모두 받았고 임신 후 엽산 권장량을 복용했으며 임신 사실을 알게 된 뒤 흡연을 중단했다. 신생아의 심박수 150회/분, 호흡수 48회/분, 체온 37.5°C(99.5°F), 혈압 80/52 mmHg이고 APGAR 점수는 1분 7점, 5분 8점이었다. 머리 모양은 정상이었고 신경관 결손, 사지 이상, 뇌신경 또는 반사 이상은 없었다. 산모의 혈청검사에서 HBsAg 양성, HBeAg 양성, IgM anti-HBc 음성, total anti-HBc 양성, anti-HBs 음성, HBV DNA 100만 IU/mL 초과, ALT 정상이다. 신생아에 대한 가장 적절한 조치는?

## 선택지

A. B형간염 백신을 투여한다
B. B형간염 면역글로불린(HBIG)을 투여한다
C. B형간염 백신과 HBIG를 투여한다
D. B형간염 혈청검사를 확인한다

## 해설

HBsAg 양성 산모에게 태어난 신생아는 출생 12시간 이내에 HepB 백신과 HBIG를 서로 다른 부위에 투여한다(C). 이후 백신 일정을 완료하고 권장 시점에 혈청검사로 감염·면역 반응을 확인한다. 산모 HBeAg나 신생아 외관 정상 여부로 예방을 생략하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: HBsAg 양성 산모 노출아 백신+HBIG C 유지. 불명확한 기존 문장과 투여 시점 누락 교정.
- https://www.cdc.gov/hepatitis-b/hcp/perinatal-provider-overview/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000874
