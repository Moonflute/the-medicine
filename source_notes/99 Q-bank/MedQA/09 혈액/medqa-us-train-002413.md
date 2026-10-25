---
type: qbank
schema_version: 1
id: medqa-us-train-002413
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:12195df6b88943767c9e117052b4aa43bcedc4b7f1deb611cf0ebda698508260
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "extravascular hemolysis"
  - "splenic sequestration"
  - "sickle cell disease"
  - "unconjugated hyperbilirubinemia"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2YiOq0gCDsmbgg7Jqp7ZiIIChFeHRyYXZhc2N1bGFyIEhlbW9seXNpcykubWQ
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
question_type: diagnosis
difficulty: simple
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

3세 아프리카계 미국인 남아가 갑자기 시작된 심한 복통으로 내원했다. 왼쪽 상복부에서 만져지는 종괴가 있고 혈색소는 7.2 g/dL이다. 혈청 합토글로빈은 정상이고 비포합 빌리루빈과 교정 망상적혈구 수가 증가되어 있다. 다음 중 이 소견에 대한 가장 가능성 높은 설명은?

## 선택지

A. 재생불량 위기
B. 신장 경색
C. 혈관내 용혈
D. 혈관외 용혈

## 해설


정상 haptoglobin, 간접 bilirubin 상승, 망상적혈구 증가와 비장비대는 보기 중 혈관외 용혈 D를 가장 잘 지지한다. 비장 대식세포가 적혈구를 제거할 때 bilirubin이 증가한다. 급격한 통증성 비장비대와 빈혈에서는 비장 격리도 고려하지만 이 자료만으로 겸상적혈구병이 확진되는 것은 아니다. 재생불량 위기라면 망상적혈구 감소가 예상된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002413 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 혈관외 용혈 D를 유지하면서 민족·비장비대만으로 SCD를 확정하지 않고 급성 비장 격리 가능성을 구분.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002413
