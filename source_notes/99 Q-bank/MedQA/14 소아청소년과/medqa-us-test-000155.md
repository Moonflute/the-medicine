---
type: qbank
schema_version: 1
id: medqa-us-test-000155
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:ab7f0317a8a9c1f29494eda0a46de1f9d3e33f094dbb8921f99aa3519c941bb0
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "수두"
  - "수두-대상포진 바이러스"
  - "수포성 발진"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7IiY65GQIChWYXJpY2VsbGEpLm1k
  - MDgg6rCQ7Je8L-yImOuRkC3rjIDsg4Htj6zsp4Qg67CU7J2065-s7IqkIOqwkOyXvCAoVmFyaWNlbGxhLVpvc3RlciBWaXJ1cyBJbmZlY3Rpb24pLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

4세 남아가 3일 동안 전신 발진으로 내원했다. 심한 가려움으로 잠을 잘 못 자고 발열, 두통, 근육통도 있다. 5일 전 콧물이 일반의약품으로 호전되었고 1주 전 캠핑을 다녀왔으며 어린이집에 다닌다. 키는 55백분위수, 체중은 50백분위수이다. 체온 38.2°C, 맥박 분당 97회, 혈압 96/60 mmHg이다. 얼굴, 몸통, 사지에 반점, 구진, 딱지 병변과 복부와 등에 액체로 찬 수포가 있다. 경부 림프절병증은 없다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 홍역
B. 우루시올 유발 피부염
C. 수두
D. 풍진

## 해설

심한 가려움과 함께 반점·구진·수포·딱지가 동시에 관찰되는 전신 발진은 수두(C)에 전형적이다. 수두는 수두-대상포진바이러스 감염으로 발생하며 수포 병변과 호흡기 전파 등을 통해 사람 간 퍼질 수 있다. 어린이집은 노출 환경이 될 수 있지만 캠핑 자체가 특정 전파 경로를 증명하지는 않는다. 홍역·풍진의 전형적 발진은 이런 여러 단계의 수포성 병변 조합과 다르고, 우루시올 접촉피부염은 보통 노출 부위의 접촉 양상과 관련된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 미표시 실제 검수. 캠핑 자체를 수두 전파경로라고 한 창작 설명 삭제. 여러 단계 발진 동시존재로 C 유지.
- https://www.cdc.gov/chickenpox/about/index.html
- https://www.cdc.gov/chickenpox/downloads/Fact-sheet-Varicella-diagnosis-508.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000155
