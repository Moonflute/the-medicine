---
type: qbank
schema_version: 1
id: medqa-us-train-004399
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d71115d0240b1686bea24cdea1d4357c829d39514e7d557c751ac13e44fa6300
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "척추 경막외 농양"
  - "정맥주사 약물 사용"
  - "황색포도상구균 감염"
question_type: management
related_disease_slugs:
  - MDgg6rCQ7Je8L-qzqOyImOyXvCAoT3N0ZW9teWVsaXRpcykubWQ
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2xvcGlkb2dyZWwubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMiDtmLjtnaHquLAvTW9udGVsdWthc3QubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0FsbG9wdXJpbm9sLm1k
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 환자가 발열과 심한 흉추 중앙 통증으로 왔다. 새로 다리 힘이 떨어지고 MRI에서 척수를 압박하는 경막외 농양이 보인다. 다음 처치는?

## 선택지

A. 경구 항균제를 주고 며칠 뒤 외래에서 진찰한다
B. 혈액배양을 지체 없이 채취하고 정맥 항균제와 응급 척추 수술 평가를 시작한다
C. 신경 결손이 진행해도 조직검사 결과부터 기다린다
D. 진통제와 보조기로 증상을 관찰한다

## 해설


척추 경막외 농양이 신경을 압박해 근력이 떨어지면 응급상황이다. 배양을 얻되 항균제와 감압 평가를 늦추지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. MRI로 기술된 경막외 농양과 IVDU 위험인자 C는 유지한다. 원문의 헤모글로빈14.5 mg/dL 단위 오기는 정상적인 임상 단위 g/dL로 명시 교정했다.
- 영문 표의 Hemoglobin 14.5 mg/dL는 단위 오기이며 수치14.5는 보존하고 g/dL로 바로잡았다. 다른 핵심 임상수치를 새로 만들지 않았다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004399
- https://www.idsociety.org/practice-guideline/vertebral-osteomyelitis/
