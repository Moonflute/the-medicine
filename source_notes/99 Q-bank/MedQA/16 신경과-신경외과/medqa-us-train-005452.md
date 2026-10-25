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

77세 여자가 갑자기 오른팔 근력저하, 오른쪽 안면 처짐과 구음장애가 생겨 응급실에 왔다. 고혈압, 제2형 당뇨병과 고지혈증이 있으며 오른쪽 상지 근력은 2/5, 혈당은 85 mg/dL이다. 다음 중 가장 적절한 처치는?

## 선택지

A. 기관삽관
B. 비조영 두부 CT
C. 경두개 도플러
D. 심장내과 의뢰

## 해설

급성 편측 안면·상지 위약과 언어장애는 뇌졸중을 의심하게 하며 저혈당은 확인되지 않았다. 주어진 선택지에서는 즉시 비조영 두부 CT(B)로 출혈 및 주요 다른 원인을 평가하고 재관류 경로를 진행한다. 초기 CT가 정상이어도 허혈성 뇌졸중이 배제되지 않는다. 이후 발병시간·장애 정도·혈관영상·금기 등에 따라 정맥혈전용해나 혈전제거술을 평가하며, CT만으로 급성 항응고제를 곧바로 선택하는 이분법은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 급성 뇌졸중 CT 결과가 혈전용해 대 항응고를 단순 선택하게 한다는 잘못된 치료 연결을 교정했다. B 영상 우선은 유지한다.
- 공식/학회 근거: https://www.ahajournals.org/doi/10.1161/STR.0000000000000513

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005452
