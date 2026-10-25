---
type: qbank
schema_version: 1
id: medqa-us-train-000328
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bd216c5d15de41e1ba232e5ad4c7a1a0b28d62dbce343089823e417172b8bdf4
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "infiltrating ductal carcinoma"
  - "colonic polyps"
  - "Peutz-Jeghers syndrome"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rjIDsnqUg7Jqp7KKFIChDb2xvbmljIFBvbHlwKS5tZA
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsIDsiqTtirjrprDsooUgKEdhc3RyaW5vbWEpLm1k
question_type: diagnosis
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

41세 여성이 방사선 종양학 전문의의 의뢰로 의학 유전학 클리닉에 내원하였다. 환자는 최근 유방의 침윤성 관암종(infiltrating ductal carcinoma)을 진단받았다. 환자는 과거에 대장 용종 병력이 있어 6개월마다 대장내시경 검사를 받고 있다. 모계 및 부계 가족력상 용종이나 악성 또는 양성 종양은 없다. 그러나 환자는 10세 된 아들의 입술에 짙은 갈색 색소 침착이 있으며, 자신도 어린 시절에 비슷한 색소 침착이 있었다고 보고하였다. 이 환자의 대장 용종 조직검사에서 가장 가능성이 높은 소견은 무엇인가?

## 선택지

A. 과증식성 용종(Hyperplastic polyps)
B. 선종성 용종(Adenomatous polyps)
C. 염증성 용종(Inflammatory polyps)
D. 과오종성 용종(Hamartomatous polyp)

## 해설

정답은 D이다. 본인/아들의 입술 색소침착과 반복 장용종, 젊은 유방암 병력은 Peutz–Jeghers 증후군을 시사한다. 이 질환의 대표 용종은 과오종성이다. 본문에 환자의 대장암 병력이 있는 것은 아니며 가족의 상위 세대에서 종양이 없다고 질환을 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 유방암을 대장암 병력이라고 바꾼 해설 오류 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000328
