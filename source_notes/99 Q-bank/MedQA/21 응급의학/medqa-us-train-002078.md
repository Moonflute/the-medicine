---
type: qbank
schema_version: 1
id: medqa-us-train-002078
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9486ffae0752a28ed8ffb52347e8c24ffe97bbe77739287e33021ffe94c088a8
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "hemorrhagic shock"
  - "hypovolemia"
  - "urine output"
  - "base deficit"
question_type: investigation
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

56세 남성이 사다리에서 16피트 높이로 떨어진 후 응급실에 이송되었다. 양쪽 다리와 오른쪽 팔에 심한 통증이 있다. 창백하고 식은땀을 흘린다. 체온 37.5°C, 맥박 120회/분으로 약하며 호흡 26회/분, 혈압 80/50 mmHg이다. 눈은 뜨고 통증에 반응해 사지를 움츠리며 이해할 수 없는 소리를 낸다. 복부는 부드럽고 압통이 없다. 모든 사지가 차갑고 말초 맥박은 1+이다. 실온 공기에서 시행한 동맥혈가스검사는 pH 7.29, PCO₂ 33 mmHg, PO₂ 65 mmHg, HCO₃⁻ 15 mEq/L이다. CT에서 골반 고리의 전위 골절과 양쪽 경골, 오른쪽 원위 요골 및 오른쪽 상완골 근위부 골절이 보인다. 응급 개방정복술을 받고 중환자실에 입원했다. 다음 중 부적절한 수액 소생을 가장 잘 나타내는 소견은?

## 선택지

A. 맥압 증가
B. 3시간 동안 소변량 25 mL
C. 글래스고 혼수척도 8점
D. 염기 결핍 1 mmol/L

## 해설

3시간 소변량25 mL(B)는 성인에서 현저한 핍뇨로 신장관류가 충분하지 않음을 시사한다. 배뇨관 폐쇄나 기존 신장질환 등도 확인하되 출혈성 쇼크 소생 후에는 지속 저관류의 중요한 단서다. 의식상태와 염기결핍·젖산도 소생 평가에 쓰이므로 다른 지표가 쇼크와 무관한 것은 아니다. 다만 GCS는 두부손상·진정 등에도 영향을 받고, 염기결핍1 mmol/L는 중증 지속 대사성 산증을 나타내지 않아 이 선지 비교에서는 핍뇨가 가장 직접적이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 명백한 핍뇨 B를 유지하되 의식·염기결핍 등 다른 선지가 쇼크와 무관하다는 오류를 수정하고 혼수척수 오기를 교정했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002078
