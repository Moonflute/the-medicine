---
type: qbank
schema_version: 1
id: medqa-us-test-000354
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:89c7f8ce16db60d34f2415b813ce5ab9f3128692190b4d4663fef5ffa2e4e5f1
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "재생불량성 빈혈"
  - "범혈구감소증"
  - "골수부전"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yerOyDneu2iOufieyEsSDruYjtmIggKEFBKSAoQXBsYXN0aWMgQW5lbWlhIChBQSkpLm1k
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
---

# MedQA US 임상문제

## 문제

피로와 잇몸 출혈이 있는 성인의 혈색소, 백혈구와 혈소판이 모두 감소했고 망상적혈구도 낮다. 말초도말에 모세포는 없고 비장은 커지지 않았다. 재생불량성 빈혈을 확인하고 다른 골수 질환을 감별할 검사는?

## 선택지

A. 혈청 트랜스페린 농도만 측정
B. 혈청 엽산 농도만 측정
C. 단순 복부 CT로 확진
D. 골수 흡인·생검으로 세포충실도와 이형성을 평가

## 해설


재생불량성 빈혈은 골수 세포충실도가 낮아지고 여러 혈구가 감소한다. 골수검사와 필요한 세포유전학 검사로 저세포성 골수형성이상종양과 다른 원인을 감별한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-test-000354`와 직접 대조했다.
- 판정: 범혈구감소·낮은 망상적혈구와 골수 생검 B 연결 유지. 영어 원문에도 있는 Hb mg/dL 단위 오류를 g/dL로 교정.
- 추가 주의: 원문의 Hb 8.7 mg/dL는 통상적인 혈색소 보고 단위와 맞지 않아 8.7 g/dL로 교정했다. 수치는 유지했다.
- 검수 범위: 내용·번역·해설 연결 검토(content-reviewed). 최신 치료·용량의 전면 근거 검증을 뜻하지 않는다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000354
- https://pubmed.ncbi.nlm.nih.gov/41920091/
