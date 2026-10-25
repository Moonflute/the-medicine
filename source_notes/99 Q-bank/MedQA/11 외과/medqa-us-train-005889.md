---
type: qbank
schema_version: 1
id: medqa-us-train-005889
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:202b94f7c9d168ad11ef24870b7050b873d1f1460974884a7a83d51c89df2fa4
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "당뇨병성 족부궤양"
  - "신경병성 궤양"
  - "변연절제"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: management
difficulty: standard
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
---

# MedQA US 임상문제

## 문제

43세 여성이 3개월 동안 지속된 우측 발바닥의 통증 없는 궤양으로 내원했다. 외상 병력은 없고 집에서 매일 거즈로 드레싱했다. 15년간 조절이 잘 되지 않는 제1형 당뇨병과 고혈압이 있으며 인슐린과 리시노프릴을 복용한다. 활력징후는 정상이다. 엄지발가락 기저부 발바닥에 2×2cm 궤양이 있고 궤양 바닥에 희고 느슨한 조직과 굳은살 가장자리가 있다. 무딘 금속 탐침이 깊은 발바닥 공간까지 닿는다. 양쪽 발의 진동감각과 가벼운 촉각이 감소했지만 발등 맥박은 정상이다. 우측 발 X선은 정상이다. 다음 중 초기 관리로 가장 적절한 단계는 무엇인가?

## 선택지

A. 우측 발의 전 접촉 석고
B. 정맥 내 항생제 치료
C. 궤양의 예리한 외과적 변연절제
D. 우측 발의 외과적 혈관재개통

## 해설


감각저하와 발바닥 압력 부위의 굳은살을 동반한 궤양은 신경병증성 당뇨발 궤양에 합당하다. 창상 바닥의 슬러프와 가장자리 굳은살을 적절히 제거하는 예리한 변연절제(C)가 기본 창상관리의 일부이다. 혈류·통증·깊이를 평가하고 offloading, 혈당·영양관리도 병행한다. 탐침이 깊은 공간에 닿는다는 점은 심부 침범 평가가 필요하며 정상 X선만으로 초기 골수염을 배제하지 못한다. 다만 임상 감염 증거 없이 예방 목적으로 정맥 항생제를 일률 투여하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005889 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 괴사/슬러프·굳은살 제거의 근거와 offloading·심부손상 평가를 보완했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://iwgdfguidelines.org/wp-content/uploads/2023/07/IWGDF-Guidelines-2023.pdf
- https://www.idsociety.org/practice-guideline/diabetic-foot-infections/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005889
