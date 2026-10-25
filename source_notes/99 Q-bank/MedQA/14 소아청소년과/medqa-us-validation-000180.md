---
type: qbank
schema_version: 1
id: medqa-us-validation-000180
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:7aec2262c9f3fbd1c958bc6d93a29d265168e6485ec3662f13388cc755e03e0f
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "IgA 결핍"
  - "면역글로불린 수혈 아나필락시스"
  - "아나필락시스"
question_type: mechanism
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yVhOuCmO2VhOudveyLnOyKpCAoQW5hcGh5bGF4aXMpLm1k
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

4세 남아가 발열, 양측 결막염, 구강 홍반, 몸통 발진과 서혜부 림프절병증으로 진료를 받았다. 가와사키병으로 면역글로불린과 아스피린을 시작한 뒤 호흡곤란, 얼굴 홍조, 가려운 복부 발진, 심한 얼굴 부종과 천명성 협착음, 저혈압이 발생했다. 이러한 반응을 일으킬 수 있는 기저 상태는?

## 선택지

A. 브루톤 무감마글로불린혈증
B. IgA 결핍
C. 고IgM 증후군
D. 고IgD 증후군

## 해설

IVIG 후 급성 피부·호흡기·혈압 이상은 아나필락시스에 부합한다. 일부 IgA 결핍 환자에서 항IgA 항체가 제품에 포함된 IgA와 반응할 수 있어 선택지 B가 가능한 기저 상태다. 그러나 IgA 결핍이 있으면 이런 반응이 흔히 생긴다는 뜻은 아니다. IVIG 허가정보는 특히 항IgA 항체와 과민반응 병력이 있는 경우를 경고하며, Canadian Blood Services도 낮은 IgA·항IgA가 있어도 중증 반응의 절대 위험은 낮다고 명시한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: IgA 결핍 환자에서 아나필락시스가 흔하다고 과장한 해설을 일부 항IgA 관련 위험으로 한정했다.
- https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=50fc5ffc-49aa-51f2-e063-6294a90a59cf&version=1
- https://professionaleducation.blood.ca/en/transfusion/publications/anaphylactic-transfusion-reactions-and-iga-deficiency

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000180
