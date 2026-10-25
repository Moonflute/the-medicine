---
type: qbank
schema_version: 1
id: medqa-us-train-004229
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dd1706662a5a19c8284c86ebf4b11b033ad89ca2fa6c73b0456688ffea2bafd7
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "호모시스틴뇨증"
  - "수정체 하방 탈구"
  - "혈전색전증"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIOuwjyDtj5Dsg4nsoITspp0gKERlZXAgVmVpbiBUaHJvbWJvc2lzIGFuZCBQdWxtb25hcnkgRW1ib2xpc20pLm1k
question_type: 임상증례 객관식
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: machine-generated
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

3세 남아가 새 환자 방문을 위해 부모와 함께 소아과에 왔다. 최근 입양되어 과거 병력과 가족력은 거의 모른다. 부모는 아이가 잘 지내지만 유치원 반의 다른 3세 아이들보다 훨씬 크다고 걱정한다. 집에서 다양한 식사를 하고 주스와 간식은 제한한다. 체중 73백분위수, 키 99백분위수, 머리둘레 86백분위수이며 발달이 약간 지연되어 있다. 피부가 밝고 키가 크며 흉골이 돌출되어 있다. 관절 과운동성과 피부 과탄력성이 있고 시력이 나빠 안과에서 오른쪽 수정체 하방 탈구를 진단받았다. 이 아이에게 가장 발생하기 쉬운 합병증은 무엇인가?

## 선택지

A. 대동맥박리
B. 갑상샘 수질암
C. 골관절염
D. 혈전색전성 뇌졸중

## 해설


키가 크고 관절 과운동성, 수정체 탈구가 있는 소아는 호모시스틴뇨증을 의심하게 하며, 이 질환은 혈전성 혈관질환, 특히 혈전색전성 뇌졸중 위험이 높다. 따라서 가장 흔한 합병증은 혈전색전성 뇌졸중이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 수정체하방탈구·발달지연·marfanoid체형은 homocystinuria의 혈전색전성뇌졸중 D 위험.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004229
