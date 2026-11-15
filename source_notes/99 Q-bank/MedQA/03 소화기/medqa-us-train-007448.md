---
type: qbank
schema_version: 1
id: medqa-us-train-007448
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a0e574599de3682b40f4d5a8361aafe45b37de2329f336c6a453b734103b95af
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "샤츠키 고리"
  - "식도열공탈장"
  - "기계적 식도 확장"
  - "연하곤란"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_sl7Tqs7Ug7YOI7J6lIChIaWF0YWwgSGVybmlhKS5tZA
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMyDshoztmZTquLAvUmFuaXRpZGluZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

58세 남성이 수개월 동안 고기나 빵을 삼킬 때 간헐적으로 음식이 걸렸다고 한다. 물은 잘 마시고 체중 감소는 없다. 위내시경에서 위식도 접합부에 얇고 매끈한 원형 고리가 확인됐다. 종괴와 다른 원인은 평가에서 확인되지 않았다. 증상 완화를 위한 처치는?

## 선택지

A. 식도절제술
B. 철분제만 복용
C. 항역류수술부터 시행
D. 내시경으로 식도 고리를 확장한다

## 해설


샤츠키 고리는 고형 음식이 간헐적으로 걸리는 증상을 일으킬 수 있다. 증상이 있으면 내시경 확장술을 고려한다. 불규칙하거나 진행성인 협착은 같은 방식으로 가정하지 않고 악성 등 다른 원인을 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 내시경에서명시된GEJ고리와간헐고형식연하곤란은Schatzki ring의확장 D를지지. 단순GERD증상으로선택한것아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007448
- https://gut.bmj.com/content/67/6/1000
