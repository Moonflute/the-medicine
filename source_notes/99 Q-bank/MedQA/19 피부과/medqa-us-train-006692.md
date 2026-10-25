---
type: qbank
schema_version: 1
id: medqa-us-train-006692
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2ba0205b92e6ab27ed6c3b3f62a13741af136cf93f34cf56e28f1b3371dee681
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "피부형 포르피린증"
  - "포르피리아 큐타네아 타르다"
  - "사혈 치료"
question_type: management
related_disease_slugs:
  - MDQg64K067aE67mEL-2PrOultO2UvOumsOymnSAoUG9ycGh5cmlhKS5tZA
difficulty: standard
answer: D
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

42세 여성이 한 달 동안 양손과 발등에 발생한 발진으로 내원했다. 해변에서 일광욕을 한 뒤 며칠 후 물집으로 시작되었다. 발진 사진이 제시되어 있다. 유사한 증상 병력은 없고 복용 약물이나 최근 여행력도 없다. 지난 2개월 동안 여러 차례 과음했다. 체온은 37.1°C(98.8°F)이고 그 외 진찰은 정상이다. 혈장 포르피린은 상승했지만 소변 5-아미노레불린산과 포르포빌리노겐은 정상이다. 다음 중 처치로 가장 적절한 것은?

## 선택지

A. 아파멜라노타이드
B. 탄수화물 부하
C. 정맥 헤민
D. 사혈

## 해설

광노출 후 수포와 plasma porphyrin 증가, 정상 ALA/PBG는 PCT를 지지한다. 사혈(D)은 철 저장량을 낮추어 porphyrin 과잉을 줄이는 확립된 치료이다. 철 상태·빈혈과 간질환·HCV 등의 유발 인자를 평가하고 음주 등 위험 노출을 조절한다. 급성 신경내장 porphyria의 hemin·탄수화물 부하와 구분한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 광노출 수포·porphyrin 증가의 PCT D를 광역성 포르피린증으로 오역한 용어와 치료 목적을 교정한다.
- 공식/학회 근거: https://www.bad.org.uk/pils/porphyria-cutanea-tarda

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006692
