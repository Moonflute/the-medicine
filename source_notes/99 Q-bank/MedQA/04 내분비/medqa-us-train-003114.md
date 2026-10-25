---
type: qbank
schema_version: 1
id: medqa-us-train-003114
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0293c912952685c23bbb09024e7c1c107c8d77b9eefaea302e7618f68bc941a2
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "thyroid nodule"
  - "euthyroid thyroid mass"
  - "thyroid ultrasound"
  - "thyroid cancer evaluation"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDqsrDsoIggKFRoeXJvaWQgTm9kdWxlKS5tZA
  - MDQg64K067aE67mEL-qwkeyDgeyDmOyVlCAoVGh5cm9pZCBDYW5jZXIpLm1k
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

19세 여학생이 전신 피로로 내원했다. 공부할 때 집중하기 어렵고 항상 피곤하며 3주 넘게 변비와 간헐적 직장출혈이 있다. 같은 날씨에도 평소보다 따뜻한 옷을 입어야 할 정도로 추위를 탄다. 진찰에서 왼쪽 갑상샘 엽에 약 1 cm의 무통성 결절이 만져지고 림프절병증은 없다. 활력징후는 정상이다. 다음 중 가장 적절한 관리 단계는?

## 선택지

A. 혈청 T3 수치
B. 갑상샘 초음파
C. 혈청 칼시토닌 수치
D. 방사성핵종 갑상샘 스캔

## 해설

촉지되는 갑상샘 결절의 구조적 평가는 초음파 B가 적절하다. 초기 평가에는 TSH도 필요하고 추위·변비 등 저하 증상은 유리T4와 함께 확인한다. 혈청 T3는 저하증 초기 선별검사 대체가 아니며 calcitonin을 모든 결절에서 일률적으로 뒤따라 시행하는 것도 아니다. Radionuclide scan은 주로 TSH가 낮을 때 기능성 결절 평가에 사용한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 촉지 결절 US B는 선택지상 적절. TSH 동시평가 누락 및 T3/calcitonin 모두 일률 후속검사라는 오해를 교정.
- https://doi.org/10.1089/thy.2015.0020

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003114
