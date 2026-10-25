---
type: qbank
schema_version: 1
id: medqa-us-train-002511
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:917a4987f9d4bbd828726495f4717e123a76abf52eea5d894e7430a4be84b4e3
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "von Willebrand disease"
  - "mucocutaneous bleeding"
  - "desmopressin"
  - "tranexamic acid"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2PsCDruYzroIjruIzrnoDtirjrs5EgKHZvbiBXaWxsZWJyYW5kIERpc2Vhc2UsIHZXRCkubWQ
question_type: management
difficulty: simple
answer: A
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
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9EZXNtb3ByZXNzaW4ubWQ
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9UcmFuZXhhbWljQWNpZC5tZA
---

# MedQA US 임상문제

## 문제

26세 남성이 비중격만곡 교정수술 중 과도한 출혈이 발생했다. 수술 전 PT와 혈소판 수는 정상이었다. 어린 시절부터 피부에 파란 멍이 잘 들고 쉽게 멍이 드는 증상이 있었으며 가족에게 유전성 혈액질환이 있지만 자세한 내용은 모른다. 다음 중 가장 적절한 치료는?

## 선택지

A. 데스모프레신과 트라넥삼산
B. 동결침전제
C. 재조합 제9인자
D. 적혈구 수혈

## 해설


어릴 때부터 쉽게 멍이 들고 가족력이 있으며 정상 혈소판 수와 PT에도 점막 수술 출혈이 생겨 von Willebrand disease가 의심된다. Desmopressin은 내피에 저장된 vWF와 factor VIII 방출을 늘리고 tranexamic acid는 섬유소용해를 억제하므로, 반응성 경증 VWD를 전제로 한 보기 중 A가 부합한다. 다만 아형·이전 반응·수술 출혈 정도를 확인해야 하며 2B형, 3형 등에서는 적절하지 않거나 효과가 없다. 중증 수술출혈에는 vWF 농축제 등 전문 치료가 필요할 수 있고 desmopressin이 모든 혈소판 기능장애의 보편적 치료는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002511 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: vWF 질환에서 desmopressin은 혈소판 glycoprotein을 증가시키는 약이 아님. 아형·반응과 수술중증도에 따른 한계를 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7805326/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002511
