---
type: qbank
schema_version: 1
id: medqa-us-train-006127
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b8e10e62ddd4878e30f269ceb45372d18d078631b2cbd25c17e1e387afe2fa32
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "중족골 피로골절"
  - "달리기 관련 과사용 손상"
  - "휴식과 소염진통제"
question_type: management
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-qzqOygiCDstJ3roaAgKEZyYWN0dXJlIEdlbmVyYWwgUHJpbmNpcGxlcykubWQ
difficulty: standard
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

19세 ROTC 신병 남성이 좌측 발 통증으로 대학 클리닉에 왔다. 일주일 전 아침 달리기 훈련 중 시작되었고 휴식하면 호전되지만 운동이나 오래 서 있으면 다시 발생한다. 외상은 없고 부분 색맹 외에는 특별한 병력이나 복용 약물이 없다. 좌측 제2중족골을 누르면 압통이 있고 발 X선은 정상이다. 다음 중 가장 적절한 관리의 다음 단계는 무엇인가?

## 선택지

A. 석고 고정
B. MRI
C. 휴식과 이부프로펜
D. 부목 고정

## 해설

훈련 증가 후 제2중족골의 국소 압통과 체중부하 통증은 스트레스 손상을 시사하며 초기 X선은 정상일 수 있다. 주어진 선지 중 C의 휴식·통증 조절은 적절한 초기 보존적 조치다. 달리기를 중단하고 통증에 따라 단단한 밑창 신발·부츠·목발 등으로 부하를 줄일 수 있어 '고정이 전혀 필요 없다'는 뜻은 아니다. 이부프로펜은 단기 진통 선택일 뿐 골유합을 촉진하지 않으며 사용은 개별화한다. 진단이 불확실하거나 통증이 지속되면 MRI로 조기 스트레스 손상을 확인할 수 있으므로 MRI를 확진 후에만 한다는 기존 설명은 잘못이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 피로골절에서 고정이 필요 없고 MRI는 확진 후에만 한다는 반대 설명을 교정했다. 저위험 제2중족골의 초기 활동 제한·진통 C를 유지한다.
- 공식/학회 근거: https://www.orthoinfo.org/diseases--conditions/stress-fractures/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006127
