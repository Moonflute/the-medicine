---
type: qbank
schema_version: 1
id: medqa-us-train-004353
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:31fd64c53c306defe30c64a9066098f6288e47b8fc37183a1e7a37b29a8d600e
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "낭성섬유증"
  - "기관지확장증"
  - "폐성심"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-q4sOq0gOyngCDtmZXsnqXspp0gKEJyb25jaGllY3Rhc2lzKS5tZA
  - MDIg7Zi47Z2h6riwL-uCreyEseyErOycoOymnSAoQ3lzdGljIEZpYnJvc2lzKS5tZA
question_type: 임상증례 객관식
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
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

14세 남자가 한 달간 점점 심해지는 다리 부종과 전신 피로로 내원했다. 생산적 기침과 호흡곤란, 일상생활 수행 불가, 반복적인 호흡기 감염과 어린 시절부터 만성 코막힘이 있다. 3개월간 악취 나는 기름진 변을 보았고 키와 체중은 4백분위수이다. 체온 37°C, 맥박 112회/분, 호흡수 23회/분, 혈압 104/64 mmHg이다. 손가락 곤봉증, 척추측만증, 하지 2+ 함요부종, 경정맥 팽창, 흉부 흡기 수포음, 크게 들리는 S2, 경미한 복부팽만과 간비대, 간경정맥 역류가 있다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 비대성 심근병증
B. 단백질 영양실조
C. 굿파스처 증후군
D. 낭성섬유증

## 해설


환자는 낭성섬유증의 전형적인 폐기능 저하, 흉부 청진 소견, 그리고 전신 증상을 보이며, 이는 가장 가능성 높은 진단이다. 다른 선택지는 이러한 다기관 증상을 설명하지 못한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 만성호흡기감염·지방변·성장부진·곤봉지와 폐성심 양상은 다기관CF D.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004353
