---
type: qbank
schema_version: 1
id: medqa-us-train-005429
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a82d5eba6abcbab735a8e4f5456b1d775e7042aeac13cfa655ec1b93af7c0226
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "다발성경화증"
  - "재발완화형 경과"
  - "초기 시신경염"
question_type: prognosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_ri6TrsJzshLEg6rK97ZmU7KadIChNdWx0aXBsZSBzY2xlcm9zaXMpLm1k
  - MTgg7JWI6rO8L-yLnOyLoOqyveyXvCAob3B0aWMgbmV1cml0aXMpLm1k
difficulty: standard
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

55세 남자가 갑자기 시작된 복시로 내원했다. 12년 전 통증성 시력상실이 호전된 이후 통증성 시력상실, 오른팔 근력저하와 요폐가 반복되었고 스테로이드에 반응했다. 다음 중 이 질환의 더 양성인 경과와 관련된 특징은?

## 선택지

A. 발병 연령
B. 인종
C. 초기 발현 증상
D. 초기 발작 횟수

## 해설

초기 증상이 시신경염이나 감각 증상인 MS는 초기 운동·소뇌·괄약근 증상보다 상대적으로 완만한 장애 경과와 연관될 수 있어 C가 정답이다. 그러나 이는 집단적 연관이지 개인의 양성 경과를 보장하지 않으며 'benign MS'도 장기 인지·시각·장애 부담이 없다는 뜻은 아니다. 발병 연령과 초기 재발 빈도도 예후에 관련되고, 본문의 많은 초기 재발·요폐는 불리한 요소일 수 있다. 현재의 복시를 시신경염 자체와 동일시하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 초기 시신경염이 상대적 양호 예후와 연관될 수 있다는 C는 유지하되 연령·초기 재발수는 예후와 무관하다는 오류를 제거했다.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC2440583/
- 공식/학회 근거: https://pubmed.ncbi.nlm.nih.gov/22269944/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005429
