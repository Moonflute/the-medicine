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

당뇨약을 쓰지 않는 53세 여성이 공복에 식은땀과 혼돈을 보였다. 증상 중 정맥 혈당 37 mg/dL, 인슐린과 C-펩타이드가 모두 억제되지 않았다. 설포닐우레아·글리나이드 검사는 음성이고 포도당 투여 후 증상이 사라졌다. 가장 가능성 높은 원인은?

## 선택지

A. 인슐린종
B. 외인성 인슐린 투여
C. 부신기능저하에 의한 저혈당
D. 덤핑 증후군

## 해설

저혈당인데 인슐린과 C-펩타이드가 함께 높고 인슐린 분비촉진제 검사가 음성이면 내인성 고인슐린혈증을 시사한다. 외인성 인슐린 투여 때는 보통 C-펩타이드가 억제된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: C-peptide4.9를 정상이라 한 수치오독을 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004909
- https://academic.oup.com/jcem/article/94/3/709/2596247
