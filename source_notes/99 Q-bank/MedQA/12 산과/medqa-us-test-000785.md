---
type: qbank
schema_version: 1
id: medqa-us-test-000785
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:5857bdf6b2ef7f7cf3bdd27075d8d0b8eb247eb7b528e54369883a2429b02b9c
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "산전 유전 선별검사"
  - "고령 임신"
  - "무세포 태아 DNA"
related_disease_slugs:
  - MTIg7IKw6rO8L-uLpOyatOymne2bhOq1sCAoRG93biBTeW5kcm9tZSkubWQ
question_type: prevention
difficulty: complex
answer: B
publication_status: "withheld"
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

42세 여성이 첫 산전 진료에 왔다. 초음파로 임신 10주 5일의 단태임신이 확인됐다. 상담 후 흔한 태아 삼염색체의 비침습적 선별을 원하고, 아직 침습적 검사는 원하지 않는다. 적절한 검사는?

## 선택지

A. 양수검사
B. 모체 혈액의 세포유리 DNA 검사(NIPT)
C. 융모막융모검사
D. 모체 혈청 AFP 단독검사

## 해설

세포유리 DNA 검사는 임신 10주부터 흔한 태아 삼염색체를 비침습적으로 선별할 수 있다. 진단 검사는 아니므로 고위험 결과가 나오면 상담하고 융모막융모검사나 양수검사 등으로 확진을 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: cfDNA는 확진이나 강제 검사가 아니라 상담 후 선택하는 선별검사; 큰 자궁 소견도 무시하지 않음.
- https://www.acog.org/clinical/clinical-guidance/practice-advisory/articles/2026/01/screening-for-fetal-chromosomal-abnormalities
- https://www.acog.org/womens-health/faqs/prenatal-genetic-screening-tests

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000785
- 대한모체태아의학회 태아 염색체 선별검사 진료지침: https://jkms.org/DOIx.php?id=10.3346%2Fjkms.2021.36.e27
