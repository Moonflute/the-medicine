---
type: qbank
schema_version: 1
id: medqa-us-train-000353
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2f51ec3d0c550a844043fdb4341d8b5fe1106a5f08a4c2963c2357cc9f334ee9
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "Syndrome of Inappropriate Antidiuretic Hormone"
  - "Sheehan’s syndrome"
  - "Diabetic ketoacidosis"
related_disease_slugs:
  - MDQg64K067aE67mEL-2VreydtOuHqO2YuOultOuqrCDrtoDsoIHsoIgg67aE67mEIOymne2bhOq1sCAoU0lBREgpIChTeW5kcm9tZSBvZiBJbmFwcHJvcHJpYXRlIEFudGlkaXVyZXRpYyBIb3Jtb25lIFNlY3JldGlvbiAoU0lBREgpKS5tZA
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvIDthqTsgrDspp0gKERLQSkgKERpYWJldGljIEtldG9hY2lkb3NpcykubWQ
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MaXRoaXVtLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

71세 남성이 전신 강직-간대 발작(generalized tonic-clonic seizure)을 겪은 후 응급실에 내원했다. 아들의 말에 따르면 환자는 발작 병력은 없으나 지난 몇 주간 혼란과 쇠약감이 점차 심해졌다고 한다. 전해질 검사 결과 나트륨 수치는 120 mEq/L, 혈청 삼투압은 248 mOsm/kg으로 나타났다. 소변 검사에서 높은 소변 삼투압이 확인되었다. 체온은 37°C, 호흡수는 분당 15회, 맥박은 분당 67회, 혈압은 122/88 mm Hg이다. 진찰 결과 환자는 지남력이 없고, 동공은 원형이며 빛과 조절에 반응하고 점막은 촉촉하다. 심장 박동은 규칙적이고 잡음은 없으며, 폐는 양측 청진 시 깨끗하고, 복부는 부드러우며, 사지에 부종은 없으나 근력은 양측 모두 3/5이다. 사지 모두에서 반사 저하(hyporeflexia)가 관찰된다. 환자 증상의 가장 가능성 있는 원인은 무엇인가?

## 선택지

A. 항이뇨호르몬 부적절 분비 증후군(SIADH)
B. 시한 증후군(Sheehan’s syndrome)
C. 리튬(Lithium) 사용
D. 당뇨병성 케톤산증(Diabetic ketoacidosis)

## 해설


저나트륨 혈증, 저삼투압 혈청, 고농도 소변 삼투압은 부적절 항이뇨호르몬 분비(SIADH)를 나타낸다. SIADH는 저나트륨성 혼수와 경련을 유발할 수 있다. 따라서 정답은 SIADH이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 저삼투성 Na120인데 소변 농축이 유지되고 임상적으로 뚜렷한 volume loss/edema가 없어 SIADH A가 가장 합당. 다른 내분비 원인은 실제 평가에서 배제 필요.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000353
