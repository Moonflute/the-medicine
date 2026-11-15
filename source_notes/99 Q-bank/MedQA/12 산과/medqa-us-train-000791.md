---
type: qbank
schema_version: 1
id: medqa-us-train-000791
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f9a42e53191bed69aee494923066324e10b05f38d73ac47391159cc95e960dfa
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "oligohydramnios"
  - "fetal growth restriction"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yWkeyImCDqs7zshozspp0gKE9saWdvaHlkcmFtbmlvcykubWQ
  - MTIg7IKw6rO8L-2DnOyVhCDshLHsnqUg7KeA7JewIChGZXRhbCBHcm93dGggUmVzdHJpY3Rpb24pLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 33주 산모의 태아 예상 체중은 4백분위수다. 제대동맥 도플러에서 이완기 혈류가 소실됐다. 지속 서맥이나 다른 즉시 분만 적응증은 없고 산전 스테로이드를 시작했다. 어떤 계획이 적절한가?

## 선택지

A. 정기 진료만 하며 만삭까지 기다린다
B. 감시를 강화하고 태아 상태에 따라 33–34주 무렵 분만을 준비한다
C. 제대동맥 도플러는 반복하지 않고 태아 체중만 매주 잰다
D. 분만을 늦추기 위해 양수주입술을 반복한다

## 해설

성장제한과 제대동맥 이완기 혈류 소실은 태반 기능 저하의 중요한 단서다. 태아 감시를 강화하고 일반적으로 33–34주에 분만을 계획한다. 혈류 역전이나 태아 악화가 나타나면 더 빠른 분만이 필요할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: FGR 감시의 NST 및 제대동맥 도플러 역할 구분.
- https://publications.smfm.org/publications/289-society-for-maternal-fetal-medicine-consult-series-52/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000791
