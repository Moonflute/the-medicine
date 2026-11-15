---
type: qbank
schema_version: 1
id: medqa-us-train-001341
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8dcd3d430ecde7819247dccbcf06c5568d0480ce37f256a7ccc8a4af34455f1e
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "thyroid nodule"
  - "toxic adenoma"
  - "hyperthyroidism"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDqsrDsoIggKFRoeXJvaWQgTm9kdWxlKS5tZA
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVydGh5cm9pZGlzbSkubWQ
question_type: investigation
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

47세 여성이 두근거림과 함께 만져지는 갑상선 결절로 내원했다. 초음파에서 1.8cm 고형 결절이 보인다. TSH 0.06 mIU/L로 억제되고 유리 T4가 높으며 임신·수유 중이 아니다. 결절이 자율적으로 기능하는지 확인할 검사는?

## 선택지

A. 경부 조영 CT
B. 혈청 칼시토닌
C. 갑상선 결절 중심부바늘생검
D. 갑상선 신티그래피

## 해설


TSH가 억제된 갑상선 결절은 신티그래피로 자율 기능 여부를 확인한다. 초음파는 구조를 보여 주지만 호르몬을 스스로 분비하는지 판단할 수 없다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: TSH가 낮은 갑상샘결절은 scintigraphy D로 기능성 여부 평가가 적합. 저TSH만으로 절제/RAI치료를 바로 결정하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001341
- https://www.kci.go.kr/kciportal/landing/article.kci?arti_id=ART003086091
