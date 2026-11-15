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
question_type: prevention
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

제1형 폰빌레브란트병 환자의 평소 폰빌레브란트인자 활성은 0.42IU/mL다. 출혈 경향은 가볍고 간단한 발치 한 건이 예정돼 있다. 국소 지혈과 함께 적절한 예방은?

## 선택지

A. 트라넥삼산을 사용하고 인자 상승 치료는 일률적으로 추가하지 않는다
B. 재조합 제IX인자를 예방적으로 투여한다
C. 적혈구 수혈로 출혈을 예방한다
D. 모든 경우 데스모프레신과 폰빌레브란트인자 농축제를 동시에 사용한다

## 해설


기저 활성이 0.30IU/mL를 넘는 경증 제1형 환자의 작은 점막 시술에서는 트라넥삼산과 국소 지혈이 적절한 선택이다. 출혈 경향이 심하거나 수술 범위가 큰 경우에는 인자 상승이 필요할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002511 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: vWF 질환에서 desmopressin은 혈소판 glycoprotein을 증가시키는 약이 아님. 아형·반응과 수술중증도에 따른 한계를 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7805326/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002511
