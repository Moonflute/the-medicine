---
type: qbank
schema_version: 1
id: medqa-us-validation-000248
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:8c09e8421bfa0711e0b7656a8f7fa6a3905158d05750dc1ad295428e7a49d492
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "갑상선기능저하증"
  - "갑상선기능저하성 근병증"
  - "크레아틴키나아제 상승"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6rCR7IOB7ISgIOq4sOuKpSDsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRlbm9sb2wubWQ
---

# MedQA US 임상문제

## 문제

43세 여성이 운동할 때 악화되는 진행성 근육통과 경직이 2개월간 지속되어 진료를 받으러 왔다. 계단 오르기, 의자에서 일어나기, 선반이나 찬장에 물건 올리기가 어렵다. 변비와 간헐적 두통이 있고 지난 1년 동안 체중이 9 kg 증가했다. 고혈압은 아테놀롤과 암로디핀으로 조절되고 있다. 6개월 동안 건조한 피부에 칼라민 로션을 사용했다. 맥박 80회/분, 혈압 138/76 mmHg이며 근위부 근육군의 근력이 약하다. 심부건반사의 이완이 지연되고 이완 직전에 근육 표면이 솟아오르는 현상이 보인다. 크레아틴키나아제는 3,120 U/L이다. 진단을 위한 다음 단계는?

## 선택지

A. 혈청 TSH 수치 측정
B. 아세틸콜린 수용체 항체 검사
C. 혈청 칼륨 수치 측정
D. 측두동맥 생검

## 해설


정답 A. 체중증가·변비·건조피부, 근위부 약화와 CK 상승, 지연된 건반사 이완은 갑상선기능저하성 근병증을 시사한다. 근육의 mounding 현상도 동반될 수 있다. TSH를 측정하고 필요 시 free T4로 확인한다. 본문에 저칼륨혈증이 없으므로 저칼륨성 근병증이 동반됐다고 추가하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000248 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: hypothyroid myopathy를 저칼륨성 근병증으로 설명한 오연결 제거.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000248
