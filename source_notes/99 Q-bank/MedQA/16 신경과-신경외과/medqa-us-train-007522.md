---
type: qbank
schema_version: 1
id: medqa-us-train-007522
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2f24d0674e0fc10aaf14a7ac521e323c3a3dfcb0949f176d78555560345ca7cd
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "브라운-세카르 증후군"
  - "척수 반절단"
  - "척수 손상"
  - "감각 해리"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC9Ccm93bi1TZXF1YXJkIOymne2bhOq1sCAoQnJvd24tU2VxdWFyZCBzeW5kcm9tZSkubWQ
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_sspnsiJgg7Jm47IOBIChTcGluYWwgY29yZCB0cmF1bWEpLm1k
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

20세 남자가 다툼 중 등에 자상을 입은 지 20분 후 응급실에 내원했다. 하지의 근력저하와 감각저하를 호소한다. 심각한 질환 병력은 없다. 맥박은 90회/분, 혈압 100/65 mmHg이다. T10 척추 옆 등에 깊이 4cm의 열상이 있다. 신경학적 검사에서 오른쪽 이완성 마비와 같은 쪽 진동감각 저하, 상처 수준과 그 아래의 가벼운 촉각 저하, 배꼽 높이와 그 아래 왼쪽의 온도 및 핀 감각 소실이 보인다. 오른쪽 하지 심부건반사는 4+이고 바빈스키 징후는 양측 음성이다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 전척수 증후군
B. 브라운-세카르 증후군
C. 후척수 증후군
D. 중심척수 증후군

## 해설

자상 이후 같은 쪽 운동·진동감각 저하와 반대쪽 통각·온도각 저하는 척수 반절단인 Brown-Séquard 증후군(B)에 특징적이다. 후주와 피질척수로는 척수 병변 아래에서 동측 결손을, 척수에서 교차한 척수시상로는 반대측 결손을 만든다. 원문에는 급성 이완성 마비와 4+ 반사, 음성 Babinski가 함께 기술되어 전형적 시간경과와 완전히 일치하지 않는 부분이 있지만, 이 반사 기술이 교차된 감각 경로의 국소화 근거를 바꾸지는 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 교차 감각소실 B 유지. 같은 쪽 통각 소실이라는 해설 오류 교정하고 원문 반사/근긴장 불일치를 명시.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007522
