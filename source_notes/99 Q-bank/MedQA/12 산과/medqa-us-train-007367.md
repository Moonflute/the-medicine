---
type: qbank
schema_version: 1
id: medqa-us-train-007367
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3239d0d0bc87b448cf29babcee079e0ee999a6e7909b51954972563be9e07a14
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "다운증후군"
  - "목덜미 투명대 증가"
  - "융모막융모검사"
  - "산전 선별검사"
question_type: investigation
related_disease_slugs:
  - MTIg7IKw6rO8L-uLpOyatOymne2bhOq1sCAoRG93biBTeW5kcm9tZSkubWQ
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

37세 초임부가 임신 13주에 산전 진료를 위해 내원했다. 건강하며 엽산만 복용한다. 활력징후는 정상이고 골반검사에서 자궁 크기는 임신 13주에 해당한다. 초음파에서 목덜미 투명대가 99백분위수보다 높고, 산모 혈청 임신관련 혈장단백 A는 감소했으며 사람 융모성 성선자극호르몬 농도는 중앙값의 2배로 증가했다. 다음 중 진단을 확진할 가능성이 가장 높은 검사는 무엇인가?

## 선택지

A. 융모막융모검사
B. 쿼드검사
C. 무세포 DNA 검사
D. 양수검사

## 해설

높은 NT·낮은 PAPP-A·높은 hCG는 21번 삼염색체 위험을 높이는 선별 소견이다. 현재 13주에 진단 검사를 원한다면 CVS(A)를 시행할 수 있다. 양수검사도 진단 검사지만 보통 15주 이후이며, cfDNA·쿼드검사는 확진 검사가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: CVS가 모든 확진법보다 정확하다는 과장 대신 13주 시점 적합성을 설명.
- https://www.acog.org/clinical/clinical-guidance/practice-advisory/articles/2026/01/screening-for-fetal-chromosomal-abnormalities

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007367
