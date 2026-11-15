---
type: qbank
schema_version: 1
id: medqa-us-train-006118
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ce77c96deff3e1e53d413514bfd6307e246398327cbf700162f957beebe44535
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "중증 사지허혈"
  - "말초동맥질환"
  - "안정 시 허혈성 통증"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uPmeunpeqyve2ZlOyEsSDrp4zshLEg64-Z66elIO2PkOyDiSAoQXRoZXJvc2NsZXJvdGljIENocm9uaWMgQXJ0ZXJpYWwgT2NjbHVzaW9uKS5tZA
question_type: management
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

75세 남성이 4주째 밤마다 왼발 통증으로 잠을 깬다. 발을 침대 아래로 내리면 통증이 줄고 발가락에 낫지 않는 상처가 있다. 당뇨병과 흡연력이 있으며 발등맥박이 약하고 발가락 혈압은 24 mmHg이다. 가장 적절한 다음 조치는?

## 선택지

A. 사지 보존을 위해 혈관 전문팀에 신속히 의뢰한다
B. 실로스타졸만 처방하고 수개월 뒤 경과를 본다
C. 동맥혈류 평가 없이 강한 압박붕대를 적용한다
D. 파행만 있는 것으로 보고 보행운동만 권한다

## 해설

2주 넘는 허혈성 안정 통증과 상처, 낮은 발가락 혈압은 만성 사지위협허혈을 시사한다. 혈류 회복이 가능한지 신속히 평가해야 한다. 단순 파행과 같은 방식으로 기다리면 조직을 잃을 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 3개월 허혈성 휴식통을 급성동맥폐색으로 오연결한 해설과 Raynaud는 무통이라는 오류 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006118
- ACC/AHA 하지 말초동맥질환 진료지침(2024): https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000001251
