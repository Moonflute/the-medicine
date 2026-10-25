---
type: qbank
schema_version: 1
id: medqa-us-train-006648
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:19816be64c43361508df03a9b9c515e35124162cd474896fc3d17c6d9350a755
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "투석 중 저혈압"
  - "초여과"
  - "혈액투석 합병증"
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
question_type: management
difficulty: complex
answer: "A"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQmlzb3Byb2xvbC5tZA
curation_status: "revised"
curation_reason: "초여과 중단이 핵심이며 혈류량 감소를 일률 필수로 가르치지 않도록 A의 부수 조작을 수정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

혈액투석실에 호출되었다. 환자는 고혈압, 고콜레스테롤혈증 및 제2형 당뇨병으로 인한 말기 신장질환이 있어 1년 동안 혈액투석을 받아온 61세 남성이다. 현재 투석이 거의 끝날 무렵 간호사가 평소 142/90 mm Hg였던 혈압이 88/60 mm Hg로 떨어진 것을 발견했다. 호흡곤란이나 흉통은 없다. 오늘 아침 병원에 오기 전에 비소프롤롤, 메트포르민 및 인슐린을 복용했다. 진찰에서 혈압은 92/60 mm Hg, 심박수는 분당 119회이고 흉부 청진은 정상이다. 다음 중 가장 적절한 처치는?

## 선택지

A. 초여과를 중단하고 혈압·순환 상태를 즉시 재평가
B. 0.9% 생리식염수 1L 주입
C. 정맥 칼슘 글루콘산 투여
D. 농축 적혈구 1단위 수혈

## 해설

투석 말기 저혈압에서는 우선 초여과를 중단하고 순환 상태와 원인을 평가한다. 다리 올리기와 상태에 맞는 소량 saline 보충 등이 필요할 수 있으며 일률적인 1L 투여나 수혈은 제시된 자료로 정당화되지 않는다. 혈류량 감소만으로 저혈압이 반드시 회복된다고 설명하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006648

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 초여과 중단이 핵심이며 혈류량 감소를 일률 필수로 가르치지 않도록 A의 부수 조작을 수정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6798406/
