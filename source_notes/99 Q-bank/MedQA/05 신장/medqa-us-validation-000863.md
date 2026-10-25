---
type: qbank
schema_version: 1
id: medqa-us-validation-000863
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:099172e9c958bee63c296b369d40faa82a0273722c0032d82d2d8b37d73281c7
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "요독성 뇌병증"
  - "중증 급성 신손상"
  - "혈액투석"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
question_type: management
difficulty: complex
answer: "B"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvTGFjdHVsb3NlLm1k
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
curation_status: "revised"
curation_reason: "누락된 SLE 병력을 복원하고 숫자만이 아닌 요독성 뇌병증을 투석 근거로 설명."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

44세 여성이 공원에서 혼잣말을 하며 발견되어 응급실에 왔다. 전신홍반루푸스가 있으나 수년 전 methotrexate 복용을 중단했다. 2주간 쇠약, 메스꺼움, 구토가 있었고 현재 혼란, 전신 쇠약, 경정맥 팽창, 하지 부종, 나트륨 137, 칼륨 5.5, 중탄산염 15, BUN 94, 크레아티닌 5.5 mg/dL이다. 가장 적절한 다음 처치는?

## 선택지

A. 락툴로오스 투여
B. 혈액투석
C. 메토트렉세이트 재시작
D. 수분 제한

## 해설

중증 신기능 저하에 혼돈·지남력 장애, 체액 과다와 산증이 동반되어 요독성 뇌병증을 포함한 긴급 투석 적응증을 고려한다. 선택지 중 혈액투석이 적합하며 Cr 수치 하나만으로 결정하는 것은 아니다. SLE 관련 신장 손상 등 원인 평가와 다른 의식 장애 원인 확인·안정화를 함께 시행한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000863

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 누락된 SLE 병력을 복원하고 숫자만이 아닌 요독성 뇌병증을 투석 근거로 설명.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
