---
type: qbank
schema_version: 1
id: medqa-us-train-008574
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6a44b4d8372018f82ea8bbe3781c5fdefd726af7100d1a7c4d0212c2e5247763
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "anaphylaxis"
  - "cefazolin allergy"
  - "epinephrine"
question_type: management
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yVhOuCmO2VhOudveyLnOyKpCAoQW5hcGh5bGF4aXMpLm1k
difficulty: complex
answer: C
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
  - ZHJ1ZzowMyDshoztmZTquLAvT25kYW5zZXRyb24ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmYXpvbGluLm1k
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

10세 남아가 말에서 떨어진 뒤 응급실로 이송되었다. 오른쪽 아래팔에 심한 통증이 있다. 천식과 아토피피부염 병력이 있으며 알부테롤 흡입제와 하이드로코르티손 크림을 사용한다. 다른 손상 없이 오른쪽 아래팔의 개방성 골절이 확인되었다. 정맥으로 생리식염수 1L, 세파졸린, 모르핀, 온단세트론을 투여하고 아래팔에 부목을 댔다. 수술 동의를 받은 지 15분 후 숨이 차다고 호소했고 천명음이 들렸다. 체온 37.0°C(98.6°F), 심박수 130회/분, 호흡수 33회/분, 혈압 80/54mmHg이다. 전신 두드러기와 입술 부종이 있고 결막 부종은 없다. 양쪽 폐야에서 산재한 천명음이 들린다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 정맥 디펜히드라민 투여
B. 반코마이신과 피페라실린-타조박탐 투여
C. 근육 내 에피네프린 투여
D. 기관내 삽관

## 해설

약물 투여 직후 전신 두드러기, 입술 부종, 천명과 저혈압이 나타나 아나필락시스에 해당한다. 대퇴 전외측 근육주사 에피네프린(C)이 우선이며 산소, 정맥 수액과 반복 평가를 병행한다. 항히스타민제는 호흡·순환 장애를 치료하는 에피네프린을 대신하지 못한다. 수술은 아직 시행하지 않았으며 어느 약이 원인인지 이 자료만으로 확정할 수 없다. 기도 부종이 진행하거나 환기를 유지하지 못하면 숙련된 기도 확보를 혈압 회복 때까지 미뤄서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 수술 전 약물 투여 뒤 발생한 아나필락시스를 수술 후로 설명한 오류를 교정한다. 기도 확보를 혈압 회복 후로 미루라는 위험한 문장을 제거한다.
- 공식/학회 근거: https://www.resus.org.uk/library/additional-guidance/guidance-anaphylaxis/emergency-treatment-anaphylactic-reactions

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008574
