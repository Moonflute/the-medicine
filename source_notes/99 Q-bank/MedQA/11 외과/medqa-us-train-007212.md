---
type: qbank
schema_version: 1
id: medqa-us-train-007212
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:55a56c0f3ea4e0cef68fc04c753758be283e1b2dfebab961e23d264aca1ae3b7
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "측두하악관절장애"
  - "이갈이"
  - "근막성 턱관절 통증"
  - "temporomandibular joint disorder"
related_disease_slugs: []
question_type: management
difficulty: complex
answer: A
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
---

# MedQA US 임상문제

## 문제

33세 여자가 3주 동안 지속된 오른쪽 턱 통증으로 일차진료의를 찾아왔다. 스테이크를 먹던 중 처음 느꼈지만 대체로 아침에 더 심하다. 깊고 둔한 통증이며 때때로 귀와 목 뒤로 방사된다. 턱이 잠기는 일은 없었다. 남편은 최근 몇 달 동안 잠잘 때 이를 가는 것을 보았다고 한다. 우울증으로 플루옥세틴을 복용하고 손목터널증후군으로 손목 보조기를 사용한다. 비서로 일한다. 아버지는 54세에 관상동맥질환으로 사망했고 어머니는 류마티스관절염이 있다. 체온은 98.5°F(36.9°C), 혈압 135/81 mmHg, 맥박 70회/분, 호흡수 14회/분이다. 얼굴 피부 변화는 없지만 오른쪽 하악각을 누르면 경미한 압통이 있다. 턱을 열고 닫을 때 약간의 클릭 소리가 난다. 나머지 진찰은 정상이다. 다음 중 가장 적절한 치료 단계는 무엇인가?

## 선택지

A. 야간 교합안정장치
B. 뇌 MRI
C. 수술적 치료
D. 심전도

## 해설


아침 턱 통증·수면 중 이갈이·턱관절 클릭은 저작근/턱관절장애를 시사한다. 선택지 중 가역적인 야간 bite guard(A)를 고려할 수 있으며 뇌 MRI나 수술을 먼저 시행할 근거는 없다. 장치는 치아 보호에 도움이 될 수 있으나 TMD 통증 개선 근거는 제한적이므로 증상을 악화시키거나 교합을 영구 변화시키는 장치를 피한다. 자가관리·일시적 식이 조절·물리치료 등 보존적 접근과 복용 약물도 함께 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007212 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Bite guard를 일률적 통증 치료 표준으로 단정하지 않고 이갈이의 가역적 보존치료 선택으로 설명했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nidcr.nih.gov/health-info/tmd

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007212
