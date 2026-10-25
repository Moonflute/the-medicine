---
type: qbank
schema_version: 1
id: medqa-us-train-000029
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:efaacd97b13e06858438557877785a5f884473973d31336d6464ab3ec0b73071
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "double vision"
  - "ptosis"
  - "pupillary involvement"
  - "third nerve palsy"
question_type: investigation
related_disease_slugs: []
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 여성이 2개월 전부터 시작된 시력 변화, 구체적으로는 점진적으로 발생한 복시(double vision)를 주소로 일차 진료 의사를 방문하였다. 복시는 항상 나타나며 하루 중 증상의 호전이나 악화는 없다. 환자는 또한 오른쪽 눈을 뜨기 어렵고 거울을 보았을 때 오른쪽 눈꺼풀이 처져 보인다고 하였다. 정면을 응시할 때의 신체 검진 소견은 사진과 같다. 오른쪽 동공은 6mm이며 빛에 대한 반응이 저하되어 있다. 나머지 신경학적 검사 소견은 정상이다. 검사실 검사에서 당화혈색소(Hb A1c)는 5.0%였다. 이 환자에게 다음에 시행할 가장 적절한 검사는 무엇인가?

## 선택지

A. 직접 검안경 검사(Direct fundoscopy)
B. 안압 측정(Intraocular pressures)
C. 뇌 자기공명혈관조영술(MR angiography of the head)
D. 측두동맥 생검(Temporal artery biopsy)

## 해설

복시·안검하수와 확대되고 빛반응이 둔한 동공은 압박성 제3뇌신경마비를 의심하게 한다. 특히 후교통동맥 동맥류 등 혈관성 원인을 신속히 평가하기 위해 선지 중 뇌 MRA(C)가 적절하다. 현재 정면사진은 없지만 동공침범과 안검하수 정보로 검사를 판단할 수 있으며, 안압/안저검사만으로 동맥류를 배제해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 안구하수체마비라는 오역을 동공침범 제3뇌신경마비로 정정. MRA C 유지.
- 공식/학회 근거: https://www.ninds.nih.gov/health-information/disorders/cerebral-aneurysms

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000029
