---
type: qbank
schema_version: 1
id: medqa-us-train-006674
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:89492bc257e90016080de3780b17d80475d514efa7a654406b866d97c4c1fa7c
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "심인성 쇼크"
  - "급성 심부전"
  - "심장 펌프 기능장애"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDsi6zrtoDsoIQgKEFjdXRlIEhlYXJ0IEZhaWx1cmUpLm1k
question_type: mechanism
difficulty: complex
answer: D
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

69세 남성이 의식 저하와 호흡곤란으로 내원했다. 혈압 78/52 mmHg, 사지는 차고 축축하며 소변량이 감소했다. 경정맥 팽창과 양측 폐 수포음이 있고 침상 심초음파에서 좌심실의 전반적인 수축이 심하게 저하돼 있다. 쇼크의 주된 기전은?

## 선택지

A. 혈관 안의 체액량 감소
B. 말초혈관 확장
C. 우심실 유출로의 급성 폐쇄
D. 좌심실 펌프 부전에 의한 심박출량 저하

## 해설


저관류 징후와 폐·정맥 울혈이 함께 있고 좌심실 수축력이 심하게 떨어져 있다. 이는 저혈량이나 혈관 확장보다 심장 펌프 부전이 주된 심인성 쇼크에 맞는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 저관류/저혈압에 JVP상승·폐울혈이 동반돼 단순혈량소실보다 심장펌프장애 D를 지지.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006674
