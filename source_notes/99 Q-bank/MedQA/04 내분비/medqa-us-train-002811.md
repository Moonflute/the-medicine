---
type: qbank
schema_version: 1
id: medqa-us-train-002811
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ed20ace0cb997e53c5376d63a9f2962b68f3aa6642ba8e9f374fd29999d140ad
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "Paget disease of bone"
  - "elevated bone-specific alkaline phosphatase"
  - "osteolytic and osteoblastic lesions"
  - "normal GGT"
related_disease_slugs:
  - MTMg67aA7J246rO8L-2MjOygnO2KuOuzkSAoUGFnZXQncyBEaXNlYXNlKS5tZA
question_type: risk_factor
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

66세 여성이 복통으로 응급실에 내원했다. 저녁 식사 중 증상이 시작되었다. 비만, 변비, 정맥주사 약물 사용, 당뇨병 병력이 있다. 금식하도록 하고 외과 병동으로 옮겼으며 3일 후 담낭절제술을 받고 회복 중이다. 검사에서 혈색소 11 g/dL, 헤마토크리트 33%, 백혈구 8,500/mm³(감별계수 정상), 혈소판 197,000/mm³, 나트륨 139 mEq/L, 염소 100 mEq/L, 칼륨 4.3 mEq/L, 중탄산염 25 mEq/L, BUN 20 mg/dL, 포도당 99 mg/dL, 크레아티닌 1.1 mg/dL, 칼슘 10.5 mg/dL, ALP 533 U/L, GGT 50 U/L, AST 22 U/L, ALT 20 U/L이다. 현재 무증상이며 상태가 좋다고 한다. 다음 중 이 환자의 기저 상태와 관련된 것은?

## 선택지

A. 골의 경화성 및 용해성 병변
B. 단클론성 형질세포 증식
C. 위장관 폐색의 재발
D. 질적 골 결손

## 해설


Paget 병은 골 재형성 속도 증가와 골소주, 골피질 비후를 동반하며, ALP 상승이 특징이다. 이는 골의 경화성·용해성 병변이 동시에 존재하는 병태와 일치한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 다른 간효소 대비 ALP가 두드러지고 골질환을 묻는 선택지에서 Paget 혼합 용해성/경화성 병변 A; 실제 GGT 기준범위·ALP 분획 확인은 필요.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002811
