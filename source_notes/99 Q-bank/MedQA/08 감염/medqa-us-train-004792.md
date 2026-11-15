---
type: qbank
schema_version: 1
id: medqa-us-train-004792
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:94ca525f688e0b4b440496da579c275b001c2e02e332fbb5ba8f23476ef93c1e
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "노로바이러스 감염"
  - "급성 바이러스성 위장염"
  - "유람선 설사"
related_disease_slugs:
  - MDgg6rCQ7Je8L-uFuOuhnOuwlOydtOufrOyKpCDqsJDsl7wgKE5vcm92aXJ1cyBJbmZlY3Rpb24pLm1k
question_type: prevention
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

요양시설에서 한나절 사이에 입소자와 직원 여러 명이 구토와 물설사를 시작했다. 노로바이러스 집단발생이 의심된다. 검사 결과를 기다리는 동안 시설이 먼저 취할 조치는?

## 선택지

A. 증상자를 분리하고 접촉주의를 적용하며 관할 보건소와 집단발생 대응을 시작한다
B. 공용 식사와 프로그램을 유지하고 확진자만 분리한다
C. 전체 입소자에게 예방 항생제를 투여한다
D. 기침 증상이 있는 사람만 비말주의를 적용한다

## 해설


노로바이러스가 의심되는 시설 집단발생은 결과를 기다리지 말고 증상자 분리·접촉주의와 보건소 협조를 시작한다. 손은 비누와 물로 씻고 시설 내 오염을 관리한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004792 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 노로바이러스 D 유지; 대변의 난자를 충란으로 용어 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004792
- https://kdca.go.kr/bbs/kdca/55/259114/download.do
