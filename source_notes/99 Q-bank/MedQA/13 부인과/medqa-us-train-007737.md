---
type: qbank
schema_version: 1
id: medqa-us-train-007737
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c287b5bc25c07eb4633cece98911fe768e7714f1c2c3d7c60c43f5ff847b91ec
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "high-grade squamous intraepithelial lesion"
  - "inadequate colposcopy"
  - "cold-knife conization"
  - "High-grade squamous intraepithelial lesion"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geqyveu2gCDsg4HtlLzrgrQg7KKF7JaRIChDZXJ2aWNhbCBJbnRyYWVwaXRoZWxpYWwgTmVvcGxhc2lhKS5tZA
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

37세 비임신 여성의 세포검사에서 HSIL이 나왔으나 질확대경하 표적생검은 CIN1이었다. 반흔으로 변환대와 병변의 위쪽 경계가 보이지 않고 자궁경관 검체도 얻지 못했다. 다음 조치는?

## 선택지

A. 냉동요법으로 보이는 병변만 제거
B. 1년 뒤 검진만 하도록 안내
C. 원추절제 등 진단적 절제로 병변과 경관 쪽을 평가
D. 고위험 HPV를 다시 검사해 음성이면 평가 종료

## 해설

HSIL과 저등급 생검이 불일치하며 병변 전체와 변환대를 볼 수 없을 때는 고등급 병변을 놓칠 수 있다. 조직을 확보하는 진단적 절제가 필요하며 소작만 하는 것은 적절하지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: HSIL/HPV 양성에 병변 상단·변환대가 불완전 관찰되어 진단적 절제 C 유지. 모든 불충분 질확대경에 일괄 냉칼 원추절제를 권한 설명 한정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7147428/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007737
