---
type: qbank
schema_version: 1
id: medqa-us-train-007536
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b33a3349c00bc9fd180a94d4eb5cebb69141643f50afe29e20fbef2f8cc7c341
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "급성 통풍성 관절염"
  - "급성 단관절염"
  - "관절천자"
  - "패혈성 관절염 감별"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-2Gte2SjSAoR291dCkubWQ
  - MDcg66WY66eI7Yuw7IqkL-qwkOyXvCDqtIDsoIjsl7wgKEluZmVjdGlvdXMgQXJ0aHJpdGlzKS5tZA
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTG9zYXJ0YW4ubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0NvbGNoaWNpbmUubWQ
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0JldGFtZXRoYXNvbmUubWQ
---

# MedQA US 임상문제

## 문제

53세 남성이 과거 엄지발가락 통풍 병력이 있는데 갑자기 한쪽 무릎이 붓고 열이 38.4°C까지 올랐다. 혈압은 안정적이다. 통풍으로만 단정하기 전에 우선 검사는?

## 선택지

A. 혈청 요산만 측정
B. 관절천자로 관절액 배양·그람염색·결정 검사
C. 무릎 MRI만 시행
D. 류마티스인자와 항CCP 검사

## 해설


통풍 병력이 있어도 발열을 동반한 급성 단관절염은 감염을 배제해야 한다. 관절액을 채취하며, 요산 결정이 보여도 동반 감염을 완전히 배제할 수 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007536 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 발열 동반 급성 단관절염에서 통풍 위험요인만으로 치료하지 않고 관절천자 B로 감염·결정 평가하는 선택이 적절함을 대조.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9901514/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007536
- https://doi.org/10.5194/jbji-8-29-2023
