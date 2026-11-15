---
type: qbank
schema_version: 1
id: medqa-us-validation-000908
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:0f73f6fce87196a22dc156eb4849f24f35b275c788e399c3e50e8c7d5304e77e
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "자궁외임신"
  - "임신 중 복통"
  - "질식 초음파"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOq2geyZuCDsnoTsi6AgKEVjdG9waWMgUHJlZ25hbmN5KS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 6주 환자의 질식 초음파에서 2.1 cm 난관임신이 확인됐다. 배아 심박동과 복강 내 출혈은 없고 β-hCG는 1,900 mIU/mL다. 혈역학적으로 안정적이며 주요 장기 기능은 정상이다. 상담 후 수술 대신 약물치료와 추적을 원한다. 적절한 계획은?

## 선택지

A. 자궁 내 임신을 유지하기 위해 프로게스테론만 투여한다
B. 메토트렉세이트 치료 후 β-hCG를 추적한다
C. 추적 없이 집에서 증상이 없어지기만 기다린다
D. 자궁 흡인술로 난관에 있는 임신을 제거한다

## 해설

파열 위험이 낮고 추적할 수 있는 선택된 환자에서는 메토트렉세이트로 치료할 수 있다. 이후 β-hCG가 적절히 떨어지는지 확인하며 통증·실신 등 악화는 즉시 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 충수염 징후를 자궁외임신으로만 연결한 오류 수정.
- https://www.idsociety.org/practice-guideline/intra-abdominal-infections/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000908
- https://www.nice.org.uk/guidance/ng126/chapter/management-of-tubal-ectopic-pregnancy
