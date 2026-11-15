---
type: qbank
schema_version: 1
id: medqa-us-train-000344
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8b17cf5f8bf20a82aea8c3b3cfd86d4032dfab61bda2a0ece89fecd34d453a7c
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "anorexia nervosa"
  - "refeeding syndrome"
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOqyveyEseyLneyaleu2gOynhOymnSAoQW5vcmV4aWEgTmVydm9zYSkubWQ
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

심한 영양실조가 있는 20세 여성이 영양 공급을 다시 시작한 지 4일째 부종과 부정맥을 보인다. 혈중 인·칼륨·마그네슘이 동시에 크게 떨어졌다. 지금 우선 할 일은?

## 선택지

A. 목표 열량에 도달하도록 공급 속도를 더 높인다.
B. 보충 없이 심전도만 추적한다.
C. 열량 증량을 멈추고 전해질을 보충하면서 심전도를 감시한다.
D. 포도당 수액만 추가해 전해질을 교정한다.

## 해설


재영양증후군에서 인·칼륨·마그네슘이 급격히 떨어지고 장기 증상이 나타나면 전해질을 즉시 교정한다. 심한 불균형이 안정될 때까지 열량을 더 올리지 않고 티아민도 보충한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 한·영 본문/선지/정답 C/해설 읽음. 심한 영양결핍 후 재영양 4일째 K/Mg/P 감소와 부정맥은 인슐린 증가에 의한 세포내 이동과 일치. 영양 처방/용량·교정 치료 전반을 검증한 것은 아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000344
- https://doi.org/10.1002/ncp.10474
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11973624/
