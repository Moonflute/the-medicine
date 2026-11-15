---
type: qbank
schema_version: 1
id: medqa-us-train-003562
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:63e8285efc85dd7ba6ca13ed623c94b42d636499d780726ac7d4ebca0d55fa42
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "osteoarthritis"
  - "Heberden nodes"
  - "Bouchard nodes"
  - "mechanical joint pain"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qzqOq0gOygiOyXvCAoT3N0ZW9hcnRocml0aXMpLm1k
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

58세 여성이 오래 걸으면 심해지는 무릎 통증으로 내원했다. 아침 강직은 15분이며 무릎에 열감은 없다. 무릎 골관절염 진단을 받았고 BMI는 32 kg/m²이다. 장기적으로 통증과 기능에 도움이 될 첫 계획은?

## 선택지

A. 장기간 침상 안정
B. 운동을 중단하고 관절을 고정한다
C. 근력·유산소 운동을 시작하고 적절한 체중 감량을 돕는다
D. 첫 진료에서 바로 양쪽 인공관절 수술을 한다

## 해설


무릎 골관절염의 기본 치료는 개인에 맞춘 운동이다. 과체중·비만이 있는 경우 체중 감량을 함께 하면 통증과 기능 개선에 도움이 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003562 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 사용 후 악화되는 무릎 통증·15분 아침 경직·염발음·PIP/DIP 결절은 골관절염 C를 지지한다. 진드기 과거력에도 임상 양상은 Lyme 관절염보다 OA와 일치한다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003562
- https://www.nice.org.uk/guidance/ng226/chapter/Recommendations
