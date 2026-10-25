---
type: qbank
schema_version: 1
id: medqa-us-test-000503
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:7721abb356f2fd4a6cbb576f3809ff611a79a6466b1051adeb13e73fec9526cc
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "갑상샘 여포성 종양"
  - "냉결절"
  - "갑상샘암"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmOyVlCAoVGh5cm9pZCBDYW5jZXIpLm1k
question_type: management
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

45세 여성이 샤워 중 발견한 목의 ‘덩이’로 병원에 왔다. 다른 증상은 없고 체중도 늘지 않았다고 한다. 진찰에서 앞목에 2 cm 결절이 있었고 TSH는 정상이었으며 방사성핵종 스캔에서 냉결절이었다. 미세침흡인 생검에서 악성이 의심되는 여포 구조가 보였다. 다음 중 가장 적절한 다음 단계는?

## 선택지

A. 펀치 생검
B. 수술적 절제
C. 티록신 투여
D. 초음파

## 해설

정답은 B이다. FNA에서 여포성 종양이 의심되면 세포 모양만으로 여포선종과 여포암을 구별하기 어렵다. 피막 또는 혈관 침범을 조직 구조에서 확인하기 위해 진단적 수술 절제(일반적으로 적절한 범위의 엽절제)를 고려한다. 냉결절이라는 사실만으로 암이 확정되거나 모든 환자에게 전절제가 필요한 것은 아니다. punch biopsy나 단순 thyroxine 투여로 이 조직학적 문제를 해결할 수 없다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: FNA의 여포성 종양 소견만으로 암 확정은 불가하므로 진단적 절제의 이유를 피막/혈관 침범 판정으로 명료화.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10448590/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000503
