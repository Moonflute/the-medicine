---
type: qbank
schema_version: 1
id: medqa-us-train-008638
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:475eba4ee45dfa9cb7c070080b083bc2f0d2583dd345859067551ed9d662d0be
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "syphilis in pregnancy"
  - "false-positive VDRL"
  - "Treponema pallidum hemagglutination assay"
  - "Syphilis"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ISg7LKcIOunpOuPhSAoQ29uZ2VuaXRhbCBTeXBoaWxpcykubWQ
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 G2P0 여성이 임신 15주에 최근 선별검사 결과를 상담하기 위해 내원했다. 특별한 증상은 없고 현재 임신은 합병증 없이 진행 중이다. 이전 임신은 임신 1분기에 자연유산으로 종결되었다. 예방접종은 최신 상태이다. 혈압 110/60mmHg, 심박수 78회/분, 호흡수 14회/분, 체온 36.8℃(98.2℉)이다. 신체검사는 정상이다. 검사 결과는 HBsAg 음성, HBcAg 음성, 항-HBsAg 양성, HIV 1/2 항체 음성, VDRL 양성이다. 이 환자 관리에서 적절한 다음 단계는 무엇인가?

## 선택지

A. HBV DNA PCR
B. T. pallidum 혈구응집검사
C. HBV 예방접종
D. HBV 전체 혈청 패널

## 해설

양성 VDRL은 비트레포네마 검사로서 매독 특이 검사(TPHA 등, B)로 확인한다. 임신·자가면역 등에서 위양성이 가능하지만 확인 전 가짜 양성일 가능성이 높다고 안심시키면 안 된다. 감염이 확인되면 병기에 맞는 치료가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: VDRL양성을 임신 위양성으로 먼저 단정한 해설 수정.
- https://www.cdc.gov/std/treatment-guidelines/syphilis.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008638
