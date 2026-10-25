---
type: qbank
schema_version: 1
id: medqa-us-train-003990
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e8b41e6c503eb471079fc6038bcb71437f44a9d1c7d1812e76f3029ea8e219ca
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "졸링거-엘리슨 증후군"
  - "가스트린종"
  - "다발성 소화성 궤양"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsIDsiqTtirjrprDsooUgKEdhc3RyaW5vbWEpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsIDsobHshLEg7ISg7KKF7ISxIOyaqeyiheymnSAoRkFQKSAoRmFtaWxpYWwgQWRlbm9tYXRvdXMgUG9seXBvc2lzKS5tZA
question_type: 임상증례 객관식
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvUGFudG9wcmF6b2xlLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

36세 여자가 12개월간 지속된 상복부 통증으로 내원했다. 식후 통증이 악화되며 강도는 10점 만점에 7점이다. 지난 1년 동안 오심, 속쓰림, 혈액이나 점액이 없는 설사가 여러 차례 있었다. 8개월 전 상부 내시경에서 위전정부, 유문, 십이지장에 여러 궤양과 두꺼워진 위주름이 보였다. 궤양 생검은 헬리코박터 파일로리 음성이었다. 현재 판토프라졸과 일반의약품 제산제를 복용한다. 불안해 보이며 활력징후는 정상이다. 복부는 부드럽지만 명치와 배꼽 주위 촉진에 압통이 있다. 대변 잠혈검사는 양성이다. 반복 상부 내시경에서 최소한의 출혈을 동반한 위궤양과 십이지장궤양이 지속된다. 진단을 위한 다음 단계로 가장 적절한 것은 무엇인가?

## 선택지

A. 세크레틴 자극검사
B. 요소호기검사
C. 24시간 식도 pH 모니터링
D. 공복 혈청 가스트린 수치 측정

## 해설

난치성 다발궤양·두꺼운 위주름·설사는 ZES를 의심하게 하므로 fasting gastrin D를 측정한다. PPI는 위산억제에 따른 gastrin 상승을 유발하므로 gastric pH·복용약/검사조건을 함께 해석하고 필요 시 추가기능검사로 확인한다. 의심 ZES 환자의 PPI를 임의로 급중단해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Fasting gastrin D는 초기평가이나 PPI복용 중 상승만으로 gastrinoma 확진 불가.
- https://www.cancer.gov/types/pancreatic/hp/pnet-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003990
