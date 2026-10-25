---
type: qbank
schema_version: 1
id: medqa-us-train-008532
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5bb2119d745b34b554f293f45fa83a010e8985c8819519beb9379254c10cbaf7
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "sickle cell disease"
  - "functional asplenia"
  - "sepsis prophylaxis"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2MqO2YiOymnSAoU2Vwc2lzKS5tZA
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
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
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2xpbmRhbXljaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

7세 남아가 3일 동안 지속된 전신 피로, 근육통, 발열로 응급실에 내원했다. 겸상적혈구병이 있다. 현재 하이드록시우레아와 엽산을 복용한다. 병색이 있고 체온 39.2°C(102.6°F), 맥박 103회/분, 호흡수 28회/분이다. 결막이 창백하다. 폐 청진은 깨끗하고 복부는 부드럽고 압통이 없다. 신경학적 검사에서 국소 소견은 없다. 혈색소 10.3g/dL, 백혈구 14,100/mm³이다. 정맥 수액을 투여하고 혈액 배양을 채취했다. 다음 중 치료에서 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 프레드니손
B. 반코마이신
C. 클린다마이신
D. 세프트리악손

## 해설


겸상적혈구병의 기능적 무비장은 폐렴구균 등 침습성 피막균 감염 위험을 높인다. 고열과 전신병색이 있는 이 소아에게는 배양 채취 후 ceftriaxone(D) 같은 비경구 경험적 항생제를 신속히 투여한다. 이는 평상시 penicillin 예방요법과 다르며, 중증도·의심 감염원·내성에 따라 추가 치료와 입원 관찰이 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008532 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: SCD 소아의 고열·전신병색에서 ceftriaxone D는 예방약이 아니라 배양 후 신속한 경험적 치료다. S. aureus를 대표 피막균으로 묶은 오류 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nhlbi.nih.gov/sites/default/files/publications/56-364NFULL.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008532
