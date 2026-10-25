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
answer: "A"
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

45세 남성이 갑작스러운 왼쪽 허리 아래 통증과 혈뇨로 응급실에 왔다. 통증은 둔하고 지속적이며 정확한 위치를 짚기 어렵다. 지난 2주 동안 체중이 3 kg 늘고 신발이 꽉 끼었다. 만성질환, 최근 복부 외상이나 질병은 없으며 이전에 혈뇨를 본 적도 없다. 왼쪽 상완, 가슴, 오른쪽 허벅지에 언제 생겼는지 모르는 멍이 있고 양쪽 다리와 손에 부종이 있다. 소변검사에서 혈액 3+, 단백질 4+였다. 기저질환으로 인한 합병증을 진단하는 데 가장 도움이 될 검사는?

## 선택지

A. 조영제를 사용한 CT 혈관조영술
B. 비조영 CT
C. 방광경검사
D. 신장 생검

## 해설

심한 단백뇨·부종에 새 옆구리 통증과 혈뇨가 더해지면 신증후군의 과응고성과 관련된 신정맥 혈전증을 고려한다. 선택지 중 정맥 충만을 평가할 수 있는 적절한 조영 CT가 유용하다. 기전은 신정맥 유출 장애이며 요관 결석에 의한 요로 폐색과 다르다. 조영제 사용은 신기능·상황을 고려한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000305

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 신정맥 혈전을 요로 폐색으로 설명한 오류 교정.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
