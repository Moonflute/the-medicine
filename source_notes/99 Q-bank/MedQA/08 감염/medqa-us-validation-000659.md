---
type: qbank
schema_version: 1
id: medqa-us-validation-000659
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:2bde2977949c66dc161c05d82bdac2a50035cefc8c59e3a4876a945f958a736a
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "감염성 심내막염"
  - "손발톱밑 선상출혈"
  - "오슬러 결절"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qwkOyXvCDsi6zrgrTrp4nsl7wgKEluZmVjdGl2ZSBFbmRvY2FyZGl0aXMpLm1k
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

65세 남성이 10일간의 미열, 피로, 식욕부진으로 진료를 받으러 왔다. 손발톱 밑에 적갈색 반점과 압통성 홍반성 손끝이 있고 심첨부에서 새로운 범수축기 잡음이 들린다. 이 상태를 진단하는 다음 단계는?

## 선택지

A. 항CCP 항체 역가
B. 심초음파
C. 혈액배양을 위한 채혈
D. 안심시키고 대증치료

## 해설


지속 발열, 손끝 압통성 병변·손발톱하 출혈과 새 잡음은 감염성 심내막염을 의심하게 한다. 항생제 전 여러 세트 혈액배양(C)을 신속히 채취해 원인균을 확인한다. 심초음파도 가능한 한 빨리 병행하며 배양 결과가 나올 때까지 기다리는 검사가 아니다. 혈역학적으로 불안정하면 불필요하게 항균치료를 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000659 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: IE 의심 시 항생제 전 blood cultures C 유지. 심초음파가 배양 결과 뒤에만 가능하다는 잘못된 순서 강제 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://academic.oup.com/eurheartj/article/44/39/3948/7243107?searchresult=1

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000659
