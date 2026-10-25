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
question_type: management
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

임신 35주인 29세 초임부가 진통으로 입원했다. 중대한 질환 병력은 없고 임신도 순조로웠다. 임신 22주 초음파는 정상이었다. 입원 시 태아 도플러에서 심박동이 들리지 않았다. 초음파에서 양수 감소와 태동, 호흡운동, 심장 활동이 모두 없었다. 2,296g 남아를 출산했으나 생명의 징후가 없고 외형상 기형도 없었다. 태반은 특이사항이 없다. 다음 중 가장 적절한 처치는?

## 선택지

A. 양수의 핵형검사
B. 영아 부검 권고
C. 사진, X선, MRI 촬영
D. 부모 유전자검사 동의 획득

## 해설

사산 후에는 원인 규명을 위해 태아 부검을 제안하므로 B가 적합하다. 부검은 외관상 정상이어도 구조 이상과 감염 등의 정보를 제공할 수 있다. 동시에 태반·제대·태막의 육안 및 조직학적 평가와 태아 유전평가도 사산 평가의 핵심이다. 따라서 ‘핵형검사 등은 1차 평가에 사용되지 않는다’는 기존 문장은 틀리다. 분만 전 양수 유전검사가 유용할 수 있으나 이 사례는 이미 출산한 뒤이며, 부모 유전검사만으로 태아 부검을 대신할 수 없다. 부검을 원치 않는 경우 대체 영상·검사 옵션을 논의한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 미표시 문항 실제 검토. 사산 평가에서 유전검사가 1차가 아니라고 한 오류 삭제. B 유지하며 부검·태반병리·유전평가의 병행 명시.
- https://www.acog.org/clinical/clinical-guidance/obstetric-care-consensus/articles/2020/03/management-of-stillbirth

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000049
