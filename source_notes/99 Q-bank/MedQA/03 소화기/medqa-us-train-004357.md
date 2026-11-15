---
type: qbank
schema_version: 1
id: medqa-us-train-004357
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a04000e0fa11d1666237450395a78be4ea2fb24109d109cbe3245f5483af0c44
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "급성 충수염"
  - "충수절제술"
  - "복부 초음파"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_quInshLEg7Lap7IiY7Je8IChBY3V0ZSBBcHBlbmRpY2l0aXMpLm1k
question_type: 임상증례 객관식
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

19세 남성이 배꼽 주변에서 오른쪽 아랫배로 이동한 통증과 발열로 왔다. 영상에서 확장된 충수와 충수결석이 확인된다. 배액할 농양은 없고 수술 금기도 없다. 초기 수액과 항생제를 시작했다. 적절한 근본 치료는?

## 선택지

A. 비위관 감압만 시행
B. 배액할 농양이 없어도 경피 배액
C. 경구 항생제만 처방해 귀가
D. 복강경 충수절제술

## 해설

충수결석이 동반된 충수염은 항생제 단독 치료 실패나 재발 위험이 높다. 수술 가능한 환자에서는 복강경 충수절제술이 적절하다. 충수결석이 없는 일부 비복잡성 충수염의 치료 선택과는 상황이 다르다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 영상확인 충수염의 복강경 D 유지. 모든 보존치료가 위험하다는 일반화를 제거.
- https://doi.org/10.1001/jamasurg.2025.6218

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004357
