---
type: qbank
schema_version: 1
id: medqa-us-test-000701
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:57ed834f6e2f8aedaf33ea375a6a00489fa43600f21258c7f4b9dbeaf627ee57
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "와파린 치료"
  - "심방세동"
  - "항응고 모니터링"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
question_type: investigation
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

76세 여성이 기계식 승모판막 치환을 받은 뒤 와파린을 복용 중이다. 최근 다른 병원에서 새 처방약을 추가했다. 와파린의 항응고 강도를 확인하고 용량을 조정할 때 사용할 검사는?

## 선택지

A. 경흉부 심초음파
B. 프로트롬빈시간의 국제표준화비(INR)
C. 활성화 부분 트롬보플라스틴시간
D. 혈소판 응집검사

## 해설


INR는 프로트롬빈시간을 표준화한 값으로 와파린의 항응고 효과를 평가한다. 목표 범위는 판막 종류와 위치 등 적응증에 따라 달라진다. 새 약이 와파린과 상호작용할 수 있어 필요하면 INR를 더 자주 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 기존 warfarin 복용자의 항응고 효과 감시는 INR B. aPTT나 혈청 약물 농도와 구별하는 기본 약리 문항.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000701
