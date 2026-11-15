---
type: qbank
schema_version: 1
id: medqa-us-train-002960
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:004f9901365ff55aabd4cd0b7e954776e826c138e948fcf3bdee565f26e8a72a
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "transverse lie"
  - "malpresentation"
  - "term labor"
  - "cesarean delivery"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-2aoeychCAoVHJhbnN2ZXJzZSBMaWUpLm1k
difficulty: complex
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
  - ZHJ1ZzoxMSDsgrDrtoDsnbjqs7zCt-yGjOyVhC9PeHl0b2Npbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 40주 산모의 활동성 진통 중 양막이 이미 파수됐다. 단태아는 초음파에서 지속 횡위이며 어깨가 선진부다. 태아 심박은 아직 정상이다. 분만 방법은?

## 선택지

A. 옥시토신으로 질식분만 유도
B. 흡입 분만
C. 관찰하다 심박이 떨어진 뒤 결정
D. 제왕절개

## 해설

활동성 진통과 파수 상태에서 지속 횡위인 단태아는 질식분만을 할 수 없다. 태아 심박이 정상이어도 제대탈출과 폐쇄분만 위험을 고려해 제왕절개한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 존재하지않는정상경부소견삭제 및만삭진통횡위의분만위험명시.
- https://www.rmf.harvard.edu/Risk-Prevention-and-Education/Guidelines-and-Algorithms-Catalog-Page/Guidelines-Algorithms/2026/OB-Guideline-Files/Appendix-E-Breech-Version-or-External-Cephalic-Version

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002960
- https://medicalguidelines.msf.org/en/viewport/ONC/english/7-6-transverse-lie-and-shoulder-presentation-51417541.html
