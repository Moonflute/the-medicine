---
type: qbank
schema_version: 1
id: medqa-us-test-000075
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:56baa760fd281aefc7ad3c3df30b7878aa83a3661d9ff24a45a63324e4f3a29b
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "어루러기"
  - "말라세지아"
  - "KOH 검사"
question_type: investigation
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-yWtOujqOufrOq4sCAoVGluZWEgVmVyc2ljb2xvcikubWQ
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

21세 남성이 5일 동안 상체의 가려움과 저색소성 발진으로 내원했다. 지난주 바하마 출장에서 해변을 방문하고 동료들과 하이킹한 후 처음 알아차렸다. 처음에는 등 위쪽의 한 병변이었으나 어깨로 퍼졌다. 인슐린 펌프로 조절되는 제1형 당뇨병이 있고 멜라닌세포 독성 화학물질 노출은 없다. 발진 사진이 제시되어 있다. 한 달 전 HbA1c는 7.8%였다. 다음 중 진단을 확인할 가능성이 가장 높은 검사는?

## 선택지

A. 우드등 검사
B. 피부 배양
C. 수산화칼륨(KOH) 검사
D. 피부 생검

## 해설

상체와 어깨의 저색소성 발진과 가려움은 Malassezia 효모에 의한 어루러기를 시사한다. KOH로 피부 인설 검체를 관찰하면 짧은 균사와 효모를 확인할 수 있어 C가 적절하다. Malassezia는 원인 미생물의 이름이며 그 자체가 다른 곰팡이에 의해 발생하는 질환은 아니다. 사진은 없지만 본문의 분포·색소변화와 선지로 검사 선택을 판단할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 말라세지아를 다른 곰팡이로 인해 발생하는 질환처럼 설명한 오류/검사민감도 과장 수정. KOH C 유지.
- 공식/학회 근거: https://www.aad.org/public/diseases/a-z/tinea-versicolor-treatment

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000075
