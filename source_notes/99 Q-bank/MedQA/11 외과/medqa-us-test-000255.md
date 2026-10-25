---
type: qbank
schema_version: 1
id: medqa-us-test-000255
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:06de6f8a506004ab4aabbaa943373678273d17dccad5a5408232c1c2975fc3dc
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "수술부위 감염"
  - "흉골 창상 감염"
  - "창상 벌어짐"
related_disease_slugs:
  - MTEg7Jm46rO8L-ywveyDgSDqsJDsl7wgKFdvdW5kIEluZmVjdGlvbikubWQ
question_type: management
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

62세 남성이 흉부 상처가 잘 아물지 않아 병원에 왔다. 3주 전 관상동맥 우회술을 3개 혈관에 시행받았다. 25년 동안 제2형 당뇨병과 고혈압을 앓고 있다. 진찰에서 흉골 하부 3분의 1에 창상 벌어짐이 보였고, 상처 표면에 죽은 괴사 조직과 고름이 있었다. 흉부 CT에서 수술 부위 주변 연조직에 지방 침윤을 동반한 소량의 액체 저류가 보였다. 다음 중 가장 적절한 처치는?

## 선택지

A. 수술적 변연절제술
B. 음압 상처치료
C. 흉골 철선 고정
D. 흉골 고정술

## 해설


수술 부위 감염으로 인한 창상 벌어짐은 괴사 조직과 고름이 존재하므로, 감염 조직을 완전히 제거하고 건강한 조직을 남기기 위해 변연절제술이 필요하다. 따라서 수술적 변연절제술이 가장 적절한 처치이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000255 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 괴사·농성 배액을 동반한 흉골 수술창 감염에서 변연절제 A가 맞고 원문·해설이 일치한다. 음압치료나 고정만으로 괴사조직 제거를 대체하지 않는다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.jtcvs.org/article/S0022522316308728/pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000255
