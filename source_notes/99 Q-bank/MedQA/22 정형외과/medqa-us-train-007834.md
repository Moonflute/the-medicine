---
type: qbank
schema_version: 1
id: medqa-us-train-007834
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5ad06e7fb6070d4f9132654ea88c8cc2ef4b6f841476e4372c7cff942ece7bd5
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "rotator cuff tendinopathy"
  - "shoulder impingement"
  - "NSAID treatment"
  - "Rotator cuff tendinopathy"
question_type: management
related_disease_slugs: []
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMiDtmLjtnaHquLAvRmx1dGljYXNvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 남자가 우측 어깨 통증과 운동 범위 제한으로 내원했다. 대학 야구 선수이며 공을 던질 때 어깨가 아파 약 1주일 동안 경기에 나가지 못했다. 팔을 머리 위로 올리기도 어렵다. 통증은 중등도이고 둔하며 쑤시는 양상으로, 팔을 어깨 위로 움직이거나 옆으로 누워 침대에 있을 때 악화된다. 최근 어깨 외상이나 다른 관절통은 없다. 천식 병력이 있으며 약물로 조절 중이다. 알부테롤과 플루티카손을 흡입한다. 5년간 씹는 담배를 사용했지만 흡연, 음주, 약물 사용은 하지 않는다. 체온 37.0°C(98.6°F), 혈압 110/85 mm Hg, 맥박 97회/분, 호흡수 15회/분, 산소포화도 99%이다. 우측 어깨 전외측에 압통이 있고 외전 시 능동 운동 범위가 감소되어 있으나 수동 운동은 정상이다. 부종, 열감, 홍반은 없고 감각과 반사, 말초맥박은 정상이다. 검사실 결과는 정상이다. 우측 어깨 X선에서 골절이나 골변형은 없고 MRI에서 회전근개 힘줄의 T1 및 T2 신호가 증가되어 있다. 가장 적절한 초기 치료는?

## 선택지

A. 보존적 치료(휴식과 얼음찜질)
B. NSAIDs와 보존적 치료
C. 관절강 내 코르티코스테로이드 주사
D. 견봉성형술

## 해설

머리 위 던지기 동작의 통증, 능동 외전 제한에 비해 보존된 수동 범위 및 건 신호 변화는 회전근개 건병증을 시사한다. 초기에는 유발 동작의 부하 조절과 운동·재활을 시행하고 필요하면 단기간 NSAID를 사용하므로 선지 B가 적절하다. 장기간 완전 고정·휴식만 하는 것은 목표가 아니며 NSAID는 신장·위장관·심혈관 위험 및 NSAID 유발 천식 병력 등을 확인해 선택한다. 즉시 수술이나 관절강내 주사가 일률적 초기 치료는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 회전근개 건병증 초기 보존적 치료 B를 유지하며 휴식만 지속하는 대신 부하 조절·운동 재활 및 NSAID의 금기를 설명했다.
- 공식/학회 근거: https://doi.org/10.2519/jospt.2025.13182

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007834
