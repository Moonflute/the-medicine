---
type: qbank
schema_version: 1
id: medqa-us-train-001961
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9d5df89c68f5844b68527a32a3f4dfaa08114b43c0381a891568ede43febf624
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "gout"
  - "acute gout flare"
  - "lifestyle modification"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-2Gte2SjSAoR291dCkubWQ
question_type: prevention
difficulty: standard
answer: C
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9JbnN1bGluLm1k
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRmb3JtaW4ubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0FsbG9wdXJpbm9sLm1k
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

45세 남성이 갑자기 발생한 발 통증으로 응급실에 왔다. 잠에서 깬 뒤 오른쪽 엄지발가락에 심한 통증이 생겼다. 당뇨병, 비만과 고혈압이 있으며 insulin, metformin, lisinopril 및 ibuprofen을 복용한다. 하루 담배 2갑을 피우며 매일 밤 위스키 3잔을 마신다. 정맥 수액과 corticosteroid를 투여해 증상이 호전되었다. 진료 종료 시 혈압은 175/95 mmHg이며, 향후 재발을 피하는 방법을 묻는다. 다음 중 이 상태의 재발을 예방하는 가장 좋은 초기 중재는 무엇인가?

## 선택지

A. Allopurinol
B. Hydrochlorothiazide
C. 생활습관 조치
D. Probenecid

## 해설


첫 통풍 발작 후 명백한 요산저하제 적응증이 제시되지 않은 이 환자에게는 체중 조절, 음주 제한과 식이 상담(C)을 우선 시행할 수 있다. 흡연과 고혈압 등 전반적 건강위험도 함께 관리한다. 생활습관 변화의 요산 감소 효과는 제한적이므로 반복 발작·통풍결절·방사선 손상 등 적응증이 있으면 약물 요산저하 치료를 대체하지 못한다. 필요한 경우 항염증 예방요법과 함께 발작 중에도 요산저하제를 시작할 수 있다. Hydrochlorothiazide는 요산을 올릴 수 있어 재발 예방약이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001961 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 생활습관 조절을 요산저하제보다 항상 효과적이라고 설명하거나 급성기에는 요산저하제를 시작할 수 없다는 인상을 주지 않도록 교정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10563586/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001961
