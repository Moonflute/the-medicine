---
type: qbank
schema_version: 1
id: medqa-us-train-003275
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1654dbd5a32d2b24bffcb5afcf1cdef9ae77f09f37ab361694ea9fd977b335af
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "Marfan syndrome"
  - "FBN1 mutation"
  - "superotemporal lens subluxation"
  - "arachnodactyly"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uniOultO2MoSDspp3tm4TqtbAgKE1hcmZhbiBTeW5kcm9tZSkubWQ
question_type: mechanism
difficulty: complex
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

3세 남아가 건강검진을 위해 부모와 함께 내원했다. 만삭 질식분만으로 태어나 심한 근시로 시력이 나쁜 것 외에는 건강했다. 키는 97백분위수, 체중은 25백분위수이고 높은 아치형 입천장, 비정상적으로 길고 가는 손가락과 발가락, 과도하게 굽혀지는 손가락 관절이 있다. 엄지를 손바닥에 넣고 주먹을 쥐면 엄지가 손의 자쪽 경계를 넘어 돌출된다. 세극등검사에서 양측 수정체가 상측 측두 방향으로 아탈구되어 있다. 다음 중 상태의 가장 가능성 높은 기저 원인은?

## 선택지

A. 피브릴린-1 유전자 돌연변이
B. 콜라겐 교차결합 결함
C. 성염색체 비분리
D. RET 유전자 돌연변이

## 해설

키 큰 마른 체형·거미손가락·관절 과신전·thumb sign과 양측 상측 측두 방향 수정체 아탈구는 Marfan 증후군에 부합한다. 결합조직 미세섬유 단백질 fibrillin-1의 FBN1 변이 A가 원인이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Marfan의 수정체 아탈구 방향을 수핵상방위라고 잘못 쓴 해설 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003275
