---
type: qbank
schema_version: 1
id: medqa-us-train-005536
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0a137bc49b313d4ffca20e5c1ddda47bb29618d59f633c02249cbd51941d62d9
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "고양이할큄병"
  - "Bartonella henselae"
  - "지역 림프절병증"
  - "Cat-scratch disease"
related_disease_slugs:
  - MDgg6rCQ7Je8L-usmOyGjOuzkSAoQ2F0IFNjcmF0Y2ggRGlzZWFzZSkubWQ
question_type: management
difficulty: complex
answer: B
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
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvUmlmYW1waW4ubWQ
---

# MedQA US 임상문제

## 문제

7세 여아가 2주 전 고양이에게 물린 왼쪽 허벅지의 붉은 구진과 오른쪽 액와 부종으로 내원했다. 발열, 간비장비대와 치유 중인 손의 홍반이 있다. 다음 중 가장 적절한 치료는?

## 선택지

A. 독시사이클린과 리팜핀
B. 리팜핀과 아지스로마이신
C. 치료가 필요하지 않다
D. 림프절 수술적 절제

## 해설


고양이 노출·접종 피부 병변·림프절염에 발열과 간비장비대가 있어 단순 국소 CSD보다 파종/장기침범을 평가한다. 이런 소아 질환에서 rifampin+azithromycin B가 사용된 보고가 있어 선택지 중 부합한다. 단순 국소 CSD에는 관찰 또는 azithromycin만 고려할 수도 있으므로 모든 고양이긁힘병의 보편적 병용 표준이라고 단정하지 않는다. 왼쪽 허벅지 노출과 오른쪽 액와/왼손 병변의 원문 부위도 그대로 두고 혈청/조직·영상으로 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005536 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 간비장 침범 CSD의 azithro/rifampin B는 보고된 접근이나 모든 단순 CSD의 표준이라는 일반화 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7260883/
- https://www.cdc.gov/bartonella/hcp/clinical-overview/cat-scratch-disease.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005536
