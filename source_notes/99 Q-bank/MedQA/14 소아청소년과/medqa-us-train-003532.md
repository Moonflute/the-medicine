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
question_type: diagnosis
related_disease_slugs:
  - MDgg6rCQ7Je8L-2MqO2YiOymnSAoU2Vwc2lzKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Iug7IOd7JWEIO2MqO2YiOymnSAoTmVvbmF0YWwgU2Vwc2lzKS5tZA
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
difficulty: complex
answer: D
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

18개월 남아가 3일간 악화된 피로, 보챔, 식욕부진으로 응급실에 왔다. 신생아 선별검사에서 베타글로빈 유전자 점돌연변이가 확인되었고, 현재 체온은 39.1°C, 혈압은 78/42 mmHg, 백혈구는 19,300/mm3, 혈색소는 7.8 g/dL였다. 다음 중 이 환자의 증상을 일으킨 가장 가능성 높은 원인균은?

## 선택지

A. 인플루엔자균
B. 수막염균
C. 살모넬라
D. 폐렴사슬알균

## 해설

β글로빈 점변이와 빈혈은 겸상적혈구병의 출제 맥락을 시사한다. 비장 기능 저하가 생기면 피막세균, 특히 폐렴구균 감염에 취약해져 발열·저혈압 사례에서 D가 보기 중 적절하다. 다른 피막세균과 살모넬라도 감염을 일으킬 수 있으며 실제 최빈균은 예방접종·지역·감염 부위 등에 영향을 받는다. 본문에서 균이 배양된 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 비표준 격막성 겸상적혈구증 명칭을 교정하고 폐렴구균 위험을 모든 현재 감염의 확정적 최빈균으로 과장하지 않도록 정리했다.
- https://www.cdc.gov/sickle-cell/complications/complications-of-scd-infection.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003532
