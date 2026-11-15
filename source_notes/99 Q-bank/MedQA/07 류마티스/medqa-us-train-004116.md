---
type: qbank
schema_version: 1
id: medqa-us-train-004116
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f57031216c35578ff4e83d497e86dafca2e95a467f72efa8e74f47fc0669ee9f
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "거대세포동맥염"
  - "측두동맥염"
  - "턱 파행"
  - "giant cell arteritis"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-2YiOq0gOyXvCAoVmFzY3VsaXRpcykubWQ
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

66세 여성에게 새 측두부 두통과 턱 파행이 생겼다. 오늘 오른쪽 눈이 검게 보이지 않는 증상이 두 차례 있었고 현재도 시력이 떨어져 있다. 거대세포동맥염에 의한 시각허혈이 의심된다. 안과 응급 평가와 동시에 할 처치는?

## 선택지

A. 항혈소판제 단독으로 시작한다
B. 측두동맥 생검까지 치료를 보류한다
C. 경구 스테로이드 저용량으로 시작한다
D. 즉시 고용량 정맥 메틸프레드니솔론 치료를 시작한다

## 해설


일과성 단안 시력상실과 진행하는 시력저하는 비가역적 실명 위험을 알리는 소견이다. 시력이 위협받는 거대세포동맥염에서는 정맥 고용량 스테로이드를 우선 고려하고 확진 검사 때문에 늦추지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004116 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 시야 흐림이 있는 GCA 의심 환자의 신속한 steroid와 시력위협 평가를 명시했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/acr.24632

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004116
- https://doi.org/10.1002/art.41774
