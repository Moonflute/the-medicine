---
type: qbank
schema_version: 1
id: medqa-us-train-003284
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:60784a3250398b46a6e6e967dbf86f671e6fcbc6fef233afe7fa69a48269bff6
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "emphysema"
  - "chronic bronchitis"
  - "decreased DLCO"
  - "COPD differentiation"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yEuOuhnOy5uCDquLDsooUgKE1lZGlhc3RpbmFsIEVtcGh5c2VtYSkubWQ
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: diagnosis
difficulty: complex
answer: D
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

55세 남성이 5년 동안 지속된 기침과 1년 동안 운동 시 호흡곤란으로 내원했다. 10년 동안 규칙적으로 흡연했고 여러 의사를 방문해 검사를 받았지만 영구적인 호전은 없었다. 진찰에서 통형 흉곽, 양측 호기말 천명과 산재한 수포음이 있다. 혈액검사, 흉부방사선, 동맥혈가스, 폐기능검사로 만성 폐쇄성 폐질환을 확인했다. 의사는 폐기종과 만성기관지염을 한 가지 단서로 구분했다. 다음 중 감별에 가장 도움이 된 단서는?

## 선택지

A. 장기간 담배 연기 노출력
B. 혈액검사에서 헤마토크리트 증가
C. 동맥혈가스에서 만성 호흡성 산증
D. 일산화탄소에 대한 폐 확산능(DLCO) 감소

## 해설


폐기종은 폐포 파괴로 폐확산능(DLCO)이 감소하는 것이 특징이며, 만성 기관지염은 주로 가래·기침이 두드러진다. 따라서 두 질환을 구분하는 가장 유용한 검사는 DLCO 감소이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 폐포벽·모세혈관상 파괴로 emphysema에서 DLCO D 감소; 단순 흡연·고Hct·만성산증보다 감별력 있음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003284
