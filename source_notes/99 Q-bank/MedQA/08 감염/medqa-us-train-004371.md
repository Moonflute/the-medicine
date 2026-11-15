---
type: qbank
schema_version: 1
id: medqa-us-train-004371
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:724e8fd81ef3b738d1e09747d863dea435c7cbd2de11c826e54d73e6e7162374
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "B형간염 노출 후 예방"
  - "주사침 손상"
  - "B형간염 면역글로불린"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
  - MDgg6rCQ7Je8L-q4ieyEsSBISVYg6rCQ7Je8IChBY3V0ZSBISVYgSW5mZWN0aW9uKS5tZA
question_type: prevention
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

B형간염 백신 3회 접종을 한 의료인이 HBsAg 양성 환자에게 사용한 바늘에 찔렸다. 이전 접종 후 항체를 확인한 기록이 없고, 이번 노출 직후 항-HBs는 10mIU/mL 미만이다. 적절한 노출 후 처치는?

## 선택지

A. B형간염 면역글로불린 1회 투여와 백신 재접종 시리즈 시작
B. 면역글로불린 2회만 투여하고 백신은 다시 접종하지 않는다
C. 백신만 1회 추가하고 면역글로불린은 투여하지 않는다
D. 접종 3회를 했으므로 추가 조치가 필요 없다

## 해설


첫 접종 시리즈 뒤 면역반응이 확인되지 않았고 항체가 보호역치 미만이며 노출원이 양성이면 면역글로불린을 투여하고 두 번째 접종 시리즈를 시작한다. 과거 보호 항체가 확인된 의료인과는 처치가 다르다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004371 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 한 번 접종 시리즈 완료 후 반응 미확인·노출시 anti-HBs 음성의 HBIG+재접종 D 유지; 과거 확인 반응자와 구분.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/hepatitis-b/hcp/infection-control/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004371
- https://www.cdc.gov/hepatitis-b/hcp/infection-control/table-1.html
- https://www.kdca.go.kr/bbs/kdca/55/304417/download.do
