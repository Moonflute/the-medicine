---
type: qbank
schema_version: 1
id: medqa-us-train-009545
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1d25e163d76aae737fe5a3863875f3419039deb541bdfee2975eb39de31844c0
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "acute rheumatic fever"
  - "급성 류마티스열"
  - "migratory polyarthritis"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qwkOyXvCDqtIDsoIjsl7wgKEluZmVjdGlvdXMgQXJ0aHJpdGlzKS5tZA
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

14세 남자가 3일간 발열, 권태감, 심한 오른쪽 무릎 통증과 부종으로 내원했다. 같은 기간 복통과 코피가 있었고 5일 전 부어 아팠던 왼쪽 발목은 호전되었다. 3주 전 숲에서 캠핑 중 인후통이 있어 대증치료를 받았다. 체온 38.7°C, 맥박 119회/분, 혈압 90/60 mmHg이다. 오른쪽 무릎은 붓고 압통이 있으며 운동 범위가 제한된다. 팔꿈치에 통증 없는 3~4 mm 결절이 있다. 심폐 진찰은 정상이다. 혈색소 12.3 g/dL, 백혈구 11,800/mm³, ESR 58 mm/시간이다. 관절천자에서 맑은 황색 액체가 나오고 그람염색에서 균은 보이지 않으며 백혈구 1,350/mm³(호중구 17%)이다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 급성 류마티스열
B. 라임병
C. 가와사키병
D. 소아 특발성 관절염

## 해설


인두염3주 뒤 이동성 큰관절염과 통증 없는 피하결절, 발열 및 염증수치 상승은 acute rheumatic fever A를 시사한다. 원문 심폐진찰은 정상으로 심잡음이 있다고 만들어 설명하면 안 된다. 확진에는 위험군에 맞는 Jones 기준과 선행 GAS 증거를 확인하고 심초음파로 subclinical carditis도 평가한다. 단회 Gram 음성 관절액만으로 모든 감염을 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009545 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원문 정상심폐진찰에 심잡음을 창작한 부분 제거; GAS 후 이동성관절염·피하결절 근거와 확진요건 구분.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/diagnosing-acute-rheumatic-fever.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009545
