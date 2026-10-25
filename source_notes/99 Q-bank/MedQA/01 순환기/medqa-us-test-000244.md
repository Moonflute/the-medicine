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

61세 남성이 로수바스타틴 40 mg을 시작한 지 8주 뒤 다리 근육통과 전신 쇠약을 호소했다. 사지 관절운동 범위는 정상이고 혈압 126/84 mmHg, 맥박 74회/분이다. 약을 중단하고 2주 뒤 근육 증상은 소실되었다. 기존 로수바스타틴과 근육 증상의 연관성 및 더 낮은 용량의 내약성을 재평가하려는 경우 가장 적절한 접근은?

## 선택지

A. 로수바스타틴을 더 낮은 용량으로 다시 시작한다
B. 페노피브레이트를 시작한다
C. 다른 스타틴을 시작한다
D. 어유를 시작한다

## 해설

증상이 중단 후 사라졌다면 횡문근융해 등 재투여 금기가 없는지 확인한 후, 같은 statin을 낮은 용량으로 재투여해 증상 재발과 내약성을 평가할 수 있다. 다른 statin으로 바꾸는 것도 가능한 치료 전략이지만, 이 문항은 기존 약물의 감량 재투여 평가를 묻는다. 한 번의 근육통만으로 모든 statin을 영구 중단하거나 피브레이트·어유를 동등한 LDL 저하 대체약으로 취급하지 않는다.

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
