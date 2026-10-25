---
type: qbank
schema_version: 1
id: medqa-us-train-003370
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1cdf664befc4c2298ea45539eae97094cfbd3f14b6e7e42e45563b87f625721a
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "monoclonal gammopathy of undetermined significance"
  - "monoclonal gammopathy"
  - "osteoporosis"
  - "plasma cells"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzqOuLpOqzteymnSAoT3N0ZW9wb3Jvc2lzKS5tZA
question_type: association
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

64세 여성이 고혈압 관리를 위한 정기 연례 검진을 받으러 왔다. 무증상이고 혈압은 일년 내내 정상 범위였다. 다발관절증의 병력이 있고 B형 간염 항체 보유자이다. 혈액검사에서 경도의 정상적혈구성 빈혈과 적혈구침강속도 상승이 확인되었다. 혈청 단백전기영동에서 IgG 카파 단클론성 파라단백이 확인되었고, 골수검사에서 형질세포가 5~10%였다. CT에서는 중등도의 골병증만 보였다. 이 환자의 진단과 가장 관련 있는 소견은?

## 선택지

A. 흑색가시세포증
B. 호염기성 과립을 가진 골수모세포
C. 골다공증
D. 말초혈액도말의 눈물방울 적혈구

## 해설


단클론 IgGκ가 비교적 적고 골수 형질세포가 낮은 비율이며 골용해 병변이 없는 상황은 MGUS 범주의 질환을 시사하며 보기 중 골다공증 C와 연관될 수 있다. MGUS의 골수 clonal plasma cell 기준은 <10%이지 <3%가 아니다. 원문의 5–10%가 실제로 10% 이상이면 무증상 골수종 등 경계 진단을 재평가해야 한다. 골다공증 또는 골감소 자체를 골수종의 골용해성 병변과 동일시하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003370 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: MGUS 골수형질세포 역치를3%로 잘못 적은 부분을<10%로 교정하고 5–10% 경계값 및 단순 골다공증과 용해성 병변을 구분.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7020664/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003370
