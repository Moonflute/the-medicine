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
question_type: diagnosis
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

75세 남성이 3개월 동안 지속된 좌측 허벅지와 종아리 통증으로 응급실에 왔다. 통증은 안정 시에도 있고 걸으면 악화되며 발을 침대 아래로 늘어뜨리면 약간 호전된다. 25년간 고혈압, 30년간 제2형 당뇨병이 있고 45년 동안 하루 30~40개비를 흡연했다. 양측 대퇴, 슬와 및 족배동맥 맥박은 감소했지만 촉지된다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 중증 사지허혈
B. 레이노 현상
C. 가성통풍
D. 봉와직염

## 해설

3개월 지속되는 휴식통·운동악화·다리 내리면 완화와 감소맥박은 만성 사지위협허혈 A를 시사한다. 급성동맥폐색과는 시간경과가 다르다. 누락 발 사진의 궤양을 임의 판독하지 않으며 Raynaud도 통증을 동반할 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 3개월 허혈성 휴식통을 급성동맥폐색으로 오연결한 해설과 Raynaud는 무통이라는 오류 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006118
