---
type: qbank
schema_version: 1
id: medqa-us-train-000210
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d1e9069defdad8622a9029ea71f86d99931a84336b6e9ca10a5182da3910061e
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "chronic alcoholism"
  - "seizure"
  - "hyponatremia"
  - "osmotic demyelination syndrome"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rsJzsnpEgKFNlaXp1cmUpLm1k
  - MDUg7Iug7J6lL-yggOuCmO2KuOulqO2YiOymnSAoSHlwb25hdHJlbWlhKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

48세 남성이 아내가 목격한 약 1분간의 격렬한 떨림 증상이 있은 지 20분 만에 응급실로 이송되었다. 이 발작 동안 환자는 실금을 하였다. 환자는 졸음을 느끼고 구역질을 한다. 만성 알코올 중독 병력이 있으며, 지난 3일 동안 매일 맥주 15캔을 마셨다. 그 전에는 매일 맥주 8캔을 마셨다. 마지막 음주는 2시간 전이었다. 환자는 기면 상태로 보인다. 활력 징후는 정상 범위 내에 있다. 신체 및 신경학적 검사상 다른 이상 소견은 없다. 정신 상태 검사에서 환자는 혼란스러워하며 시간에 대한 지남력이 없다. 검사실 검사 결과는 다음과 같다: 헤마토크릿 44.0%, 백혈구 수 12,000/mm3, 혈소판 수 320,000/mm3, 혈청 나트륨 112 mEq/L, 염소 75 mEq/L, 칼륨 3.8 mEq/L, 중탄산염 13 mEq/L, 요소 질소 6 mEq/L, 크레아티닌 0.6 mg/dL, 알부민 2.1 g/dL, 포도당 80 mg/dL. 이 환자의 현재 상태에 대한 긴급 치료는 다음 중 어떤 부작용의 위험을 증가시키는가?

## 선택지

A. 뇌부종
B. 고혈당
C. 삼투성 탈수초 증후군
D. 베르니케 뇌병증

## 해설


저나트륨혈증을 급속히 교정하면 세포 내 수분이 빠져 나가면서 뇌백질 탈수초 손상이 발생한다. 이는 삼투성 탈수초 증후군(ODS) 위험을 증가시킨다. 다른 부작용은 교정 속도와 관련이 없다. 따라서 ODS 위험이 정답이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000210
