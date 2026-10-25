---
type: qbank
schema_version: 1
id: medqa-us-train-005870
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:94aeb9492ee486af03b534f60006cc3d01b2fef08e5457d1f44f223ca046f1c0
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "만성폐쇄성폐질환"
  - "폐고혈압"
  - "우심부전"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
  - MDIg7Zi47Z2h6riwL-2PkOqzoO2YiOyVlSAoUHVsbW9uYXJ5IEh5cGVydGVuc2lvbikubWQ
question_type: diagnosis
difficulty: complex
answer: A
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

61세 남성이 점점 악화되는 호흡곤란과 흉부 불편감으로 내원했다. 5년 동안 운동 시 문제가 점점 심해져 이제 평지에서 50m 이상 걷지 못하고 대부분 집에서 쉰다. 40년 동안 하루 1~2갑을 흡연했다. 괴로워 보이며 맥박은 분당 85회, 혈압은 140/80 mmHg, 호흡수는 분당 25회이다. 얼굴이 다혈성이고 경정맥이 팽창되어 있으며 양측 폐에서 천명이 들린다. 오른손 손가락은 노랗게 변색되어 있고 하지에 2+ 부종이 있다. 다음 중 증상의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 폐동맥압 상승
B. 만성 호흡성 산증
C. 관상동맥 죽상경화반
D. 흉강 내 가스량 감소

## 해설


운동 제한, 호흡곤란, 말초 부종, 정맥 팽창, 청색증은 폐동맥압 상승에 의한 우심부전 소견이다. 폐고혈압이 우심부전과 전신 울혈을 일으키므로 가장 가능성 높은 원인은 폐동맥압 상승이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 장기 흡연폐질환·JVP/말초부종은 폐고혈압 A에 따른 cor pulmonale의 전신울혈과 연결.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005870
