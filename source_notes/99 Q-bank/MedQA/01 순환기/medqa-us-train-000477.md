---
type: qbank
schema_version: 1
id: medqa-us-train-000477
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3b1dc30fc8222df26c8a7955976eac53329a27d745341096f09ac0877a748f55
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "syncope"
  - "polymorphic ventricular tachycardia"
  - "torsades de pointes"
  - "prolonged QT interval"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2YiOq0gOuvuOyjvOyLoOqyveyEsSDsi6Tsi6AgKFZhc292YWdhbCBTeW5jb3BlKS5tZA
  - MDEg7Iic7ZmY6riwL-yLrOyLpCDruYjrp6UgKFZlbnRyaWN1bGFyIFRhY2h5Y2FyZGlhKS5tZA
  - MDEg7Iic7ZmY6riwL-uLpO2YleyEsSDsi6zsi6Qg67mI66elIChUZFApIChUb3JzYWRlcyBkZSBQb2ludGVzIChUZFApLm1k
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMyDshoztmZTquLAvT25kYW5zZXRyb24ubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRmb3JtaW4ubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 남성이 두근거림 뒤 반복해서 실신했다. 메타돈과 온단세트론 복용 중이며 심전도에는 QTc 550 ms가 보인다. 모니터에서 QRS 축이 비틀리듯 바뀌는 다형성 심실빈맥이 짧게 여러 차례 나타났다. 지금은 동율동으로 돌아왔고 혈압은 안정적이다. 원인 약을 중단하면서 재발을 억제할 약은?

## 선택지

A. 정맥 황산마그네슘
B. 정맥 아미오다론
C. 정맥 아데노신
D. 정맥 베라파밀

## 해설

현저한 QT 연장과 회전하는 듯한 다형성 심실빈맥은 토르사드 드 푸앵트를 시사한다. 현재 동율동으로 회복했어도 재발을 억제하기 위해 정맥 마그네슘을 쓰고 QT 연장 약을 중단하며 전해질을 교정한다. 지속되는 불안정 다형성 심실빈맥은 즉시 제세동한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: QT 연장의 핵심 약물 노출을 설명하고 모든 다형성 VT의 원인이라는 단정 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000477
- https://k-hrs.org/assets/file/07_2024_Korean_Arrhythmia_Society_sudden_cardiac_Guidelines.pdf
