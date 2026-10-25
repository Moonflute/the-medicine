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

유방암으로 4년 전 독소루비신과 사이클로포스파미드 치료를 받은 59세 여성이 운동 시 호흡곤란과 다리 부종으로 내원했다. 심첨부에서 S3가 들리고 무릎 아래 함요부종이 있었다. 심초음파에서 가장 가능성 높은 변화는?

## 선택지

A. 심실강 크기는 정상이고 이완기 기능만 감소한다
B. 대동맥-좌심실 압력차가 커지고 동심성 심실비대가 나타난다
C. 심실강이 작아지고 심실중격이 비대칭적으로 두꺼워진다
D. 심실강이 확장되고 수축기 기능이 저하된다. 이완기 기능장애도 동반될 수 있다

## 해설

Doxorubicin 노출 뒤 진행하는 호흡곤란·부종과 S3는 심독성에 의한 확장성 심근병증을 시사한다. 전형적 소견은 좌심실 확장과 수축기 기능 저하이며 이완기 기능이 반드시 정상인 것은 아니다. 대동맥판 협착의 압력차 증가나 비대심근병증의 비대칭 중격 비대와 구분한다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 확장성 심근병증의 잘못된 이완기 기능 선지 교정.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003841

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
