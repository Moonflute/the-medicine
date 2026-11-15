---
type: qbank
schema_version: 1
id: medqa-us-validation-001194
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:71818c7b714c7000ce6afbe9248c732fef10af44b914e211a9578404de8e3812
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "타목시펜"
  - "소엽상피내암"
  - "자궁내막암"
related_disease_slugs:
  - MTMg67aA7J246rO8L-yGjOyXvSDsg4HtlLzrgrTslZQgKExvYnVsYXIgQ2FyY2lub21hIEluIFNpdHUpLm1k
  - MTMg67aA7J246rO8L-yekOq2gSDrgrTrp4nslZQgKEVuZG9tZXRyaWFsIENhbmNlcikubWQ
question_type: investigation
difficulty: complex
answer: A
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
  - ZHJ1ZzoxMCDsooXslpEvVGFtb3hpZmVuLm1k
---

# MedQA US 임상문제

## 문제

62세 여성이 유방암 보조치료로 타목시펜을 복용하던 중 폐경 후 질출혈이 생겼다. 질·자궁경부 진찰에서 출혈 원인이 보이지 않는다. 자궁내막을 평가하기 위한 다음 조치는?

## 선택지

A. 자궁내막 조직검사
B. 자궁경부 세포검사만 시행
C. 타목시펜을 중단하고 출혈이 멈추면 검사 생략
D. 증상이 없어질 때까지 6개월 관찰

## 해설


타목시펜 복용 중 발생한 폐경 후 출혈은 자궁내막 병변 여부를 평가해야 한다. 증상이 없는 복용자에게 자궁내막 조직검사를 정기적으로 시행하라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001194 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Tamoxifen의 자궁내막 부분 작용제 효과와 자궁내막암 C의 연관을 원문 대조하여 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001194
- https://pubmed.ncbi.nlm.nih.gov/24848920/
