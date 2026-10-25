---
type: qbank
schema_version: 1
id: medqa-us-train-004018
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b19f5936247e269c0de5ba3afaee3ddbc6e8ebdfd4f05035f69aa51421453099
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "다계통위축증"
  - "파킨슨증"
  - "신경교 세포질 봉입체"
  - "multiple system atrophy"
question_type: 임상증례 객관식
related_disease_slugs: []
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MZXZvZG9wYS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

59세 환자가 8년 전 전신 경직 증가, 움직임 시작의 어려움, 점점 심해지는 소자증을 호소하며 가정의를 방문했다. 평가 후 파킨슨병이 의심되어 레보도파를 시작했으나 결국 증상은 호전되지 않았다. 이후 8년 동안 균형 악화, 기립성 저혈압, 요실금, 발기부전이 발생했다. 운동 증상으로 인한 장애가 증가하면서 상태가 계속 악화되었고, 처음 진료받은 지 8년 후 67세에 사망했다. 가족이 부검을 요청했다. 뇌 조직 부검에서 예상되는 소견은 무엇인가?

## 선택지

A. 성상세포증과 미상핵 위축
B. 신경교 세포질 봉입체
C. 둥근 세포내 타우 단백질 응집체
D. 뇌실주위 백질 반점

## 해설

레보도파에 반응이 나쁜 파킨슨증, 균형장애와 심한 기립성 저혈압·요실금·발기부전은 다계통위축증(MSA)을 시사한다. 특징적 병리는 주로 희소돌기아교세포의 α-시누클레인 함유 신경교세포질 봉입체(B)다. 전형적 파킨슨병의 루이소체는 주로 신경세포 내 봉입체로, MSA의 신경교세포질 봉입체와 같은 말이 아니다. 타우 응집체나 다발성경화증의 백질 반점도 이 경과를 설명하지 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 레보도파 반응이 나쁜 파킨슨증과 뚜렷한 자율신경장애는 MSA인데 이를 전형적 파킨슨병으로 잘못 설명했다. 신경교세포질 봉입체 B와 신경세포 루이소체를 구별하는 해설로 교체했다.
- 공식/학회 근거: https://www.medlineplus.gov/genetics/condition/multiple-system-atrophy/
- 공식/학회 근거: https://pubmed.ncbi.nlm.nih.gov/12490094/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004018
