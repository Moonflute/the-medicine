---
type: qbank
schema_version: 1
id: medqa-us-train-000127
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2fd798c6d8139e41505aebc78a8920d22af6fd5a7bf6291cc02019b9bcd6b04f
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "endometrial cancer"
  - "breast cancer"
  - "obesity"
  - "diabetes mellitus type 2"
question_type: mechanism
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2gSDrgrTrp4nslZQgKEVuZG9tZXRyaWFsIENhbmNlcikubWQ
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

58세 비만 여성이 지난 5일간 발생한 통증 없는 폐경 후 출혈로 내원하였다. 최근 시행한 자궁내막 생검에서 자궁내막암이 확인되었으며, 환자는 복식 전 자궁절제술 및 양측 난관난소절제술을 받을 예정이다. 과거력상 복압성 요실금과 제2형 당뇨병이 있다. 초경은 11세, 폐경은 55세였다. 환자는 합병증 없는 임신을 통해 4명의 건강한 자녀를 두었으며, 모두 분유 수유를 하였다. 현재 복용 중인 약물은 국소 에스트로겐과 메트포르민이다. 가족력상 할머니가 80세에 유방암을 진단받은 병력이 있다. 이 환자의 병력 중 유방암 위험 감소와 관련된 것은 무엇인가?

## 선택지

A. 비만
B. 분유 수유
C. 자궁내막암
D. 다산(Multiple pregnancies)

## 해설

보기 중 다산(D)은 유방암의 장기 위험 감소와 관련된다. 임신에 따른 월경 주기 감소와 유방세포 분화 등이 관련되며, 모든 연령·출산 직후 시기의 위험이 일률적으로 낮아진다는 뜻은 아니다. 이 환자는 모두 분유 수유를 했으므로 수유의 별도 보호 효과를 실제 병력으로 부여할 수 없다. 폐경 후 비만이나 분유 수유가 보호 요인은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 분유 수유한 환자에게 수유의 보호 효과를 사실상 부여한 설명을 분리하고 다산의 장기 위험 감소 연관성을 명확히 했다.
- https://www.cancer.gov/about-cancer/causes-prevention/risk/hormones/reproductive-history-fact-sheet

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000127
