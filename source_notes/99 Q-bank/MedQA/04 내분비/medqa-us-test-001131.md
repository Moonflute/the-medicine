---
type: qbank
schema_version: 1
id: medqa-us-test-001131
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:eb6e4f60fa10c73794028d5d1ac5ddd164e034de44bcf783f1973c71a2ff2a4a
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "갑상선기능항진증"
  - "갑상선 심장병"
  - "심방세동"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVydGh5cm9pZGlzbSkubWQ
question_type: management
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1pb2Rhcm9uZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRGlnb3hpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

그레이브스병으로 갑상선중독증이 확인된 35세 여성이 심계항진을 호소한다. 심전도에서 심방세동, 맥박 132회/분이다. 혈압은 안정적이고 심부전과 천식은 없다. 원인 치료와 별도로 심박수를 낮추기 위해 우선 쓸 약은?

## 선택지

A. 프로프라놀롤
B. 디곡신
C. 아미오다론
D. 아데노신

## 해설


갑상선중독증에서 혈압이 안정적이면 베타차단제로 빈맥과 교감신경 증상을 조절한다. 갑상선 원인 치료와 심방세동의 항응고 필요성 평가는 별개다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 미세떨림·눈꺼풀 후퇴·따뜻한 사지와 불규칙 빈맥은 갑상샘중독의 교감신경 증상을 지지. 선택지 A β차단제로 증상 조절하는 맥락 일치.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001131
- https://doi.org/10.1530/ETJ-26-0043
