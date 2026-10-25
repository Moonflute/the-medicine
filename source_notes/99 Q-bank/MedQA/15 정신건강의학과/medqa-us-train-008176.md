---
type: qbank
schema_version: 1
id: medqa-us-train-008176
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:276311fdb26c37930f50dfdfe7247b94a55e83389f4c6dc2e0a51845e59bec0f
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "paranoid personality disorder"
  - "persecutory delusions"
  - "suspiciousness"
  - "Paranoid personality disorder"
question_type: diagnosis
related_disease_slugs: []
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 남자가 독성 물질 노출을 걱정해 일차 진료를 받으러 왔다. 아침에 외출할 때 식료품 저장실 문을 닫았다고 확신했지만 집에 돌아오니 활짝 열려 있었다. 이웃이 음식에 손을 대고 독을 넣었으며 집에 침입해 물건을 훔치려 한다고 확신한다. 이웃을 쫓아내려 여러 번 시도했지만 실패했고 보복하려 한다고 확신한다. 의사는 신체검사 후 걱정할 것이 없지만 증상이 생기면 연락하거나 내원하라고 설명했다. 환자는 의사가 적과 공모한다며 격분하고 화를 내며 나간다. 가장 가능성 높은 성격장애는?

## 선택지

A. 분열성
B. 편집성
C. 간헐적 폭발장애
D. 경계성

## 해설

이웃과 의사 모두의 의도를 악의적으로 해석하고 지속적인 불신을 보이는 양상은 제시된 성격장애 중 편집성 성격장애에 가장 가깝다. 실제 진단에는 장기간 여러 상황에서의 경직된 패턴을 확인하고 망상장애·다른 정신병이나 물질·의학적 원인을 감별한다. 조현성 성격장애는 사회적 거리감·제한된 정서표현이 중심이므로 다른 선지를 모두 충동성·감정불안정으로 묶는 설명은 맞지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008176

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 편집성 성격장애 원정답 유지. 조현성까지 충동·감정불안정으로 설명한 오류 및 한 사건만으로 성격장애 확정하는 인상 제거.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
