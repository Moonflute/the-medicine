---
type: qbank
schema_version: 1
id: medqa-us-train-005462
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2969353e21b967877d1ba7099091d4a2bc81330f9a2707886616501a6c4ea0c6
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "군발두통"
  - "자율신경 증상"
  - "수마트립탄"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_qtbDrsJzrkZDthrUgKENsdXN0ZXIgaGVhZGFjaGUpLm1k
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmVyYXBhbWlsLm1k
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

군발두통 환자에게 매일 발작이 반복된다. 발작은 고유량 산소로 가라앉지만, 앞으로 발생 빈도를 줄이고 싶다. 심전도에 전도 이상은 없다. 초기 예방치료와 감시로 적절한 것은?

## 선택지

A. 고유량 산소를 증상 없는 날에도 예정대로 투여한다
B. 발작 때마다 아세트아미노펜을 복용한다
C. 심전도 추적 없이 베라파밀을 증량한다
D. 베라파밀을 시작하고 증량 시 심전도를 추적한다

## 해설

베라파밀은 군발두통의 대표적 예방치료다. 서맥이나 방실전도 장애를 확인하기 위해 시작 전과 증량 중 심전도를 본다. 산소는 발작 중 급성 치료에 사용한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 군발두통 급성기에 피하 수마트립탄 C를 유지하되 혈관영상은 언제나 불필요하다는 일반화를 제거했다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/cg150/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005462
- https://www.e-hpr.org/journal/view.php?number=949
