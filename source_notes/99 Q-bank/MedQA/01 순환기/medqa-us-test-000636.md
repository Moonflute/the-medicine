---
type: qbank
schema_version: 1
id: medqa-us-test-000636
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:5286b54f29555a4a00e14057c7ec5bfe72020c400916222754b4bd1756f0500f
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "심부전"
  - "좌심실 기능부전"
  - "기좌호흡"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gOyghC5tZA
question_type: investigation
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

55세 남성이 심한 기침과 호흡곤란으로 응급실에 왔다. 몇 걸음만 걸어도 숨이 차서 앉아 쉬어야 하며 밤에 호흡곤란이 가장 심해 베개를 세 개 이상 사용해야 편하게 잘 수 있다. 밤에만 기침이 나지만 잠에서 깰 정도로 지속된다. 5년 전 ‘심장마비’를 겪었고 의사의 만류에도 정기적으로 술을 마신다. 최근 검사 결과와 심전도, 흉부 X선이 있다. 다음 중 가장 적절한 다음 단계는?

## 선택지

A. 컴퓨터단층촬영(CT)
B. 심초음파
C. 운동부하검사
D. 심장 생검

## 해설


심부전 증상과 과거 심근경색 이력이 있을 때 우선 심초음파로 좌우 심실 기능 및 판막 상태를 평가한다. 이는 치료 방향을 결정하는 핵심 검사이다. 따라서 가장 적절한 다음 단계는 심초음파이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 과거 MI 뒤 운동호흡곤란·기좌호흡/야간호흡곤란의 구조적 심장질환 평가에는 심초음파 B가 적합. 이미 시행한 ECG/흉부검사 이후 단계 일치.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000636
