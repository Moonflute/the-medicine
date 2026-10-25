---
type: qbank
schema_version: 1
id: medqa-us-train-008610
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1030fb0d0d53dc8597af7a0551f80cba8099b4975395078cb8e5b3012fc040d3
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "pregnancy luteoma"
  - "maternal virilization"
  - "bilateral ovarian masses"
  - "Pregnancy luteoma"
question_type: management
related_disease_slugs: []
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 28주인 23세 초임부가 산전 진료를 위해 내원했다. 지난 2개월 동안 목소리가 쉬고 얼굴에 털이 났다. 철분과 종합비타민을 복용한다. 임신 21주에 시행한 마지막 태아 초음파는 정상이었다. 활력징후는 정상이다. 얼굴에 여드름과 다모증이 있고 골반검사에서 음핵비대가 보인다. 자궁 크기는 임신 28주에 해당하며 양쪽 부속기 종괴가 촉진된다. 초음파에서 임신 28주에 해당하는 단일 생존 자궁내 태아와 양측 6cm 크기의 고형 다결절성 난소 종괴가 보인다. 혈청 안드로겐 수치가 상승해 있다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 진단적 복강경검사
B. 난소절제술
C. 관찰
D. 혈청 CEA 측정

## 해설

양측 고형 다결절 난소 종괴와 임신 중 남성화·안드로겐 상승은 임신 황체종(pregnancy luteoma)을 시사한다. 임상·영상상 의심이 높고 합병증이 없다면 C처럼 관찰하며 산후 종괴·안드로겐 감소를 확인할 수 있다. 악성 종양과 감별이 불확실하거나 염전·출혈·압박 증상이 있으면 수술 평가가 필요해 모든 종괴의 절제가 불필요한 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 임신 황체종 용어와 관찰 적응증·추적 필요성 명료화.
- https://pubmed.ncbi.nlm.nih.gov/37505122/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008610
