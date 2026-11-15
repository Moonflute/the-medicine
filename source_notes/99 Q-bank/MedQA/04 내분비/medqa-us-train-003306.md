---
type: qbank
schema_version: 1
id: medqa-us-train-003306
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:84332c8bbc13d06872d12b2259e9bdf3c94c27b7240a96d99424152919c0f102
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "pituitary macroadenoma"
  - "nonfunctioning pituitary adenoma"
  - "hypogonadism"
  - "erectile dysfunction"
related_disease_slugs:
  - MDQg64K067aE67mEL-uHjO2VmOyImOyytCDsg5jsooUgKFBpdHVpdGFyeSBBZGVub21hKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7ZSE6528642ULeycjOumrCDspp3tm4TqtbAgKFByYWRlci1XaWxsaSBTeW5kcm9tZSkubWQ
  - MjAg67mE64eo6riw6rO8L-uwnOq4sOu2gOyghCAoRXJlY3RpbGUgRHlzZnVuY3Rpb24pLm1k
question_type: management
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

40세 남성의 뇌하수체 MRI에서 시신경교차를 누르는 17mm 비기능성 선종이 보인다. 정식 시야검사에서 진행하는 양귀쪽 시야결손이 확인됐고 호르몬 과다 소견은 없다. 다음 처치는?

## 선택지

A. 1년 후 MRI만 반복한다
B. 카베르골린을 먼저 시작한다
C. 신경외과에 신속히 의뢰해 감압 수술을 검토한다
D. 프리즘 안경만 처방하고 추적한다

## 해설

비기능성 뇌하수체 선종이 시신경교차를 눌러 시야결손을 일으키면 감압 수술 평가가 필요하다. 프로락틴종과 달리 도파민 작용제가 일반적인 첫 조치는 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 뇌하수체종괴의 ED C는 기능저하/고PRL에서 가능하나 MRI만으로 비기능성 종양 확정하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003306
- https://www.nature.com/articles/s41574-025-01134-8
