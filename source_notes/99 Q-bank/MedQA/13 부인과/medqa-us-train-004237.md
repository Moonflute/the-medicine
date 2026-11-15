---
type: qbank
schema_version: 1
id: medqa-us-train-004237
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f1e8456238172393ded3d1f9a836db0ad8200d5ce239f11db3baf38464212a80
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "포상기태"
  - "임신성 영양막 질환"
  - "융모성 부종"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-2PrOyDgeq4sO2DnCAoTW9sYXIgUHJlZ25hbmN5KS5tZA
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

임신 초기 자궁강 내용물을 제거한 뒤 병리와 유전자형 분석으로 부분 포상기태가 확진됐다. 추적하던 혈청 hCG가 처음 정상화됐다. FIGO 권고에 따른 다음 추적은?

## 선택지

A. 부분 포상기태도 모두 6개월간 매주 hCG 측정
B. 이 시점에서 확인 검사 없이 종료
C. 첫 정상화 한 달 뒤 hCG 확인 검사를 한 번 시행
D. 정상화 직후 예방적 항암치료

## 해설

부분 포상기태는 hCG가 처음 정상화된 뒤 한 달 후 확인 검사 한 번을 권고한다. 완전 포상기태는 정상화 후에도 보다 길게 추적한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 포상기태의 융모 부종·영양막 증식 C 유지. 임신 주수 13주 단정 및 양수성 융모증 오역을 삭제.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004237
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12411817/
