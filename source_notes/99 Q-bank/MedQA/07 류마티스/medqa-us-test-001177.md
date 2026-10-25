---
type: qbank
schema_version: 1
id: medqa-us-test-001177
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:26db37a118c5070a1bb01199d063769d465e2bf1360323a023ec5ea37a91af8e
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "AA 아밀로이드증"
  - "만성 류마티스관절염"
  - "신증후군"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpCDqtIDsoIjsl7wgKFJoZXVtYXRvaWQgQXJ0aHJpdGlzKS5tZA
  - MDUg7Iug7J6lL-yLoOymne2bhOq1sCAoTmVwaHJvdGljIFN5bmRyb21lKS5tZA
question_type: mechanism
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

66세 남성이 6주간 피로와 다리·발 부종으로 진료를 받으러 왔다. 아침에 눈 주위가 붓고 소변에 거품이 생겼다. 류마티스인자 양성 류마티스관절염과 만성 알코올 남용 병력이 있으며 아밀로이드증을 시사하는 단백뇨 3+와 저알부민혈증, 복수가 있었다. 이 소견의 가장 가능성 높은 원인은?

## 선택지

A. 이부프로펜 이상반응
B. 심박출률 감소
C. 신장에 AL 아밀로이드 침착
D. 혈청 아밀로이드 A 생성 증가

## 해설


만성 류마티스 관절염 환자에서 단백뇨와 저알부민혈증, 부종이 나타나면 AA(급성기 반응) 아밀로이드가 신장에 침착되어 신증후군을 일으킨다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 `medqa-us-test-001177` 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 장기간 RA 염증→serum amyloid A 증가→AA 신장 침착의 D가 AL 선지와 구별되어 맞음. source에 없는 아밀로이드 생검 확진을 주장하지 않음.
- 범위: content-reviewed. 기초 내용 대조와 해당 쟁점의 근거 확인을 구별하며 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001177
