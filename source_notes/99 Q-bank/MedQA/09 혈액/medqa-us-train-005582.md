---
type: qbank
schema_version: 1
id: medqa-us-train-005582
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0bf1fff363827181e5d7f0dd44b3812d75dc18fa62353d272fcf225e385112d8
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "겸상적혈구병 급성흉부증후군"
  - "폐렴구균 백신"
  - "겸상적혈구 예방관리"
related_disease_slugs:
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Y-Q66C0IChQbmV1bW9uaWEpLm1k
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
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
---

# MedQA US 임상문제

## 문제

겸상적혈구병으로 입원한 8세 아이가 이튿날 발열, 흉통과 기침을 보인다. 산소포화도는 98%에서 90%로 낮아졌고 흉부 X선에 새 침윤이 보인다. 가장 적절한 판단은?

## 선택지

A. 통증 위기의 연장이므로 진통제만 늘린다
B. 저산소증이 있으므로 폐렴 여부와 무관하게 폐색전증으로 확진한다
C. 소아 폐렴에서는 새 침윤이 겸상적혈구병과 관련되지 않는다
D. 급성 흉부증후군으로 보고 산소·경험적 항생제와 수혈 필요성을 평가한다

## 해설


겸상적혈구병에서 새 폐침윤과 호흡기 증상·저산소증은 급성 흉부증후군에 부합한다. 감염이 촉발 요인일 수 있어 치료하며, 산소화 악화나 중증도에 따라 수혈을 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005582 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 다당질 백신 B의 피막균 감염 예방 의도 유지; 모든 급성흉부증후군을 PPSV 단독으로 예방한다는 오류 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/pneumococcal/hcp/vaccine-recommendations/risk-indications.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005582
- https://www.nhlbi.nih.gov/sites/default/files/publications/56-364NFULL.pdf
- https://b-s-h.org.uk/guidelines/guidelines/management-of-acute-chest-syndrome-in-sickle-cell-disease
