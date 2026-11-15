---
type: qbank
schema_version: 1
id: medqa-us-train-005145
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:03b67ca7b8c677381c4104e53e576816319ea4030f96472a240b52f16ca7f037
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "기능성 소화불량"
  - "헬리코박터 파일로리"
  - "비궤양성 소화불량"
  - "Helicobacter pylori infection"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC9ILnB5bG9yaSDqsJDsl7wgKEgucHlsb3JpIEluZmVjdGlvbikubWQ
question_type: investigation
difficulty: standard
answer: C
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

43세 여성이 3개월째 계속되는 식후 포만감과 명치 통증으로 내원했다. 최근 2개월간 이유 없이 5 kg이 줄었고 위암으로 치료받은 어머니가 있다. 다음 검사로 가장 적절한 것은?

## 선택지

A. 복부 단순촬영
B. 혈청 헬리코박터 IgG 검사
C. 상부위장관 내시경
D. 대변잠혈검사

## 해설

의도하지 않은 체중 감소와 위암 가족력은 경고 소견이다. 국내 소화불량 진료지침은 이런 환자에서 상부위장관 내시경 등을 시행해 기질적 질환을 감별하도록 권고한다. 이 환자에서는 비침습 헬리코박터 검사만 시행하고 평가를 끝내면 안 된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 3주 증상만으로 기능성 소화불량 확진하지 않고 미조사 소화불량 H.pylori검사 C로 정리.
- https://gi.org/guideline/management-of-dyspepsia/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005145
- 대한소화기기능성·질환운동학회, 기능성 소화불량증 임상 진료 지침: https://www.ekjm.org/journal/view.php?number=25735&viewtype=pubreader
