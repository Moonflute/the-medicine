---
type: qbank
schema_version: 1
id: medqa-us-train-005480
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5f588ab5ceb276dafaceae955289eb422f8e4c83272a7e277d9bd165035a61a9
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "파종성 Mycobacterium avium 복합체 감염"
  - "AIDS"
  - "아지스로마이신과 에탐부톨"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
  - MDgg6rCQ7Je8L-uptOyXreyggO2VmOyekCDqsJDsl7wgKEltbXVub2NvbXByb21pc2VkIEhvc3QgSW5mZWN0aW9uKS5tZA
question_type: management
difficulty: complex
answer: D
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
  - ZHJ1ZzowOCDqsJDsl7wvQW1waG90ZXJpY2luQi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvRXRoYW1idXRvbC5tZA
  - ZHJ1ZzowOCDqsJDsl7wvSXNvbmlhemlkLm1k
  - ZHJ1ZzowOCDqsJDsl7wvUmlmYW1waW4ubWQ
---

# MedQA US 임상문제

## 문제

AIDS가 있고 CD4 세포 수가 44/mm³인 40세 남자가 3주 동안 간헐적 발열, 복통, 설사, 마른기침과 체중감소로 내원했다. 구강 칸디다증, 구강털백반, 보라색 피부판, 림프절병증, 간비장비대가 있고 혈액배양에서 항산균이 자랐다. 가장 적절한 약물치료는?

## 선택지

A. 암포테리신 B와 이트라코나졸
B. 리팜핀과 이소니아지드
C. 에리트로마이신
D. 아지스로마이신과 에탐부톨

## 해설


CD4<50·전신증상·간비장비대와 혈액 항산균 배양은 파종 MAC을 가장 의심하게 한다. D의 macrolide+ethambutol은 기본 치료이며 균종·macrolide 감수성과 약물 상호작용을 확인하고 중증도/종양부하에 따라 추가약을 고려한다. AFB 양성이 곧 MAC 확진이라는 뜻은 아니고 TB 등 균종을 구별한다. ART 재개/최적화가 함께 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005480 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 진행 AIDS 파종 MAC의 azithro+ethambutol D 유지; 항산균이라는 이유만으로 확진하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/disseminated

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005480
