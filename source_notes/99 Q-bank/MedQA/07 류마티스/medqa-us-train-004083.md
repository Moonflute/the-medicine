---
type: qbank
schema_version: 1
id: medqa-us-train-004083
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9d90353502c2d34921b5346581ac84ecfbdf46e321de8cf377c73ab4d7357872
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
answer: C
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
---

# MedQA US 임상문제

## 문제

75세 여성이 새 측두부 두통과 씹을 때 생기는 턱 통증으로 내원했다. ESR은 90 mm/h이고 시력저하·복시나 신경학적 이상은 없다. 거대세포동맥염을 강하게 의심하며 확진 검사를 준비한다. 지금 시작할 치료는?

## 선택지

A. 저용량 아스피린 단독
B. NSAID 단독
C. 고용량 경구 글루코코르티코이드
D. 생검 결과가 나오기 전에는 약 없이 관찰

## 해설


시각 또는 신경계 허혈이 없는 거대세포동맥염이 강하게 의심되면 고용량 경구 스테로이드를 신속히 시작한다. 전문팀이 초음파·생검 등 확진 검사를 병행하며 결과를 기다리느라 치료를 늦추지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004083 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 무관한 골반 초음파 설명을 제거하고 시각허혈 없는 GCA의 경구 steroid와 생검 C를 설명했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/acr.24632

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004083
- https://doi.org/10.1002/art.41774
- https://pubmed.ncbi.nlm.nih.gov/42481270/
