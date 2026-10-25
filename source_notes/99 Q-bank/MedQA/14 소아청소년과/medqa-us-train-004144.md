---
type: qbank
schema_version: 1
id: medqa-us-train-004144
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:73c06636794bf08f541659c01fe67998de17ca6c304ff9c20e714bee389c0fe4
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "베커 근이영양증"
  - "디스트로핀"
  - "종아리 가성비대"
  - "Becker muscular dystrophy"
question_type: 임상증례 객관식
related_disease_slugs: []
difficulty: standard
answer: A
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

7세 남아가 서투른 행동을 걱정하는 어머니와 함께 소아과에 왔다. 지난 3개월 동안 점점 근력이 약해졌고, 예전에는 나무를 오르고 사촌들과 뛰놀았지만 이제는 너무 피곤하다고 한다. 최근 근육질 다리인데도 이상하게 걷기 시작했다. 신체검사에서 종아리 근육이 비대하고 의자에서 일어날 때 팔을 사용한다. 크레아틴키나아제가 상승했고 유전자검사에서 디스트로핀 유전자 돌연변이가 확인되었다. 근육 생검에서 디스트로핀이 감소되어 있다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 베커 근이영양증
B. 뒤시엔 근이영양증
C. 폼페병
D. 척수성 근위축증

## 해설

Becker 근디스트로피는 부분 기능을 가진 디스트로핀의 감소 또는 구조 이상과 관련된다. Duchenne에서는 보통 기능적 디스트로핀이 거의 없다. CK 증가·Gowers 징후·종아리 가성비대는 디스트로핀병을 시사하며 보기 중 A가 부합하지만, CK나 Gowers 징후만으로 Becker와 Duchenne를 구별하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: Becker와 Duchenne를 구별하지 못하는 단순 디스트로핀 결핍 표현을 보정.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004144
