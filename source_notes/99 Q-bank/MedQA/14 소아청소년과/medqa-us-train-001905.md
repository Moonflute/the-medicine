---
type: qbank
schema_version: 1
id: medqa-us-train-001905
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ef26bd7fc9c186a5ce7c65bd4d476109a09c3287a756f4d19be9fec3b302be49
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "posterior urethral valves"
  - "urinary retention"
  - "neonatal urinary obstruction"
question_type: management
related_disease_slugs: []
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

생후 10일 된 남아가 하루 동안의 복부팽만으로 응급실에 왔다. 하루 전부터 수유를 거부하고 평소보다 처져 있으며 체온이 높다고 한다. 하루 소변 기저귀는 1~2개, 알갱이 변은 1~2회이다. 분만은 순조로웠고 출생 직후 중등도 호흡곤란이 있었으나 호전되었다. 체온 101°F (38.3°C), 혈압 98/69 mmHg, 맥박 174/min, 호흡 47/min, 산소포화도 99%이다. 중등도 distress와 복부팽만이 있다. 다음 중 최선의 초기 관리 단계는 무엇인가?

## 선택지

A. 방광경검사
B. 방사성핵종 검사
C. 신장 초음파
D. 요도 카테터 삽입

## 해설

소변량이 적고 팽만이 있어 도뇨(D)로 요량·저류 여부를 평가하고 무균 소변 검체를 얻을 수 있다. 저류가 있으면 감압한다. 다만 이 소견만으로 후부요도판막을 확진할 수 없으며, 10일 신생아의 발열·수유불량·기면은 패혈증 평가와 신속한 항생제 치료도 필요한 응급상황이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 배뇨 감소·복부팽만의 도뇨 D 유지. 요로폐쇄 확정과 신생아 발열 평가 누락 교정.
- https://www.rch.org.au/clinicalguide/guideline_index/Recognition_of_the_seriously_unwell_neonate_and_young_infant/
- https://uroweb.org/guidelines/paediatric-urology/chapter/congenital-lower-urinary-tract-obstruction

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001905
