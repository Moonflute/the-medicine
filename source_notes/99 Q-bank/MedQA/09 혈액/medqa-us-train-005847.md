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

8세 아프리카계 미국인 남아가 심한 복통과 허벅지 통증으로 어머니와 함께 응급실에 왔다. 어머니도 같은 질환이 있고 아이가 이전에도 이런 발작으로 입원한 적이 있다고 한다. 환자는 통증을 10점 만점에 10점으로 호소한다. 활력징후는 심박수 110회, 혈압 100/55 mmHg, 체온 100.2°F, 호흡수 분당 20회이다. 혈액검사에서 혈색소 9.5 g/dL, 백혈구 13,000/mm³이다. 어머니가 장기적으로 발작의 빈도와 중증도를 줄일 방법이 있는지 묻는다. 다음 중 어떤 치료가 도움이 되는가?

## 선택지

A. 산소
B. 하이드록시우레아
C. 생리식염수
D. 교환수혈

## 해설


반복되는 심한 복부·허벅지 통증과 가족성 SCD를 시사하는 병력에서 장기적으로 통증 위기의 빈도/중증도를 낮추는 선택지는 hydroxyurea B이다. HbF 증가 등을 통해 HbS 중합과 혈관폐쇄를 줄인다. 현재 통증의 즉각적 진통·합병증 평가는 별도로 필요하고 산소·수액·교환수혈은 각각 적응이 있을 때 쓰며 장기 hydroxyurea의 역할을 대신하지 않는다. 이 케이스에는 두드러기·혈관부종·아나필락시스가 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005847 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: SCD 장기 통증발작 예방 문항에 두드러기/H1·H2·steroid 해설이 붙은 명백한 오연결을 교체.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=76957c0d-0f98-4376-bb06-eee651adc09d

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005847
