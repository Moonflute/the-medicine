---
type: qbank
schema_version: 1
id: medqa-us-train-000144
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4dcaae71f5790d9f63a972f5380d46de8359d4b59a5372e550e4ce30f3cae55f
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "bicuspid aortic valve"
  - "infective endocarditis"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qwkOyXvCDsi6zrgrTrp4nsl7wgKEluZmVjdGl2ZSBFbmRvY2FyZGl0aXMpLm1k
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

34세 남성이 지난 2개월간 중등도 운동 시 발생하는 피로감과 호흡곤란으로 내원하였다. 지난 10일 동안 미열과 야간 발한이 있었다. 5년 전 진단받은 이첨판 대동맥판막(bicuspid aortic valve) 외에 심각한 질환의 과거력은 없다. 10년간 하루 한 갑의 담배를 피웠으며, 사교적인 자리에서 맥주 3~5잔을 마신다. 불법 약물은 사용하지 않는다. 복용 중인 약물은 없다. 환자는 쇠약해 보인다. 체온은 37.7°C, 맥박은 분당 70회, 혈압은 128/64 mm Hg이다. 폐 청진상 깨끗하다. 우측 흉골연 제2늑간에서 2/6 등급의 수축기 잡음이 가장 잘 들린다. 양손 손톱 아래에 여러 개의 출혈이 보이고 손가락에 다수의 압통이 있는 붉은 결절이 관찰된다. 가장 가능성이 높은 원인균은 무엇인가?

## 선택지

A. Staphylococcus epidermidis
B. Streptococcus sanguinis
C. Streptococcus pneumoniae
D. Streptococcus pyogenes

## 해설


이첨 대동맥판막이라는 구조적 판막 이상, 아급성 발열과 야간발한, 조갑하 출혈과 압통성 손가락 결절은 감염성 심내막염을 시사한다. 선지 중 구강 viridans streptococci에 속하는 Streptococcus sanguinis(B)가 가장 타당하다. 이첨은 대동맥판의 첨판이 두 개라는 뜻이지 양쪽 심장판막을 의미하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-000144`와 직접 대조했다.
- 판정: 이첨 대동맥판막과 아급성 IE 징후에서 viridans S. sanguinis B 유지. 양쪽 심장판막이라는 해부학 오류 및 근거 없는 구강위생 단정 제거.
- 검수 범위: 내용·번역·해설 연결 검토(content-reviewed). 최신 치료·용량의 전면 근거 검증을 뜻하지 않는다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000144
