---
type: qbank
schema_version: 1
id: medqa-us-train-005974
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c3af682c082549e0d7df5aa19c8a88562b67589b53936a4739b38ea1b01eca50
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "아나필락시스"
  - "벌독 알레르기"
  - "근육 내 에피네프린"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yVhOuCmO2VhOudveyLnOyKpCAoQW5hcGh5bGF4aXMpLm1k
  - MDYg7JWM66CI66W06riwL-yVjOugiOultOq4sC5tZA
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
---

# MedQA US 임상문제

## 문제

벌에 쏘인 뒤 전신 두드러기와 천명이 생긴 29세 남성에게 허벅지 근육주사로 에피네프린을 투여했다. 산소를 공급하고 감시 중이다. 5분이 지나도 숨이 차고 천명이 지속된다. 다음 약물 조치는?

## 선택지

A. 항히스타민제만 투여하고 기다린다
B. 정맥 스테로이드만 투여한다
C. 에피네프린 정맥 일시주사로 곧바로 바꾼다
D. 에피네프린 근육주사를 반복한다

## 해설


호흡·순환 증상이 계속되면 에피네프린 근육주사를 반복한다. 항히스타민제는 기도·순환 증상의 치료를 대신하지 않으며 정맥 에피네프린은 적절한 감시와 전문팀이 필요한 상황에 제한한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-005974`와 직접 대조했다.
- 판정: 벌독 노출 후 호흡곤란·천명으로 D 유지. 본문에 없는 전신 발진을 추가하거나 저혈압 부재를 진단 반대로 표현한 해설 교정.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7607509/
- https://www.resus.org.uk/professional-library/faqs/faqs-anaphylaxis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005974
- https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=6684
- https://www.resus.org.uk/library/additional-guidance/guidance-anaphylaxis/emergency-treatment-anaphylactic-reactions
