---
type: qbank
schema_version: 1
id: medqa-us-train-000318
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0928179e7b226c63eb2263a34ee79fa09fcee1209e0d50a89c0bb19f62dd0b6f
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "cystic fibrosis"
  - "pneumonia"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Y-Q66C0IChQbmV1bW9uaWEpLm1k
  - MDIg7Zi47Z2h6riwL-uCreyEseyErOycoOymnSAoQ3lzdGljIEZpYnJvc2lzKS5tZA
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 여성이 매일 아침 다량의 점액성 가래와 기침할 때마다 악취가 나는 걸쭉한 가래가 배출되는 증상이 악화되어 내원하였다. 환자는 이 기침이 약 한 달 전부터 시작되었으며 강도가 점점 심해지고 있다고 한다. 일반 의약품은 효과가 없었다. 과거력상 6세 때 낭성 섬유증(cystic fibrosis)을 진단받았으며, 지난 2년간 폐렴을 두 번 앓았다. 기침 외에 발열이나 다른 증상은 없다. 객담 배양 검사에서 호기성, 비유당 발효, 산화효소 양성, 그람 음성 간균이 검출되었다. 현재 이 환자에게 가장 유익한 치료 요법은 무엇인가?

## 선택지

A. 아목시실린 및 클라불란산(Amoxicillin and clavulanic acid)
B. 수술적 치료
C. 트리메토프림 및 설파메톡사졸(Trimethoprim and sulfamethoxazole)
D. 정맥 주사용 시프로플록사신(Intravenous ciprofloxacin)

## 해설

정답은 D이다. CF 환자의 호기성·비유당발효·oxidase 양성 그람음성 막대균은 Pseudomonas aeruginosa를 시사한다. 제시된 선택지 중 ciprofloxacin이 항녹농균 활성을 갖는다. 녹농균을 전형적 장내세균으로 분류하지 않으며 실제 약제·투여경로·병용 여부는 감수성, 중증도, 과거 배양에 따른다. IV 제형이 모든 CF 악화에서 항상 가장 유익하다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 녹농균을 장내균이라고 한 오류와 무조건 IV가 가장 효과적이라는 단정을 교정.
- https://www.cff.org/medical-professionals/pulmonary-exacerbations-clinical-care-guidelines

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000318
