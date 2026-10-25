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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmVyYXBhbWlsLm1k
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

50세 남자가 일주일 동안 하루에도 여러 번, 특히 밤에 발생하는 왼쪽 눈 뒤의 찌르는 듯한 두통으로 내원했다. 왼쪽 이마 발한, 콧물과 눈물흘림이 있고 비조영 두부 CT는 정상이다. 고유량 산소와 수액, 이부프로펜을 투여했지만 통증이 지속된다. 다음 중 가장 적절한 처치는?

## 선택지

A. 베라파밀
B. CT 혈관조영술
C. 피하 수마트립탄
D. 뒤아래 시상하부 심부뇌자극술

## 해설

밤에 반복되는 일측 안와뒤 찌르는 통증과 동측 눈물·콧물·발한은 군발두통에 합당하다. 고유량 산소 후에도 지속되면 금기를 확인하여 피하 수마트립탄(C)을 사용할 수 있다. 베라파밀은 주로 예방 치료이고 뇌심부자극은 일반적인 급성기 치료가 아니다. 새로 발생한 비전형 두통·신경징후 등이 있으면 이차 원인 영상평가가 필요할 수 있으므로 정상 단순 CT만으로 모든 혈관영상이 항상 불필요하다고 하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 군발두통 급성기에 피하 수마트립탄 C를 유지하되 혈관영상은 언제나 불필요하다는 일반화를 제거했다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/cg150/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005462
