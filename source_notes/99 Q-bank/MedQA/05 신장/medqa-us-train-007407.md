---
type: qbank
schema_version: 1
id: medqa-us-train-007407
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b95786e85ee44f28f6f74b11957bcf53a4790dffbb95403d08ff0aba9c6c3583
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "간신증후군"
  - "간경변"
  - "신장 관류 감소"
  - "신전성 급성 신손상"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsi6Ag7Kad7ZuE6rWwIChIZXBhdG9yZW5hbCBTeW5kcm9tZSkubWQ
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITqsr3rs4Dspp0gKExpdmVyIENpcnJob3NpcykubWQ
  - MDUg7Iug7J6lL-y9qe2MpeyEsSDquInshLEg7L2p7YylIOyGkOyDgSAoSW50cmluc2ljIFJlbmFsIEFjdXRlIEtpZG5leSBJbmp1cnkpLm1k
question_type: mechanism
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

48세 남자가 3일 동안 점점 심해지는 혼돈과 무기력으로 아내와 함께 응급실에 내원했다. 한 달 동안 소변량 감소와 복통이 있었다. 2개월 전 신우신염으로 입원하여 세프트리악손 치료를 받았다. 만성 C형 간염 병력이 있고 복용 약물은 없다. 창백하고 과민해 보인다. 체온은 37°C(98.6°F), 맥박 90회/분, 혈압 98/60 mmHg이다. 사람은 알아보지만 시간과 장소는 모른다. 공막 황달과 황달이 있고 양쪽 하지에 2+ 함요부종이 있다. 복부는 팽창되고 이동성 탁음이 양성이다. 검사에서 헤모글로빈 10.1 g/dL, 백혈구 수 4,300/mm³, 혈소판 수 89,000/mm³, PT 19초, BUN 71 mg/dL, 포도당 99 mg/dL, 크레아티닌 3.5 mg/dL, ALT 137 U/L, AST 154 U/L이다. 소변검사는 정상이고 FeNa는 1% 미만이다. 신장 초음파는 정상이다. 36시간 동안 정맥 수액을 투여했지만 소변량은 호전되지 않았다. 이 환자의 신장 기능 이상을 일으킨 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 신장 간질 염증
B. 신정맥 혈전증
C. 신장 관류 감소
D. 신장 미세혈관 혈전

## 해설

복수와 황달, 혈소판 감소 및 응고장애를 보이는 간경변 의심 환자에서 소변검사와 신장 초음파는 특이하지 않지만 신기능이 악화되어 있다. 보기 중 가장 합당한 기전은 C, 간경변의 순환장애와 신혈관 수축에 따른 신장 관류 감소로, 간신증후군을 고려하게 한다.

간경변 환자의 AKI가 모두 간신증후군은 아니며 감염, 실제 저혈량, 약물독성과 구조적 신손상 등 다른 원인을 평가해야 한다. FeNa 1% 미만이나 단순 수액 36시간 무반응만으로 확진하지 않는다. 2024 ADQI-ICA 합의문은 적절한 체액 평가·필요 시 소생 후에도 호전되지 않고 다른 주원인의 근거가 없는지 평가하도록 하며, 진단 전 일률적인 48시간 알부민 투여를 필수 요건으로 두지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 C 유지. 모든 간경변 AKI를 HRS로 확진한 과도한 일반화를 수정, FeNa 한계/대체 원인 배제 및 2024 ADQI-ICA 기준 설명. ALT/AST의 원문 단위 오류 mg/dL를 U/L로 정정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11193657/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007407
