---
type: qbank
schema_version: 1
id: medqa-us-train-007199
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:55f57f4147f90c1dbf605ea8e0af0889aa6a6d9e38f866d52282800ba6030d33
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "수질해면신"
  - "신장결석"
  - "혈뇨"
  - "신장 석회화"
related_disease_slugs:
  - MDUg7Iug7J6lL-2YiOuHqC5tZA
  - MjAg67mE64eo6riw6rO8L-yalOyEnSAoVXJpbmFyeSB0cmFjdCBzdG9uZSkubWQ
question_type: prognosis
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
curation_status: "revised"
curation_reason: "UPJ 결석을 하부 요관으로 잘못 읽은 해설을 교정하고 수질 해면신 단서를 연결."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

그 외에는 건강한 32세 남자가 9시간 동안 지속된 옆구리 통증과 심한 오심으로 내원했다. 통증은 심하고 간헐적이며 오른쪽 옆구리에 국한되고 사타구니로 방사된다. 반복적인 신장결석 병력이 있다. 담배는 피우지 않고 사회적으로 술을 마신다. 체온은 37.0°C(98.6°F), 맥박 90회/분, 호흡수 25회/분, 실내 공기 산소포화도 99%이다. 통증 때문에 가만히 누워 있지 못하고 오른쪽 늑골척추각에 심한 압통이 있다. 비조영 복부·골반 CT에서 정상 크기의 신장에 요관신우이행부에 걸린 방사선 불투과성 결석 하나와 양측 신장의 피라미드형 수질 석회화 군집이 보인다. 정맥 신우조영술에서 양측 신장 수질 피라미드와 유두에 최대 0.3cm 크기의 작은 낭종이 여러 개 보인다. 다음 중 이 환자에게서 추가로 가장 예상되는 소견은 무엇인가?

## 선택지

A. 신세포암
B. 혈뇨
C. 단백뇨
D. 악성 고혈압

## 해설

수질·유두부 집합관의 작은 낭성 확장과 양측 수질 석회화는 수질 해면신을 시사한다. 결석·혈뇨·요로감염이 동반될 수 있어 혈뇨가 가장 적합하다. 본문 결석 위치는 신우요관이행부(UPJ)이며 하부 요관이라고 바꾸지 않는다. 이 소견이 신세포암이나 악성 고혈압을 뜻하지는 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007199

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: UPJ 결석을 하부 요관으로 잘못 읽은 해설을 교정하고 수질 해면신 단서를 연결.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
