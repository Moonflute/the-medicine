---
type: qbank
schema_version: 1
id: medqa-us-train-010096
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6a3cbd443765c16e116265334e866b66c77c54c1960c8201a33dd4cb7eb41107
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "결핵 선별"
  - "잠복결핵"
  - "퀀티페론"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yeoOuztSDqsrDtlbUgKOyEseyduCkgKExhdGVudCBUdWJlcmN1bG9zaXMgKEFkdWx0KSkubWQ
question_type: prevention
difficulty: complex
answer: D
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

40세 남성이 정기 검진을 위해 지역 보건소에 내원했다. 모국인 인도에서 미국으로 온 무렵 시작된 주요우울장애 병력이 있다. 지난 몇 달 동안 지역 노숙인 보호소에서 지냈고 장기간 수감된 적도 있다. 20년 동안 매일 담배 한 갑을 피웠다. 심박수 분당 68회, 호흡수 분당 18회, 체온 37.1°C, 혈압 130/88 mmHg이다. 단정하지 못한 모습에 단조로운 말투이고 양쪽 폐기저부에서 거친 호흡음이 들린다. 다음 중 이 환자에게 권장되는 검사는?

## 선택지

A. 흉부 X선
B. 저선량 컴퓨터단층촬영(CT)
C. 폐기능검사
D. 퀀티페론 검사

## 해설


결핵 유병률이 높은 국가 출생과 노숙시설·교정시설 거주력은 TB 감염 선별 대상에 해당하여 IGRA인 QuantiFERON(D)이 적절하다. 흡연이나 저소득 자체만을 단독 기준으로 삼는 것은 아니다. 양성이면 증상·흉부영상 등으로 활동성 결핵을 배제한 뒤 잠복결핵 여부를 판단하며 IGRA만으로 둘을 구분하지 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-010096 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 인도 출생·노숙시설·수감 노출에서 LTBI IGRA D 유지. 흡연·저소득만을 단독 선별 적응증처럼 제시한 오류와 양성 IGRA=잠복 확정 단정 수정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/latent-tuberculosis-infection-screening

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010096
