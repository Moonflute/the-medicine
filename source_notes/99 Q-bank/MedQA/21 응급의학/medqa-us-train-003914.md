---
type: qbank
schema_version: 1
id: medqa-us-train-003914
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b3d5bc9b7fad38f3f5b20017691f7e3acac69bd500e3fb6445399dff6f431ca2
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "caustic ingestion"
  - "potassium hydroxide"
  - "corrosive esophagitis"
  - "oropharyngeal burn"
question_type: diagnosis
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rtoDsi50g7Iud64-E7Je8IChDb3Jyb3NpdmUgRXNvcGhhZ2l0aXMpLm1k
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbWl0cmlwdHlsaW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

54세 남성이 평소 집에서 만든 보드카를 매일 마시는 병력이 있고, 한 시간 전부터 구강 점막의 작열통, 흉통, 호흡곤란, 연하 시 악화되는 통증으로 내원했다. 구강과 후두개 부위에 침이 많이 고이고 경한 홍반이 있었다. 다음 중 중독을 일으킨 물질은?

## 선택지

A. 수산화칼륨
B. 파라티온
C. 모르핀
D. 아미트립틸린

## 해설

구강 작열통·흉통·삼킴통증과 다량 침분비는 부식성 물질 섭취를 시사하여 보기 중 강알칼리 potassium hydroxide(A)가 맞는다. 원문은 homemade vodka를 매일 마신다는 병력만 제시하고, 실제 원인물이 그 술에 섞였다는 증거는 없다. 유기인산제의 전신 콜린성 징후나 opioid/TCA 독성보다 직접 부식성 손상 양상이 강하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 일상 homemade vodka 섭취력을 발병 직전 섭취/가성물질 혼입으로 바꾼 근거 없는 서술 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003914
