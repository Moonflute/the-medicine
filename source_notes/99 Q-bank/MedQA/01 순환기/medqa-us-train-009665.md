---
type: qbank
schema_version: 1
id: medqa-us-train-009665
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2ee4f4ec7e44a072cf4a09a2121c08d5f8148357510de27330ee94d7d6c412a7
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "symptomatic carotid stenosis"
  - "증상성 경동맥 협착"
  - "carotid endarterectomy"
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_snbzqs7zshLEg7ZeI7ZiIIOuwnOyekSAoVHJhbnNpZW50IGlzY2hlbWljIGF0dGFjaykubWQ
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

81세 여성이 지난 6개월 동안 한 시간씩 지속되는 오른쪽 팔과 다리의 근력저하가 세 번 발생해 내원했다. 감각 이상, 통증, 왼쪽 근력저하, 언어 변화는 없다. 고혈압과 안정형 협심증이 있는 관상동맥질환으로 아스피린, 리시노프릴, 암로디핀, 아토르바스타틴을 복용한다. 경동맥 초음파에서 오른쪽 52%, 왼쪽 88% 협착이 확인되었다. 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 6개월 후 경동맥 초음파 반복
B. 아토르바스타틴을 매일 80 mg으로 증량
C. 경동맥 혈관성형술 및 스텐트
D. 왼쪽만 경동맥 내막절제술

## 해설

오른쪽 팔·다리의 일과성 약화는 왼쪽 경동맥 영역의 증상을 시사하므로 좌측 88% 협착에 대한 D의 내막절제술을 평가한다. 고령에서는 스텐트보다 수술이 선호될 수 있으나, 증상 시점, 기능상태, 기대 수명과 수술 위험을 확인해야 한다. 항혈소판·고강도 스타틴 등 최적 약물치료는 수술 여부와 관계없이 병행하며, 약물치료가 무증상 환자에게만 필요하다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 증상성 좌측 중증 협착의 D는 지지하되 고령 환자의 수술위험 평가와 약물치료 병행 조건을 보완.
- https://doi.org/10.1161/STR.0000000000000375

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009665
