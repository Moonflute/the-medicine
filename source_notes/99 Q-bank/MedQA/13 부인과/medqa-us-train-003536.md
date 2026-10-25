---
type: qbank
schema_version: 1
id: medqa-us-train-003536
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:84f38c8f892896b39abb137aeafba9cfb6bce040932ad3a004bde1af1447a144
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "ruptured ectopic pregnancy"
  - "hemorrhagic shock"
  - "hemodynamic instability"
  - "intravenous crystalloid"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOq2geyZuCDsnoTsi6AgKEVjdG9waWMgUHJlZ25hbmN5KS5tZA
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
difficulty: complex
answer: A
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

25세 여성이 갑자기 시작된 전반적인 복통과 오심으로 응급실에 왔다. 마지막 월경은 6주 전이었고 경구피임약을 불규칙하게 복용했다. 창백하고 식은땀을 흘렸으며 맥박은 120회/분, 혈압은 85/70 mmHg였다. 복부 전반에 압통이 있고 오른쪽 부속기 압통이 있었다. 임신검사 결과는 아직 나오지 않았다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 정맥 생리식염수 수액을 투여한다
B. 조영증강 복부 및 골반 CT를 시행한다
C. O 음성 농축 적혈구를 수혈한다
D. 골반 초음파를 시행한다

## 해설

저혈압·빈맥·창백과 무월경·부속기 압통은 파열 자궁외임신 등 복강내 출혈을 시사한다. 정맥로 확보와 등장성 수액 소생(A)을 시작하면서 임신검사, 긴급 산부인과 수술 평가 및 혈액 준비를 병행한다. 초기 정상 혈색소도 급성 출혈을 배제하지 않으며 수액 반응과 출혈 정도에 따라 조기 수혈이 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 출혈성 쇼크 초기 정맥 수액 A 유지. 파열 자궁외임신 의심 시 수액만으로 치료가 끝난다는 인상을 교정.
- https://www.nice.org.uk/guidance/cg174/chapter/Recommendations
- https://www.nice.org.uk/guidance/NG126/chapter/diagnosis-of-viable-intrauterine-pregnancy-and-of-tubal-ectopic-pregnancy

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003536
