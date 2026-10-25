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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbWl0cmlwdHlsaW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG9uYXplcGFtLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9TZXJ0cmFsaW5lLm1k
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvRmx1bWF6ZW5pbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

33세 노숙인 남성이 의식변화로 응급실에 왔다. 다약물 남용 병력이 있고 세르트랄린, 클로나제팜, 아미트립틸린을 복용한다. 혈압은 117/68 mmHg, 맥박은 분당 80회, 호흡수는 분당 10회, 실내 공기 산소포화도는 98%이다. 졸려 보이며 동공은 정상 크기이고 심전도도 정상이다. 가장 적절한 치료는?

## 선택지

A. 플루마제닐
B. 포메피졸
C. 관찰
D. 중탄산나트륨

## 해설

클로나제팜과 아미트립틸린을 복용하는 환자의 졸림에서는 혼합 중독과 약물 의존 가능성을 고려한다. 현재 심전도와 순환이 유지되는 출제 조건에서 감시·지지 치료(C)가 적절하며, 플루마제닐은 금단·삼환계 항우울제 관련 발작을 유발할 수 있어 경험적으로 투여하지 않는다. 호흡수가 분당 10회이므로 산소화뿐 아니라 실제 환기와 기도 보호 능력을 지속 확인해야 한다. 관찰은 방치나 즉시 퇴원을 의미하지 않으며 상태에 따라 환기 보조가 필요하다. 새로운 QRS 연장이나 저혈압이 나타나면 중탄산 등 치료를 다시 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 안정된 순환·산소화 조건의 감시와 지지 치료 C를 유지하고 한국어에서 빠진 RR 10을 복원한다. 관찰은 호흡 억제를 방치한다는 뜻이 아님을 명시한다.
- 공식/학회 근거: https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=93b8ae30-aafb-4808-879e-dffe5194fdf6&type=display

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000711
