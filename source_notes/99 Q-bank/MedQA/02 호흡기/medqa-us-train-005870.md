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
explanation_status: "manual-reviewed"
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

오래된 COPD가 있는 61세 남성에게 발목 부종과 경정맥 팽창이 새로 생겼다. 심초음파에서 좌심실 수축기능은 보존돼 있지만 우심실이 비대하고 폐동맥압이 높다. 이 환자의 전신 정맥 울혈을 가장 잘 설명하는 기전은?

## 선택지

A. 폐고혈압으로 우심실 후부하가 증가했다
B. 기관지 수축으로 좌심실 후부하가 줄었다
C. 폐 과팽창 때문에 혈액량이 감소했다
D. 좌심실의 급성 국소 수축장애가 생겼다

## 해설


만성 폐질환과 저산소혈증은 폐혈관저항을 높일 수 있다. 우심실이 높은 압력을 오래 견디면 우심실 기능이 떨어져 경정맥 팽창과 말초부종이 생길 수 있다. COPD 환자에게 부종이 있다는 사실만으로 폐성심을 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 장기 흡연폐질환·JVP/말초부종은 폐고혈압 A에 따른 cor pulmonale의 전신울혈과 연결.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005870
- https://new.lungkorea.org/board/guide/view/13792
