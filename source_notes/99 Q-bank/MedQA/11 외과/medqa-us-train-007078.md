---
type: qbank
schema_version: 1
id: medqa-us-train-007078
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0d66f69a43d0a775bbba76b627c2e9c8c557881f48918d65c5aec239992fcf1b
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "잘못된 부위 수술"
  - "수술 전 타임아웃"
  - "환자 안전"
related_disease_slugs: []
question_type: prevention
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

고관절 수술 직전 환자 기록에는 왼쪽, 영상 판독에는 오른쪽으로 기록되어 있다. 아직 피부를 절개하지 않았다. 수술팀이 해야 할 일은?

## 선택지

A. 표시된 쪽을 기준으로 먼저 절개한다
B. 수술을 멈추고 환자·수술명·부위를 원자료로 확인해 불일치를 해결한 뒤 진행한다
C. 집도의 기억에 따라 수술하고 기록은 나중에 고친다
D. 두 손상 부위 중 증상이 더 뚜렷한 쪽을 수술한다

## 해설


수술 전 타임아웃에서 환자, 수술명, 부위를 팀이 함께 확인한다. 기록이나 표시가 서로 다르면 임의로 하나를 따르지 않고 영상·동의서 등으로 해결할 때까지 절개하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007078 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 잘못된 수술부위의 재발 방지를 위한 절개 전 팀 전체 time-out A가 Universal Protocol과 일치한다. 체크리스트·신원 확인은 함께 필요하지만 이 문제의 직접적 예방 단계와 구분했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.jointcommission.org/en-us/knowledge-library/support-center/standards-interpretation/standards-faqs/000001458

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007078
- https://www.kops.or.kr/portal/ifm/infoProvdStdrDetail.do?infoProvdNo=18
