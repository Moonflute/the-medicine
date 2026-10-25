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

45세 남성이 벌에 왼쪽 팔을 쏘인 지 약 20분 후 시작된 심한 호흡곤란, 천명, 두근거림으로 응급실에 왔다. 고혈압으로 라베탈롤을 복용한다. 문진 중 의식이 저하되었다. 체온 37.0°C(98.6°F), 혈압 85/55 mmHg, 맥박 110회/분, 호흡 31회/분, 실내공기 산소포화도 90%였다. 왼쪽 전완 신측에 심한 부종과 홍반이 있고 얼굴과 목에 심한 혈관부종이 있었다. 삽관하고 수액과 근육 에피네프린을 투여했지만 혈압은 90/55 mmHg였다. 다음 단계 처치는?

## 선택지

A. 도파민
B. 글루카곤
C. 덱사메타손
D. 노르에피네프린

## 해설

Labetalol 복용은 아나필락시스에서 epinephrine 반응을 약화시킬 수 있다. 저혈압이 충분한 epinephrine·수액 치료에도 지속되면 β수용체와 독립적으로 심근 cAMP를 높이는 glucagon(B)을 보조적으로 고려한다. 실제로는 IM epinephrine 반복 및 전문가 감독하 IV 주입을 포함한 소생을 지속하며 glucagon이 이를 대체하지 않는다. 구토 등 부작용을 감시한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. β차단제 관련 refractory anaphylaxis의 glucagon B를 유지하되 epinephrine 반복·주입을 대체하는 자동 다음 단계로 가르치지 않는다.
- 공식/학회 근거: https://www.resus.org.uk/library/additional-guidance/guidance-anaphylaxis/emergency-treatment-anaphylactic-reactions

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000929
