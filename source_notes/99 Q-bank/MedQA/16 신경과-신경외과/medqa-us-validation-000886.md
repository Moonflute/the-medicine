---
type: qbank
schema_version: 1
id: medqa-us-validation-000886
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:95d7caea309c2595dd2f57ad85047f61abbebf30b413c7a9e9ef8552b5604778
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "벨마비"
  - "말초성 안면신경마비"
  - "각막 보호"
question_type: management
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-uyqOuniOu5hCAoQmVsbCdzIHBhbHN5KS5tZA
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

55세 남성이 아침에 발생한 오른쪽 얼굴 절반의 마비로 응급실에 왔다. 당뇨병과 고혈압이 있으나 현재 치료약을 복용하지 않고 혈압은 177/118 mmHg이다. 오른쪽 얼굴 전체를 움직일 수 없지만 다른 신경학적 진찰은 정상이다. 가장 가능성 높은 진단의 다음 처치는?

## 선택지

A. 침상 머리를 올리고 삽관
B. 두부 MRI
C. 조직 플라스미노겐 활성제
D. 국소 윤활제를 사용하고 퇴원

## 해설

이마를 포함한 일측 안면 전체 마비와 다른 신경학적 결손 부재는 말초성 안면신경마비를 시사한다. 눈이 완전히 감기지 않으면 윤활제·안구보호(D)가 필요하다. 그러나 이를 윤활제만 사용하고 다른 평가 없이 퇴원한다는 뜻으로 해석해서는 안 된다. Bell 마비로 판단한 성인은 발병 72시간 이내 경구 steroid를 고려하고, 당뇨와 고혈압을 감안하여 혈당·혈압 및 금기를 평가한다. 비전형적 소견이나 다른 신경징후가 생기면 원인을 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 안구보호 D는 필요한 조치지만 단순 윤활제 퇴원이 모든 치료라는 오해를 교정. 동반 고혈압/당뇨 위험도 복원.
- 공식/학회 근거: https://aao-hnsfjournals.onlinelibrary.wiley.com/doi/10.1177/0194599813506835

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000886
