---
type: qbank
schema_version: 1
id: medqa-us-train-007092
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b0fa333caa8cd41a77ab6b8d7258103c62c7262efe50c3a67f386b42a81366ec
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "시한 증후군"
  - "산후 뇌하수체 괴사"
  - "뇌하수체 허혈"
  - "산후 저혈당"
question_type: diagnosis
related_disease_slugs:
  - MTIg7IKw6rO8L-qzvOyImeyehOyLoCAoUG9zdC10ZXJtIFByZWduYW5jeSkubWQ
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

대량 산후출혈과 쇼크로 치료받은 산모가 수주 뒤 젖이 나오지 않고 반복적으로 저혈당을 보인다. 유리 T4와 아침 코르티솔은 낮고 TSH·ACTH는 그에 비해 높지 않다. 원인은?

## 선택지

A. 산후 자가면역 갑상샘염만 발생
B. 뇌하수체 허혈성 손상(시한증후군)
C. 젖분비 호르몬 분비 뇌하수체 종양
D. 일차 부신기능저하증만 발생

## 해설

대량 출혈 뒤 젖 분비 실패와 여러 뇌하수체 호르몬의 결핍은 시한증후군을 시사한다. ACTH·코르티솔 결핍은 저혈당과 저혈압을 일으킬 수 있어 신속히 평가하고 치료한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 저혈당이 뇌하수체 허혈을 일으킨다는 역전된 인과 및 원문에 없는 저인슐린 단정을 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007092
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11762620/
