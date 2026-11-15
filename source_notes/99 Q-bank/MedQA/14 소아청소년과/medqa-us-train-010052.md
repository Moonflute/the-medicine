---
type: qbank
schema_version: 1
id: medqa-us-train-010052
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:64e16bfb2273248dfdef866a25eb8374024b494998c5610b0748b320d512b681
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "장회전이상"
  - "중장염전"
  - "담즙성 구토"
  - "Intestinal malrotation"
question_type: investigation
related_disease_slugs:
  - MTIg7IKw6rO8L-yWkeyImCDqs7zri6Tspp0gKEh5ZHJhbW5pb3MpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

생후 3주 영아가 녹색으로 토했다. 금식, 위 감압과 정맥 수액을 시작했으며 현재 안정적이다. 복부 X선에서 뚜렷한 폐쇄 소견이 없다. 장회전이상과 중장염전을 배제하기 위해 소아외과에 즉시 연락하면서 시행할 검사는?

## 선택지

A. 날문 초음파만 시행
B. 복부 X선을 다음 날 다시 촬영
C. 응급 상부위장관 조영검사
D. 대변 잠혈 검사

## 해설

영아의 담즙성 구토에서는 단순 X선이 정상이어도 장회전이상과 중장염전을 배제할 수 없다. 안정적이면 긴급 상부위장관 조영검사가 적절하며, 쇼크나 복막염이 있으면 영상 때문에 수술 평가를 늦추지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 담즙성 구토의 긴급도와 안정 상태의 UGI 검사 역할을 명확화.
- https://acsearch.acr.org/list/TopicNarrativePdf?topicId=103

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010052
- https://acsearch.acr.org/docs/69445/Narrative/
