---
type: qbank
schema_version: 1
id: medqa-us-test-000049
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:cbe5d66c1550146f900fee39e50837a8965790b6d0b4b6be76e18f8ed8329d6b
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "사산"
  - "태아 사망"
  - "사산 원인 평가"
  - "Stillbirth"
related_disease_slugs:
  - MTIg7IKw6rO8L-2DnOuwmOyhsOq4sOuwleumrCAoUGxhY2VudGFsIEFicnVwdGlvbikubWQ
question_type: investigation
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 35주에 사산했다. 신생아 외관과 태반의 육안 소견만으로 원인을 알 수 없고 가족이 원인 평가를 원한다. 가장 적절한 평가 계획은?

## 선택지

A. 부모의 핵형검사만 시행한다
B. 태반·제대·태막 병리검사와 함께 태아 유전검사 및 부검을 제안한다
C. 겉보기 기형이 없으므로 영상과 조직검사는 하지 않는다
D. 모체 혈액의 태아 세포유리 DNA 검사만 시행한다

## 해설

사산의 원인을 찾으려면 태반·제대·태막의 조직 평가와 태아 유전검사, 동의를 얻은 부검을 함께 고려한다. 외관이 정상이어도 검사가 도움이 될 수 있으며 검사의 범위는 가족과 상의한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 미표시 문항 실제 검토. 사산 평가에서 유전검사가 1차가 아니라고 한 오류 삭제. B 유지하며 부검·태반병리·유전평가의 병행 명시.
- https://www.acog.org/clinical/clinical-guidance/obstetric-care-consensus/articles/2020/03/management-of-stillbirth

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000049
