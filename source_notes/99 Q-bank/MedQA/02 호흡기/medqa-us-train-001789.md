---
type: qbank
schema_version: 1
id: medqa-us-train-001789
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a0837e90b43a489c9ca72c6c8b439c25a0a849e5d0377d9748e8b27b5efff53e
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "influenza pneumonia"
  - "viral pneumonia"
  - "procalcitonin-guided antibiotic discontinuation"
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

72세 여성이 3일간의 발열, 근육통 및 기침으로 응급실에 왔다. 요양시설에 살며 이웃 몇 명도 비슷한 증상이 있다. 고혈압으로 lisinopril을 복용하고 인플루엔자 예방접종은 받지 않았다. 체온 38.9°C (102.2°F), 맥박 105/min, 호흡 22/min, 혈압 112/62 mm Hg, 실내 공기 산소포화도 89%이다. 백혈구 10,500/mm3, 크레아티닌 0.9 mg/dL, procalcitonin 0.05 μg/L (정상 < 0.06)이다. 흉부 X선에서 양측 하엽에 망상결절 음영이 보인다. 혈액과 객담 배양은 음성이다. ceftriaxone과 azithromycin으로 경험적 치료를 시작했다. 입원 2일 후 체온은 37.6°C (99.7°F), 실내 공기 산소포화도 96%, procalcitonin 0.04 μg/L이다. 다음 중 가장 적절한 관리 단계는 무엇인가?

## 선택지

A. oseltamivir 치료를 시작한다
B. ceftriaxone과 azithromycin을 중단한다
C. ceftriaxone을 중단하고 azithromycin을 계속하여 7일간 완료한다
D. 객담 배양을 반복한다

## 해설


Procalcitonin이 정상 범위에 머물고 임상 호전이 보이면 세균성 감염 가능성이 낮아 항생제 중단이 권장된다. 이는 항생제 사용을 최소화하는 가이드라인에 부합한다. 다른 선택지는 불필요한 치료 지속이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001789
