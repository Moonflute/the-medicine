---
type: qbank
schema_version: 1
id: medqa-us-train-008889
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:588a050f86aec45a4df813d19685a13e274b496667f0ce3234b859b37e501de3
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "esophageal varices"
  - "portal hypertension"
  - "nadolol"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_si53rj4Qg7KCV66el66WYIChFc29waGFnZWFsIFZhcmljZXMpLm1k
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
question_type: prevention
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

50세 남성이 6개월 동안 발기부전으로 성관계가 어려워 내원했다. 메트포르민으로 잘 조절되는 제2형 당뇨병이 있다. 흡연은 하지 않지만 매일 맥주 5~6잔을 마신다. 활력징후는 정상이다. 양쪽 발등에 부종, 고환 용적 감소, 유방 조직 증가가 있다. 비장이 왼쪽 늑골연 아래 2cm에서 만져진다. 복부 초음파에서 위축되고 고에코이며 결절성인 간이 보인다. 상부 내시경에서 원위 식도에 표면에 붉은 반점이 있는 지름 2mm의 확장된 점막하 정맥이 보인다. 발기부전에 실데나필을 시작했다. 식도 소견에 대한 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 주사 경화요법
B. 나돌롤 치료
C. 이소소르비드 일질산염 치료
D. 경경정맥 간내 문맥전신 단락술

## 해설


작은 식도정맥류라도 red signs가 있어 출혈예방을 고려해야 한다. 선택지 중 비선택적 β차단제 nadolol(B)이 적절하며 혈압·신기능과 내약성에 맞춰 조절한다. 현대 지침에서 carvedilol을 선호하는 상황도 있으나 nadolol이 무효인 것은 아니다. Sildenafil과 nitrate 병용은 심한 저혈압 위험이 있어 isosorbide mononitrate(C)를 선택하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008889 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 작은 정맥류라도 red signs가 있어 NSBB nadolol B 가능. 현대 carvedilol 선호 상황과 구분, sildenafil에 nitrate C 금기 보완.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11090185/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008889
