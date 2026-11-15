---
type: qbank
schema_version: 1
id: medqa-us-train-004958
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4fbe9a1d35648066e691cd16f2bc2c49b5543d481212d878bba89549aea01b59
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "아나필락시스"
  - "조영제 과민반응"
  - "에피네프린"
question_type: management
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yVhOuCmO2VhOudveyLnOyKpCAoQW5hcGh5bGF4aXMpLm1k
difficulty: standard
answer: D
publication_status: "withheld"
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTm9yZXBpbmVwaHJpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

45세 여성이 조영증강 CT를 위해 요오드 조영제를 투여받은 직후 전신 두드러기, 얼굴 부종과 호흡곤란을 보였다. 혈압 80/50 mmHg, 맥박 110회/분이다. 가장 먼저 투여할 약물은?

## 선택지

A. 정맥 메틸프레드니솔론
B. 정맥 디펜히드라민
C. 흡입 살부타몰
D. 허벅지 전외측 에피네프린 근육주사

## 해설

조영제 투여 직후 피부, 호흡기, 순환기 증상이 함께 나타난 아나필락시스다. 허벅지 전외측 에피네프린 근육주사를 지체하지 않고, 기도·산소 공급과 정질액 소생을 병행한다. 항히스타민제와 기관지확장제는 필요할 때 보조로 쓰며, 스테로이드는 초기 에피네프린을 대신할 수 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 아나필락시스의 IM epinephrine D를 확인. 경로/농도 표기를 명확히 하고 steroid·항히스타민의 일률적 후속투여 주장 교정.
- 공식/학회 근거: https://www.resus.org.uk/library/additional-guidance/guidance-anaphylaxis/emergency-treatment-anaphylactic-reactions
- 공식/학회 근거: https://www.acr.org/-/media/ACR/files/clinical-resources/contrast_media.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004958
- 대한천식알레르기학회, 아나필락시스 진단과 치료 전문가 의견서: https://www.allergy.or.kr/board/treatment/view/6898?gubun=2
