---
type: qbank
schema_version: 1
id: medqa-us-train-007348
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:eaee61154a50e5d88fe756309dc0443b8315f98f8dd17728b541cce4741e4b55
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "클로스트리디오이데스 디피실 감염"
  - "항생제 관련 설사"
  - "포자 형성 막대균"
  - "장내 세균총"
related_disease_slugs:
  - MDgg6rCQ7Je8L-qxsOynk-uniSDqsrDsnqXsl7wgKFBzZXVkb21lbWJyYW5vdXMgQ29saXRpcykubWQ
question_type: mechanism
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

72세 남자가 복통, 설사, 발열로 응급실에 내원했다. 2주 전 지역사회획득 폐렴으로 레보플록사신을 시작했고 폐 증상은 호전되었다. 20년 동안 고혈압이 있어 암로디핀을 복용한다. 체온은 38.3°C(101.0°F), 맥박 90회/분, 혈압 110/70 mmHg이다. 복부가 약간 팽창되어 있고 압통은 거의 없다. 검사에서 말초 백혈구 수는 12,000/mm³이고 대변 구아이악검사는 잠혈에 약한 양성이다. 이 환자 질환의 기전을 가장 잘 설명하는 것은 무엇인가?

## 선택지

A. 정상 장내 세균총의 파괴와 포자 형성 막대균 감염
B. 직장의 자가면역성 염증
C. 위장관으로 가는 혈류 감소
D. 장관 내 삼투활성 및 흡수가 잘 되지 않는 용질의 존재

## 해설


레보플록사신 같은 항생제는 장내 정상균총을 파괴하고, 포자를 형성하는 클로스트리디움 디피실이 과증식해 독소를 생성한다. 이는 항생제 관련 설사의 주요 기전이다. 따라서 정답은 A이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007348
