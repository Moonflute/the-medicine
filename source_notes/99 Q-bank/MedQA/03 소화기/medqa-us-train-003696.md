---
type: qbank
schema_version: 1
id: medqa-us-train-003696
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d4dd97170f839430d1e15e8fd775b4f255fbd986d6bdabbbaa2b6339f359bea3
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "hepatic adenoma"
  - "oral contraceptive exposure"
  - "benign liver tumor"
  - "glycogen and lipid accumulation"
related_disease_slugs:
  - MDQg64K067aE67mEL-ydtOyDgeyngOyniO2YiOymnSAoRHlzbGlwaWRlbWlhKS5tZA
question_type: risk_factor
difficulty: simple
answer: C
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

45세 여성의 복부 초음파에서 여러 간 종괴가 발견되었다. 생검에서 정상 간세포보다 큰 선종 세포 판과 글리코겐 및 지질이 보였고 정상 격막, 문맥, 담관은 없었다. 다음 중 이 상태와 관련된 것은?

## 선택지

A. 사염화탄소
B. 아플라톡신
C. 경구피임약
D. 흡연

## 해설


간 선종은 경구 피임약(에스트로겐/프로게스틴) 장기간 복용과 강하게 연관된다. 호르몬 노출이 간세포 증식을 촉진해 선종을 유발한다. 따라서 정답은 경구피임약이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 담관/portal tract 없는 간선종 병리와 장기 경구피임약 노출 C의 연관이 타당.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003696
