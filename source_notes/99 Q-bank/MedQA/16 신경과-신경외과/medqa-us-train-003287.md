---
type: qbank
schema_version: 1
id: medqa-us-train-003287
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b646ffba9173ea352dfa43416e3efc568d17edc4772dcec48723ab850b9879f4
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "migraine-associated nausea"
  - "chlorpromazine antiemetic"
  - "acute migraine"
  - "photophobia"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tjrjrkZDthrUgKE1pZ3JhaW5lKS5tZA
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

19세 여성이 6시간 동안 여러 차례 구토하여 응급실에 왔다. 피나 담즙은 없고 욱신거리는 한쪽 두통과 광선공포가 시작된 직후 구토가 시작되었다. 과거에도 비슷한 두통이 있었다. 다음 중 구토에 적절한 치료는?

## 선택지

A. 프로프라놀롤
B. 에르고노빈
C. 클로르프로마진
D. 칼슘통로차단제

## 해설

일측 박동성 두통·광선공포와 반복 구토는 편두통에 합당하다. 주어진 선지 중 클로르프로마진(C)은 도파민 수용체 차단을 통해 구역·구토를 억제하는 약으로 적절하다. 프로프라놀롤과 일부 칼슘통로차단제는 예방 목적으로 쓰일 수 있으나 현재 구토를 치료하는 선택이 아니다. 모든 편두통 구토에 가장 효과적이라는 보편적 우열을 뜻하지 않으며, 실제 투여 시 저혈압·진정·추체외로계 부작용 등을 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 클로르프로마진을 급성 편두통 구토에 언제나 가장 효과적인 약이라고 단정한 표현을 제한했다. 주어진 선지 중 항구토 역할에 맞는 C를 유지한다.
- 공식/학회 근거: https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=35a743a1-5354-2c50-e063-6394a90a15f9&type=display

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003287
