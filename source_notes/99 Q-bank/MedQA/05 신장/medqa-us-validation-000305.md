---
type: qbank
schema_version: 1
id: medqa-us-validation-000305
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:ca630e0a7b0c346b5c6d893de9f8fff7628746d2bb561a2cca5256b118791966
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "신증후군"
  - "신정맥 혈전증"
  - "단백뇨"
related_disease_slugs:
  - MDUg7Iug7J6lL-yLoOymne2bhOq1sCAoTmVwaHJvdGljIFN5bmRyb21lKS5tZA
  - MDUg7Iug7J6lL-yLoOygleunpSDtmIjsoITspp0gKFJlbmFsIFZlaW4gVGhyb21ib3NpcykubWQ
  - MDUg7Iug7J6lL-uLqOuwseuHqC5tZA
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "신정맥 혈전을 요로 폐색으로 설명한 오류 교정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

신증후군이 확인된 45세 남자가 갑작스러운 옆구리 통증과 육안적 혈뇨로 내원했다. 도플러 초음파로 신정맥을 충분히 볼 수 없었다. 신기능은 정상이고 조영제 금기는 없다. 신정맥 혈전증을 확인할 다음 검사는?

## 선택지

A. 신정맥을 평가하는 조영 CT
B. 비조영 결석 CT
C. 방광경검사
D. 신장 생검

## 해설

신증후군 환자에서 갑자기 옆구리가 아프고 피가 섞인 소변이 나오면 신정맥 혈전증을 의심한다. 정맥이 조영되는 시기에 촬영한 CT로 충만결손을 확인할 수 있다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000305
- https://kdigo.org/guidelines/gd/

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 신정맥 혈전을 요로 폐색으로 설명한 오류 교정.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
