---
type: qbank
schema_version: 1
id: medqa-us-train-003924
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:de039c53748ee3e62bc10c26daca922cf1a66b6bf9246ae28ed91c6d585aa899
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "secondary prevention"
  - "transient ischemic attack"
  - "aspirin"
  - "atherosclerotic cardiovascular disease"
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_snbzqs7zshLEg7ZeI7ZiIIOuwnOyekSAoVHJhbnNpZW50IGlzY2hlbWljIGF0dGFjaykubWQ
  - MDEg7Iic7ZmY6riwL-uPmeunpeqyve2ZlOyEsSDrp4zshLEg64-Z66elIO2PkOyDiSAoQXRoZXJvc2NsZXJvdGljIENocm9uaWMgQXJ0ZXJpYWwgT2NjbHVzaW9uKS5tZA
question_type: prevention
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

노인 환자의 심혈관질환 일차·이차·삼차 예방에서 다음 중 죽상경화성 심혈관질환 예방을 위해 평생 아스피린 단독요법을 시작해야 하는 환자는?

## 선택지

A. 3일 전 약물방출 관상동맥 스텐트를 삽입한 75세 남성
B. 당뇨병과 심방세동이 있는 67세 여성
C. 1년 전 출혈성 뇌졸중 병력이 있는 83세 여성
D. 일과성 허혈발작 병력이 있는 63세 남성

## 해설

선택지 D의 TIA 병력은 비심인성으로 평가되면 장기 항혈소판 이차예방 대상이고 aspirin은 한 선택이다. 급성 고위험TIA에서는 단기간 병합요법이 필요할 수 있고 AF 등 심인성 원인이면 항응고를 검토한다. 새 DES3일은 aspirin 단독 대상이 아니며 AF의 뇌졸중예방도 aspirin 단독으로 대체하지 않는다. 일차예방을 특정 연령 남성에게 일률적으로 권하는 기존 문장은 삭제한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: TIA의 이차예방 D 유지. 50–59세남성만 aspirin 일차예방이라는 낡은 설명 제거·비심인성 조건 명시.
- https://doi.org/10.1161/STR.0000000000000375

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003924
