---
type: qbank
schema_version: 1
id: medqa-us-train-002389
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:92d0f6eabfca3242051c3fabc89780873a530f17609dcd1f7f9f392379f237d4
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "Takayasu arteritis"
  - "large-vessel vasculitis"
  - "subclavian artery stenosis"
  - "revascularization"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uLpOy5tOyVvOyImCDrj5nrp6Xsl7wgKFRha2F5YXN1J3MgQXJ0ZXJpdGlzKS5tZA
  - MDYg7JWM66CI66W06riwL-2YiOq0gOyXvCAoVmFzY3VsaXRpcykubWQ
question_type: management
difficulty: complex
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL1JpdHV4aW1hYi5tZA
---

# MedQA US 임상문제

## 문제

15세 여아가 2개월간 피로 증가와 체중 감소로 입원했다. 왼팔 혈압 175/74 mmHg, 오른팔 90/45 mmHg이며 오른쪽 요골맥박이 약하다. 대퇴부 혈압과 맥박은 정상이다. 오른쪽 상완 근육이 약간 위축되어 있다. 체온 38.1°C, 혈색소 10.4 g/dL, ESR 58 mm/시간이다. 자기공명 혈관조영술에서 오른쪽 쇄골하동맥 근위부의 불규칙성, 협착, 협착 후 확장이 보인다. 프레드니손을 시작하자 증상이 호전되었다. 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 카르베딜롤과 히드로클로로티아지드
B. 혈장교환
C. 리툭시맙
D. 수술

## 해설


젊은 여성의 팔 혈압·맥박 비대칭, 쇄골하동맥 협착과 염증 반응은 Takayasu 동맥염을 지지한다. 오른팔 협착 때문에 낮게 측정되는 혈압만 보고 정상이라고 판단하지 않으며, 높은 쪽에서 측정한 175/74 mmHg의 고혈압을 평가·치료해야 한다. 제시된 선택지에서는 혈압 조절 약제인 A가 적절하다. 다만 carvedilol과 hydrochlorothiazide 조합이 모든 소아 Takayasu의 유일한 표준이라는 의미는 아니다. 별도로 질병 활성도·혈관영상과 steroid 절감 면역억제 치료를 계획하며, 지속되는 중증 장기허혈이 없다면 활동성 염증 단계에서 수술을 곧바로 선택하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002389 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Takayasu에서 증상 개선 이후에도 필요한 고혈압 관리와 원문 누락 소견을 보완했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/acr.24632

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002389
