---
type: qbank
schema_version: 1
id: medqa-us-train-008759
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0ae9acf98b76eca71b59dc838654897b08ff7a5040f107bfd35aa436d77864a5
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "von Willebrand disease"
  - "mucocutaneous bleeding"
  - "prolonged PTT"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2PsCDruYzroIjruIzrnoDtirjrs5EgKHZvbiBXaWxsZWJyYW5kIERpc2Vhc2UsIHZXRCkubWQ
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

25세 남성이 6개월 동안 반복된 코피 평가를 위해 내원했다. 코피는 저절로 나지만 콧구멍을 10분간 눌러주면 멎는다. 중대한 질환은 없고 2년 전 사랑니를 뽑은 후 출혈이 오래 지속된 병력이 있다. 흡연과 음주는 하지 않고 약물도 복용하지 않는다. 활력징후는 정상이며 코 검사에서 이상은 없다. 하지에 멍이 여러 개 있지만 그 외 검사는 정상이다. 혈색소 15g/dL, 백혈구 6,000/mm³, 혈소판 220,000/mm³, 출혈시간 9분, PT 13초, PTT 55초이다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 버나드-술리에 증후군
B. 비스코트-알드리치 증후군
C. 제10인자 결핍
D. 폰빌레브란트병

## 해설


반복 점막출혈과 정상 혈소판 수, 정상 PT 및 연장된 PTT는 von Willebrand병(D)에 부합한다. vWF는 혈소판의 손상 혈관 부착과 VIII인자의 운반·안정화에 관여한다. IX·XI·XII·XIII 인자의 동시 결핍을 일으키는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008759 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 점막출혈·정상 혈소판·PT 정상/PTT 연장은 VWD D에 부합. vWF가 IX·XI·XII·XIII 결핍까지 초래한다는 잘못된 해설 삭제.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008759
