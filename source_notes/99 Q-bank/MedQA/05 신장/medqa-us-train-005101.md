---
type: qbank
schema_version: 1
id: medqa-us-train-005101
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a1e333b1260a7315b0f210eb550e69410e6456a97e231f6cbe53d5103b9ff936
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "신증후군"
  - "저알부민혈증"
  - "심부정맥혈전증"
related_disease_slugs:
  - MDUg7Iug7J6lL-yLoOymne2bhOq1sCAoTmVwaHJvdGljIFN5bmRyb21lKS5tZA
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIChEZWVwIFZlaW4gVGhyb21ib3NpcykubWQ
question_type: diagnosis
difficulty: complex
answer: "D"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: "content-reviewed"
medical_reviewed_at: 2026-10-25
curation_status: "revised"
curation_reason: "원문에 없는 warfarin 복용을 삭제하고 미측정 albumin을 측정된 값처럼 설명하지 않음."
curation_reviewed_at: "2026-10-25"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

나이지리아 출신 57세 여자가 갑작스러운 하지의 심한 통증과 부종으로 응급실에 왔다. 도플러 초음파로 심부정맥혈전증을 확인해 헤파린을 시작했다. 혈청 칼슘은 5.7 mg/dL, 크레아티닌 1.7 mg/dL이고 전신 부종과 비대칭 하지 부종이 있다. 가장 가능성 높은 진단은?

## 선택지

A. V 인자 라이덴
B. 프로트롬빈 유전자 돌연변이
C. 간부전
D. 신증후군

## 해설

전신 부종과 심부정맥혈전증을 함께 설명하는 선택지는 신증후군이다. 단백 소실·저알부민혈증과 항응고 단백 소실 등으로 부종·혈전 위험이 증가할 수 있고 총칼슘이 낮게 측정될 수 있다. 다만 이 사례에는 albumin·요단백 정량·이온화칼슘이 제시되지 않아 추가 확인이 필요하다. 투여된 약물은 heparin이며 warfarin 복용은 본문에 없다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 원문에 없는 warfarin 복용을 삭제하고 미측정 albumin을 측정된 값처럼 설명하지 않음.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005101

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
