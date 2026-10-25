---
type: qbank
schema_version: 1
id: medqa-us-train-008824
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:79dfc245683892255a7e0aa3b836ff3cd4b3cf08c2e7950dc05091c2dd3b0feb
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "peritonsillar abscess"
  - "trismus"
  - "uvular deviation"
question_type: management
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-2OuOuPhCDso7zsnIQg64aN7JaRIChQZXJpdG9uc2lsbGFyIEFic2Nlc3MpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

15세 남아가 인후통과 삼킴 곤란으로 내원했다. 3주 동안 인후통이 있었고 2일 전 갑자기 더 심해졌다. 특별한 과거력이나 복용약은 없다. 체온 38.2°C(100.8°F), 혈압 100/70mmHg, 맥박 101회/분, 호흡수 26회/분, 산소포화도 99%이다. 입을 완전히 벌릴 수 없는 개구장애와 침 흘림이 있고 목소리가 먹먹하다. 두부 CT에서 제시된 소견이 보인다. 다음 중 가장 적절한 초기 치료는 무엇인가?

## 선택지

A. 흡입 에피네프린
B. 항독소
C. 프레드니손
D. 절개 및 배농

## 해설

지속 인후통이 급격히 악화되고 개구장애, 침흘림과 먹먹한 목소리가 동반되어 편도주위 등 심부 인두 감염/농양을 강하게 의심한다. 제시된 선택지 중 D, 절개 및 배농이 원인 치료에 부합한다. 기도 안전과 이비인후과 평가, 전신 항생제를 함께 고려한다. 현재 CT 그림 자체는 없으므로 저밀도 병변의 위치·크기를 실제 확인한 것처럼 적지는 않았다. 임상 맥락과 나머지 세 선지의 부적절성으로 선택이 가능하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 누락 CT의 구체적 농양 모양을 임의로 진술하지 않고 개구장애·침흘림·먹먹한 목소리 등 본문의 농양 단서로 D를 설명.
- 공식/학회 근거: https://www.bsac.org.uk/paediatricpathways/tonsillitis-quinsy.php

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008824
