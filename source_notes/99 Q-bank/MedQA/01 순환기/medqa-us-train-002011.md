---
type: qbank
schema_version: 1
id: medqa-us-train-002011
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3baf67eb04add6fa2022fc9c4a30766c596b5b243a28bd6112d10e8292dcff31
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "congenital long QT syndrome"
  - "exertional syncope"
  - "beta blocker"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4tCBRVCDspp3tm4TqtbAgKExvbmcgUVQgU3luZHJvbWUpLm1k
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1pb2Rhcm9uZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTWFnbmVzaXVtU3VsZmF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

5세 남아가 축구를 하다 15초간 의식을 잃어 내원했다. 떨림, 혀 깨물기 또는 실금은 없었고 단순 열성경련 한 번 외에는 건강했다. 아버지가 34세에 원인 불명의 심장질환으로 급사했다. ECG에서 QTc 470 ms이다. 다음 중 가장 적절한 치료의 다음 단계는 무엇인가?

## 선택지

A. Propranolol
B. 이식형 심율동전환 제세동기
C. 황산마그네슘
D. Amiodarone

## 해설

운동 중 실신과 젊은 나이의 급사 가족력에 QTc 470 ms가 동반되어 선천성 긴 QT 증후군을 강하게 의심한다. QTc 수치 하나만으로 모든 환자를 확진하는 것이 아니라 이 임상 맥락을 함께 평가한다. 보기 중 A, 프로프라놀롤이 적절한 초기 약물치료다.

비선택적 베타차단제인 프로프라놀롤이나 나돌롤이 선호되며 QT 연장 약제와 유발요인을 피한다. 현재 토르사드가 진행 중이라는 소견은 없으므로 급성 토르사드 치료용 마그네슘을 예방적 첫 치료로 선택하지 않는다. ICD는 위험도와 약물치료 중 사건 등 별도 적응증으로 판단한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A 유지. QTc 470 단독으로 확진한다고 한 설명을 운동실신·급사가족력과 종합하는 설명으로 수정하고 베타차단제 선택 유지.
- https://academic.oup.com/eurheartj/article/43/40/3997/6675633

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002011
