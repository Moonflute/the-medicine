---
type: qbank
schema_version: 1
id: medqa-us-train-000164
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2dc6211bf76dbd2556bc277d8c44b4c80109958e39a80a2a0ca2d17879fc5f60
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "autosomal dominant polycystic kidney disease"
  - "bipolar disorder"
  - "nephrogenic diabetes insipidus"
related_disease_slugs:
  - MDUg7Iug7J6lL-uLpOuCreyEsSDsvantjKUg7KeI7ZmYIChQb2x5Y3lzdGljIEtpZG5leSBEaXNlYXNlKS5tZA
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yWkeq3ueyEsSDsnqXslaAgKEJpcG9sYXIgRGlzb3JkZXIpLm1k
  - MDQg64K067aE67mEL-y9qe2Mpeq4sOybkCDsmpTrtpXspp0gKE5lcGhyb2dlbmljIERpYWJldGVzIEluc2lwaWR1cykubWQ
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9EZXNtb3ByZXNzaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

45세 여성이 2주간 지속된 피로감과 과도한 갈증으로 내원하였다. 이 기간 동안 환자는 잦은 요의 때문에 밤에 잠을 제대로 잘 수 없었다. 낮에도 평소보다 소변을 더 자주 본다. 환자는 매일 4~5리터의 물과 1~2캔의 맥주를 마신다. 환자는 상염색체 우성 다낭성 신장 질환(autosomal dominant polycystic kidney disease), 리시노프릴(lisinopril)로 치료 중인 고혈압, 그리고 양극성 장애(bipolar disorder)를 앓고 있다. 3개월 전 조증 삽화 이후 발프로산(valproic acid) 치료를 시작하였다. 활력 징후는 정상 범위 내에 있다. 양측 옆구리에서 불규칙한 종괴가 촉진된다. 그 외 신체 검진상 이상 소견은 없다. 검사실 검사 결과는 다음과 같다: 혈청 Na+ 152 mEq/L, K+ 4.1 mEq/L, Cl− 100 mEq/L, HCO3− 25 mEq/L, 크레아티닌 1.8 mg/dL, 삼투압 312 mOsmol/kg, 포도당 98 mg/dL. 소변 삼투압 190 mOsmol/kg. 수분 섭취를 제한하거나 데스모프레신(desmopressin)을 투여한 후에도 3시간 동안 소변 삼투압에 변화가 없다. 다음 중 가장 적절한 다음 치료 단계는 무엇인가?

## 선택지

A. 추가적인 수분 제한
B. 아밀로라이드(amiloride) 치료
C. 하이드로클로로티아자이드(hydrochlorothiazide) 치료
D. 데스모프레신(desmopressin) 치료

## 해설

정답은 C이다. 고삼투성 고나트륨혈증인데 소변이 묽고 desmopressin에 반응하지 않아 AVP 저항성/신장성 요붕증에 합당하다. HCTZ는 thiazide계 이뇨제로 Na 손실에 따른 근위세뇨관 수분 재흡수 증가와 원위부 수분 전달 감소 등을 통해 역설적으로 다뇨를 줄일 수 있다. 삼투성 이뇨제가 아니며 AVP에 대한 신장 반응을 직접 정상화하는 것은 아니다. 자유수 공급과 전해질 감시도 필요하고 추가 수분 제한은 고나트륨혈증을 악화시킬 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: HCTZ를 삼투성이뇨제라 한 오류 및 농축능 회복이라는 설명 교정.
- https://www.nature.com/articles/s41581-024-00897-z.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000164
