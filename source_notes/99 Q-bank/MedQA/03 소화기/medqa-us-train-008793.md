---
type: qbank
schema_version: 1
id: medqa-us-train-008793
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:719526abe3e266b873a3bcb2ada11cf4715b8e96b6f9f1bf02887944a4130ffd
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "irritable bowel syndrome"
  - "functional abdominal pain"
  - "pain relieved by defecation"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qs7zrr7zshLEg7J6lIOymne2bhOq1sCAoSUJTKSAoSXJyaXRhYmxlIEJvd2VsIFN5bmRyb21lIChJQlMpKS5tZA
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL05hcHJveGVuLm1k
---

# MedQA US 임상문제

## 문제

32세 여성이 수일에서 몇 주 동안 지속되는 반복적인 복통, 복부 팽만, 묽은 변으로 내원했다. 24세부터 이런 에피소드가 있었지만 지난 6주 동안 악화되었다. 복통 부위와 강도는 다양하고 에피소드 동안 하루 3~4회 배변한다. 월경은 31일 간격으로 규칙적이고 양은 보통이며 월경 중 하복부 통증은 중등도이다. 2개월 전 다른 도시로 이사해 새롭고 힘든 일을 시작했다. 어머니는 10년 동안 우울증을 앓고 있다. 흡연과 음주는 하지 않고 종합비타민과 통증이 있을 때 가끔 나프록센을 복용한다. 체온 37.4°C(99.3°F), 맥박 88회/분, 혈압 110/82mmHg이다. 복부검사는 정상이고 혈색소 14.1g/dL, 백혈구 8,100/mm³, ESR 15mm/h, IgA 항조직 트랜스글루타미나제 항체 음성이다. 추가 평가에서 가장 가능성 높은 소견은 무엇인가?

## 선택지

A. 체중 감소
B. 선홍색 혈변
C. 배변 후 복통 완화
D. 야간 복통

## 해설


오랜 기간 반복되는 복통·팽만과 묽은 변, 스트레스 관련 악화 및 경고 소견 부재는 IBS에 부합한다. 추가로 기대하는 소견은 배변 후 통증 완화(C)이다. 본문에서 이미 확인한 사실로 덧붙이거나 없는 변비를 만들어 넣지 않는다. IBS 통증은 배변과 관련되어 호전하거나 때로 악화할 수도 있어 완화가 모든 환자의 필수조건은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008793 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: IBS의 배변 관련 통증 완화 C 유지. 본문에 없는 변비와 이미 확인된 배변 후 호전을 추가한 설명 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008793
