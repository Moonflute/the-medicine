---
type: qbank
schema_version: 1
id: medqa-us-train-009592
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:480e2ccf472e48a813a368f5630aa6967168d9a63b06d50156c22018decfe78e
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "hereditary hemochromatosis"
  - "유전성 혈색소침착증"
  - "iron overload cardiomyopathy"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOq3vOuzkeymnSAoQ2FyZGlvbXlvcGF0aHkpLm1k
  - MDkg7ZiI7JWhL-ycoOyghOyEsSDtmIjsg4nshozsuajssKnspp0gKEhlcmVkaXRhcnkgSGVtb2Nocm9tYXRvc2lzKS5tZA
question_type: prevention
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

60세 백인 남자가 4개월 동안 진행되는 피로, 호흡곤란, 다리 부종으로 내원했다. 한 층 계단을 오를 때 여러 번 멈춰야 한다. 10년간 손, 손목, 무릎 관절통이 있었고 당뇨병과 고혈압을 인슐린 및 저열량·저염식으로 조절한다. 관절통에 이부프로펜을 필요 시 복용하며 밤에 코를 곤다. 매일 맥주 2~3잔을 마시고 40년간 하루 반 갑을 흡연했다. 진찰에서 경정맥 팽창, 발목 함요부종, 검게 그을린 피부, 양쪽 폐기저부 수포음, 심첨부 S3, 경미한 간비대가 있다. 심전도에서 좌각차단, 심초음파에서 좌심방·좌심실 확대, 좌심실 박출률 감소, 경미한 승모판 역류가 보인다. 이 상태를 예방했을 가능성이 가장 높은 방법은 무엇인가?

## 선택지

A. 금연
B. 야간 지속적 양압치료
C. 판막 수술
D. 정기적 사혈

## 해설


정답 D. 피부색소침착·당뇨·장기간 관절병과 확장성 심근증은 혈색소침착증의 철과다 장기손상을 시사한다. 조기 규칙적 사혈은 철 부담을 낮춰 장기 합병증을 예방할 수 있다. 이미 진행한 심근증의 모든 변화가 완전히 회복된다는 뜻은 아니며 실제 철검사와 원인 평가가 필요하다. 금연과 일반 심부전 관리의 이점까지 부정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009592 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 철과다 심근증 예방 사혈 D 유지; 금연/다른 심부전 관리가 무효라는 일반화 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://easl.eu/wp-content/uploads/2022/06/PIIS01688278220021121.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009592
