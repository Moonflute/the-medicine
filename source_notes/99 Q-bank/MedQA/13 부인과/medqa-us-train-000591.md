---
type: qbank
schema_version: 1
id: medqa-us-train-000591
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c7449dcd24938b4caf1407702f24f914021e0f1a4ee6ab9b2416bdd83050e49b
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "Vulvodynia"
  - "Vulvovaginitis"
  - "Painful bladder syndrome"
  - "Genitopelvic pain disorder"
  - "body dysmorphic disorder"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOyytOydtO2YleyepeyVoCAoQm9keSBEeXNtb3JwaGljIERpc29yZGVyKS5tZA
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

30세 여성이 6개월째 탐폰 삽입과 성관계 때 질 입구가 타는 듯 아프다. 감염검사는 음성이고 피부 병변은 없다. 동의하에 면봉으로 질 전정을 가볍게 건드리면 평소 통증이 재현되고 골반저 과긴장은 뚜렷하지 않다. 진단은?

## 선택지

A. 질 칸디다증
B. 골반 심부 자궁내막증
C. 골반저 근육 경련만으로 인한 통증
D. 유발성 전정통

## 해설


다른 원인이 배제된 3개월 이상의 국소 외음부 통증이 질 전정 접촉으로 유발되면 유발성 전정통을 고려한다. 면봉 검사로 통증 부위를 확인하고 골반저 과긴장과 구분한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000591
- https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2016/09/persistent-vulvar-pain
