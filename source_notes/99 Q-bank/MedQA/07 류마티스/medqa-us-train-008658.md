---
type: qbank
schema_version: 1
id: medqa-us-train-008658
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0c700b4015a7c672bbc5f56d52ca59a29b43d4a36d7b69600e93c3bda0118404
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "giant cell arteritis"
  - "thoracic aortic aneurysm"
  - "amaurosis fugax"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-2YiOq0gOyXvCAoVmFzY3VsaXRpcykubWQ
question_type: monitoring
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

거대세포동맥염으로 치료를 시작한 71세 여성이 안정 상태다. 진단 시 측두동맥 침범만 확인했고 대동맥·주요 분지는 아직 평가하지 않았다. 추가 영상이 필요한 이유로 적절한 것은?

## 선택지

A. 뇌동맥류는 모든 환자에서 반드시 발생한다
B. 대혈관 침범과 흉부 대동맥류 등 구조적 위험이 있을 수 있다
C. 콩팥 사구체 모세혈관이 주된 침범 부위다
D. 폐동맥고혈압은 심장초음파 없이 확진된다

## 해설


거대세포동맥염은 측두동맥뿐 아니라 대동맥과 주요 분지를 침범한다. 진단 시 대혈관 평가를 고려하고, 침범 소견·위험에 따라 대동맥 확장이나 협착을 추적한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008658 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: GCA의 대동맥류 위험 B 유지하되 현재 일과성 시력소실의 응급성을 간과하거나 모든 합병증 중 가장위험이라 바꾼 표현 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/acr.24632

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008658
- https://doi.org/10.1002/art.41774
- https://doi.org/10.1136/ard-2023-224543
