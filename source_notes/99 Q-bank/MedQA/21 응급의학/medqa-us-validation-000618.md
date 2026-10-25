---
type: qbank
schema_version: 1
id: medqa-us-validation-000618
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:37f4d34f0e0ecaad002786c2da4a676f973f00576bd5f6733583d27f60445900
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "아나필락시스"
  - "기도부종"
  - "근육 내 에피네프린"
question_type: management
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yVhOuCmO2VhOudveyLnOyKpCAoQW5hcGh5bGF4aXMpLm1k
difficulty: standard
answer: A
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

8세 여아가 해산물 뷔페를 먹은 뒤 호흡곤란, 얼굴 부종, 피부 발진으로 응급실에 왔다. 혈압 80/52 mmHg, 맥박 122회/분이며 심한 얼굴 부종과 흡기성 천명이 있다. 가장 적절한 다음 처치는?

## 선택지

A. 근육 내 에피네프린
B. 정맥 에피네프린
C. 고강도 국소 디펜히드라민
D. 흡입 나트륨 크로몰린

## 해설

음식 노출 직후 피부 증상, 얼굴 부종·흡기성 천명과 저혈압이 나타나 아나필락시스이다. 초기에는 대퇴 전외측 근육주사 에피네프린(A)이 우선이며 기도 평가, 산소와 정맥 수액을 병행한다. 근육주사는 신속하고 안전하게 시행할 수 있어 권장되는 것이며 정맥 투여보다 약효가 항상 더 빠르기 때문은 아니다. 정맥 에피네프린은 용량 오류와 부정맥 위험이 있어 일반적인 초기 일시 주사로 사용하지 않고, 불응성 쇼크에서 숙련된 팀이 감시하에 주입하는 등 제한된 상황에서 사용한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. IM 에피네프린 A를 유지하되 IV보다 약효가 본질적으로 빠르기 때문이라는 설명을 안전성·초기 투여 원칙으로 교정한다.
- 공식/학회 근거: https://www.resus.org.uk/library/additional-guidance/guidance-anaphylaxis/emergency-treatment-anaphylactic-reactions

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000618
