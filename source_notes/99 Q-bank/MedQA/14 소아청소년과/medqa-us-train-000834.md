---
type: qbank
schema_version: 1
id: medqa-us-train-000834
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6716e8d51e607d47589010901771456dfb4d9ef71b113857f73ace0d9b3add40
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "neonatal meningitis"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Iug7IOd7JWEIOuHjOyImOunieyXvCAoTmVvbmF0YWwgTWVuaW5naXRpcykubWQ
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2Vmb3RheGltZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvUmlmYW1waW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

33주에 태어난 신생아가 복잡한 임신 과정과 제왕절개 후 신생아 집중치료실(NICU)로 이송되었습니다. 입원 1주일 후, 환아는 발열이 발생하였고 기면 상태가 되었으며 자극에 대한 반응이 거의 없습니다. 요추 천자를 시행한 결과는 다음과 같습니다: 외관 혼탁함, 단백질 64 mg/dL, 포도당 22 mg/dL, 압력 330 mm H2O, 세포 수 295 cells/mm³ (90% 이상 다핵구). 미생물학 검사를 위해 검체를 보냈고 그람 음성 간균이 확인되었습니다. 다음 중 적절한 다음 치료 단계는 무엇입니까?

## 선택지

A. 보존적 치료만 제공한다
B. 머리 MRI 촬영
C. 정맥 내 세포탁심(cefotaxime) 투여 시작
D. 경구 리팜핀(rifampin) 투여 시작

## 해설

뇌척수액 저당·호중구 증가와 그람음성 간균은 세균성 수막염이다. 정주 세포탁심(C)이 적절한 중추신경계 치료 약제이며 배양·감수성과 병원 내 내성 위험에 따라 조정한다. NICE는 그람음성 수막염 확인 시 세포탁심 단독을 제시하므로 아미노글리코사이드 병용이 항상 필수인 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 그람음성 신생아 수막염 세포탁심 C 유지. 아미노글리코사이드 병용이 항상 표준이라는 단정 수정.
- https://www.nice.org.uk/guidance/ng195/chapter/Meningitis-babies-with-early-onset-or-late-onset-infection-in-neonatal-units

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000834
