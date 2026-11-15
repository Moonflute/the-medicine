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

63세 남성이 3개월 전 비심장성 일과성 허혈발작으로 치료받았다. 심방세동은 없으며 급성기 치료를 마쳤다. 출혈 금기는 없다. 재발 예방에 적절한 장기 치료는?

## 선택지

A. 아스피린과 클로피도그렐을 평생 병용
B. 아픽사반 단독
C. 항혈전제 없이 경과 관찰
D. 아스피린 단독

## 해설

비심장성 일과성 허혈발작 후에는 항혈소판제 단독요법이 장기 이차예방에 적절하며 아스피린은 가능한 약제다. 고위험 환자에서 급성기 이중항혈소판요법을 쓰더라도 장기 병용이 기본은 아니다. 심방세동 등 항응고 적응증이 없으므로 아픽사반을 대신 쓰지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: TIA의 이차예방 D 유지. 50–59세남성만 aspirin 일차예방이라는 낡은 설명 제거·비심인성 조건 명시.
- https://doi.org/10.1161/STR.0000000000000375

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003924
- 대한뇌졸중학회 항혈소판제제 진료지침: https://stroke.or.kr/guidelines/view.php?sid=107
