---
type: qbank
schema_version: 1
id: medqa-us-test-000868
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:21797e685dc6e234b5a193893755ab87d25ccd33155b5cb60d9d23ff6f6ad0f4
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "심부정맥혈전증"
  - "항트롬빈 III 결핍"
  - "헤파린 저항성"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIChEZWVwIFZlaW4gVGhyb21ib3NpcykubWQ
question_type: monitoring
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
---

# MedQA US 임상문제

## 문제

급성 심부정맥혈전증으로 비분획 헤파린을 적정 체중 용량으로 투여 중이다. 주입 상태는 정상인데 aPTT는 낮고, 같은 시점 항-Xa 활성은 치료 범위다. 혈전은 악화하지 않았다. 헤파린 용량에 대한 적절한 판단은?

## 선택지

A. aPTT 수치만 보고 즉시 용량을 두 배로 늘린다
B. 검사 불일치만으로 선천성 항트롬빈 결핍을 확진한다
C. 항응고를 전면 중단한다
D. 항-Xa를 기준으로 용량을 평가하고 aPTT만 보고 증량하지 않는다

## 해설


급성기 인자 VIII·피브리노겐 증가 등으로 aPTT가 헤파린 효과를 작게 보일 수 있다. 적절한 항-Xa 결과가 치료 범위라면 aPTT만을 근거로 더 투여하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000868 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 젊은 가족성 혈전·UFH 반응 저하의 항트롬빈 의존 기전 A 유지. 실제 헤파린 투여량·anti-Xa 등 없이 확진이라는 의미는 아님.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000868
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11665620/
