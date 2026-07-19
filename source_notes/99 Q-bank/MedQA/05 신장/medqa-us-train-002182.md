---
type: qbank
schema_version: 1
id: medqa-us-train-002182
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c631b9cfdad304f15efd6255f6ed3ca05d388badf6408d85130eea40c238194d
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "hyperkalemia"
  - "missed hemodialysis"
  - "peaked T waves"
question_type: diagnosis
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

58세 남성이 상행성 위약, 두근거림, 복통을 호소한다. 고혈압, 제2형 당뇨병, 당뇨병성 망막병증, 투석이 필요한 말기 신장질환이 있다. 최근 감염은 없었다. 신체검사에서 양쪽 상하지 근력이 감소되어 있으나 뇌신경은 정상이고 장음이 감소되어 있다. 환자는 복잡한 질병 경과로 손주들이 자라는 모습을 보지 못할까 봐 우울하다고 말한다. 이 때문에 투석을 두 번 빠졌다. 다음 중 심전도에서 가장 잘 나타날 소견은?

## 선택지

A. I유도 S파, III유도 Q파와 T파 역전
B. II, III, aVF유도의 ST분절 상승
C. 뾰족한 T파와 짧아진 QT 간격
D. 전반적인 PR분절 하강과 ST분절 변화

## 해설


투석을 놓친 경우 고칼륨혈증이 발생하고, ECG에서 뾰족한 T파와 짧아진 QT 간격이 전형적이다. 따라서 뾰족한 T파와 짧아진 QT 간격이 정답이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002182
