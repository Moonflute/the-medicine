---
type: qbank
schema_version: 1
id: medqa-us-train-004861
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:28d17ea7f7d488fd2f2ad96f23813baf033a730b4af19bbde81a1e5f90e4af29
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "람베르트-이튼 근무력 증후군"
  - "소세포폐암"
  - "전압개폐성 칼슘통로 자가항체"
question_type: diagnosis
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkCDshozshLjtj6zslZQgKFNtYWxsIENlbGwgQ2FyY2lub21hKS5tZA
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

소세포폐암이 있는 71세 환자가 계단을 오르기 힘들고 입이 마른다고 한다. 다리 근위부가 약하고 무릎반사가 낮지만, 다리에 잠깐 힘을 준 직후 반사가 커진다. 가장 가능성 높은 진단은?

## 선택지

A. 중증근무력증
B. 당뇨병성 원위 대칭 다발신경병증
C. 램버트–이튼 근무력증후군
D. 근위축성 측삭경화증

## 해설

근위부 위약, 자율신경 증상, 낮은 반사가 짧은 근수축 뒤 개선되는 양상은 램버트–이튼 증후군의 단서다. 소세포폐암이 중요한 연관 질환이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Lambert–Eaton의 활동 후 근력 악화라는 반대 설명을 반복 활동 후 일시적 호전으로 수정했다. presynaptic VGCC 항체와 B를 명확히 연결한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004861
- https://pubmed.ncbi.nlm.nih.gov/31191084/
