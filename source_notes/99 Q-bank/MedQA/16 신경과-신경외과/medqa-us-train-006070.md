---
type: qbank
schema_version: 1
id: medqa-us-train-006070
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5164e546582bf47cba2eed1016fbc4cace9e2a796adf51d037ee3a525c20f860
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "전척수동맥 증후군"
  - "경추 방출성 골절"
  - "운동 및 통각 소실"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_soIQg7LKZ7IiYIOymne2bhOq1sCAoQW50ZXJpb3IgY29yZCBzeW5kcm9tZSkubWQ
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_sspnsiJgg7Jm47IOBIChTcGluYWwgY29yZCB0cmF1bWEpLm1k
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

38세 남성이 추적진료를 위해 내원했다. 한 달 전 지붕에서 떨어져 경추 방출성 골절이 발생한 뒤 사지마비가 있고 요실금과 변실금이 있다. 영양상태가 나빠 보이며 체온은 37.1°C(98.8°F), 맥박은 분당 88회, 혈압은 104/60 mmHg이다. 모든 사지에 경직이 있고 양측 근위·원위 근육군의 근력이 감소되어 있다. 심부건반사는 양측 4+, 족저반사는 양측 신전 반응이다. 목 아래에서 침통각과 온도감각이 소실되었지만 진동, 위치 및 가벼운 촉각은 정상이다. 직장긴장도는 감소했고 천골에 1cm 홍반이 있다. 다음 중 증상의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 척수 내 공동 형성
B. 후척수동맥 폐색
C. 척수 반절단
D. 전척수동맥 손상

## 해설

운동마비와 통각·온도각 소실에 비해 진동감각과 위치감각이 보존되어 전척수동맥 영역의 전방 척수 증후군(D)에 맞는다. 전방 척수의 피질척수로와 척수시상로는 손상되지만, 후척수동맥 영역의 후주는 상대적으로 보존된다. 따라서 모든 감각 양식이 소실된다고 설명해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 전척수동맥 증후군에서 모든 감각이 소실된다는 오류를 후주 감각 보존으로 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006070
