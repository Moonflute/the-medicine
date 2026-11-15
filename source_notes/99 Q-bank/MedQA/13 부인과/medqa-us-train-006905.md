---
type: qbank
schema_version: 1
id: medqa-us-train-006905
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c6ae95982f87e1ca0b2987566b4d86e80e72aa21107e48d052dcb5aa6b0ad80c
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "클라미디아 자궁경부염"
  - "성교 후 출혈"
  - "자궁경부 운동 압통"
question_type: investigation
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geqyveu2gOyVlCAoQ2VydmljYWwgQ2FuY2VyKS5tZA
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

새 성 파트너가 있는 24세 여성이 성교 후 소량 출혈을 보인다. 자궁경부에 점액고름이 있고 면봉 접촉에 쉽게 출혈한다. 자궁경부 이동통과 자궁·부속기 압통은 없다. 원인 감염을 확인할 검사는?

## 선택지

A. 질 검체에서 임균·클라미디아 핵산증폭검사
B. 자궁경부 세포검사만 시행
C. 혈청 클라미디아 IgG만 측정
D. 일반 소변배양만 시행

## 해설


점액고름과 접촉 출혈은 자궁경부염에 합당하다. 임균과 클라미디아는 진찰만으로 구분하기 어려워 질 또는 자궁경관 검체의 핵산증폭검사로 확인한다. 골반염 징후도 함께 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: nulligravid를 미혼으로 번역한 오류를 임신력 없음으로 교정했다. 감염 진단 정답은 유지한다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006905
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10925736/
