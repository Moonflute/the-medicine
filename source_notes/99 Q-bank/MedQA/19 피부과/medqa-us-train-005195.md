---
type: qbank
schema_version: 1
id: medqa-us-train-005195
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dc318578d993909545494e01fa6fe8c6a600b350bf6e035f07060f46300456c9
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "중등도-중증 판상 건선"
  - "건선성 관절염"
  - "메토트렉세이트"
question_type: management
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-qxtOyEoCAoUHNvcmlhc2lzKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0luZmxpeGltYWIubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

50세 여자가 1년 동안 있던 팔과 손의 발진이 최근 1주일간 급격히 악화되어 내원했다. 붉은 반점이 점점 커져 서혜부, 두피, 무릎으로 퍼졌고 은백색 인설성 판이 상지와 무릎, 서혜부, 두피의 10% 이상에 있다. 아침에 손발가락 원위관절이 붓고 최근 스트레스가 심했다. 다음 중 가장 적절한 처치는?

## 선택지

A. 피부 생검
B. 광선치료
C. 메토트렉세이트
D. 인플릭시맙

## 해설

체표면적 >10%의 전형적 건선과 3개월간 말초관절 증상은 전신치료·건선관절염 평가를 필요로 한다. Methotrexate(C)는 피부와 말초관절 질환을 함께 조절하는 합리적인 초기 csDMARD 선택이며 EULAR는 유의한 피부 침범에서 이를 선호한다. Infliximab 등 생물학제제도 유효한 치료이며 질환 양상·중증도·금기와 치료 목표에 따라 선택한다. 광선치료만으로 관절 질환을 치료할 수는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 광범위 건선·말초관절 증상의 MTX C를 유지하되 모든 중증 건선의 유일한 일차약으로 단정하지 않도록 한다.
- 공식/학회 근거: https://ard.bmj.com/content/83/6/706
- 공식/학회 근거: https://www.aad.org/member/clinical-quality/guidelines/psoriasis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005195
