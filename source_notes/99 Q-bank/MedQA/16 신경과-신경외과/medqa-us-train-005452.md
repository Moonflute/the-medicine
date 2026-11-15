---
type: qbank
schema_version: 1
id: medqa-us-train-005452
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0a92e05eef1eb11ad65c224a8146fe87b2e3cfe8804ab1ab97bd058d03d1858f
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "급성 뇌졸중"
  - "뇌출혈 배제"
  - "비조영 두부 CT"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_sp4Dso7zrp4ntlZgg7Lac7ZiIIChTdWJhcmFjaG5vaWQgaGVtb3JyaGFnZSkubWQ
difficulty: standard
answer: B
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

77세 여성이 45분 전 갑자기 오른쪽 얼굴과 팔에 힘이 빠지고 말이 어눌해졌다. 기도와 순환은 안정적이고 현장 혈당은 85 mg/dL다. 출혈 여부를 신속히 확인할 첫 영상은?

## 선택지

A. 경동맥 초음파
B. 비조영 뇌 CT
C. 뇌 관류영상 단독검사
D. 경두개 도플러

## 해설

급성 뇌졸중이 의심되면 재관류 치료를 검토하면서 비조영 뇌 CT 등으로 출혈을 신속히 배제한다. 초기 CT가 정상이어도 허혈성 뇌졸중은 배제되지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 급성 뇌졸중 CT 결과가 혈전용해 대 항응고를 단순 선택하게 한다는 잘못된 치료 연결을 교정했다. B 영상 우선은 유지한다.
- 공식/학회 근거: https://www.ahajournals.org/doi/10.1161/STR.0000000000000513

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005452
