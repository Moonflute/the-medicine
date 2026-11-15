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
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

71세 남성이 전신 발작 후 응급실에 왔다. 기도와 호흡은 확보했다. 혈청 Na 114 mmol/L, 혈청 삼투질농도 242 mOsm/kg, 혈당은 정상이다. 저나트륨혈증에 대한 즉각적 치료는?

## 선택지

A. 3% 고장성 식염수의 정맥 일시 주입
B. 수분 제한 단독
C. 경구 톨밥탄
D. 5% 포도당 수액

## 해설


발작은 중증 증상성 저장성 저나트륨혈증의 신호다. 3% 고장성 식염수를 신속히 투여하고 증상과 나트륨을 자주 확인해 과교정을 막는다. 원인 평가를 위해 응급 치료를 늦추지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 저삼투성 Na120인데 소변 농축이 유지되고 임상적으로 뚜렷한 volume loss/edema가 없어 SIADH A가 가장 합당. 다른 내분비 원인은 실제 평가에서 배제 필요.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000353
- https://www.kjim.org/journal/view.php?number=170730
