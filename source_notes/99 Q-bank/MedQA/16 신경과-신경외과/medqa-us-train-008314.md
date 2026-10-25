---
type: qbank
schema_version: 1
id: medqa-us-train-008314
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:529c66ba2004fa75141d9b9692571f37d0ed22914656c1b918a271c2d75ee199
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "pediatric migraine"
  - "migraine without aura"
  - "acetaminophen"
  - "migraine"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tjrjrkZDthrUgKE1pZ3JhaW5lKS5tZA
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

10세 여아가 1시간 동안 지속된 심한 박동성 두통으로 내원했다. 우측 전두측두부에 발생하며 최근 2개월 동안 다섯 번째이다. 이전에도 축구 연습 후 두통이 시작되어 방에 들어가 커튼을 닫고 몇 시간 잤으며 깨어나면 호전되었다. 한 달 전 근시 진단을 받고 안경을 쓰기 시작했다. 활력징후는 정상이고 안저검사는 협조하지 않아 평가가 불충분하다. 가장 적절한 다음 처치는?

## 선택지

A. 신경시각기능 평가(neuro-optometric assessment)
B. 아세트아미노펜 치료
C. 뇌 MRI
D. 아시클로버 치료

## 해설

반복되는 일측 박동성 두통과 활동 후 발생, 어두운 방에서 수면 후 호전은 소아 편두통을 시사한다. 보기 중 acetaminophen(B)은 급성 통증 완화에 적절한 선택이다. 본문에는 구역이 명시되어 있지 않다. 안저가 평가되지 않았다는 사실을 정상 안저로 간주하지 않으며, 진행성 양상·지속 구토·국소 신경징후 등 경고소견이 있으면 재평가와 영상 필요성을 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 소아 편두통의 acetaminophen B 확인. 본문에 없는 구역질을 실제 증상으로 추가한 해설 교정 및 neuro-optometric 번역 수정.
- 공식/학회 근거: https://www.aan.com/Guidelines/home/GetGuidelineContent/977

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008314
