---
type: qbank
schema_version: 1
id: medqa-us-train-005934
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:839269e441cd129090c6b6e74f4961ef369a095081e658a73221d43fd1c82f8f
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "장 천공"
  - "수술 동의 철회"
  - "환자 자율성"
  - "Bowel perforation"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC9QVUQg7LKc6rO1IChQZXJmb3JhdGlvbikubWQ
question_type: ethics
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 여성이 3시간 동안 지속된 심한 복통과 구토로 응급실에 왔다. 과거에도 10~15분간 지속되다가 제산제로 호전되는 복통이 있었다. 딸과 손주들과 살고 있으며 지난해 남편과 이혼했다. 의식은 명료하고 지남력은 정상이다. 체온은 37.3°C(99.1°F), 맥박은 분당 134회, 혈압은 90/70 mmHg이다. 복부는 단단하고 전반적으로 압통이 있으며 방어와 반발통이 있다. 직장검사에서 직장이 비어 있다. 생리식염수 주입을 시작했고 복부 CT에서 장 천공이 확인되었다. 외과의가 응급 시험적 개복술의 필요성을 설명하여 환자는 동의하고 서면 동의서도 작성했다. 수술실 이송을 기다리던 중 환자가 수술을 원하지 않는다고 번복했다. 수술하지 않을 위험을 설명하자 이해한다고 했지만 수술을 단호히 거부한다. 다음 중 가장 적절한 관리의 다음 단계는 무엇인가?

## 선택지

A. 병원 윤리위원회에 자문
B. 수술을 취소
C. 생명을 구하는 응급수술을 계속
D. 환자의 전 남편에게 동의 획득

## 해설

환자가 수술의 성격·위험·대안·거부 결과를 이해하고 판단능력이 유지된 상태에서 동의를 철회하면 B처럼 강제수술을 하지 않는다. 응급이라는 이유만으로 유효한 명시적 거부를 무시할 수 없다. 의사결정능력·이해와 선택을 확인/기록하고 허용하는 치료와 지지는 계속한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 수술거부 B는 의사결정능력 있는 환자의 정보에 근거한 거부로 한정.
- https://code-medical-ethics.ama-assn.org/sites/default/files/2022-08/2.1.1.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005934
