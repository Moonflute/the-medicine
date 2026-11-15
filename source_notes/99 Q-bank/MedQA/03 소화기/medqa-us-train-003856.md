---
type: qbank
schema_version: 1
id: medqa-us-train-003856
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:13e688a299c83412d040c779697c62cbce95c85af77a93e4d527ab275c93b28e
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "acute appendicitis"
  - "Rovsing sign"
  - "right lower quadrant pain"
  - "laparoscopic appendectomy"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_quInshLEg7Lap7IiY7Je8IChBY3V0ZSBBcHBlbmRpY2l0aXMpLm1k
question_type: investigation
difficulty: simple
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

29세 남성이 하루 동안 배꼽에서 오른쪽 아랫배로 이동한 통증과 미열로 왔다. 국소 압통은 있으나 범복막염이나 쇼크는 없다. 초음파에서 충수가 보이지 않아 판단이 어렵고, 정맥 조영제 금기는 없다. 다음 검사는?

## 선택지

A. 복부 단순 X선
B. 복부·골반 조영 CT
C. 대장내시경
D. 위장관 조영검사

## 해설

충수염 의심이 계속되는 안정적인 성인에서 초음파가 비진단적이면 조영 CT로 충수와 합병증 및 대체 진단을 평가한다. 우하복부 압통이나 로브싱 징후만으로 바로 수술을 결정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 임상충수염의 수술 D는 선택지상 유지하되 Rovsing만으로 진단확정/모든영상 불필요라는 해설을 한정.
- https://doi.org/10.1001/jamasurg.2025.6218

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003856
- https://pubmed.ncbi.nlm.nih.gov/28919126/
