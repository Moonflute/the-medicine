---
type: qbank
schema_version: 1
id: medqa-us-train-004763
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fae9b4354fa016692390531704ad616344cc63fc08473687a9763aa9872c936a
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "봉와직염"
  - "족부백선"
  - "피부 세균감염"
question_type: risk_factor
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-uwseyEoCAoVGluZWEpLm1k
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

72세 여성이 3일 동안 지속된 오른쪽 다리의 발적과 부종, 발열로 내원했다. 다리가 매우 아프고 발적 부위가 넓어졌다고 한다. 아파 보인다. 체온은 39.3°C (102.7°F), 맥박은 분당 103회, 혈압은 138/90 mm Hg이다. 심폐 진찰은 정상이다. 오른쪽 앞쪽 하퇴에 광범위한 홍반과 부종이 있고 따뜻하며 만지면 압통이 있다. 종아리를 눌러도 압통은 없다. 오른쪽 서혜부 림프절이 부어 있고 양쪽 발 맥박은 만져진다. 이 환자 상태의 가장 강한 소인 요인은 무엇인가?

## 선택지

A. 류마티스 관절염
B. 그레이브스병
C. 흡연
D. 족부백선

## 해설

발의 백선(tinea pedis, D), 특히 발가락 사이의 짓무름·균열은 피부장벽을 손상시키고 세균의 침입구가 되어 하지 봉와직염 위험을 높인다. 발톱 진균증(onychomycosis)과 발 피부 백선은 같은 용어가 아니다. 이 사례의 국소 발적·열감·압통과 발열은 봉와직염에 부합하지만 그 자체가 혈류감염이 확인되었다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 봉와직염의 위험인자 tinea pedis D를 유지하고 이를 발톱무좀과 동일시한 해설을 교정한다.
- 공식/학회 근거: https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004763
