---
type: qbank
schema_version: 1
id: medqa-us-train-004084
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9008582f7b381821c87756f38ac68d18af436f852753a34aec03804ebf3c27f9
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "태아 운동 감소"
  - "태반조기박리 감별"
  - "태아 심박동"
question_type: investigation
related_disease_slugs:
  - MTIg7IKw6rO8L-2DnOuwmOyhsOq4sOuwleumrCAoUGxhY2VudGFsIEFicnVwdGlvbikubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvTWlzb3Byb3N0b2wubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 30주 산모가 어제부터 태동이 뚜렷이 줄었다고 한다. 출혈이나 통증은 없고 휴대용 도플러로 태아 심박이 확인됐다. 급성 태아 상태를 평가할 다음 검사는?

## 선택지

A. 태아 심박을 한 번 더 듣고 검사 종료
B. 정규 산전 방문까지 집에서만 관찰
C. 양수천자로 염색체검사
D. 태아심박동 모니터링을 통한 비수축검사

## 해설

태동이 줄었을 때 심박을 한 번 확인하는 것만으로 태아 안녕을 평가할 수 없다. 태아심박동 감시를 시행하고, 결과가 비정상이거나 태동 감소가 지속되면 추가 초음파 평가를 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 태아 심박동 우선 확인 A 유지. 도플러만으로 모든 태아 안녕을 판단한다는 해석을 방지.
- https://www.acog.org/womens-health/faqs/special-tests-for-monitoring-fetal-well-being

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004084
- https://doi.org/10.1111/1471-0528.70198
