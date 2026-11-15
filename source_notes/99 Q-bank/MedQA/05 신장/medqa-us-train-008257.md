---
type: qbank
schema_version: 1
id: medqa-us-train-008257
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c3905376a23267b2d1fa51282a24afee5c4448ca894166319b592bee8db29d70
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "deep vein thrombosis"
  - "unfractionated heparin"
  - "chronic kidney disease"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIChEZWVwIFZlaW4gVGhyb21ib3NpcykubWQ
  - MDUg7Iug7J6lL-unjOyEsSDsvantjKXrs5EgKENLRCkgKENocm9uaWMgS2lkbmV5IERpc2Vhc2UgKENLRCkpLm1k
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIOuwjyDtj5Dsg4nsoITspp0gKERlZXAgVmVpbiBUaHJvbWJvc2lzIGFuZCBQdWxtb25hcnkgRW1ib2xpc20pLm1k
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9Fbm94YXBhcmluLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
curation_status: "revised"
curation_reason: "혈소판 감소를 heparin의 바람직한 약효로 설명한 오류를 4Ts 위험 판단으로 교정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

56세 남성이 근위부 심부정맥혈전증으로 비분획 헤파린을 투여 중이다. 최근 100일 동안 헤파린을 맞은 적은 없다. 치료 2일째 혈소판이 23만에서 17만/μL로 낮아졌고 새 혈전이나 피부괴사는 없다. 4Ts 점수는 낮다. 헤파린 관련 조치는?

## 선택지

A. 헤파린을 중단하고 비헤파린 항응고제로 즉시 교체한다
B. 헤파린을 유지하며 혈소판을 추적한다
C. 모든 항응고를 중단한다
D. 혈소판이 줄었다는 이유로 바로 수혈한다

## 해설

30% 미만의 초기 감소와 새로운 혈전이 없는 경우 헤파린 유발 혈소판감소증의 사전 확률이 낮다. 4Ts가 낮으면 일반적으로 헤파린을 유지하고 새로운 소견이 생기면 다시 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008257
- https://doi.org/10.1182/bloodadvances.2018024489

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 혈소판 감소를 heparin의 바람직한 약효로 설명한 오류를 4Ts 위험 판단으로 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6258919/
