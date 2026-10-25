---
type: qbank
schema_version: 1
id: medqa-us-train-001503
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0597cd4f029ae7553c8e65e5d40a8cd16614df84b1b07899116a3dda213da714
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Salmonella osteomyelitis"
  - "sickle cell disease"
  - "osteomyelitis"
related_disease_slugs:
  - MDgg6rCQ7Je8L-qzqOyImOyXvCAoT3N0ZW9teWVsaXRpcykubWQ
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

5세 남아가 10일 동안 간헐적인 발열과 오른쪽 발목의 통증성 종창으로 내원했다. 발목 외상은 없었다. 겸상적혈구병 병력이 있고 3년 전 왼쪽 검지에 지염이 있었다. 현재 하이드록시우레아와 필요 시 아세트아미노펜을 복용한다. 체온은 38°C (100.4°F), 혈압은 125/68 mm Hg, 맥박은 105회/분, 호흡수는 14회/분이다. 오른쪽 발목이 압통, 종창 및 홍반을 보이며 안쪽복사뼈에 국소 압통이 있다. X선에서 골막이 두꺼워지고 들려 있으며 오른쪽 가쪽복사뼈 위에 투과성 테두리를 가진 중심 경화 병변이 보인다. 골생검 배양으로 진단이 확인되었다. 다음 중 가장 가능성 높은 원인균은 무엇인가?

## 선택지

A. Escherichia coli
B. Streptococcus pyogenes
C. Salmonella enterica
D. Pseudomonas aeruginosa

## 해설


겸상적혈구병은 Salmonella 골수염의 중요한 위험요인으로, 제시한 보기 중 C가 가장 부합한다. 다만 S. aureus도 중요한 원인이고 지역에 따라 빈도가 달라진다. 골막 반응과 경화·투과성 병변은 골수염을 지지하지만 Salmonella에 특이적인 영상은 아니므로 원인균은 배양으로 확인한다. 원문에서 압통은 내측복사뼈, 영상 병변은 가쪽복사뼈에 각각 기술되어 이를 임의로 같게 만들지 않았다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001503 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 내측복사뼈 압통의 번역을 복구; SCD 골수염의 Salmonella 연관을 유지하되 영상만으로 균종 확정하거나 세계최다 일반화 금지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001503
