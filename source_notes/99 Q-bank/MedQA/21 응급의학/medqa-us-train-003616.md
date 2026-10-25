---
type: qbank
schema_version: 1
id: medqa-us-train-003616
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:75aa5d994e4adb35b1cae8f88854ccc03caaf358e71e97a3cea7b0f5adf74975
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "orthostatic hypotension"
  - "postoperative blood loss"
  - "volume depletion"
  - "ACE inhibitor withholding"
question_type: management
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4sOumveyEsSDsoIDtmIjslZUgKE9ydGhvc3RhdGljIEh5cG90ZW5zaW9uKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTm9yZXBpbmVwaHJpbmUubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9GbHVkcm9jb3J0aXNvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

말초동맥질환으로 왼쪽 하지 무릎 위 절단술을 받은 70세 남성이 수술 24시간 후 쇠약과 어지럼증으로 내원했다. 제2형 당뇨병과 고혈압으로 메트포르민 및 리시노프릴을 복용한다. 체온은 38.2°C이고, 수술 중 출혈이 많았고 누운 자세에서 혈압 120/70 mmHg, 일어선 자세에서 90/65 mmHg로 떨어졌다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 정맥 수액을 투여하고 리시노프릴을 중단한다
B. 경구 플루드로코르티손을 투여한다
C. 정맥 노르에피네프린을 투여한다
D. 정맥 수액만 투여한다

## 해설

수술 중 출혈 후 기립성 혈압 하강은 체액량 부족을 시사한다. 보기 중 정맥수액과 lisinopril 일시 중단(A)이 적합하다. 빈혈·지속 출혈과 감염도 평가하며 적절한 수액/혈액제제와 용량을 선택하고 반응을 재평가한다. 임의로 ACE 억제제를 영구 중단하거나 체액량 평가 없이 vasopressor부터 시작하는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 원문 복용약·발열 누락을 복원. 체액 보충과 lisinopril 일시 중단 A 확인 및 출혈/감염 재평가 보완.
- 공식/학회 근거: https://www.nice.org.uk/guidance/cg174/chapter/Recommendations
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng148/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003616
