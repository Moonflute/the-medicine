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

대장암이 의심되는 45세 여자가 조영증강 복부 CT를 시행하기로 했다. 신장기능과 과거력은 정상이고 약물 알레르기도 없지만 특정 해산물에 알레르기가 있다고 한다. 정맥으로 조영제를 투여한 뒤 전신 가려움, 두드러기, 안면 혈관부종과 호흡곤란이 발생했다. 맥박 110회/분, 혈압 80/50 mmHg, 호흡수 30회/분이며 사지는 분홍색이고 따뜻하다. 가장 적절한 처치는?

## 선택지

A. 콜로이드로 정맥 수액소생
B. 광범위 정맥 항생제 투여
C. 혈관수축제 투여(노르에피네프린과 도파민)
D. 에피네프린 1:1000 주사 후 스테로이드와 항히스타민제 투여

## 해설

조영제 후 두드러기·혈관부종과 호흡/순환 장애는 아나필락시스다. D의 핵심은 즉시 대퇴부 근육주사 epinephrine이며 1:1000은 1mg/mL 농도이다. 성인은 보통 0.5mg IM을 사용하고 반응에 따라 반복하며 기도·산소·정질액 소생을 병행한다. 항히스타민은 안정화 후 피부 증상에 사용할 수 있지만 steroid와 함께 모든 환자에게 의무적으로 후속 투여하는 치료는 아니다. 해산물 알레르기는 조영제와 특이적 교차알레르기를 의미하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 아나필락시스의 IM epinephrine D를 확인. 경로/농도 표기를 명확히 하고 steroid·항히스타민의 일률적 후속투여 주장 교정.
- 공식/학회 근거: https://www.resus.org.uk/library/additional-guidance/guidance-anaphylaxis/emergency-treatment-anaphylactic-reactions
- 공식/학회 근거: https://www.acr.org/-/media/ACR/files/clinical-resources/contrast_media.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004958
