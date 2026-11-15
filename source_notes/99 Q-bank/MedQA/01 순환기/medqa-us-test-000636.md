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
explanation_status: "manual-reviewed"
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

55세 남성이 호흡곤란과 기좌호흡으로 내원했다. 과거 심근경색을 앓았고, 진찰에서 경정맥 팽창과 양쪽 폐기저부 수포음이 있다. 흉부 X선은 폐울혈을 보인다. 안정화와 병행해 심실 수축기능 및 판막 이상을 함께 평가할 첫 검사는?

## 선택지

A. 흉부 CT
B. 경흉부 심초음파
C. 운동부하 심전도
D. 심근 생검

## 해설


심부전이 의심되면 경흉부 심초음파에서 좌우심실 기능과 판막, 구조 변화를 함께 본다. 박출률과 원인 소견은 이후 치료 선택에 도움이 된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 과거 MI 뒤 운동호흡곤란·기좌호흡/야간호흡곤란의 구조적 심장질환 평가에는 심초음파 B가 적합. 이미 시행한 ECG/흉부검사 이후 단계 일치.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000636
