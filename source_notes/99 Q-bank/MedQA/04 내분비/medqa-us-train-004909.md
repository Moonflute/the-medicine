---
type: qbank
schema_version: 1
id: medqa-us-train-004909
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8b4d6e292ed2711795620424284f35ff27fc9a4639f6f959d50d707eb9fa9216
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "인슐린종"
  - "내인성 고인슐린혈증"
  - "저혈당"
related_disease_slugs:
  - MDQg64K067aE67mEL-yggO2YiOuLuSAoSHlwb2dseWNlbWlhKS5tZA
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

53세 여자가 1시간 전부터 어지럼과 왼팔 근력저하가 있어 응급실에 왔다. 그 전에 떨림, 두근거림, 발한이 있었고 최근 3개월 동안 식욕이 증가하며 체중이 6.8 kg 늘었다. 공복혈당은 37 mg/dL, 인슐린은 280 μU/mL, C-펩타이드는 4.9 ng/mL이며 설포닐우레아 소변검사는 음성이다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 인슐린종
B. 외인성 인슐린에 의한 저혈당
C. 폭식장애
D. 쿠싱증후군

## 해설

증상 시 혈당 37 mg/dL인데 insulin 280과 C-peptide 4.9가 억제되지 않고 상승해 있으며 sulfonylurea 검사가 음성이므로 내인성 고인슐린 저혈당, 선택지 A의 insulinoma를 시사한다. C-peptide는 제시 참고범위보다 높으며 정상이라고 해석하면 안 된다. 외인성 insulin 투여라면 C-peptide 억제가 예상된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: C-peptide4.9를 정상이라 한 수치오독을 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004909
