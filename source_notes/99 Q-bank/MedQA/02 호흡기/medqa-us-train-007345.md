---
type: qbank
schema_version: 1
id: medqa-us-train-007345
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:24fb4deb8a311092d7472309249c7291a301e1022ddade3fbedcfd57532d5ce9
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "급성 호흡곤란 증후군"
  - "기계환기"
  - "산소화"
  - "PEEP"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-q4ieyEsSDtmLjtnaHqs6TrnoAg7Kad7ZuE6rWwIChBUkRTKSAoQWN1dGUgUmVzcGlyYXRvcnkgRGlzdHJlc3MgU3luZHJvbWUpLm1k
question_type: management
difficulty: complex
answer: C
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

중증 폐렴으로 ARDS가 생긴 25세 여성이 삽관됐다. 예측체중은 55 kg이다. 현재 일회호흡량 500 mL로 환기 중이고 고원압은 34 cmH₂O다. 폐 손상을 줄이려면 일회호흡량을 어떻게 조정할까?

## 선택지

A. 550 mL로 올려 고탄산혈증을 예방한다
B. 현재의 500 mL를 유지한다
C. 약 330 mL로 줄이고 고원압을 다시 확인한다
D. 예측체중과 관계없이 모든 성인에게 250 mL를 적용한다

## 해설

ARDS의 폐 보호 환기에서는 실제 체중 대신 키와 성별로 계산한 예측체중을 사용한다. 약 6 mL/kg에서 시작해(이 환자는 약 330 mL) 고원압을 30 cmH₂O 이하로 유지하도록 조절한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: FiO2만 산소화에 관여하고 PEEP는 환기라는 모순 해설을 교체. 원정답 C 유지, 산소화/환기의 시험적 구분과 실제 PEEP의 생리적 영향 구별. vesicular breath sounds 번역 오류 수정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10870893/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007345
- https://doi.org/10.1164/rccm.202311-2011ST
