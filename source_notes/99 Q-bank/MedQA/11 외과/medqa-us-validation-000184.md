---
type: qbank
schema_version: 1
id: medqa-us-validation-000184
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:dab7f064451ffa5e7ef1bdbfacecfa169c6702df8a84c3fe2a191ca718306c33
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "허혈성 대장염"
  - "대동맥류 수술 후 합병증"
  - "장간막 허혈"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tl4jtmIjshLEg64yA7J6l7Je8IChJc2NoZW1pYyBDb2xpdGlzKS5tZA
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

59세 남성이 갑작스러운 복통으로 응급실에 왔다. 며칠 전부터도 통증이 있었고 혈성 설사와 주관적 발열이 있다. 1년 전 치료받은 STEMI, 1주 전 복구한 복부대동맥류, COPD·천식·비만·고혈압·5년 전 뇌졸중·심방부정맥·당뇨병·변비·PTSD가 있다. 체온39°C, 혈압197/128 mmHg, 맥박135회/분, 호흡수22회/분, 실내 공기 산소포화도92%이다. 비만한 남성이 고통스러워하며 양측 천명·수축기 잡음, 양하지 함요부종·정맥울혈궤양이 있다. 복부 전반 압통은10/10으로 심하다. Hb14 g/dL, Hct42%, 백혈구15,500/mm³(정상 감별), 혈소판199,000/mm³이다. Na139, Cl100, K4.4, HCO3 22 mEq/L, BUN32 mg/dL, glucose189 mg/dL, creatinine1.9 mg/dL, calcium10.2 mg/dL, lactate4.5 mg/dL, AST12 U/L, ALT10 U/L이다. 다음 중 이 상태의 가장 가능성 높은 설명은?

## 선택지

A. 복부대동맥류 수술 합병증
B. 심방세동
C. 소장 폐색
D. 천공된 충수염

## 해설


AAA 복구술1주 후 복통·혈성 설사·발열은 수술 관련 결장 허혈(A)을 의심하게 한다. 저관류나 분지혈류 손상 등 여러 기전이 가능하며 심방부정맥에 따른 색전성 장간막허혈도 감별한다. 원문의 lactate는4.5 mg/dL로 기술되어 있어 이를 근거 없이 상승했다고 바꾸지 않는다. 영상·혈류와 임상 경과로 원인을 확인해야 하며 A만으로 장 손상 범위를 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000184 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Lactate4.5mg/dL를 상승으로 바꾼 오류를 원문 수치/단위로 복원하고 심방부정맥을 포함한 감별 맥락을 복원했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000184
