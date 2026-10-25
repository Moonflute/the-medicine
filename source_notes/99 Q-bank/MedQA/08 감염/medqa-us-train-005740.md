---
type: qbank
schema_version: 1
id: medqa-us-train-005740
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8a796b3a0731399674f8be789707f801e13ebed345c33f4282d60deed3c28c8a
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "히스토플라스마증"
  - "폐첨부 공동화"
  - "결절홍반"
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-qysOygiCDtmY3rsJggKEVyeXRoZW1hIE5vZG9zdW0pLm1k
question_type: investigation
difficulty: complex
answer: A
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

인도 출신 50세 남성이 악화되는 호흡기 증상으로 내원했다. 4년 전 폐기종을 진단받았고 최근 몇 달 동안 만성 생산성 기침, 호흡곤란, 피로, 설명되지 않는 체중 감소 및 야간 발한이 발생했다. 폐 증상 외에도 날카롭고 간헐적인 흉통과 팔꿈치 및 무릎 관절통이 있다. 양쪽 하지에 융기된 홍반성 병변을 특징으로 하는 결절홍반도 있다. 심장검사에서 마찰음이 들리고 흉부 CT에서 양측 폐첨부의 공동화가 보인다. 활동성 결핵 감염이 의심되어 격리되었다. 정제단백유도체(PPD) 검사는 음성이고 객담 염색에서 항산균은 보이지 않았으나 좁은 기저부 출아로 증식하는 효모 형태가 보였다. 다음 중 정확한 진단에 도움이 되는 검사는 무엇인가?

## 선택지

A. 소변 히스토플라스마 항원
B. 객담 인디아 잉크 염색
C. 콕시디오이데스진균증 혈청검사
D. HIV 항체 선별검사

## 해설


만성 폐질환 배경의 상엽 공동과 효모 소견은 Histoplasma를 고려하게 하며 선택지 A 소변항원 검사가 진단에 도움된다. 항원은 다른 진균, 특히 Blastomyces와 교차반응할 수 있고 임상 형태에 따라 민감도가 달라 항체·배양·조직과 결합한다. 좁은 기저 출아만이 유일 특이 소견은 아니며 음성 PPD/객담 AFB 하나로 활동 TB를 완전히 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005740 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Histo 소변항원 A 유지; 항원 교차반응과 TB 배제검사 한계 보강.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/histoplasmosis/hcp/algorithm/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005740
