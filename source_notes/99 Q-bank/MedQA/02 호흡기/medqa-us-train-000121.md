---
type: qbank
schema_version: 1
id: medqa-us-train-000121
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e94cb6d4f1d514abe171d8324c57f1c3f9bb7a8eca566b2722e242be3346460d
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "persistent cough"
  - "hemoptysis"
  - "weight loss"
  - "night sweats"
  - "central nodule"
  - "lung cancer"
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

61세 여성이 지속적인 기침을 주소로 내원하였다. 환자는 기침을 조절하기 어렵고 호흡 곤란도 점점 심해지고 있다고 한다. 기침은 약 2개월 전부터 지속되었으나, 2주 전부터는 기침 후 가래에 혈흔이 섞여 나오는 것을 정기적으로 관찰하였다. 지난 4개월 동안 식욕 변화는 없으나 10kg의 체중 감소가 있었으며, 평소 활동량은 유지되고 있어 체중 감소의 원인을 의심하고 있다. 또한 지난 몇 주 동안 아침에 일어날 때 식은땀에 젖어 있는 증상이 몇 차례 있었다. 35갑년(pack-year)의 흡연력을 제외하면 과거력은 특이사항이 없다. 흉부 X-선 검사 결과 폐문부(hilar region)에 약 13mm 크기의 중심성 결절이 관찰되었다. 이 환자의 관리로 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 항암화학요법
B. 종격동내시경검사
C. 방사선치료
D. 6개월 후 추적 관찰

## 해설


중심성 폐문 결절과 체중 감소, 혈담, 야간 발한은 폐암 고위험 소견이다. 조직 및 병기 확인을 위해 먼저 종격동 림프절을 샘플링하는 종격동내시경검사가 필요하다. 따라서 다음 단계는 종격동내시경검사이다. (항암화학요법은 조직 확인 없이 시작할 수 없다)

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000121
