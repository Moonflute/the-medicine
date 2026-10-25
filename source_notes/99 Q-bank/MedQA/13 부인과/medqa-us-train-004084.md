---
type: qbank
schema_version: 1
id: medqa-us-train-004084
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9008582f7b381821c87756f38ac68d18af436f852753a34aec03804ebf3c27f9
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "태아 운동 감소"
  - "태반조기박리 감별"
  - "태아 심박동"
question_type: 임상증례 객관식
related_disease_slugs:
  - MTIg7IKw6rO8L-2DnOuwmOyhsOq4sOuwleumrCAoUGxhY2VudGFsIEFicnVwdGlvbikubWQ
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvTWlzb3Byb3N0b2wubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 28주인 24세 초임부가 “더 이상 아기가 차는 느낌이 없다”고 하여 내원했다. 경미한 중등도의 질 출혈도 관찰했다. 며칠 전 산전 방문에서 도플러로 태아 심박동이 확인되었다. 위식도역류질환, 고혈압, 전신홍반루푸스 병력이 있다. 체온 36.78°C, 혈압 125/80 mmHg, 맥박 70회/분, 호흡수 14회/분이다. 평가를 위한 다음 단계는 무엇인가?

## 선택지

A. 도플러로 심박동 확인
B. 질경검사
C. 미소프로스톨
D. 혈소판, 피브리노겐, PT, PTT 측정

## 해설

태동 감소와 출혈이 있으므로 먼저 태아 심박동을 확인한다(A). 도플러로 확인되지 않으면 초음파로 생존 여부를 확인하며, 심박동이 있어도 태동 감소와 출혈 원인에 대한 태아 감시·산과 평가를 계속한다. 생존 확인 전에 미소프로스톨로 분만을 유도하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 태아 심박동 우선 확인 A 유지. 도플러만으로 모든 태아 안녕을 판단한다는 해석을 방지.
- https://www.acog.org/womens-health/faqs/special-tests-for-monitoring-fetal-well-being

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004084
