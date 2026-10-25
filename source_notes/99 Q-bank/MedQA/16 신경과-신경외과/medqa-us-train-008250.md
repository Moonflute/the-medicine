---
type: qbank
schema_version: 1
id: medqa-us-train-008250
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c011ed7fd339ed990b12b4eb94d723473a285dfb35730fb50a363d29440e510b
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "focal aware seizure"
  - "olfactory aura"
  - "temporal lobe seizure"
question_type: diagnosis
related_disease_slugs: []
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

55세 여성이 손가락 저림과 시큼한 우유 냄새를 맡는 이상한 에피소드로 내원했다. 의식소실, 혼돈, 실금, 두부 외상이나 독성물질 섭취는 없다. 제2형 당뇨병이 있지만 메트포르민으로 잘 조절된다. 신체 및 신경학적 검사는 정상이고 뇌 MRI에서 경색이나 출혈은 없다. EEG 결과를 기다리는 중이다. 다음 중 가장 가능성 높은 발작 유형은?

## 선택지

A. 단순 부분발작
B. 복합 부분발작
C. 결신발작
D. 강직간대발작

## 해설

반복적 감각 증상과 후각 현상이 생기지만 의식소실이나 혼돈이 없어 국소 인식보존 발작(A, 기존 명칭 단순 부분발작)에 가장 가깝다. 인식장애를 동반하면 복합 부분발작에 해당하는 국소 인식장애 발작을 고려한다. 정상 구조 MRI만으로 발작을 배제하지 않으며 EEG와 임상 경과를 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 의식저하가 있다고 한 해설을 본문에 맞게 의식 보존으로 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008250
