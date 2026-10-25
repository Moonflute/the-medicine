---
type: qbank
schema_version: 1
id: medqa-us-train-006231
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4347b990573f10de2fd12195b71acbafee903f02be50b01f99389b9b4375c6c2
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "지루각화증"
  - "양성 피부 병변"
  - "악성 흑색종 감별"
question_type: management
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-yVheyEsSDtnZHsg4nsooUgKE1hbGlnbmFudCBNZWxhbm9tYSkubWQ
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 여성이 얼굴에 생긴 경계가 뚜렷한 어둡고 둥근 피부 병변으로 피부과를 방문했다. 3~4년 전부터 있었고 통증, 가려움 또는 출혈은 없지만 친구가 흑색종을 진단받아 악성 가능성을 걱정한다. 등에 붙어 있는 것처럼 보이는 사마귀성 병변과 얼굴의 둥근 병변이 있고 피부경검사에서 다수의 개방면포, 비립종 낭종 및 뇌회상 패턴이 보인다. 다음 중 가장 적절한 관리의 다음 단계는 무엇인가?

## 선택지

A. 절제 생검
B. 안심시키고 일반적인 권고 제공
C. 면도 절제
D. 국소 플루오로우라실

## 해설

수년간 존재한 stuck-on 사마귀성 병변과 피부경의 면포 유사 개구부·비립종 유사 낭종·뇌회상 패턴은 지루각화증을 지지한다. 진단이 명확하고 증상·의심 소견이 없는 이 상황에서는 안심과 일반 권고(B)가 적절하다. 이 사례는 조직검사 결과가 아니라 피부경검사 소견을 제시한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 지루각화증 B의 dermoscopy를 조직검사로 바꿔 쓴 오류를 교정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006231
