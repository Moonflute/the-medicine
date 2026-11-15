---
type: qbank
schema_version: 1
id: medqa-us-train-001178
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:68d799d8f84aa11f679d85e815f4026307b15383aa7d00e2b471090309d5c82c
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "ankylosing spondylitis"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qwleyngeyEsSDsspnstpTsl7wgKEFua3lsb3NpbmcgU3BvbmR5bGl0aXMpLm1k
question_type: investigation
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

23세 남성이 6개월째 허리 통증을 겪는다. 새벽과 오래 쉴 때 심하고 움직이면 호전된다. 골격 성숙이 확인됐으며 처음으로 축성 척추관절염 영상 평가를 한다. 일반적으로 먼저 시행할 검사는?

## 선택지

A. 허리 CT
B. 가슴 X선
C. 천장관절 단순촬영
D. 전신 골주사

## 해설


골격이 성숙한 성인에서는 천장관절 단순촬영으로 구조적 변화를 먼저 볼 수 있다. 결과가 비진단적이어도 의심이 남으면 천장관절 MRI를 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 `medqa-us-train-001178` 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원답 C와 달리 MRI B만 설명한 해설 교정. 성인 의심 axSpA에서 SI 방사선 우선, 음성/불충분하면 MRI 순서를 NICE로 확인.
- 범위: evidence-reviewed. 기초 내용 대조와 해당 쟁점의 근거 확인을 구별하며 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/NG65/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001178
- https://www.nice.org.uk/guidance/ng65/chapter/recommendations
