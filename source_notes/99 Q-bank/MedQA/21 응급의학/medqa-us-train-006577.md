---
type: qbank
schema_version: 1
id: medqa-us-train-006577
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6cef0211e224b270b16622e9c4d7b27b05102fe260307769a9c47f5cfdcc2dcc
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "대량 수혈"
  - "구연산염 독성"
  - "전해질 이상"
question_type: mechanism
related_disease_slugs:
  - MDUg7Iug7J6lL-yghO2VtOyniCDsnbTsg4EubWQ
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
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 수혈 후 감각 이상에서 누락된 이온화 저칼슘혈증 선지를 교정"
curation_status: "revised"
curation_reason: "수혈 후 감각 이상에서 누락된 이온화 저칼슘혈증 선지를 교정"
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

67세 남성이 자살 시도 후 응급실에 내원했다. 손목을 절개한 채 아파트에서 손자에게 발견되었고 이송 중 소생술을 받았다. 허혈성 심장질환과 우울증 병력이 있다. 맥박은 거의 만져지지 않고 질문에 일관되게 반응하지 않는다. 체온은 98.2°F(36.8°C), 혈압은 107/48 mmHg, 맥박은 분당 160회, 호흡수는 분당 14회, 산소포화도는 99%이다. 혈액제제를 투여하자 3단위 후 혈압이 127/55 mmHg로 호전되었다. 신체진찰에서 입 주변이 저리고 손목 절개 부위에 통증이 있다고 호소한다. 다음 중 수혈 후 새로 나타난 입 주위 저림과 가장 관련이 깊은 전해질 이상은?

## 선택지

A. 고칼슘혈증
B. 이온화 칼슘 감소
C. 유리 철 증가
D. 검사 이상 없음

## 해설

혈액제제에 포함된 구연산은 칼슘을 결합해 이온화 칼슘을 낮출 수 있다. 수혈 후 새로 생긴 입 주위 저림은 이를 의심하게 하는 신경근 증상이며, 제시된 선택지에서는 이온화 저칼슘혈증이 가장 적절하다. 수혈량만으로 실제 저칼슘혈증을 확정할 수는 없으므로 이온화 칼슘을 측정해 확인한다. 구연산은 마그네슘에도 영향을 줄 수 있지만 원문처럼 칼슘 감소를 선택지에서 빼고 저마그네슘혈증만 정답으로 강제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 수혈 후 감각 이상에서 누락된 이온화 저칼슘혈증 선지를 교정
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://ccforum.biomedcentral.com/articles/10.1186/s13054-023-04327-7

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006577

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
