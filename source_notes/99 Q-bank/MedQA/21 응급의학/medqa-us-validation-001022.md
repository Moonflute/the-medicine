---
type: qbank
schema_version: 1
id: medqa-us-validation-001022
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:a43351a694147e396ed5e1426e0f7f7e8022cb0860c4c506691d521fb9481fdd
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "플루마제닐"
  - "벤조디아제핀 금단"
  - "경련"
  - "Benzodiazepine withdrawal"
question_type: mechanism
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GZW50YW55bC5tZA
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvRmx1bWF6ZW5pbC5tZA
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTmFsb3hvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

46세 여성이 호흡억제로 응급실에 왔다. 소변 독성검사에서 알코올, 펜타닐과 벤조디아제핀이 양성이어서 날록손과 플루마제닐을 정맥 투여했다. 2시간 후 1분간 전신 강직간대 발작이 발생했고 졸리고 발한이 있으며 장소와 시간 지남력이 떨어져 있다. 왼쪽 관자놀이에 혈종과 양손 떨림이 있다. 발작의 가장 가능성 높은 원인은?

## 선택지

A. 저혈당
B. 벤조디아제핀 금단
C. 알코올 금단
D. 경막하 출혈

## 해설

벤조디아제핀 효과를 플루마제닐로 급격히 차단하면 의존 환자에서 금단과 발작이 유발될 수 있어 B가 출제상 가장 잘 부합한다. 환자가 스스로 약을 끊었다는 병력이 제시된 것은 아니며, 해독제 투여가 이 역전을 촉발한 것이다. 혼합 중독에서 플루마제닐을 일률적으로 사용하는 것은 위험하다. 실제로는 혈당·전해질과 다른 금단 원인도 평가하고 관자놀이 혈종이 있어 두부외상·출혈 감별도 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 단순 복약 중단이 아니라 플루마제닐이 촉발한 벤조디아제핀 금단·발작 기전 B를 설명한다. 두부외상 등 실제 감별도 배제하지 않는다.
- 공식/학회 근거: https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=93b8ae30-aafb-4808-879e-dffe5194fdf6&type=display

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001022
