---
type: qbank
schema_version: 1
id: medqa-us-train-002237
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bb9617979eec4a9e4d81f0b0d2bcec550174ca50c645e59755d92cc7ce34e86b
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "stable angina"
  - "exercise stress testing"
  - "ST-segment depression"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yViOyglSDtmJHsi6zspp0gKFN0YWJsZSBBbmdpbmEpLm1k
question_type: investigation
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTml0cm9nbHljZXJpbi5tZA
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 발병 초기 troponin 음성을 배제 진단으로 오해한 검사 선택지 교정."
curation_status: "revised"
curation_reason: "발병 초기 troponin 음성을 배제 진단으로 오해한 검사 선택지 교정."
curation_reviewed_at: "2026-10-25"
wrong_notes_review_status: "reviewed"
curation_disposition: "selected"
---

# MedQA US 임상문제

## 문제

36세 남성이 운동 중 시작된 턱으로 방사되는 흉골 뒤 작열성 통증으로 내원했다. 증상 시작은 20분 전이며 자세나 기침에 따라 달라지지 않는다. 혈압 140/90 mmHg, 맥박 84회/분, 호흡 14회/분, 체온 36.6°C이고 창백과 발한이 있다. 설하 니트로글리세린 투여 후 통증은 사라졌다. ECG에서 I, II, V3~V6의 R파 진폭 증가와 같은 유도의 0.5 mm ST 하강이 있으며 초기 신속 troponin은 음성이다. 다음 검사 접근으로 가장 적절한 것은?

## 선택지

A. CK-MB 한 번만 측정한 뒤 ACS를 배제한다
B. 흉부 X선만으로 ACS를 배제한다
C. 임상 위험도 평가 없이 즉시 CT 혈관조영만 시행한다
D. 반복 ECG와 연속 고감도 심장 troponin 검사로 ACS를 평가한다

## 해설

발병 20분 무렵의 troponin 음성은 MI를 배제하지 못한다. 증상이 사라져도 허혈성 흉통·발한 및 ST 하강이 있으므로 반복 ECG와 연속 고감도 troponin을 포함한 ACS 평가가 우선이다. 이를 끝내기 전에 바로 운동부하검사를 시행하지 않는다. 후속 영상·부하검사·관상동맥 평가 여부는 연속 검사와 위험도에 따라 결정한다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 발병 초기 troponin 음성을 배제 진단으로 오해한 검사 선택지 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.jacc.org/doi/10.1016/j.jacc.2024.11.009

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002237

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
