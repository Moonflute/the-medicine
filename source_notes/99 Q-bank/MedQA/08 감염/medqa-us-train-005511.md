---
type: qbank
schema_version: 1
id: medqa-us-train-005511
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a8d52b2163119529c0a04f8e20016bea4749764ec1f4b24b075ad64128852baa
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "세균성 수막염"
  - "수막구균혈증"
  - "뇌척수액 호중구 증가"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7IS46reg7ISxIOuHjOyImOunieyXvCAoQmFjdGVyaWFsIE1lbmluZ2l0aXMpLm1k
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

발열, 심한 두통과 경부강직이 있는 31세 환자의 혈당은 100mg/dL다. 항생제 투여 직전 채취한 뇌척수액 중 급성 세균성 수막염을 가장 잘 뒷받침하는 조합은?

## 선택지

A. 림프구 우세, 단백 65mg/dL, 포도당 65mg/dL
B. 호중구 우세, 단백 180mg/dL, 포도당 18mg/dL
C. 림프구 우세, 단백 50mg/dL, 포도당 110mg/dL
D. 세포 증가 없음, 단백 110mg/dL, 포도당 65mg/dL

## 해설


급성 세균성 수막염에서는 대개 호중구성 세포 증가, 단백 상승, 혈당에 비해 낮은 뇌척수액 당이 함께 보인다. 원인균은 배양이나 분자검사 등을 통해 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005511 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 수막구균 의심 급성 수막염에서 호중구성 저당·고단백 CSF B의 기본 검사 패턴을 원문 대조 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005511
- https://www.who.int/publications/i/item/9789240108042
