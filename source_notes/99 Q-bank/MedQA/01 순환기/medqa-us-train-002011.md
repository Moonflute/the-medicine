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

5세 남아가 축구 중 잠깐 의식을 잃었다. 아버지는 34세에 원인 불명으로 급사했다. 반복 심전도에서 QTc가 490 ms이고 전해질은 정상이며 QT를 연장시키는 약은 복용하지 않는다. 현재 리듬은 동율동이다. 재발을 막기 위해 우선 시작할 약물은?

## 선택지

A. 프로프라놀롤
B. 아미오다론
C. 황산마그네슘 정맥 주입
D. 베라파밀

## 해설

운동 중 실신, 젊은 급사 가족력, 지속적인 QT 연장은 선천성 긴QT증후군을 시사한다. 프로프라놀롤 같은 비선택적 베타차단제를 우선 사용하고 QT를 연장시키는 약을 피한다. 정맥 마그네슘은 현재 진행 중인 토르사드 드 푸앵트의 급성 치료에 쓰인다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A 유지. QTc 470 단독으로 확진한다고 한 설명을 운동실신·급사가족력과 종합하는 설명으로 수정하고 베타차단제 선택 유지.
- https://academic.oup.com/eurheartj/article/43/40/3997/6675633

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002011
- https://k-hrs.org/assets/file/07_2024_Korean_Arrhythmia_Society_sudden_cardiac_Guidelines.pdf
