---
type: qbank
schema_version: 1
id: medqa-us-test-000146
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:c484c3414c3058e7e0584a50af925aa34ceeef71c238e00420920964879033a3
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "미세변화병"
  - "신증후군"
  - "선택적 단백뇨"
related_disease_slugs:
  - MDUg7Iug7J6lL-uvuOyEuOuzgO2ZlOuzkSAoTWluaW1hbCBDaGFuZ2UgRGlzZWFzZSkubWQ
  - MDUg7Iug7J6lL-yLoOymne2bhOq1sCAoTmVwaHJvdGljIFN5bmRyb21lKS5tZA
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

5세 남아가 5일 전 시작된 얼굴 부종으로 내원했다. 2주 전 인후통이 있었지만 저절로 호전되었다. 체온 37°C, 맥박 분당 107회, 혈압 94/67 mmHg이다. 상하지 함요부종과 눈 주변 부종, 약간 팽창된 복부가 있다. 혈색소 13.1 g/dL, 혈청 알부민 2.1 g/dL, 총콜레스테롤 270 mg/dL, 중성지방 175 mg/dL, 소변 단백 4+, 혈액과 포도당 음성, 백혈구에스터레이스 음성이다. 신장 생검에서 가장 가능성 높은 소견은?

## 선택지

A. 광학현미경에서 메산지움 증식
B. 전자현미경에서 상피하 고밀도 침착
C. 면역형광에서 사구체 기저막의 IgG와 C3 침착
D. 광학현미경에서 정상 소견

## 해설

부종·단백뇨 4+·저알부민혈증·고지혈증에 혈뇨가 없어 신증후군 양상이다. 이 연령에서는 미세변화병이 가장 흔하며 보기 중 D, 광학현미경상 정상 또는 거의 정상 소견이 합당하다. 특징적인 변화는 전자현미경의 족돌기 소실이며, IgG/C3 면역침착을 특징으로 하는 질환이 아니다. 선행 인후통만으로 혈뇨 없는 이 사례를 감염후 사구체신염으로 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 D 유지. IgG/C3 침착을 강조해 C를 지지한 해설을 소아 신증후군/MCD의 정상 광학현미경 소견으로 교체.
- https://www.niddk.nih.gov/health-information/kidney-disease/children/nephrotic-syndrome-children

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000146
