---
type: qbank
schema_version: 1
id: medqa-us-train-009017
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ebf99d16aab70121939075da00acbc9c767d349083a584360b856e3b297174f7
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "acute acalculous cholecystitis"
  - "critically ill patient"
  - "percutaneous cholecystostomy"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7JO46rCc7Je8IChBY3V0ZSBDaG9sZWN5c3RpdGlzKS5tZA
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
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
---

# MedQA US 임상문제

## 문제

관상동맥우회술 뒤 심기능이 악화된 72세 남성이 고열과 우상복부 압통을 보인다. 초음파에서 결석 없이 담낭벽 비후와 주위 액체가 보인다. 항생제를 시작했으며, 마취 평가에서 현재 전신마취 수술을 견디기 어렵다고 판단했다. 필요한 감염원 조절은?

## 선택지

A. 총담관 ERCP 배액
B. 항생제만 계속 투여하며 수술 가능할 때까지 기다림
C. 즉시 복강경 담낭절제
D. 영상 유도 경피 담낭배액

## 해설


무결석성 담낭염이 의심되고 지금 담낭절제술을 감당할 수 없다면 경피 담낭배액으로 농이 찬 담낭의 감염원을 조절할 수 있다. 담낭 배액은 총담관을 감압하는 ERCP와 목적이 다르다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009017 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: CABG직후 무결석성 담낭염의 항균제+경피배액 D 유지. 실제 BP110/60을 이미 쇼크라고 만들지 않고 최근 심장수술·수술적합성을 근거로 한정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://onlinelibrary.wiley.com/doi/10.1002/jhbp.504

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009017
- https://pubmed.ncbi.nlm.nih.gov/28888080/
