---
type: qbank
schema_version: 1
id: medqa-us-train-001514
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3f9edd7f5555e84e3f8db99915eb0a7969fbb334c51585cd75787681af2ba871
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "deep vein thrombosis"
  - "Wells score"
question_type: investigation
difficulty: complex
answer: A
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

67세 여성이 5일 동안 지속된 오른쪽 다리 통증과 부종으로 내원했다. 15년 동안 고혈압이 있었고 최근 폐렴으로 입원했다. 집에서 회복하다 움직이고 걷기 시작하자 오른쪽 다리가 아프고 부었다. 체온은 37.1°C (98.7°F), 혈압은 130/80 mm Hg, 맥박은 75회/분이다. 오른쪽 종아리는 경골조면에서 10 cm 아래 측정 시 왼쪽보다 둘레가 4 cm 크다. 오른발의 표재정맥이 확장되어 있고 오른쪽 다리가 약간 더 붉다. 무릎 뒤 오금에 압통이 있다. 다음 중 이 상태의 초기 관리로 가장 적절한 것은 무엇인가?

## 선택지

A. 웰스 임상 확률 도구
B. 조영 CT
C. 국제표준화비(INR)
D. 활성화 부분트롬보플라스틴시간(aPTT)

## 해설


다리 부종과 통증, 정맥 확장은 심부정맥 혈전증을 시사한다. Wells 점수는 임상적으로 DVT 위험을 평가하는 표준 도구이며, 초기 평가에 가장 적절하다. 따라서 Wells 임상 확률 도구를 사용한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001514
