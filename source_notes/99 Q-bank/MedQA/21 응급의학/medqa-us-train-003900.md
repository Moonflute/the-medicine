---
type: qbank
schema_version: 1
id: medqa-us-train-003900
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3d665f089c3cc7438b5b8b92bdf08807da6b620f05ed85e7720a75960b0ad54d
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "organophosphate poisoning"
  - "cholinergic toxidrome"
  - "atropine"
  - "muscarinic receptor antagonism"
  - "Organophosphate poisoning"
question_type: mechanism
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-ycoOq4sOyduOqzhCDspJHrj4UgKE9yZ2Fub3Bob3NwaGF0ZSBQb2lzb25pbmcpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

43세 남성이 갑자기 의식저하, 구토, 심한 발한, 침분비, 축동, 천명, 근섬유다발수축, 소변과 대변 실금으로 내원했다. 다음 중 가장 적절한 초기 약물치료의 작용기전은?

## 선택지

A. 장관 내 결합
B. 무스카린성 아세틸콜린 수용체의 경쟁적 길항
C. 비선택적 알파 아드레날린성 길항
D. 알칼로이드에 의한 구토 유발

## 해설

축동·다량 분비물·기관지연축/서맥 등 muscarinic 독성에 atropine의 경쟁적 mACh 길항(B)이 적합하다. 근섬유다발수축과 근력저하는 nicotinic 접합부 증상으로 atropine이 직접 교정하지 못한다. 기도·산소화·오염 제거와 함께 organophosphate가 의심되면 oxime 치료도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 유기인 중독의 근섬유다발수축을 muscarinic 징후로 분류한 오류 교정.
- 공식/학회 근거: https://cdn.who.int/media/docs/default-source/chemical-safety/intox/soundmanagementpesticides_resourcetool.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003900
