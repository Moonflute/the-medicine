---
type: qbank
schema_version: 1
id: medqa-us-train-005373
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:af6961badc535ee3ca36759e94a361f4a588b837e1a113fa59af4fd4a38fc5a4
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "진행성 핵상마비"
  - "중뇌 위축"
  - "수직주시마비"
  - "Progressive supranuclear palsy"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

69세 환자가 1년 사이 뒤로 자주 넘어지고 움직임이 느려졌다. 턱과 목이 뻣뻣하고 특히 아래를 보기 어렵지만, 눈머리반사로는 눈을 아래로 움직일 수 있다. 가장 가능성 높은 진단은?

## 선택지

A. 특발 파킨슨병
B. 다계통위축증
C. 본태떨림
D. 진행성 핵상마비

## 해설

조기 낙상, 축성 경직, 수직 핵상주시마비가 진행성 핵상마비의 중요한 단서다. 머리를 움직여 반사적으로 눈을 움직일 수 있는 점이 핵상 병변을 뒷받침한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 진행성 핵상마비 약어를 PCA로 오기하고 중뇌·교뇌 위축 관계를 반대로 설명한 오류를 수정했다. B를 유지한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005373
- https://pubmed.ncbi.nlm.nih.gov/28467028/
