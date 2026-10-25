---
type: qbank
schema_version: 1
id: medqa-us-validation-000930
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:8a5aebba379136a9bbedb9998c3adce8671bdbfafff3a85dc6fba8a9d800380a
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "갈색세포종"
  - "다발성 내분비종양 2형"
  - "카테콜아민"
related_disease_slugs:
  - MDQg64K067aE67mEL-2BrOuhrOy5nO2ZlOyEuO2PrOyihSAoUGhlb2Nocm9tb2N5dG9tYSkubWQ
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTm9yZXBpbmVwaHJpbmUubWQ
---

# MedQA US 임상문제

## 문제

44세 여성이 2주 동안 반복되는 박동성 두통, 심계항진, 과도한 발한, 불안, 떨림과 창백함, 간헐적 구토로 진료를 받으러 왔다. 최근 점점 커지는 갑상선 종창과 여러 부위의 뼈 통증이 있다. 매우 마르고 불안해 보이며 손이 축축하다. 혈압은 176/94 mm Hg이고 맥박은 110회/분이다. 오른쪽 갑상선엽에 단단한 결절이 만져진다. 이 환자의 가장 적절한 초기 처치는?

## 선택지

A. 혈청 에피네프린 및 노르에피네프린 측정
B. 클로니딘 억제검사
C. 24시간 소변 카테콜아민 대사산물(바닐릴만델산, 메타네프린, 노르메타네프린) 측정
D. 혈청 칼슘 및 PTH 측정

## 해설


정답 C. 발작성 두통·발한·심계항진과 고혈압은 pheochromocytoma를 의심하게 하며 소변 분획 metanephrine/normetanephrine 또는 혈장 유리 metanephrine이 초기 생화학 검사다. C는 이 검사들을 포함해 가장 부합한다. VMA는 상대적으로 민감도가 낮아 단독 우선검사로 보지 않는다. 갑상선 결절·골통은 MEN2A를 고려하게 하지만 Ca/PTH·calcitonin·유전자 등 추가 평가 없이 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000930 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: pheo 검사는 분획metanephrine이 핵심이며 VMA가 동등한 우선검사라는 오해 교정; MEN2A 아직 확진 아님.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12819074/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000930
