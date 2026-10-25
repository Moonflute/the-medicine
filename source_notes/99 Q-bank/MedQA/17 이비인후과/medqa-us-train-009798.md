---
type: qbank
schema_version: 1
id: medqa-us-train-009798
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fc701b209ba83d91e9da7c72591ef424c205c8b7e086aed91db60f0fd84f27a6
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "악성 외이도염"
  - "녹농균"
  - "유양돌기염"
question_type: management
related_disease_slugs:
  - MDgg6rCQ7Je8L-uFueuGjeq3oCAoUHNldWRvbW9uYXMgQWVydWdpbm9zYSkubWQ
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

제2형 당뇨병이 있는 66세 여성이 10일 동안 지속된 심한 우측 귀 통증과 분비물로 내원했다. 귀 통증은 갑자기 시작되었고 지속적이다. 일반의약품 귀약을 사용했지만 증상이 악화되었다. 유일한 약물은 불규칙하게 사용하는 인슐린이다. 체온 39°C, 맥박 분당 108회, 혈압 130/90 mmHg이다. 우측 귀에 귓바퀴와 귓불의 부종, 악취 나는 화농성 분비물, 접촉 시 압통이 있다. 후이개 림프절병증과 우측 경도의 난청이 있다. 이경검사에서 외이도가 부어 있고 육아조직이 보인다. 혈색소 13.3 g/dL, HbA1c 12.2%, 백혈구 18,300/mm³(분절 호중구 76%, 호산구 1%, 림프구 20%, 단핵구 3%), 혈청 포도당 212 mg/dL, 크레아티닌 1.7 mg/dL이다. 두부 CT에서 외이도 연조직의 심한 비후와 조영증강, 유양돌기의 반점상 파괴가 보인다. 귀 분비물 배양 결과는 아직 나오지 않았다. 다음 중 가장 적절한 약물치료는?

## 선택지

A. 경구 클라리트로마이신
B. 국소 클로트리마졸
C. 정맥주사 시프로플록사신
D. 정맥주사 트리메토프림-설파메톡사졸

## 해설

심한 이통과 이루, 외이도 육아조직, 혈당 조절 불량 및 인접 골 파괴는 괴사성 외이도염/두개저 골수염에 합당하다. 녹농균이 중요한 원인으로 선지 중 전신 항녹농균 작용을 갖는 C, 정맥 ciprofloxacin이 적절하다. 실제 치료는 배양과 감수성, 신기능, 중증도 및 약제 안전성을 고려해 ENT/감염내과와 조정하며 국소 항진균제만으로 치료할 상태가 아니다. 모든 유양돌기염이 녹농균성이라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 당뇨·외이도 육아조직·골 파괴의 괴사성 외이도염을 일반 유양돌기염/외이도 농양과 혼동하지 않도록 교정.
- 공식/학회 근거: https://www.rightdecisions.scot.nhs.uk/antimicrobial-prescribing-nhs-lothian/body-systems/ear-nose-throat-infections/necrotising-otitis-externa/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009798
