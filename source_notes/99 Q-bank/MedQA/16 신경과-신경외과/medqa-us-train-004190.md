---
type: qbank
schema_version: 1
id: medqa-us-train-004190
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:19906fc4ed3ac1b3744e6ed6826b89ee8c3e4cd86b78137f9986f691fb76b76d
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "알츠하이머병"
  - "치매"
  - "전반적 뇌 위축"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-y5mOunpCAoRGVtZW50aWEpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

72세 여성이 몇 년에 걸쳐 최근 대화와 약속을 반복해서 잊기 시작했다. 이제 익숙한 길에서도 헤매고 금전 관리를 가족에게 맡겼다. 초기 환시·서동, 갑작스러운 악화나 행동 탈억제는 없다. 가장 가능성 높은 진단은?

## 선택지

A. 루이소체 치매
B. 행동변이 전두측두치매
C. 정상압 수두증
D. 알츠하이머 치매

## 해설

초기 삽화기억 장애가 서서히 진행해 독립적인 일상 기능을 떨어뜨리는 경과는 알츠하이머 치매를 시사한다. 가역 요인과 다른 치매 유형도 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 길을 잃고 지남력이 저하된 환자를 일상 기능이 유지된다고 한 오류를 제거했다. 진행성 기억 우세 인지저하의 C를 유지하되 뇌위축 자체는 비특이적임을 설명한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004190
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12173843/
