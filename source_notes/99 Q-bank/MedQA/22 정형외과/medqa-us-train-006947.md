---
type: qbank
schema_version: 1
id: medqa-us-train-006947
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:24bc3222c3258a472294959b22324fbffbb813ba710047b5890ab2e76af50fbb
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "요추 척추관 협착증"
  - "신경성 파행"
  - "굴곡 시 통증 완화"
question_type: diagnosis
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-yymey2lO2YkeywqeymnSAoU3BpbmFsIFN0ZW5vc2lzKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 남성이 서 있거나 내리막길을 걸으면 양쪽 종아리와 엉덩이가 저리다고 한다. 발 맥박은 정상이다. 혈관성 파행보다 요추 척추관협착증을 지지하는 소견은?

## 선택지

A. 똑바로 선 채 멈추기만 해도 같은 정도로 좋아진다
B. 걸은 거리만큼 항상 일정하게 아프고 자세는 영향을 주지 않는다
C. 발이 차고 발등동맥이 만져지지 않는다
D. 걸음을 멈추지 않아도 카트에 기대 앞으로 숙이면 덜 아프다

## 해설


요추 신경성 파행은 서 있거나 허리를 젖힐 때 악화되고 앞으로 굽히거나 앉을 때 완화된다. 휴식뿐 아니라 자세의 효과가 중요한 단서다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 영어/한국어 본문·네 선지·정답 C·해설 개별 대조. 서기/내리막에서 악화하고 굴곡 시 완화되는 요추관협착증의 신경인성 파행 설명은 일관됨. 감염 선행력/HLA-B27 가족력은 결정적 반증 아님.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006947
