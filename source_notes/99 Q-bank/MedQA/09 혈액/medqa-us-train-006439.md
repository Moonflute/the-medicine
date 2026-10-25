---
type: qbank
schema_version: 1
id: medqa-us-train-006439
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f71adac4ac0343cb004b3585710f58307fd60a96d8f677e551b3eb439014cfd8
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "수혈 관련 아나필락시스"
  - "IgA 결핍"
  - "반복 부비동-폐 감염"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yVhOuCmO2VhOudveyLnOyKpCAoQW5hcGh5bGF4aXMpLm1k
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
---

# MedQA US 임상문제

## 문제

26세 여성이 교통사고 후 응급실에 내원했다. 고속도로에서 운전 중 밴에 부딪혔다. 병원 도착 당시 의식은 있었지만 왼쪽 다리의 열린 상처에서 출혈이 심했다. 맥박은 분당 120회, 혈압은 96/68 mm Hg이다. 정맥으로 생리식염수 3L를 투여하자 맥박은 80회로 느려지고 혈압은 116/70 mm Hg로 상승했다. 다음 날 아침 혈색소가 6.2 g/dL로 확인되어 농축 적혈구 1단위를 수혈하기로 했다. 수혈 20분 후 전신 두드러기, 천명, 발열 및 저혈압이 발생했다. 즉시 수혈을 중단하고 근육 내 에피네프린을 투여했다. 다음 중 이 수혈 반응과 가장 일치하는 상황은?

## 선택지

A. 환자에게 심혈관질환 병력이 있음
B. 뺨을 두드릴 때 얼굴 근육이 떨림
C. 환자에게 반복적인 부비동-폐 감염 병력이 있음
D. 병원에서 혈액제제를 비위생적으로 보관함

## 해설


두드러기·천명·저혈압을 동반한 수혈 아나필락시스에서 선택지 C의 반복 부비동폐 감염 병력은 IgA 결핍/anti-IgA 연관성을 뒷받침할 수 있다. 본문에 실제 그런 병력이 제시된 것은 아니며 문항이 묻는 가능한 연관 상황이다. IgA 결핍은 전체 수혈 아나필락시스의 일부 원인이므로 검사·혈액은행 평가가 필요하고 발열이 있어 오염/용혈 감별도 병행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006439 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 반복 부비동폐 감염은 주어진 사실이 아닌 선택지 가정임을 교정; 수혈 아나필락시스의 IgA 연관 C 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006439
