---
type: qbank
schema_version: 1
id: medqa-us-train-001478
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a7c1f9a99acd9563e21d4386c2ccf7b0b883335997443c47f50665d6c86de7f5
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "chronic liver disease"
  - "vitamin K deficiency"
  - "coagulopathy"
related_disease_slugs:
  - MDkg7ZiI7JWhL-u5hO2DgOuvvCBLIOqysO2VjSAoVml0YW1pbiBLIERlZmljaWVuY3kpLm1k
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITslZQubWQ
question_type: mechanism
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmZXBpbWUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

급성 게실염으로 S상결장 절제술을 받은 지 8일 후 61세 남성이 왼쪽 옆구리 통증을 호소했다. 입원 이후 장 휴식을 유지했다. 여러 차례 알코올 금단으로 입원한 것 외에는 중증 질환 병력이 없다. 현재 세페핌 정맥주사와 모르핀을 투여한다. 체온은 36.9°C (98.4°F), 맥박은 89회/분, 혈압은 118/75 mm Hg이다. 복부에는 잘 아물고 최소한의 장액성 배액만 있는 절개가 있다. 피부에 흩어진 거미혈관종, 왼쪽 옆구리의 큰 혈종 및 복부와 사지의 수많은 멍이 보인다. 왼쪽 고관절을 펴면 통증이 있다. 헤모글로빈 8.4 g/dL, MCV 102 µm3, 백혈구 8,200/mm3, 혈소판 170,000/mm3, 출혈시간 4분, PT 26초, 활성화 PTT 39초이다. 다음 중 현재 증상의 가장 가능성 높은 기저 원인은 무엇인가?

## 선택지

A. 제5인자의 불활성화 저항성
B. 제7인자 활성화 장애
C. 트롬보포이에틴 합성 감소
D. 엽산 결핍

## 해설

장기간 경구 섭취 제한과 항생제 사용은 비타민 K 결핍을 유발할 수 있다. 비타민 K는 응고인자 II·VII·IX·X 등의 감마카르복실화에 필요하며, 결핍 시 기능적 활성화가 저하된다. 반감기가 짧은 VII의 영향으로 PT가 먼저 연장되고 심하면 aPTT도 연장될 수 있어 보기 중 B가 합당하다. 정상 혈소판 수·출혈시간은 혈소판 감소보다는 응고인자 문제를 지지한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 B 유지. PT와 PT 오기를 PT/aPTT로 고치고 비타민 K의 합성 자체가 아닌 감마카르복실화/기능 활성화 기전으로 정밀화.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001478
