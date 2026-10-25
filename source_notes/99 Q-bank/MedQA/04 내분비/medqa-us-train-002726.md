---
type: qbank
schema_version: 1
id: medqa-us-train-002726
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:38a43c24ad7acf424750a6c479de2fc5cb5b29ca78a8a9e66291a4682d6ded4f
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "refeeding syndrome"
  - "hypophosphatemia"
  - "anorexia nervosa"
  - "nutritional rehabilitation"
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOqyveyEseyLneyaleu2gOynhOymnSAoQW5vcmV4aWEgTmVydm9zYSkubWQ
question_type: adverse_effect
difficulty: simple
answer: A
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

20세 여성이 집에서 발작하는 것을 발견한 부모에 의해 응급실로 이송되었다. 알려진 질환은 없고 목격된 발작은 이번이 처음이다. 응급실에서 안정화한 뒤 자세한 병력을 확인하니, 수년 동안 음식 섭취를 점점 제한해 왔다. 마지막으로 알려진 키와 체중을 바탕으로 계산한 체질량지수(BMI)는 16.5 kg/m²였다. 다음 중 이 환자에게 다시 음식을 먹이기 시작할 때 가장 우려되는 전해질 이상은?

## 선택지

A. 저인산혈증
B. 고마그네슘혈증
C. 저나트륨혈증
D. 저칼륨혈증

## 해설

영양결핍 뒤 재급식으로 insulin이 증가하면 인산·칼륨·마그네슘이 세포 안으로 이동한다. 저인산혈증 A는 재급식증후군의 대표적이고 위험한 이상으로 호흡근 약화·심기능 저하 등을 유발할 수 있다. 저칼륨혈증과 저마그네슘혈증도 초기부터 함께 발생할 수 있으므로 나중에만 나타난다고 해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Refeeding 저P A는 유지. 저K/저Mg가 나중에만 생긴다는 위험한 시간 순서 단정 수정.
- https://www.nice.org.uk/guidance/cg32/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002726
