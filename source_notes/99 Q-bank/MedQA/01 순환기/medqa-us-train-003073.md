---
type: qbank
schema_version: 1
id: medqa-us-train-003073
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5cbb2e45b4df568d31ea1384e2577a09ad0c6556ba36084320211efb1f4961c4
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "post-myocardial infarction papillary muscle rupture"
  - "acute mitral regurgitation"
  - "new holosystolic murmur"
  - "pulmonary edema"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yKueuqqO2MkOuniSDsl63rpZggKE1pdHJhbCBSZWd1cmdpdGF0aW9uKS5tZA
question_type: diagnosis
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2xvcGlkb2dyZWwubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

55세 남성이 새로 발생한 호흡곤란으로 병원에서 평가받았다. 5일 전 흉통으로 입원해 ST분절 상승 심근경색을 진단받고 스텐트 삽입 경피적 관상동맥중재술 후 흉통이 호전되었다. 어제까지 괜찮았으나 복도를 걷거나 화장실에 가려고 침대에서 일어날 때 호흡곤란이 생겼고 이제 안정 시에도 숨쉬기 어렵다. 제2형 당뇨병과 고지혈증이 있으며 아스피린, 클로피도그렐, 메트포르민, 아토르바스타틴을 복용한다. 산소포화도 88%이고 액와부로 방사되는 범수축기 잡음과 S3, 양측 거친 수포음이 있다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 드레슬러증후군
B. 심장 자유벽 파열
C. 심실중격 파열
D. 유두근 파열

## 해설


심근경색 후 급성 폐부종과 새로 나타난 전반적인 잡음, 특히 새로 생긴 전반적 잡음은 유두근 파열에 의한 급성 승모판 역류를 의미한다. 따라서 가장 가능성 높은 진단은 유두근 파열이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원문 axilla 방사를 심첨부 방사로 번역한 오류 복원. MI5일 후 급성MR/유두근파열 D 유지.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003073
