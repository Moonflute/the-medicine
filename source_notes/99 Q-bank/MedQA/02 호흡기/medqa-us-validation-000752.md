---
type: qbank
schema_version: 1
id: medqa-us-validation-000752
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:dce6355824f138174c60ec657624c1e4fcd6f623679afa67656a5f76d5afc159
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "사르코이드증"
  - "비타민 D 활성화"
  - "고칼슘혈증"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzoOy5vOyKmO2YiOymnSAoSHlwZXJjYWxjZW1pYSkubWQ
question_type: mechanism
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
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

34세 여성이 사르코이드증으로 추적 중이다. 양측 폐문 림프절이 커져 있고 림프절 생검에서 비괴사성 육아종이 확인됐다. 고칼슘혈증이 있고 부갑상샘호르몬은 낮다. 이 환자에서 칼슘이 상승한 기전은?

## 선택지

A. 육아종에서 활성형 비타민 D 생성이 증가한다
B. 부갑상샘에서 부갑상샘호르몬의 자율 분비가 증가한다
C. 콩팥의 칼슘 배설이 줄어든 말기 콩팥병이다
D. 비타민 D 활성화가 감소해 장내 칼슘 흡수가 증가한다

## 해설

육아종의 대식세포가 비타민 D를 활성형인 1,25-디하이드록시비타민 D로 전환하면서 장의 칼슘 흡수가 늘 수 있다. 칼슘 증가에 반응해 부갑상샘호르몬은 억제된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 사르코이드 고칼슘혈증의 대식세포 1α-hydroxylase를 명시하고 원문에 있는 티아지드 복용을 복원.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000752
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12235296/
