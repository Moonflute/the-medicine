---
type: qbank
schema_version: 1
id: medqa-us-train-007603
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5c7692edd12f396d5c8c28916e765bd3c34035932bcbc2e61bf423f1dc89dba4
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "포도상구균 열상피부 증후군"
  - "황색포도상구균 독소"
  - "표재성 수포"
  - "점막 보존"
question_type: diagnosis
related_disease_slugs:
  - MDgg6rCQ7Je8L-2PrOuPhOyVjOq3oCDqsJDsl7wgKFN0YXBoeWxvY29jY2FsIEluZmVjdGlvbikubWQ
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

3세 남아가 발열과 발진으로 응급실에 내원했다. 아침에는 보채고 열이 있었는데 하루 종일 점점 악화되었고 내원 전 발진도 생겼다. 이전에는 건강했고 현재 복용 약물은 없다. 체온은 102.0°F(38.9°C), 혈압 90/50 mmHg, 맥박 160회/분, 호흡수 17회/분, 산소포화도 98%이다. 신체검사에서 60%가 넘는 체표면적을 덮는 성홍열양 발진과 쉽게 터지는 이완성 수포가 보인다. 병변은 입 주위를 둘러싸지만 점막은 침범하지 않고 발진을 만지면 아프다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 포도상구균 열상피부 증후군
B. 독성 표피 괴사용해
C. 독성 쇼크 증후군
D. 두드러기

## 해설

발열·피부 압통, 광범위한 표재성 이완 수포와 점막 보존은 포도상구균 열상피부증후군(SSSS, A)에 부합한다. 병변은 입 주위를 침범하지만 구강 점막은 보존되어 TEN과 구별된다. 독소에 의한 표피 표층의 분리이며 열에 의한 화상을 뜻하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 입 주위 병변이 없다는 본문과 반대인 해설 및 질환명 오역을 교정.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007603
