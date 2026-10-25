---
type: qbank
schema_version: 1
id: medqa-us-test-000284
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:1f20711afcbae70f11d1b0813c8f1a5960e153890749124d419ad5d8f1309950
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "폐렴사슬알균 폐렴"
  - "지역사회획득폐렴"
  - "상엽 폐렴"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-ygle2YlSDtj5DroLQgKFR5cGljYWwgUG5ldW1vbmlhKS5tZA
  - MDIg7Zi47Z2h6riwL-2PkOugtC5tZA
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

고열이 3일간 지속되어 입원한 지 12시간 후, 15세 남아에게 호흡곤란이 발생했다. 이 기간 동안 전신 권태감과 중등도 양의 녹색 가래를 동반한 기침이 있었다. 지난 10일 동안 발열, 인후통, 전신 근육통이 있었고 처음에는 호전되었으나 지난 5일 동안 다시 악화되었다. 체온 38.7°C(101.7°F), 맥박 109회/분, 호흡 27회/분, 혈압 100/70 mmHg였다. 실내 공기 산소포화도는 93%였다. 오른쪽 위쪽 폐야에서 호흡음 감소와 수포음이 들렸다. 혈색소 13.3 g/dL, 백혈구 15,000/mm³, 혈소판 289,000/mm³였고 흉부 X선에서 오른쪽 상엽 침윤이 보였다. 다음 중 이 환자 증상의 가장 가능성 높은 원인은?

## 선택지

A. 폐렴사슬알균(Streptococcus pneumoniae)
B. Mycoplasma pneumoniae
C. Chlamydophila pneumoniae
D. Haemophilus influenzae

## 해설

호전되던 호흡기 감염 뒤 다시 고열과 화농성 가래, 백혈구 증가 및 국소 폐침윤이 생겨 이차 세균성 폐렴을 의심한다. 제시된 보기 중 흔한 전형적 세균성 폐렴 원인인 폐렴사슬알균(A)이 가장 합당하다. 녹색 가래나 상엽 침윤만으로 균종을 확정할 수는 없으며, 이 소견이 폐렴구균에만 특이적인 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A 유지. 녹색 가래/상엽 병변을 폐렴구균 특이소견으로 설명하지 않고 제시 보기 내 급성 세균성 엽성폐렴의 가능성으로 제한.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000284
