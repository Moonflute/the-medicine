---
type: qbank
schema_version: 1
id: medqa-us-test-000244
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:38ac73c02d1b1d6ee4bc4379c73ba1b23e82125d100654f733ac5a7f916f3612
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "스타틴 유발 근육병증"
  - "고지질혈증"
  - "LDL 콜레스테롤"
  - "statin-induced myopathy"
related_disease_slugs: []
question_type: management
difficulty: standard
answer: "A"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRmVub2ZpYnJhdGUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUm9zdXZhc3RhdGluLm1k
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 약물 중단 후 호전된 사례는 유지하고, 여러 LDL 저하 대책 중 무조건 하나가 우월하다는 질문을 기존 statin과 증상의 연관성을 재평가하는 재투여 단계로 명료화했다."
curation_status: "revised"
curation_reason: "약물 중단 후 호전된 사례는 유지하고, 여러 LDL 저하 대책 중 무조건 하나가 우월하다는 질문을 기존 statin과 증상의 연관성을 재평가하는 재투여 단계로 명료화했다."
curation_reviewed_at: "2026-10-25"
wrong_notes_review_status: "reviewed"
curation_disposition: "selected"
---

# MedQA US 임상문제

## 문제

61세 남성이 로수바스타틴을 시작한 뒤 양쪽 허벅지 근육통이 생겼다. CK와 신장기능은 정상이며 약을 중단하자 증상이 사라졌다. LDL 저하 치료는 계속 필요하다. 스타틴 내약성을 다시 확인하는 적절한 방법은?

## 선택지

A. 더 낮은 용량 또는 다른 스타틴으로 재시도한다
B. 같은 약을 이전보다 더 높은 용량으로 바로 시작한다
C. 어떤 스타틴도 다시 쓰지 않고 추적을 끝낸다
D. 피브레이트가 스타틴과 동등하므로 일률적으로 교체한다

## 해설

중증 근손상 없이 근육 증상이 약 중단으로 사라지면, 상호작용과 다른 원인을 확인한 뒤 낮은 용량 또는 다른 스타틴으로 재시도할 수 있다. 한 번의 근육통만으로 스타틴 전체를 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 약물 중단 후 호전된 사례는 유지하고, 여러 LDL 저하 대책 중 무조건 하나가 우월하다는 질문을 기존 statin과 증상의 연관성을 재평가하는 재투여 단계로 명료화했다.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://tools.acc.org/LDL/StatinIntolerance/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000244

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
