---
type: qbank
schema_version: 1
id: medqa-us-train-008317
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:90aa964bccdbeef10a75c68642d47a9b3430caff4957be83ff295d4d659e24b5
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "acute limb ischemia"
  - "arterial embolism"
  - "thromboembolectomy"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDrj5nrp6Ug7Y-Q7IOJIChBY3V0ZSBBcnRlcmlhbCBPY2NsdXNpb24pLm1k
question_type: management
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 남자가 갑자기 발생한 심한 좌측 다리 통증과 저림, 근력저하로 응급실에 왔다. 고혈압과 고지혈증 병력이 있고 혈압 155/92 mm Hg, 체온 37.1°C(98.7°F), 맥박 92회/분으로 불규칙하다. 좌측 슬와동맥과 후경골동맥 맥박이 없고 다리가 차갑고 창백하지만 조직 손상, 신경손상, 감각소실은 뚜렷하지 않다. 이 상태에 가장 필요할 가능성이 높은 치료는?

## 선택지

A. 혈전색전제거술
B. 근막절개술
C. 와파린
D. 항생제

## 해설

급작스러운 통증, 냉감, 창백과 원위부 맥박 소실은 급성 동맥 폐색을 시사한다. 불규칙 맥박은 심장성 색전을 의심하게 하며, 선택지 중 A의 혈전색전제거술이 적합하다. 즉시 혈관 전문팀이 사지 생존도를 평가하고 금기가 없으면 전신 항응고를 시작하며, 재관류 방법은 폐색의 위치와 환자 상태에 따라 정한다. 와파린만으로 응급 재관류를 대체하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 급성 색전성 사지허혈 A에서 긴급 재관류의 필요성과 항응고 병행을 명시.
- https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000001251

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008317
