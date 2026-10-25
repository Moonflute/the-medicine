---
type: qbank
schema_version: 1
id: medqa-us-train-008459
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5d050345abdc1706a9b35ee8f055366ff11a2c4a27e417db5c42661babd16d82
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "acromegaly"
  - "growth hormone"
  - "IGF-1"
related_disease_slugs:
  - MDQg64K067aE67mEL-unkOuLqOu5hOuMgOymnSAoQWNyb21lZ2FseSkubWQ
question_type: investigation
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
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

61세 남성이 한 달 동안 지속된 관절통과 반복되는 두통으로 긴급진료소에 내원했다. 실내 온도에서도 땀이 과도하게 나는 것도 걱정된다고 한다. 함께 온 아내는 지난 몇 년 동안 얼굴 모습이 변해 턱이 튀어나오고 이마와 눈썹 융기가 두드러졌다고 말한다. 지난 10년 동안 체중이 늘지 않았는데도 결혼반지가 손가락에 맞지 않는다. 체온 98.6°F(37°C), 호흡수 15회/분, 맥박 67회/분, 혈압 122/88mmHg이다. 전반적인 신체검사에서 이상은 없다. 이 환자에게서 예상되는 검사실 소견은 무엇인가?

## 선택지

A. 코르티솔 수치 상승
B. 프로락틴 수치 상승
C. 인슐린유사성장인자-1(IGF-1)과 성장호르몬(GH) 상승
D. 인슐린 수치 감소

## 해설


정답 C. 턱·눈썹융기 변화, 반지 크기 증가와 다한증은 말단비대증을 시사하며 GH 과다와 연령 보정 IGF-1 상승이 예상된다. GH는 박동성으로 분비되므로 무작위 GH가 높다는 사실만으로 확진하지 않는다. 전형적 임상상과 충분히 높은 IGF-1이 진단을 지지하며 애매한 경우 OGTT 후 GH 억제 여부 등을 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008459 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: IGF1/GH C가 예상되나 무작위GH 단독 확진이라는 오해를 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10837217/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008459
