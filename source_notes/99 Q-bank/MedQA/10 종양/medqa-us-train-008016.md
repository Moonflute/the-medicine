---
type: qbank
schema_version: 1
id: medqa-us-train-008016
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9ee6198761672946dd9013a46eb3a43370d3696b0b63502e830f2386d5fd90f1
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "neuroblastoma"
  - "adrenal mass"
  - "urinary vanillylmandelic acid"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Iug6rK966qo7IS47Y-s7KKFIChOZXVyb2JsYXN0b21hKS5tZA
question_type: investigation
difficulty: standard
answer: B
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
---

# MedQA US 임상문제

## 문제

18개월 남아가 복통 평가를 위해 내원했다. 쇠약하고 성장곡선 예상 체중보다 훨씬 낮다. 가족력은 특이사항이 없다. 활력징후는 정상이며 상복부에서 압통 없는 종괴가 만져진다. 복부 MRI에서 우측 부신 종괴가 보이고 생검에서 작은 원형 청색 세포가 많이 관찰되었다. 이 결과로 진단을 확정하려면 다음 중 어떤 소견이 필요한가?

## 선택지

A. 종괴가 신장 내부에서 기원함을 보이는 MRI
B. 소변 바닐릴만델산 상승
C. 젖산탈수소효소 상승
D. 골용해성 병변과 골막반응을 보이는 뼈 X선

## 해설


영아의 부신 종괴와 small round blue cells는 neuroblastoma를 의심하게 한다. Catecholamine 대사산물 VMA/HVA의 소변 상승 B가 이 조직·위치와 함께 진단을 강하게 지지한다. VMA가 모든 환자에서 반드시 상승하거나 단독양성만으로 확진하는 것은 아니며 면역조직·분자 및 병리평가와 결합한다. 신장 내부기원은 Wilms tumor 등 다른 감별을 시사한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008016 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: VMA가모든neuroblastoma진단에필수라고단정한오류 교정. 제공된조직·부신위치와 결합한B유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/neuroblastoma/hp/neuroblastoma-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008016
