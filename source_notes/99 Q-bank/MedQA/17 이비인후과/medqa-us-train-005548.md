---
type: qbank
schema_version: 1
id: medqa-us-train-005548
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:daf3ddcdc3292086342d4786177af6bc2504d3c4b73bfb4e060d301a859cd4e8
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "이하선 선양낭성암"
  - "안면신경 손상"
  - "아랫입술 마비"
question_type: prognosis
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-uyqOuniOu5hCAoQmVsbCdzIHBhbHN5KS5tZA
  - MTcg7J2067mE7J247ZuE6rO8L-uLpO2YleyDmOyihSAoUGxlb21vcnBoaWMgQWRlbm9tYSkubWQ
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 남자가 2년 동안 점점 커지는 오른쪽 볼 부종과 2개월 동안 반복되는 구강궤양으로 내원했다. 이하선의 선양낭성암으로 진단되어 우측 전이하선절제술을 예정하고 있다. 다음 중 가장 위험이 높은 초기 합병증은?

## 선택지

A. 오른쪽 귓불의 감각과민
B. 오른쪽 귀의 청각과민
C. 오른쪽 아랫입술 마비
D. 혀 뒤쪽 1/3의 미각과 감각 저하

## 해설

전이하선절제술에서는 이하선을 통과하는 안면신경과 그 말초 가지가 손상될 수 있다. 특히 변연하악가지(marginal mandibular branch, CN VII) 손상은 같은 쪽 하순의 운동 약화/비대칭을 일으켜 C가 가장 적절하다. 이는 하악신경 V3의 감각 손상이 아니다. 귓불에서는 큰귓바퀴신경 손상에 따른 감각 저하가 더 전형적이고, 고삭·등골근신경보다 원위부인 이하선 수술이므로 청각과민이나 혀 뒤 1/3 감각 소실은 덜 적합하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 이하선 수술 후 하순 마비는 하악신경 V3의 감각 손상이 아니라 안면신경 변연하악가지의 운동 손상임을 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005548
