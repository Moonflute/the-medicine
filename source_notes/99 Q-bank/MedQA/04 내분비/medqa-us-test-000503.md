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

45세 여성의 갑상선 초음파에서 3 cm 단일 고형 결절이 보인다. 다른 엽에 결절이나 의심 림프절은 없다. 세침흡인에서 여포성 종양(Bethesda IV)이 보고됐다. 분자검사가 어렵고 환자는 수술로 확진을 원한다. 적절한 수술은?

## 선택지

A. 경부 림프절 절제만 시행
B. 결절이 있는 쪽 갑상선 엽절제술
C. 결절에 고주파 절제술을 먼저 시행
D. 반대쪽 갑상선 엽절제술

## 해설

세침흡인 세포만으로는 여포선종과 여포암을 가르는 피막·혈관 침범을 확인할 수 없다. 필요한 경우 결절이 있는 엽을 절제해 조직을 검사한다. Bethesda IV만으로 전절제가 필수인 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: FNA의 여포성 종양 소견만으로 암 확정은 불가하므로 진단적 절제의 이유를 피막/혈관 침범 판정으로 명료화.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10448590/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000503
- https://www.kci.go.kr/kciportal/landing/article.kci?arti_id=ART003086091
