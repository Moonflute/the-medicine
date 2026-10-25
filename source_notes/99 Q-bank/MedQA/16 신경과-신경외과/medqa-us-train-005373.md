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
answer: B
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

69세 여자가 1년 동안 반복되는 낙상과 서 있을 때 균형 유지 곤란으로 내원했다. 복시, 구음장애, 광범위 보행, 양측 상지 근긴장 증가, 서동, 무관심과 아래를 볼 때 양쪽 눈의 공동운동 제한이 있다. 뇌 MRI에서 가장 가능성 높은 소견은?

## 선택지

A. 비대칭 국소 피질 위축
B. 교뇌는 보존된 중뇌 위축
C. 해마는 보존된 전두엽 위축
D. 경한 피질 위축을 동반한 뇌실 확장

## 해설

조기 반복 낙상, 아래쪽 수직주시 제한, 서동·경직 및 무감동은 진행성 핵상마비(PSP)를 시사한다. MRI에서 교뇌는 비교적 보존되면서 중뇌가 위축되는 B가 특징적일 수 있으며 시상면의 벌새모양 소견으로 표현된다. 중뇌가 보존되고 교뇌가 위축된다는 기존 설명은 정답과 반대다. 이러한 영상소견 하나만으로 모든 PSP가 확진되는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 진행성 핵상마비 약어를 PCA로 오기하고 중뇌·교뇌 위축 관계를 반대로 설명한 오류를 수정했다. B를 유지한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005373
