---
type: qbank
schema_version: 1
id: medqa-us-train-007229
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3c585cb4432f67a3575398d2c41640ddc64688668e9f393c04cbe7fbabb54ff3
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "아나필락시스"
  - "아나필락시스성 쇼크"
  - "에피네프린"
  - "저혈압"
question_type: management
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yVhOuCmO2VhOudveyLnOyKpCAoQW5hcGh5bGF4aXMpLm1k
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
  - ZHJ1ZzowMiDtmLjtnaHquLAvSXByYXRyb3BpdW0ubWQ
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTWFnbmVzaXVtU3VsZmF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

5세 남아가 호흡곤란으로 응급실에 내원했다. 가족 소풍에서 놀던 중 증상이 시작되었다. 현재 호흡이 매우 곤란하고 사지가 붉고 따뜻하다. 과거 병력은 알 수 없으며 부모가 주는 허브만 복용한다. 체온은 99.5°F(37.5°C), 맥박 112회/분, 혈압 70/40 mmHg, 호흡수 18회/분, 100% 산소 투여 중 산소포화도는 82%이다. 다음 중 가장 적절한 초기 치료는 무엇인가?

## 선택지

A. 알부테롤
B. 에피네프린
C. 윤상갑상막절개술
D. 알부테롤, 이프라트로피움, 황산마그네슘

## 해설

갑작스러운 호흡곤란과 홍조, 심한 저혈압은 아나필락시스를 의심하게 한다. 에피네프린(B)을 대퇴 전외측에 근육주사하는 것이 우선이며, 산소 공급과 기도 평가, 정맥 수액 소생을 병행한다. 흡입 기관지확장제는 보조 치료일 뿐 쇼크를 치료하는 에피네프린을 대신할 수 없다. 기도 부종이 본문에서 직접 확인된 것은 아니지만, 호흡·순환 장애가 함께 있는 상황에서 치료를 지연해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 급성 피부 혈관 변화·저혈압·심한 호흡곤란의 아나필락시스에서 B를 유지하고 투여 경로와 병행 소생을 명확히 한다.
- 공식/학회 근거: https://www.resus.org.uk/library/additional-guidance/guidance-anaphylaxis/emergency-treatment-anaphylactic-reactions

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007229
