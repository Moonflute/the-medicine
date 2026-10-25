---
type: qbank
schema_version: 1
id: medqa-us-train-008269
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dad6457b768e65eb8eb221980ac5de111e382e6586039e7070434c7e7289ee52
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "systemic lupus erythematosus"
  - "pericardial effusion"
  - "electrical alternans"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yghOyLoCDtmY3rsJgg66Oo7ZG47IqkIChTeXN0ZW1pYyBMdXB1cyBFcnl0aGVtYXRvc3VzKS5tZA
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

49세 남자가 2주 동안 점점 심해지는 호흡곤란과 깊게 숨쉴 때 악화되는 흉통으로 내원했다. 2년 동안 손가락 관절 통증이 반복되었고 과거 심부정맥혈전증 치료를 받았다. 고혈압과 불안이 있어 에날라프릴, 세인트존스워트, 이부프로펜을 복용한다. 결막이 창백하고 양손 근위지절 및 중수지절 관절에 압통이 있으며 심음이 멀리서 들린다. ANA 1:320, 항-Sm-1 양성, 항-CCP 음성이고 흉부 X선이 제시되어 있다. 심전도에서 가장 가능성 높은 소견은?

## 선택지

A. QT 간격 연장
B. 깊은 Q파
C. 전기적 교대
D. S1Q3T3 양상

## 해설


전기적 교대는 큰 심낭액에 의해 심장이 움직일 때 전압이 교대로 변하는 현상으로, SLE와 심낭삼출에서 나타난다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008269 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: SLE를 시사하는 소견과 심음 감소에서 큰 심낭삼출의 electrical alternans C 기전이 일치함을 확인. 누락X선의 구체 소견은 해설에 만들어 넣지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008269
