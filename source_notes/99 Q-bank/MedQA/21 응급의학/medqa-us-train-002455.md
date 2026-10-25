---
type: qbank
schema_version: 1
id: medqa-us-train-002455
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:04265144d3544ab0946f1190f3d59fb8c51a863cfb6425e4017e6c2fac682b82
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "anaphylaxis"
  - "urticaria"
  - "hypotension"
  - "intramuscular epinephrine"
question_type: management
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yVhOuCmO2VhOudveyLnOyKpCAoQW5hcGh5bGF4aXMpLm1k
  - MDYg7JWM66CI66W06riwL-uRkOuTnOufrOq4sCAoVXJ0aWNhcmlhKS5tZA
difficulty: complex
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

20세 여성이 공원에서 놀다가 전신 발진이 생겨 응급실에 왔다. 약간 어지럽고 평소 건강하며 과거력은 특이사항이 없다. 혈압 84/54 mmHg, 맥박 130회/분, 호흡 22회/분, 산소포화도 95%이며 양측 천명과 미만성 두드러기가 있다. 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 알부테롤
B. 지속적 모니터링
C. 디펜히드라민
D. 에피네프린

## 해설

급성 전신 두드러기와 저혈압·천명은 아나필락시스다. 즉시 허벅지 앞가쪽 근육주사 에피네프린(D)을 투여하고 필요 시 반복하며 자세·산소·정맥 수액 등 소생을 병행한다. 항히스타민제나 흡입 알부테롤은 보조 조치일 뿐 쇼크를 치료하는 에피네프린을 대체하지 않는다. 초기 치료를 감시 없는 정맥 에피네프린 볼루스로 해석하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 아나필락시스의 에피네프린 D를 유지하고 초기 경로를 근육주사로 명시하여 정맥 볼루스와 혼동을 막았다.
- 공식/학회 근거: https://www.resus.org.uk/library/additional-guidance/guidance-anaphylaxis/emergency-treatment-anaphylactic-reactions

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002455
