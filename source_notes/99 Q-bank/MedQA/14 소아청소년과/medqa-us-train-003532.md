---
type: qbank
schema_version: 1
id: medqa-us-train-003532
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4a90231a82dbb166a3959fae6c0b92242a15a9f3d5ee37c3394b39e690f95cc2
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "sickle cell disease"
  - "functional asplenia"
  - "sepsis"
  - "Streptococcus pneumoniae"
question_type: management
related_disease_slugs:
  - MDgg6rCQ7Je8L-2MqO2YiOymnSAoU2Vwc2lzKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Iug7IOd7JWEIO2MqO2YiOymnSAoTmVvbmF0YWwgU2Vwc2lzKS5tZA
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
difficulty: complex
answer: A
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

HbSS 겸상적혈구병이 있는 18개월 아이가 39.2℃ 열과 함께 처지고, 사지가 차며 혈압이 낮다. 뚜렷한 감염 부위는 없다. 소생을 진행하면서 할 조치는?

## 선택지

A. 혈액배양을 가능한 한 먼저 채취하고 경험적 정맥 항생제를 지체 없이 시작한다
B. 인플루엔자 검사에서 음성이면 항생제 없이 귀가시킨다
C. 예방용 경구 페니실린만 추가 투여하고 다음 날 본다
D. 배양에서 원인균이 자랄 때까지 항생제를 미룬다

## 해설

겸상적혈구병에서 기능적 무비장으로 침습 세균감염 위험이 높다. 발열과 관류 저하는 세균성 패혈증의 경고 신호이므로 배양과 즉각적인 정맥 항생제·소생이 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 비표준 격막성 겸상적혈구증 명칭을 교정하고 폐렴구균 위험을 모든 현재 감염의 확정적 최빈균으로 과장하지 않도록 정리했다.
- https://www.cdc.gov/sickle-cell/complications/complications-of-scd-infection.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003532
- https://www.nhlbi.nih.gov/sites/default/files/publications/56-364NFULL.pdf
