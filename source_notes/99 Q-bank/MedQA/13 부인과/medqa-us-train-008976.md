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
answer: D
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

이전에 건강했던 25세 여성이 한 시간 동안 갑자기 시작된 심한 하복부 통증으로 응급실에 내원했다. 성관계 직후 시작되었고 움직이거나 소변을 볼 때 악화된다. 소아기에 요로감염을 여러 번 앓았고 남자친구와 성생활을 하며 콘돔은 일관되게 사용하지 않는다. 마지막 월경 시기를 기억하지 못한다. 불편하고 창백해 보이며 체온 37.5°C(99.5°F), 맥박 110회/분, 혈압 90/60mmHg이다. 복부검사에서 압통이 있는 오른쪽 부속기 종괴가 만져지고 혈색소 10g/dL, 헤마토크릿 30%이다. 소변 임신검사는 음성이다. 골반 초음파에서 오른쪽 난소에 5×3cm의 낭성 구조와 주변 및 자궁 주위의 에코성 액체가 보인다. 다음 중 가장 적절한 처치는 무엇인가?

## 선택지

A. 경구 독시사이클린과 메트로니다졸
B. 자궁동맥 색전술
C. 정맥 메토트렉세이트
D. 응급 시험적 개복술

## 해설

성관계 직후 통증, 난소 낭성 구조 주위 에코성 액체, 저혈압·빈맥은 출혈성 난소낭종 파열과 복강내 출혈을 시사한다. 소생·혈액 준비 및 응급 수술 평가가 필요하여 보기 중 D가 적절하다. 원정답을 위해 자궁외임신으로 단정하지 않는다. 실제 수술 접근은 불안정 정도와 자원에 따라 결정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 혈역학적 불안정과 출혈성 난소낭종 파열의 긴급 수술 D 유지. 음성 hCG를 무시하고 파열 자궁외임신으로 단정한 오류 교정.
- https://www.rcog.org.uk/for-the-public/browse-our-patient-information/ovarian-cysts-before-the-menopause/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008976
