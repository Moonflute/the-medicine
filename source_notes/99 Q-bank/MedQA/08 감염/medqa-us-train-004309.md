---
type: qbank
schema_version: 1
id: medqa-us-train-004309
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ce23c4a70885b9fbf342e4aace3b454ec10f8009571460b8f7723b4ce9c5f34c
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "만성 C형 간염"
  - "가교성 간섬유화"
  - "HCV RNA"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_rp4zshLEgQ-2YlSDqsITsl7wgKENocm9uaWMgSGVwYXRpdGlzIEMgKEhDVikpLm1k
question_type: 임상증례 객관식
difficulty: simple
answer: "D"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 구형 interferon 요법을 DAA 기반 HCV 치료로 교정."
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNCDqsITri7Tst4wvTGFtaXZ1ZGluZS5tZA
curation_status: "revised"
curation_reason: "구형 interferon 요법을 DAA 기반 HCV 치료로 교정."
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

정맥 약물 사용력이 있는 42세 남자가 3주간 지속된 피로와 권태감으로 응급실에 왔다. 무기력하고 공막에 황달이 있으며 간비대가 있다. AST 600, ALT 750으로 상승했고 HCV RNA 양성이다. 알부민 3.8 g/dL, PT 12초이며 간 생검에서 심한 염증과 가교성 섬유화가 보인다. 현재 가장 적절한 치료는 무엇인가?

## 선택지

A. 인터페론
B. 리바비린
C. 라미부딘
D. 간기능·병용약·이전 치료력을 평가한 뒤 적합한 경구 DAA 병합요법

## 해설

HCV RNA 양성과 가교성 섬유화가 있어 치료 평가가 필요하다. 현행 치료는 경구 직접작용항바이러스제(DAA) 병합요법을 중심으로 하며, 간경변·간기능, 이전 치료력, 약물 상호작용 및 HBV 동시감염을 평가해 적합한 요법을 선택한다. 과거 interferon-ribavirin 병합을 표준 첫 치료로 제시하지 않는다. Lamivudine은 HCV 치료제가 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 구형 interferon 요법을 DAA 기반 HCV 치료로 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.hcvguidelines.org/guidance/initial-treatment-of-adults-with-hcv-infection/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004309

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
