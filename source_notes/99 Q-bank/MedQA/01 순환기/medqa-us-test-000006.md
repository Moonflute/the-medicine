---
type: qbank
schema_version: 1
id: medqa-us-test-000006
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:0745b7c5a0d89be222cc6dced6303a78f76eab282a0a9209d70a6444d2fd109c
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "코카인 관련 흉통"
  - "교감신경 항진"
  - "급성관상동맥증후군"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDqtIDsg4Hrj5nrp6Ug7Kad7ZuE6rWwIChBQ1MpLm1k
question_type: management
difficulty: simple
answer: "D"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRGlsdGlhemVtLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGFiZXRhbG9sLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 같은 코카인 노출 흉통 사례와 초기 처치 목표를 유지하되, 부적절한 '안심만' 정답 선택지를 즉시 ACS 평가·감시로 교정했다. 진단 전 약제만 고르는 잘못된 학습을 피한다."
curation_status: "revised"
curation_reason: "같은 코카인 노출 흉통 사례와 초기 처치 목표를 유지하되, 부적절한 '안심만' 정답 선택지를 즉시 ACS 평가·감시로 교정했다. 진단 전 약제만 고르는 잘못된 학습을 피한다."
curation_reviewed_at: "2026-10-25"
wrong_notes_review_status: "reviewed"
curation_disposition: "selected"
---

# MedQA US 임상문제

## 문제

39세 남성이 30분 전 술집에서 시작된 점점 심해지는 흉통과 오심으로 응급실에 내원했다. 통증은 심와부로 방사된다. 치료받지 않은 고혈압이 5년간 있었고, 5년 동안 매일 담배 한 갑을 피웠으며 응급실 방문 2주 전부터 코카인을 남용하기 시작했다. 땀을 흘리고 극심한 고통을 보인다. 다음 중 초기 처치로 가장 적절한 것은?

## 선택지

A. 딜티아젬만 투여한다
B. 라베타롤만 투여한다
C. 프로프라놀롤만 투여한다
D. 심전도 감시를 시작하고 즉시 12유도 심전도와 심장 트로포닌으로 급성 관상동맥증후군을 평가한다

## 해설

최근 코카인 사용이 있어도 심한 흉통·발한을 단순 불안으로 취급해서는 안 된다. 우선 활력과 심전도를 감시하면서 신속한 12유도 심전도 및 트로포닌 평가로 ACS 여부와 후속 치료를 결정한다. 초기 검사만으로 배제되지 않으면 연속 평가가 필요하다. 자료 없이 특정 심혈관 약제를 단독 투여하거나 안심만 시키는 것은 적절한 초기 접근이 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 같은 코카인 노출 흉통 사례와 초기 처치 목표를 유지하되, 부적절한 '안심만' 정답 선택지를 즉시 ACS 평가·감시로 교정했다. 진단 전 약제만 고르는 잘못된 학습을 피한다.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.jacc.org/doi/10.1016/j.jacc.2024.11.009

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000006

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
