---
type: qbank
schema_version: 1
id: medqa-us-validation-000843
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:d46160d11e975761a0dbaad229afe53f061f1f3de14eee6f10328adbceb73b4d
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "신정맥 혈전증"
  - "막성 신병증"
  - "신증후군"
related_disease_slugs:
  - MDUg7Iug7J6lL-yLoOygleunpSDtmIjsoITspp0gKFJlbmFsIFZlaW4gVGhyb21ib3NpcykubWQ
  - MDUg7Iug7J6lL-yLoOymne2bhOq1sCAoTmVwaHJvdGljIFN5bmRyb21lKS5tZA
question_type: diagnosis
difficulty: complex
answer: "C"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "신정맥 혈전의 소견을 막성 신병증의 고유 병태생리로 동일시한 설명 수정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

52세 남성이 갑작스러운 오른쪽 옆구리 통증, 메스꺼움, 구토로 응급실에 왔다. 양쪽 다리 부종, 단백뇨, 혈뇨가 있고 도플러 초음파에서 오른쪽 신장이 커져 있으며 정맥 신호가 없다. 이 상태의 가장 가능성 높은 기저 원인은?

## 선택지

A. 급성 신우신염
B. 고혈압성 신장질환
C. 막성 신병증
D. 음경암

## 해설

신장 비대·정맥 혈류 소실과 급성 옆구리 통증은 신정맥 혈전증을 시사한다. 심한 단백뇨·부종의 신증후군에서는 과응고성이 생기고, 특히 막성 신병증에서 혈전 위험이 높아 C가 적합하다. 혈전 자체가 막성 신병증의 확진 소견은 아니며 다른 기저 원인도 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000843

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 신정맥 혈전의 소견을 막성 신병증의 고유 병태생리로 동일시한 설명 수정.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
