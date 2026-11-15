---
type: qbank
schema_version: 1
id: medqa-us-train-009331
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4e6072d0f8309ebfddd7ce9726fe76dbe71338803fc7c9c10a00d6fc854badf5
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "deviated nasal septum"
  - "비중격 만곡"
  - "deep sedation"
question_type: management
related_disease_slugs: []
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
related_drug_slugs:
  - ZHJ1ZzoxNCDqt7zqs6jqsqnCt-2GteymncK366eI7LeoL1Byb3BvZm9sLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 환자에게 오랫동안 한쪽 코막힘이 있다. 비강 진찰에서 증상 쪽을 막는 뚜렷한 비중격 만곡이 보인다. 비염에 대한 비수술 치료 뒤에도 수면과 활동이 계속 불편하다. 다음 조치는?

## 선택지

A. 비강 충혈제거제를 매일 장기 사용한다
B. 지속 감염 소견이 없어도 항생제를 반복한다
C. 비중격교정술의 이익과 위험을 이비인후과에서 상의한다
D. 만곡은 치료할 수 없으므로 치료를 종료한다

## 해설

증상과 구조적 비중격 만곡이 일치하고 비수술 치료 뒤에도 생활에 지장이 있으면 비중격교정술을 검토할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 깊은 진정은 기도 처치가 필요 없다는 위험한 해설을 ASA 정의에 따라 교정.
- 공식/학회 근거: https://www.asahq.org/standards-and-practice-parameters/statement-on-continuum-of-depth-of-sedation-definition-of-general-anesthesia-and-levels-of-sedation-analgesia

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009331
- https://www.bmj.com/content/383/bmj-2023-075445
