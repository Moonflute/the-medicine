---
type: qbank
schema_version: 1
id: medqa-us-train-009944
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:47edbb5e042da587ca03bd99cdb2f3e4e00b83f3b7d70dba8330723a718e8efa
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "영아 지루피부염"
  - "요람모"
  - "피부염"
question_type: diagnosis
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-yngOujqCDtlLzrtoDsl7wgKFNlYm9ycmhlaWMgRGVybWF0aXRpcykubWQ
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

특이한 병력, 수술력, 가족력이 없는 생후 5개월 남아가 새로 생긴 발진으로 부모와 함께 소아과에 내원했다. 부모는 발진이 몇 주 전 시작되어 변하지 않았다고 한다. 출생 후 모유 수유를 했고 4개월부터 부드러운 음식을 먹기 시작했다. 진찰에서 두피와 외부 귀에 반짝이는 노란 비늘을 동반한 홍반성 판이 보인다. 활력징후는 정상이다. 혈액검사에서 백혈구 8,300/mm³, 헤마토크릿 46.1%, 혈색소 17.1 g/dL, MCV 88 fL, 혈소판 242,000/mm³이다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 영아 지루피부염
B. 랑게르한스세포 조직구증
C. 비강진 아미안타세아
D. 아토피피부염

## 해설

두피·외이의 홍반성 판과 기름진 노란 인설은 영아 지루피부염/요람모(A)에 합당하다. 전신 진단을 혈액검사가 정상이라는 가정에 의존하지 않는다. 영아의 혈구검사 수치는 연령·채혈 방법·기관 참고범위를 확인해야 하며 제시된 Hb/Hct를 일괄 정상으로 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Cradle cap A는 명확한 두피·외이 형태로 지지되지만 영아 CBC를 모두 정상이라고 한 단정을 제거한다.
- 공식/학회 근거: https://www.aad.org/public/diseases/a-z/seborrheic-dermatitis-treatment

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009944
