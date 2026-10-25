---
type: qbank
schema_version: 1
id: medqa-us-train-008140
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4b66a3f7e3731475b7779a5a75da459c195e00c2ed5c212868e4017acfec9060
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "septic arthritis"
  - "gout"
  - "arthrocentesis"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-2Gte2SjSAoR291dCkubWQ
  - MDcg66WY66eI7Yuw7IqkL-qwkOyXvCDqtIDsoIjsl7wgKEluZmVjdGlvdXMgQXJ0aHJpdGlzKS5tZA
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL05hcHJveGVuLm1k
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

55세 남자가 심한 무릎 통증으로 응급실에 왔다. 어제 시작된 통증이 점점 악화되었다. 비만, 당뇨와 무릎 골관절염 병력이 있고 이전에는 이부프로펜에 반응했다. 3일 동안 약을 복용하지 않다가 오늘 히드로클로로티아지드 3회분을 복용했다. 최근 바비큐에서 소고기와 술을 먹었고 봉와직염 치료도 최근에 받았다. 체온 101°F(38.3°C), 혈압 157/98 mmHg, 맥박 95회/분이다. 좌측 무릎이 따뜻하고 홍반이 있으며 압통과 통증으로 운동 범위가 제한된다. 가장 적절한 다음 처치는?

## 선택지

A. 관절천자
B. CT
C. 정맥 수액
D. 나프록센

## 해설


급성의 뜨겁고 붓고 아픈 관절에 발열이 있어 septic arthritis를 먼저 평가해야 한다. 음주·육류·thiazide는 통풍 위험이지만 감염성 관절염을 배제하지 못하며 최근 cellulitis와 당뇨는 감염 우려를 높인다. 관절천자 A로 세포수·Gram 염색·배양과 결정 검사를 시행한다. 단순 골관절염 악화로 간주하거나 영상·NSAID만으로 평가를 끝내면 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008140 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 발열성 급성 단관절염을 의심 골관절염이라 부른 오류 교정. 감염 배제 관절천자 A 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9901514/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008140
