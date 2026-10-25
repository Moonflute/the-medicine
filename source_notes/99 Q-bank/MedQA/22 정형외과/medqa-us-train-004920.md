---
type: qbank
schema_version: 1
id: medqa-us-train-004920
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8d0dd33b0f3e5d720855b31259e69c63f9cbb412a4e14b0b40ca37c6e88232e3
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "골다공증"
  - "알렌드로네이트"
  - "비스포스포네이트 복용법"
question_type: management
related_disease_slugs:
  - MDQg64K067aE67mEL-qzqOuLpOqzteymnSAoT3N0ZW9wb3Jvc2lzKS5tZA
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9BbGVuZHJvbmF0ZS5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9SYWxveGlmZW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

64세 여자가 1년 동안 세 번 골절되었고 마지막 골절은 지난달에 발생했다. 지난해 골밀도검사 T점수는 -3.1로 골다공증을 진단받았으며 금연, 건강한 생활습관, 칼슘과 비타민 D 보충을 시행했다. 상담 후 주 1회 알렌드로네이트를 시작하기로 했다. 다음 중 이 새로운 치료를 가장 잘 설명하는 것은?

## 선택지

A. 랄록시펜 이후 사용하는 2차 치료가 일반적이다
B. 복용 후 최소 30분 동안 똑바로 서 있거나 앉아 있어야 한다
C. 안면홍조, 독감 유사 증상, 말초부종을 일으킬 수 있다
D. 식도암 위험 때문에 10년 후 중단해야 한다

## 해설

경구 알렌드로네이트는 식도 자극·궤양을 줄이기 위해 복용 후 적어도 30분 동안, 그리고 그날 첫 식사를 마칠 때까지 눕지 않고 앉거나 서 있어야 한다(B). 아침에 일어난 뒤 공복에 충분한 맹물과 함께 복용한다. 직립을 피하라는 기존 설명은 반대이므로 잘못이다. 약제 지속기간은 골절 위험과 반응을 재평가해 정하며 식도암 우려만으로 일률적으로 10년째 중단한다는 뜻도 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 알렌드로네이트 복용 후 직립을 피하라는 해설은 정답 B와 반대인 안전성 오류다. 최소 30분 및 첫 식사 전까지 눕지 않는 허가사항으로 교체했다.
- 공식/학회 근거: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=c7e470d6-508e-466e-a78d-060bbbc9745c

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004920
