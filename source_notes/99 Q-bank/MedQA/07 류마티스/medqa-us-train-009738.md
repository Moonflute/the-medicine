---
type: qbank
schema_version: 1
id: medqa-us-train-009738
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a24d7ef9cc2e47a9c628386e1525637c9965e14ed3a3a4571d07356906f23c9c
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "히드랄라진 유발 루푸스"
  - "약물유발 루푸스"
  - "심낭염"
  - "drug-induced lupus"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwLyjquInsgqzspp3tm4TqtbApLm1k
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

42세 아프리카계 미국인 여성이 갑자기 발생한 흉통으로 진료실에 내원했다. 통증은 날카롭고 방사되지 않으며, 앉아서 몸을 앞으로 숙이면 호전된다. 발열, 오한, 기침은 없지만 3주 전부터 손과 손목이 부어 있었다. 과거력으로 만성 고혈압이 있다. 12세에 충수절제술을 받았다. 복용 약물은 히드랄라진과 엽산이다. 활력징후는 미열을 제외하면 정상이다. 진찰에서 특히 누워 있을 때 경미한 고통을 보인다. 양측 중수지절관절과 근위지절관절이 부어 있고 압통이 있다. 심전도에서 광범위한 ST 상승이 보인다. 항핵항체는 음성이다. 다음 중 이 환자의 혈청에서 추가로 검출될 것으로 예상되는 항체는?

## 선택지

A. 항히스톤 항체
B. 항카디오리핀 항체
C. 항미토콘드리아 항체
D. 항환형 시트룰린화 펩타이드 항체

## 해설


Hydralazine을 복용한 환자에게 대칭성 관절염과 pericarditis가 생겨 drug-induced lupus를 의심하며 보기 중 anti-histone A가 연관된다. 다만 약물루푸스에서도 ANA는 대개 양성으로 원문의 음성은 비전형적이다. 음성 ANA 때문에 완전히 배제되지는 않지만 약물 노출기간, 다른 원인 및 추가 검사를 확인해야 하며 anti-histone도 절대적으로 특이적인 항체는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009738 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: hydralazine-DIL anti-histone A의 연관은 유지하되 ANA음성이 비전형임과 항체 단독확정 한계를 추가.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009738
