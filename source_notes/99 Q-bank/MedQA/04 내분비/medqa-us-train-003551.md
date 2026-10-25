---
type: qbank
schema_version: 1
id: medqa-us-train-003551
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:78ddaf377ec14cab5a59fc16fd804779eacb30a6c2777854694ca6c5fbf75298
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "osteoporosis"
  - "smoking"
  - "bone mineral density"
  - "risk factor"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzqOuLpOqzteymnSAoT3N0ZW9wb3Jvc2lzKS5tZA
question_type: risk_factor
difficulty: simple
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
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

47세 아프리카계 미국인 여성이 일반 건강검진을 받으러 왔다. 체질량지수는 22 kg/m2이고 채식주의자이며 현재 경구피임약을 복용하며 25갑년 흡연력이 있다. 다음 중 이 환자의 골다공증 위험인자는?

## 선택지

A. 체질량지수
B. 에스트로겐 치료
C. 인종
D. 흡연력

## 해설

선택지 중 흡연 D는 골소실/골절의 수정가능 위험인자이다. 이 환자의 BMI22는 저체중이 아니며 estrogen은 통상 골보호 효과가 있다. 집단별 골밀도 차이만으로 개인의 위험을 단정하지 않고 위험인자를 함께 평가한다. 흡연이 모든 개인에서 항상 가장 강한 위험이라는 순위 주장은 불필요하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 정답 단서인 원문25pack-year 흡연력 누락을 복원. BMI22·estrogen·인종을 모두 동일 위험인자로 한 설명 수정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003551
