---
type: qbank
schema_version: 1
id: medqa-us-train-008732
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bc874943cf230649fa503d68eca150479d365ebc3a7710ca96d61a4b5635bbfb
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "primary hyperaldosteronism"
  - "Conn syndrome"
  - "saline infusion test"
related_disease_slugs:
  - MDQg64K067aE67mEL-yVjOuPhOyKpO2FjOuhoOymnSAoQWxkb3N0ZXJvbmlzbSkubWQ
question_type: investigation
difficulty: complex
answer: D
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2hsb3J0aGFsaWRvbmUubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvUG90YXNzaXVtQ2hsb3JpZGUubWQ
---

# MedQA US 임상문제

## 문제

35세 여성이 고혈압과 티아지드 사용 중 저칼륨혈증이 있었다. 칼륨을 교정하고 검사에 영향을 주는 약을 조정한 뒤 반복한 알도스테론/레닌 비가 양성이지만, 알도스테론 자율분비가 확실할 정도는 아니다. 혈압이 안정되고 신기능이 정상이며 심부전은 없다. 환자는 수술 가능성을 알아보고 싶어 한다. 고려할 알도스테론 확진 검사는?

## 선택지

A. 1mg 덱사메타손 억제검사
B. 부신절제술
C. 부신 결절 조직검사
D. 생리식염수 주입 억제검사

## 해설


선별검사가 양성이지만 확률이 중간이고 수술을 염두에 둘 때는 억제검사를 통해 과분비를 확인할 수 있다. 생리식염수 주입은 심부전 등 체액부하 금기가 없을 때 가능한 방법 중 하나다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008732 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: ARR 약32.5와 낮은 renin의 PA 의심에서 D는 조건부 억제검사; 최근 이뇨제 중단/저K 교정과 수술 의향 등 2025 원칙 보완.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.endocrine.org/clinical-practice-guidelines/primary-aldosteronism-2

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008732
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10765003/
