---
type: qbank
schema_version: 1
id: medqa-us-train-006693
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:eb28738b0a6af458c40f28388a722dff4a571d7c24b38210c41b8312029b9cd4
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "치핵성 출혈"
  - "선홍색 혈변"
  - "항문경검사"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rgrTsuZjtlbUgKEludGVybmFsIEhlbW9ycmhvaWQpLm1k
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMiDtmLjtnaHquLAvRmx1dGljYXNvbmUubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

31세 남성이 배변 후 휴지에 소량의 선홍색 피가 묻었다. 빈혈, 배변 습관 변화, 체중 감소나 대장암 가족력은 없다. 외부 시진과 직장수지검사에서 출혈 부위가 보이지 않는다. 치핵 등 항문관 병변을 직접 확인할 검사는?

## 선택지

A. 항문경검사
B. 복부 조영 CT
C. 대변 잠혈검사
D. 대변 배양검사

## 해설


저위험 환자에서 항문경은 내치핵 등 항문관 병변을 직접 볼 수 있다. 원인을 찾지 못하거나 출혈이 반복되거나 경고 소견이 있으면 치핵으로 단정하지 말고 대장 평가를 검토한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 젊고안정·정상Hb·소량선홍혈변은 제시 중 항문경 A로 국소항문원인부터 확인하는 접근에 부합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006693
- https://doi.org/10.1097/DCR.0000000000003276
