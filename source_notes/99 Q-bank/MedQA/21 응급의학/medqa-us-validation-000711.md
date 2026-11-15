---
type: qbank
schema_version: 1
id: medqa-us-validation-000711
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:67a06637ec4bc90b8d1c3643dad1381fc31ac1c68f2d1906bc1e6912a5f5d7dd
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "벤조디아제핀 중독"
  - "삼환계 항우울제 복용"
  - "의식저하"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-uypOyhsOuUlOyVhOygnO2VgCDspJHrj4UgKEJlbnpvZGlhemVwaW5lIFBvaXNvbmluZykubWQ
difficulty: complex
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbWl0cmlwdHlsaW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG9uYXplcGFtLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9TZXJ0cmFsaW5lLm1k
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvRmx1bWF6ZW5pbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

클로나제팜을 장기간 복용하는 33세 환자가 원인 모를 의식 저하로 내원했다. 아미트립틸린 등 여러 약을 함께 복용했을 가능성이 있다. 감시와 기도·환기 보조를 하면서 경험적으로 투여하면 안 되는 약은?

## 선택지

A. 저혈당이 확인됐을 때 포도당
B. 플루마제닐
C. 아편유사제 동시 중독이 의심될 때 날록손
D. 저혈압이 발생했을 때 필요한 수액

## 해설

플루마제닐은 벤조디아제핀 의존 환자에서 급성 금단과 발작을 유발할 수 있다. 삼환계 항우울제 등 혼합 중독이 의심되는 경우에도 경험적으로 투여하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 안정된 순환·산소화 조건의 감시와 지지 치료 C를 유지하고 한국어에서 빠진 RR 10을 복원한다. 관찰은 호흡 억제를 방치한다는 뜻이 아님을 명시한다.
- 공식/학회 근거: https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=93b8ae30-aafb-4808-879e-dffe5194fdf6&type=display

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000711
- https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-and-pediatric-special-circumstances-of-resuscitation/
