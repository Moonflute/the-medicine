---
type: qbank
schema_version: 1
id: medqa-us-train-002763
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:db5b02fd9f0e97c0eafb95a0d78effe093d30b9cada5ad12ac0c0f8d32a5b3f5
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "generalized tonic-clonic seizure"
  - "first seizure evaluation"
  - "postictal confusion"
  - "electroencephalography"
  - "Generalized tonic-clonic seizure"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rsJzsnpEgKFNlaXp1cmUpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MYW1vdHJpZ2luZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Mb3JhemVwYW0ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

22세 남성이 팔과 다리를 격렬하게 떨었던 사건 25분 후 응급실에 왔다. 사건을 기억하지 못하며 3~4분간 지속되었다. 여자친구에 따르면 지난 한 달 동안 잠을 잘 자지 못했다. 장소와 사람에 대해서만 지남력이 있고 시간에 대한 지남력은 없다. 체온은 37°C, 맥박은 99회/분, 호흡수는 18회/분, 혈압은 110/80 mmHg이다. 신경학적 검사에서 국소 소견은 없다. 전혈구검사와 혈당, 전해질, 칼슘의 혈청 농도는 정상이며 소변 독성검사는 음성이다. 뇌 MRI도 정상이다. 다음 중 가장 적절한 다음 단계는?

## 선택지

A. 로라제팜
B. 기립경사검사
C. 뇌파검사
D. 라모트리진

## 해설

경련이 이미 멈추었고 기본 검사와 MRI에 원인이 없으므로, 주어진 선지에서는 EEG(C)로 발작 유형과 재발 위험 평가를 보조하는 것이 적절하다. 가능하면 첫 발작 후 신속히 시행한다. EEG는 임상 진단을 뒷받침하는 검사이며 정상이어도 뇌전증을 배제하지 못한다. 항발작약 시작은 발작력·신경학적 소견·영상·EEG 및 환자 상황을 종합해 결정한다. 현재 지속 중인 경련이 없어 로라제팜을 일률적으로 투여하는 상황은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. EEG가 간질 진단의 필수조건이고 치료가 전적으로 EEG에 달린다는 단정을 수정했다. 첫 비유발 발작 후 선택지 C는 유지한다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng217/chapter/1-Diagnosis-and-assessment-of-epilepsy

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002763
