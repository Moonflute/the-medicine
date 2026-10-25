---
type: qbank
schema_version: 1
id: medqa-us-train-004378
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0568ecba763d78a2da4b06fc46de0097cdcc9c3881362ad95fcaaece73a66cba
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "졸링거-엘리슨 증후군"
  - "가스트리노마"
  - "난치성 소화성 궤양"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsIDsobHshLEg7ISg7KKF7ISxIOyaqeyiheymnSAoRkFQKSAoRmFtaWxpYWwgQWRlbm9tYXRvdXMgUG9seXBvc2lzKS5tZA
question_type: investigation
difficulty: standard
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
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

47세 남성이 반복되는 심와부 통증과 설사로 내원했다. 약 1년 전부터 증상이 있어 비슷한 증상으로 여러 차례 진료를 받았다. 증상을 완화하기 위해 오메프라졸 용량을 계속 늘리고 있다. 통증은 음식 섭취와 관련이 있는 듯하다. 설사는 물 같고 식사와는 무관하다. 혈압은 115/80 mm Hg, 맥박은 분당 76회, 호흡수는 분당 19회이다. 흡연과 음주는 하지 않으며 그 외 복용하는 약은 없다. 원인 불명의 반복되는 소화불량으로 상부 내시경을 시행한 결과 위 주름이 두꺼워져 있고 십이지장 첫 부분에 궤양 3개가 보였으며 모두 헬리코박터 파일로리 음성이었다. 이 환자의 관리에서 다음으로 가장 적절한 단계는 무엇인가?

## 선택지

A. 혈청 칼슘 수치 측정
B. 공복 혈청 가스트린 수치 측정
C. 복부 CT 촬영
D. 소마토스타틴 수용체 신티그래피

## 해설

난치성 다발십이지장궤양·위주름비후·설사는 gastrinoma/ZES 의심으로 fasting gastrin B가 다음 생화학검사이다. PPI로 gastrin이 상승할 수 있어 gastric pH와 약물·검사조건을 함께 해석하고 필요하면 추가검사한다. 임의로 PPI를 갑자기 끊지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ZES평가 gastrin B는 맞으나 PPI복용중 수치를 단독확진으로 해석하지 않음; 무약물 문장은 그외약 없음으로 정리.
- https://www.cancer.gov/types/pancreatic/hp/pnet-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004378
