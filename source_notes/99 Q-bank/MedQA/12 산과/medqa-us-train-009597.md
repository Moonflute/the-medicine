---
type: qbank
schema_version: 1
id: medqa-us-train-009597
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:493f858fe41c1ca89e0286b670e84c6667e7096dfe8b4d061f47a925a85f2db6
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "intrauterine fetal demise"
  - "자궁 내 태아사망"
  - "fetal demise"
  - "Fetal demise"
question_type: diagnosis
related_disease_slugs:
  - MDkg7ZiI7JWhL-2MjOyihSDtmIjqtIDrgrQg7J2R6rOgIChEaXNzZW1pbmF0ZWQgSW50cmF2YXNjdWxhciBDb2FndWxhdGlvbiwgRElDKS5tZA
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

30세 초임부가 정기검진을 위해 산부인과에 내원했다. 임신 22주이고 아기가 이전보다 덜 움직인다고 한다. 통증이나 질출혈은 없다. 초음파에서 태아 심장활동과 움직임이 없었고 1시간 후 반복한 검사에서도 같았다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 계류유산
B. 태아사망
C. 불완전 유산
D. 자궁외임신

## 해설

임신 22주에 반복 초음파로 태아 심장활동이 관찰되지 않는다는 소견은 자궁 내 태아 사망을 지지한다. 본문은 첫 검사와 1시간 후 재검 모두 심장활동과 움직임이 없다고 명시한다. 따라서 정답은 B이다. 해설의 '전혀 보이고'는 '전혀 보이지 않고'의 오류였다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 반복 초음파에서 태아 심박동·움직임이 없다는 핵심을 해설에서 반대로 쓴 부정 누락을 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009597
