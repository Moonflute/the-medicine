---
type: qbank
schema_version: 1
id: medqa-us-train-003438
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:27cfc006ffd230fe38db0e5d4eef6fb41590fa5f177651574d681e459518c234
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "ulcerative colitis"
  - "extensive colitis"
  - "pseudopolyps"
  - "total proctocolectomy"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qtqTslpHshLEg64yA7J6l7Je8IChVQykgKFVsY2VyYXRpdmUgQ29saXRpcykubWQ
question_type: management
difficulty: standard
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL1N1bGZhc2FsYXppbmUubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

31세 남성이 3개월간 점점 잦아진 하복부 통증, 복부팽만, 혈성 설사, 복부 충만감으로 내원했다. 직장검사에서 소량의 선홍색 출혈이 있었고 하부 내시경에서 직장부터 비장만곡부까지 광범위한 점막 홍반, 경화, 가성용종이 관찰되었다. 이 환자의 기저 질환에 대한 확정적 치료는?

## 선택지

A. 설파살라진
B. 전신 코르티코스테로이드
C. 아자티오프린
D. 전체 대장직장절제술

## 해설

직장에서 연속된 염증·가성용종·혈성설사는 UC를 시사한다. 전체 대장직장절제술 D는 대장과 직장의 질환 자체를 제거하는 근치적 접근이다. 하지만 좌측 또는 광범위 질환이라는 이유만으로 모든 환자에게 즉시 수술하는 것은 아니며, 실제 적응증은 난치성 질환·합병증·이형성/암 위험과 환자 선호에 따라 결정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: UC의 근치치료 D를 묻는 문항이지 범위만으로 즉시 수술 적응증이라는 뜻 아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003438
