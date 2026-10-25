---
type: qbank
schema_version: 1
id: medqa-us-train-009536
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:54d1352388ac8ddd15d25455939e0beaa3961eaf657943bbb32ebcddf780c559
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "normal pressure hydrocephalus"
  - "정상압수두증"
  - "ventriculoperitoneal shunt"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_soJXsg4HslZUg7IiY65GQ7KadIChOb3JtYWwgcHJlc3N1cmUgaHlkcm9jZXBoYWx1cykubWQ
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTG9zYXJ0YW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

휠체어를 탄 68세 여성이 남편과 함께 내원했다. 12개월 동안 걷기와 균형 유지가 점점 어려워졌고 천천히 걷고 방향 전환이 어렵고 발이 ‘바닥에 붙은’ 것 같다고 한다. 이름과 최근 사건의 세부사항을 기억하기 어렵다. 떨림, 망상, 환각, 수면장애, 두부 외상은 없다. 고혈압과 요실금으로 로사르탄과 옥시부티닌을 복용한다. 보행은 느리고 보폭이 짧으며 발을 잘 들지 못한다. 두부 CT가 제시되었고 요추천자로 뇌척수액 50 mL를 제거하자 3일간 보행이 일시적으로 호전되었다. 다음 처치는 무엇인가?

## 선택지

A. 아세타졸아미드
B. 내시경적 제3뇌실개창술
C. 경막외 혈액봉합술
D. 뇌실복강 단락술

## 해설

보행장애·인지저하·요실금과 CSF 제거 후 일시적 보행 개선은 정상압수두증에서 션트 반응 가능성을 지지한다. 보기 중 뇌실복강 단락술(D)을 평가하는 것이 적절하다. 경막외 혈액봉합술은 주로 뇌척수액 누출에 의한 저압성 두통 치료이며 출혈성 수두증 치료가 아니다. Acetazolamide는 IIH 등에서 쓰이지만 NPH의 장기 확정치료를 대신하지 않는다. 누락된 CT의 구체적 모양을 관찰했다고 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. NPH 션트 D 유지. 혈액봉합술을 출혈성 수두증 치료로 설명한 오류와 acetazolamide 적응증 오류 교정.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC7905302/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009536
