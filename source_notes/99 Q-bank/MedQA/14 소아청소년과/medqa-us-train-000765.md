---
type: qbank
schema_version: 1
id: medqa-us-train-000765
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:80b4c30cfc2715a3e71ba40a04602455412b83f37f20b6301e54e7b209f2c5f5
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "streptococcal pharyngitis"
  - "penicillin allergy"
question_type: management
related_disease_slugs:
  - MDgg6rCQ7Je8L-yCrOyKrOyVjOq3oCDsnbjrkZDsl7wgKFN0cmVwdG9jb2NjYWwgUGhhcnluZ2l0aXMpLm1k
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvRXJ5dGhyb215Y2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvRmx1Y29uYXpvbGUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

7세 소년이 4일간 지속된 발열, 두통, 귀 통증, 그리고 삼킬 때 악화되는 인후통으로 내원하였다. 콧물이나 기침은 없었다. 1년 전 비슷한 증상으로 아목시실린(amoxicillin)을 처방받았으나, 피부 발진과 안면 부종이 발생하여 다른 약제로 변경한 적이 있다. 예방접종은 최신 상태이다. 키는 75백분위수, 체중은 50백분위수이다. 체온은 38.9°C, 맥박은 136회/분, 호흡수는 28회/분이다. 구강 검사상 설태(coated tongue), 붉은 목젖(red uvula), 그리고 흰색 막으로 덮인 비대해진 우측 편도가 관찰된다. 심부 경부 림프절이 비대해져 있고 압통이 있다. 인후 도말 배양 검사를 시행하였다. 이 환자의 치료를 위한 다음 단계로 가장 적절한 것은 무엇인가?

## 선택지

A. 페니실린 V(Penicillin V)
B. 전편도절제술(Total tonsillectomy)
C. 플루코나졸(Fluconazole)
D. 에리스로마이신(Erythromycin)

## 해설

발열·편도 삼출·압통성 림프절과 기침 부재로 GAS 인두염을 의심한다. 배양 등으로 확인하고 아목시실린 뒤 안면부종·발진 병력을 고려한다. 보기 중 에리스로마이신(D)은 페니실린 알레르기에서 가능한 대안이다. 내성·위장관 부작용을 고려하며 모든 인두염의 1차약이라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 페니실린 즉시형 알레르기 의심 환자의 마크롤리드 대안 D 유지. 보편적 1차약 단정 삭제.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7108032/
- https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000765
