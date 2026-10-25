---
type: qbank
schema_version: 1
id: medqa-us-train-006873
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:82d4f44678707c1471a4ee6d83cad11bd41b7f15f1a9f02684d5e7ec52c0fd51
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "급성 담낭염"
  - "담석 위험인자"
  - "다회 임신"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7JO46rCc7Je8IChBY3V0ZSBDaG9sZWN5c3RpdGlzKS5tZA
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQmlzb3Byb2xvbC5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

48세 여성이 5시간 동안 점점 심해진 오른쪽 상복부 통증, 발열 및 피가 섞이지 않은 구토로 응급실에 내원했다. 통증은 둔하고 간헐적이며 오른쪽 어깨로 방사된다. 지난 3개월 동안 식후 복부 불편감이 반복되었다. 13세에 충수절제술을 받았고 고혈압, 제2형 당뇨병 및 만성 요통이 있다. 비소프롤롤, 메트포르민 및 이부프로펜을 매일 복용한다. 체질량지수는 35kg/m²이다. 체온은 38.5°C(101.3°F), 맥박은 분당 108회, 혈압은 150/82 mm Hg이다. 오른쪽 상복부에 압통과 방어성 긴장이 있고 깊게 촉진하면 흡기를 멈춘다. 혈색소 13.1 g/dL, 백혈구 10,900/mm³, 혈소판 236,000/mm³, BUN 28 mg/dL, 포도당 89 mg/dL, 크레아티닌 0.7 mg/dL, 총 빌리루빈 1.6 mg/dL(직접 1.1), 알칼리성 인산분해효소 79 U/L, ALT 28 U/L, AST 32 U/L이다. 복부 X선은 정상이다. 추가 평가에서 다음 중 어떤 소견이 나타날 가능성이 가장 높은가?

## 선택지

A. 과거 다회 임신력
B. 반복되는 성매개감염 병력
C. 청진에서 잦고 고음의 장음
D. 그람음성 막대균이 자라는 소변 배양

## 해설


급성 담낭염에서는 담석에 의한 담도 폐쇄가 흔히 발생하며, 다회 임신력이 위험인자이다. 따라서 과거 다회 임신력이 가장 가능성 높은 소견이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Murphy·식후담도산통의 담석성담낭염은 관련위험인자인 다회임신 A와 부합. 실제산과력이확인됐다는뜻아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006873
