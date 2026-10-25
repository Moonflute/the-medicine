---
type: qbank
schema_version: 1
id: medqa-us-train-000672
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b78e79fc567c5738691ec6621513accd946192d7259f2bb8cb36296a89372a77
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "cystic fibrosis"
  - "vitamin D deficiency"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv67mE7YOA66-8IEQg6rKw7ZWN7KadIChWaXRhbWluIEQgRGVmaWNpZW5jeSkubWQ
  - MDIg7Zi47Z2h6riwL-uCreyEseyErOycoOymnSAoQ3lzdGljIEZpYnJvc2lzKS5tZA
question_type: mechanism
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: machine-generated
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

낭성 섬유증(cystic fibrosis)을 앓고 있는 19세 남성이 정기 건강 검진을 위해 내원하였다. 환자는 호흡기 치료는 잘 따르고 있으나, 식사 전 약 복용을 자주 "잊어버린다"고 말한다. 혈액 검사 결과 중등도의 비타민 D 결핍이 확인되었다. 비타민 D 결핍의 결과로 나타날 수 있는 전해질 이상은 다음 중 무엇인가?

## 선택지

A. 칼슘 증가 및 인산염 감소
B. 칼슘 감소 및 인산염 증가
C. 칼슘 감소 및 인산염 감소
D. 칼슘 정상 및 인산염 감소

## 해설


비타민 D 결핍은 장에서 칼슘과 인산염 흡수를 모두 감소시켜 저칼슘혈증·저인산혈증을 초래한다. 따라서 칼슘·인산염 모두 감소가 정답이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 한·영 본문/선지/정답 C/해설 읽음. CF 지방흡수장애의 비타민 D 결핍에서 Ca/P 장흡수 저하로 저Ca·저P가 나타날 수 있다는 기본 기전 일치. 경도/중등도 결핍에서 보상으로 Ca가 정상일 수 있음을 배제하는 보편적 진단 판정은 아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000672
