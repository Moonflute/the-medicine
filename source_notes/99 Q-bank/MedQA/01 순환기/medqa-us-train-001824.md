---
type: qbank
schema_version: 1
id: medqa-us-train-001824
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c5ea7fe4b746373587a1508374d5cc4d5fa49a7d388ec576ba8861e1dcb08589
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "stable angina"
  - "beta blocker"
  - "secondary prevention"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yViOyglSDtmJHsi6zspp0gKFN0YWJsZSBBbmdpbmEpLm1k
question_type: management
difficulty: simple
answer: "B"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTml0cm9nbHljZXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUmFub2xhemluZS5tZA
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 동등하게 가능한 BB·CCB 선택지를 통합하여 복수정답 교정."
curation_status: "revised"
curation_reason: "동등하게 가능한 BB·CCB 선택지를 통합하여 복수정답 교정."
curation_reviewed_at: "2026-10-25"
wrong_notes_review_status: "reviewed"
curation_disposition: "selected"
---

# MedQA US 임상문제

## 문제

73세 남성이 운동 시 발생하는 흉통으로 외래에 내원했다. 몇 분간 쉬면 보통 흉통이 호전된다. 현재 aspirin 81 mg을 매일 복용한다. 혈압 127/85 mm Hg, 심박수 75/min이며 심음은 규칙적이고 양측 폐음은 깨끗하다. 다음 중 추가해야 할 약물요법은 무엇인가?

## 선택지

A. 아스피린만 유지하고 흉통 치료와 지질 치료는 하지 않는다
B. 베타차단제 또는 칼슘통로차단제 중 적합한 약제와 스타틴을 매일 사용하고, 필요 시 설하 니트로글리세린을 사용한다
C. 메토프롤롤과 라놀라진만 사용하고 스타틴은 사용하지 않는다
D. 장기 예방약 없이 필요 시 설하 니트로글리세린만 사용한다

## 해설

노력 시 발생하고 휴식으로 호전되는 흉통은 안정형 협심증을 시사한다. 증상 조절에는 beta blocker 또는 calcium channel blocker를 환자 상태에 맞춰 선택할 수 있고, statin은 죽상경화성 위험 감소에 사용한다. 설하 nitroglycerin은 급성 증상 완화에 사용한다. 최근 MI나 좌심실 기능저하 등 조건 없이 metoprolol만이 amlodipine보다 우월하다고 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 동등하게 가능한 BB·CCB 선택지를 통합하여 복수정답 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.jacc.org/doi/10.1016/j.jacc.2023.04.003

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001824

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
