---
type: qbank
schema_version: 1
id: medqa-us-train-005847
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a2cd6171aeaec4881027416f6052ffab6b88105377b5eb28c64a71c9fac708a7
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "겸상적혈구병"
  - "혈관폐쇄성 위기"
  - "하이드록시우레아"
  - "Sickle cell disease"
related_disease_slugs:
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
question_type: prevention
difficulty: complex
answer: B
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0NldGlyaXppbmUubWQ
---

# MedQA US 임상문제

## 문제

HbSS가 확인된 8세 아이가 통증 위기로 1년 동안 세 차례 입원했다. 이번 발작은 치료해 호전됐다. 향후 통증 위기를 줄이는 장기 치료에 적절한 약은?

## 선택지

A. 경구 엽산만 증량
B. 하이드록시우레아
C. 통증이 없는 날에도 매일 모르핀
D. 아스피린 단독

## 해설


하이드록시우레아는 HbF를 늘리고 혈관폐쇄성 위기의 빈도를 줄인다. 치료 중에는 혈구 수를 추적해 용량을 조절한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005847 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: SCD 장기 통증발작 예방 문항에 두드러기/H1·H2·steroid 해설이 붙은 명백한 오연결을 교체.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=76957c0d-0f98-4376-bb06-eee651adc09d

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005847
- https://www.nhlbi.nih.gov/sites/default/files/publications/56-364NFULL.pdf
