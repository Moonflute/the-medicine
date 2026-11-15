---
type: qbank
schema_version: 1
id: medqa-us-train-005211
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d6748008d642c2edeb86e9ef886c49d3ab50fe5c2e969e5a031fb3b310e5eb2e
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "급성 허혈성 뇌졸중"
  - "고혈압"
  - "뇌졸중 위험인자"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tl4jtmIjshLEg64eM7KG47KSRIChJc2NoZW1pYyBzdHJva2UpLm1k
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
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

환자가 마지막으로 정상으로 확인된 지 10시간 뒤 심한 실어증과 오른쪽 편마비로 왔다. CT에 출혈은 없고, 혈관영상에 왼쪽 중대뇌동맥 M1 폐색이 보인다. 관류영상에서 경색 중심부가 작고 구제 가능한 조직이 많다. 다음 처치는?

## 선택지

A. 뇌졸중 전문팀에서 즉시 기계적 혈전제거술을 진행한다
B. 시간창이 6시간을 넘었으므로 항혈소판제만 시작한다
C. 관류영상의 호전 여부를 다음 날 확인한다
D. 경부 경동맥 혈전이 있는지 초음파부터 반복한다

## 해설

앞순환 대혈관 폐색은 6시간이 지났더라도 24시간 이내에 임상·영상 조건을 충족하면 기계적 혈전제거술 대상이 될 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 정답 A와 위험인자 해설은 일관되나 한국어 요약에서 선택지 B/C를 판단할 음주량/스트레스 노출이 누락됨. 영어 원문 정보 복원, 영상 전 허혈성 확진 단정 완화.
- 공식/학회 근거: https://www.ninds.nih.gov/health-information/stroke/prevention

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005211
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6549067/
- https://www.ahajournals.org/doi/10.1161/STR.0000000000000513
