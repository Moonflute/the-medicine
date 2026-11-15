---
type: qbank
schema_version: 1
id: medqa-us-test-000929
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:e6049fd124c083a27f3a7cdbb047b419bb05f52c0c2e37dad4be13faeb2d00bc
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "아나필락시스"
  - "베타차단제"
  - "글루카곤 구제요법"
question_type: management
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yVhOuCmO2VhOudveyLnOyKpCAoQW5hcGh5bGF4aXMpLm1k
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTm9yZXBpbmVwaHJpbmUubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvR2x1Y2Fnb24ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

베타차단제를 복용하는 45세 남성이 벌에 쏘인 뒤 아나필락시스 쇼크에 빠졌다. 충분한 정맥 수액과 반복 에피네프린에도 저혈압이 지속돼 감시하 승압제 주입을 하고 있다. 베타수용체를 통하지 않는 보조 약물은?

## 선택지

A. 디펜히드라민
B. 글루카곤
C. 덱사메타손
D. 흡입 살부타몰

## 해설

베타차단제 복용 환자의 불응성 아나필락시스에서는 베타수용체를 거치지 않는 글루카곤을 보조로 고려한다. 에피네프린, 수액과 기도 관리를 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. β차단제 관련 refractory anaphylaxis의 glucagon B를 유지하되 epinephrine 반복·주입을 대체하는 자동 다음 단계로 가르치지 않는다.
- 공식/학회 근거: https://www.resus.org.uk/library/additional-guidance/guidance-anaphylaxis/emergency-treatment-anaphylactic-reactions

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000929
- https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-and-pediatric-special-circumstances-of-resuscitation/
