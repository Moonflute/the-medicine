---
type: qbank
schema_version: 1
id: medqa-us-train-008976
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5a990b8bba40bb6b0f178a3c8414ce8d6178f0a49a5bad5f76d11058b21e680b
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "ruptured ectopic pregnancy"
  - "hemoperitoneum"
  - "emergency laparotomy"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOq2geyZuCDsnoTsi6AgKEVjdG9waWMgUHJlZ25hbmN5KS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 여성이 갑자기 한쪽 골반통을 호소한 뒤 창백해졌다. 정량 혈청 β-hCG는 음성이고 초음파에서 출혈성 난소낭종과 많은 복강 내 혈액이 보인다. 초기 소생 중에도 혈압은 82/52 mmHg이고 맥박은 130회/분이다. 다음 조치는?

## 선택지

A. 진통제를 주고 귀가시킨다
B. 메토트렉세이트를 투여한다
C. 혈액 소생과 동시에 응급 수술로 출혈원을 조절한다
D. 다음 월경 뒤 초음파만 반복한다

## 해설

출혈성 난소낭종의 파열은 활력징후와 혈색소가 안정적이면 관찰할 수 있지만, 혈복강과 지속적인 쇼크가 있으면 소생과 수술 지혈을 병행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 혈역학적 불안정과 출혈성 난소낭종 파열의 긴급 수술 D 유지. 음성 hCG를 무시하고 파열 자궁외임신으로 단정한 오류 교정.
- https://www.rcog.org.uk/for-the-public/browse-our-patient-information/ovarian-cysts-before-the-menopause/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008976
- https://pubmed.ncbi.nlm.nih.gov/24552849/
