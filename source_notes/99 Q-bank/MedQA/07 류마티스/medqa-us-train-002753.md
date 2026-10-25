---
type: qbank
schema_version: 1
id: medqa-us-train-002753
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:299ee4146ac1bf879ddea944d2a35aac04974c59361086bd6916d9f9a0637816
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "reactive arthritis"
  - "circinate balanitis"
  - "keratoderma blennorrhagicum"
  - "HLA-B27"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-uwmOydkeyEsSDqtIDsoIjsl7wgKFJlYWN0aXZlIEFydGhyaXRpcykubWQ
question_type: risk_factor
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

27세 아프리카계 미국인 남성이 발에 생긴 ‘반점’ 때문에 가정의학과에 내원했다. 어제 발에 흰색 테두리가 있는 갈색 반점이 생긴 것을 발견했다. 피부 병변은 아프지 않았지만, 음경에도 비슷하고 축축해 보이는 병변이 생긴 것을 보고 특히 걱정되었다. 지난 4주 동안 배뇨 시 통증이 있었으나 지금까지 진료를 받지 않았다. 이번 주부터 오른쪽 무릎 관절통도 있다. 새로운 파트너와 성생활을 하며 콘돔은 일관되게 사용하지 않는다. 의사는 병변 치료를 위해 국소 글루코코르티코이드를 처방했다. 다음 중 이 상태의 발생과 가장 흔히 관련된 위험 요인은?

## 선택지

A. 인종
B. HLA-B27 대립유전자
C. HIV 동시감염
D. 건선 진단

## 해설


요도염 뒤 비대칭 무릎관절염과 발바닥·음경 병변은 반응성 관절염의 점막피부 소견을 시사한다. 선택지 중 HLA-B27(B)이 중요한 유전적 연관이다. 이 대립유전자는 필수 진단 조건이 아니며 음성 환자에서도 발생할 수 있다. HIV 동반 시 질환 양상이 달라질 수 있지만 건선 진단을 곧 반응성 관절염의 원인이나 필수 위험인자로 보지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002753 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 반응성 관절염의 HLA-B27 연관은 유지하되 건선 자체를 위험인자로 열거한 혼동을 제거했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002753
