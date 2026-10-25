---
type: qbank
schema_version: 1
id: medqa-us-train-007777
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ae702f8918c161cd0680b9648e017c0a62c51b4f8a8b9556c17e9d6485906fbb
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "chronic hepatitis B"
  - "hepatitis B e antigen positive"
  - "tenofovir"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_rp4zshLEgQu2YlSDqsITsl7wgKENocm9uaWMgSGVwYXRpdGlzIEIgKEhCVikpLm1k
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
question_type: management
difficulty: standard
answer: C
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowNCDqsITri7Tst4wvTGFtaXZ1ZGluZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2hsb3JvcXVpbmUubWQ
---

# MedQA US 임상문제

## 문제

59세 여성이 정기 건강검진을 위해 내원했다. 특별한 증상은 없다. 전신홍반루푸스와 고혈압이 있으며 술은 마시지 않는다. 리시노프릴과 하이드록시클로로퀸을 복용하고 영양실조로 보인다. 활력징후는 정상이며 복부는 부드럽고 압통이 없다. 복수나 간비장비대는 없다. 혈청 총 빌리루빈 1.2 mg/dL, 알칼리성 인산분해효소 60 U/L, ALT 456 U/L, AST 145 U/L이다. A형간염 IgM 항체는 음성, IgG 항체는 양성이다. B형간염 표면항원은 양성, 표면항체는 음성, e항원은 양성, e항체는 음성, 핵항원 IgM 항체는 음성, IgG 항체는 양성이다. C형간염 항체는 음성이다. 다음 중 가장 적절한 치료는?

## 선택지

A. 페길화 인터페론 알파 치료
B. 라미부딘 치료
C. 테노포비르 치료
D. 안심시키고 추적 관찰

## 해설


HBsAg/HBeAg 양성·IgM anti-HBc 음성과 ALT 상승은 면역활동성 만성 HBV를 의심하게 한다. 선택지 C tenofovir는 높은 효능/높은 내성 장벽의 치료 중 하나다. 실제 HBV DNA·섬유화·다른 ALT 원인과 신/골기능을 평가하여 적응·제형을 정하며 원문에 DNA 고값이나 정상 신기능이 이미 있다는 뜻은 아니다. Lamivudine은 내성이 쉽게 생겨 일반 우선약이 아니고 내성 때문에 선호한다는 설명은 틀리다. SLE 배경에서는 interferon도 주의가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007777 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원문 없는 HBV DNA 고값·정상 신기능을 확정한 오류 및 lamivudine 내성 시 사용이라는 반대 설명 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.journal-of-hepatology.eu/article/S0168-8278%2825%2900174-6/fulltext

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007777
