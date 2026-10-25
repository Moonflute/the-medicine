---
type: qbank
schema_version: 1
id: medqa-us-test-000352
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:e2b801fb340314c40a80176bcb5eaf12026b9af69e7f36c589970c3a8cc49193
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "허위성 장애"
  - "인위적 증상"
  - "자해성 빈혈"
question_type: diagnosis
related_disease_slugs:
  - MDQg64K067aE67mEL-yggO2YiOuLuSAoSHlwb2dseWNlbWlhKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

26세 간호사가 2개월 동안 지속된 피로로 병원에 왔다. 직장에서 스트레스가 많아 2주간 병가를 냈지만 복직하고 싶다고 한다. 하복부 통증이 여러 번 있었고 “암에 걸린 걸 알아요”라고 말하며 진단적 복강경검사를 요청했다. 6개월 전 소화성 궤양병을 진단받았고 유일한 복용약은 오메프라졸이다. 창백해 보였으며 체온 36.5°C(97.7°F), 맥박 120회/분, 혈압 90/65 mmHg였다. 정신상태검사에서 피곤하고 우울한 기분이었다. 결막이 창백하고 점막이 건조했으며 왼쪽 팔 정맥을 따라 딱지가 여러 개 있었다. 오른쪽 상흉골연에서 2/6등급 수축기 박출성 심잡음이 들렸다. 복부 진찰은 정상이었고 근위부 근육의 전반적인 쇠약이 있었다. 혈색소 7.5 g/dL, 평균 적혈구 용적 89 μm³, 망상적혈구 13.3%, 혈청 나트륨 139 mEq/L, 칼륨 3.9 mEq/L, 칼슘 8.5 mg/dL였고 대변 잠혈검사는 음성이었다. 복부 초음파도 정상이었다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 허위성 장애
B. 신체증상장애
C. 전환장애
D. 급성 소장 출혈

## 해설

정상 적혈구용적의 심한 빈혈과 망상적혈구 증가, 반복 정맥천자 흔적, 의료 접근성과 침습검사 요구는 자가채혈 등으로 질병을 의도적으로 유발하는 허위성 장애(A)를 시사한다. 그러나 빈혈은 실제 신체질환이며 ‘질병 증거가 없다’는 설명은 틀리다. 의도적 유발·기만을 확인하고 출혈·용혈 등 의학적 원인도 평가해야 하며, 단순히 검사 음성이나 의료인이라는 이유만으로 확진해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: Hb7.5실제빈혈이있는데질병증거없다고한오류삭제. 의도적자가유발을시사하는단서와단정한계구별.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000352
