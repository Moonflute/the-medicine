---
type: qbank
schema_version: 1
id: medqa-us-train-006081
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:75418457e2ebc328c25b397098e898868db510cbe3b4ac9abb444541afbc58c4
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "자가면역 간염"
  - "항평활근 항체"
  - "문맥 주위 조각괴사"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_snpDqsIDrqbTsl60g6rCE7Je8IChBdXRvaW1tdW5lIEhlcGF0aXRpcykubWQ
question_type: investigation
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

50세 여성이 6개월 동안 지속된 피로로 내원했다. 이 기간에 체중이 5kg(11lb) 감소했다. 하시모토 갑상선염 병력이 있고 레보티록신만 복용한다. 성생활은 남편과만 하며 흡연은 하지 않고 매일 와인 한 잔을 마신다. 체온은 37°C(98.6°F), 맥박은 분당 70회, 혈압은 110/70 mmHg이다. 복부검사에서 반발통과 방어 없이 우상복부 압통이 있다. ALT 190 U/L, AST 250 U/L, 총 빌리루빈 0.6 mg/dL이다. 간생검에서 형질세포 침윤과 문맥 주위 조각괴사가 보인다. 추가 평가에서 다음 중 어떤 소견이 가장 잘 나타나는가?

## 선택지

A. 항평활근 항체 양성
B. 항미토콘드리아 항체 양성
C. HBV 표면항원 양성
D. 혈청 트랜스페린 포화도 상승

## 해설

형질세포 침윤·문맥주위 interface hepatitis와 자가면역병력은 자가면역간염(AIH)을 시사한다. A의 항평활근항체(SMA)가 관련되며 ANA도 별개 항체로 양성일 수 있다. AIHA는 자가면역용혈빈혈의 약어이고 SMA를 ANA로 표시하면 안 된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 자가면역간염 AIH와 용혈성빈혈 AIHA, SMA와 ANA의 약어 혼동을 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006081
