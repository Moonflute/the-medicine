---
type: qbank
schema_version: 1
id: medqa-us-train-003841
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:29d2fab987f309fdd77216b796952401f2a57973c7a95d2fbc5c4818a8e8f2b8
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "doxorubicin cardiomyopathy"
  - "dilated cardiomyopathy"
  - "systolic heart failure"
  - "increased ventricular cavity"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOq3vOuzkeymnSAoQ2FyZGlvbXlvcGF0aHkpLm1k
  - MDEg7Iic7ZmY6riwL-2ZleyepeyEsSDsi6zqt7zrs5Hspp0gKERpbGF0ZWQgQ2FyZGlvbXlvcGF0aHkpLm1k
  - MDEg7Iic7ZmY6riwL-unjOyEsSDsi6zrtoDsoIQgKOuwley2nOuloCDqsJDshowpIChDaHJvbmljIEhlYXJ0IEZhaWx1cmUgd2l0aCBSZWR1Y2VkIEVqZWN0aW9uIEZyYWN0aW9uIChIRnJFRikpLm1k
question_type: association
difficulty: standard
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
  - ZHJ1ZzoxMCDsooXslpEvRG94b3J1YmljaW4ubWQ
medical_review_status: "content-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 확장성 심근병증의 잘못된 이완기 기능 선지 교정."
curation_status: "revised"
curation_reason: "확장성 심근병증의 잘못된 이완기 기능 선지 교정."
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

59세 여성이 유방암으로 독소루비신 치료를 받은 지 4년 뒤 점차 심해지는 운동 시 호흡곤란과 다리 부종으로 내원했다. 심첨부에서 S3가 들린다. 치료 관련 심근병증을 뒷받침하는 심초음파 소견은?

## 선택지

A. 정상 크기의 좌심실과 좌심실 이완만 저하
B. 좌심실 유출로 압력차 상승과 비대칭 심실중격 비후
C. 우심실 단독 확장과 유지된 좌심실 수축
D. 좌심실 확장과 전반적인 좌심실 수축기능 저하

## 해설

안트라사이클린 관련 심근 손상은 치료 후 수년 뒤에도 심부전으로 나타날 수 있다. 전반적인 좌심실 수축기능이 저하되고 좌심실 확장이 동반될 수 있다. 병력만으로 원인을 확정하지 않고 다른 심부전 원인도 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 확장성 심근병증의 잘못된 이완기 기능 선지 교정.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003841
- https://academic.oup.com/eurheartj/article/43/41/4229/6673995

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
