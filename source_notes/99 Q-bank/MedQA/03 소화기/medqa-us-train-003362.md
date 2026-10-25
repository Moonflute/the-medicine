---
type: qbank
schema_version: 1
id: medqa-us-train-003362
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6616b463c60d954730fd2759a1ba914dc0c869015423a1cb49a237123ab9fadd
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "ruptured hepatic adenoma"
  - "anabolic androgenic steroid use"
  - "oral contraceptive exposure"
  - "dyslipidemia"
related_disease_slugs:
  - MDQg64K067aE67mEL-ydtOyDgeyngOyniO2YiOymnSAoRHlzbGlwaWRlbWlhKS5tZA
question_type: risk_factor
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 여성이 파워리프팅을 하며 경구피임약을 복용하고 담배와 술도 사용한다. 진찰에서 여드름과 근육비대가 있으며 쇼크 상태로 내원했고 우상복부에 종괴가 있어 파열된 간선종이 의심된다. 이 환자에서 추가로 발견될 가능성이 가장 높은 소견은?

## 선택지

A. 알파태아단백 상승
B. 바이러스 핵심항원 양성
C. 피부 접힘부의 색소침착 증가
D. LDL 증가와 HDL 감소

## 해설

Powerlifting, 여드름·근육비대는 anabolic-androgenic steroid 노출 가능성을 시사하고, 경구피임약과 함께 간선종 위험 단서가 된다. 이러한 androgen 노출에서는 HDL 감소와 LDL 증가 D가 동반될 수 있다. 선종이 파열되기 때문에 고지혈증이 생기거나 모든 경구피임약이 일률적으로 HDL을 낮춘다는 기존 설명은 부정확하다. 실제 약물 사용은 확인해야 한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원문 acne·muscle hypertrophy를 복원. LDL↑/HDL↓를 OCP나 선종파열 자체가 아닌 의심 anabolic androgen 노출과 연결.
- https://academic.oup.com/jcem/article/105/12/3613/5909161
- https://doi.org/10.14309/ajg.0000000000002857

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003362
