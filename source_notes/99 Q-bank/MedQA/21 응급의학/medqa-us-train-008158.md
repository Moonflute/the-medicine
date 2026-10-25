---
type: qbank
schema_version: 1
id: medqa-us-train-008158
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3659216ee3e0a86c3528d17f36bfb23587e0a8887286a1b9be4415a47d82d915
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "hydatid cyst"
  - "anaphylaxis"
  - "epinephrine"
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
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTm9yZXBpbmVwaHJpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

35세 남자가 4개월 동안 지속된 우측 둔한 복통으로 내원했다. 간헐적으로 오심과 구토가 있지만 발열, 배변 변화, 체중 감소는 없다. 8년 동안 애완견을 키웠다. 우측 늑골연 아래 3 cm에서 호흡에 따라 움직이는 압통 없는 종괴가 만져지고 백혈구 7,200/mm³, 호산구 8%이다. 복부 초음파에서 간에 7 cm 저에코 낭종이 보이며 ELISA로 진단을 확인했다. 전신마취와 구강기관삽관 후 CT 유도 경피적 배액을 시행하던 중 7분 후 산소포화도가 95%에서 64%로 급격히 감소하고 맥박 136회/분, 혈압 86/58 mm Hg가 되었다. 카프노그래피에서 호기말 CO₂ 파형이 보이지 않고 양측 호흡음이 소실되었다. 가장 적절한 다음 처치는?

## 선택지

A. 탐색적 개복술
B. 에피네프린
C. 윤상갑상막절개술
D. 노르에피네프린

## 해설

개 노출, 간 낭종과 혈청검사는 포충낭종을 시사한다. 배액 중 낭종 내용물이 노출되면 아나필락시스가 발생할 수 있으며, 급성 저혈압과 심한 기관지연축이 의심되는 이 상황에서는 에피네프린(B)이 우선적인 약물이다. 동시에 100% 산소로 환기를 보조하고, 이미 삽관된 환자에서 양측 호흡음과 호기말 CO2 파형이 사라졌으므로 관 위치·폐쇄·회로 분리도 즉시 확인해야 한다. 에피네프린에도 지속되는 쇼크에서는 다른 혈관수축제가 보조적으로 필요할 수 있어 전혀 효과가 없다고 단정해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. hydatid cyst를 수두 낭종으로 오역한 해설을 포충낭종으로 교정한다. 원문 삽관 정보를 복원하고 B와 동시에 환기 회로·기도 확인이 필요함을 명시한다.
- 공식/학회 근거: https://www.resus.org.uk/library/additional-guidance/guidance-anaphylaxis/emergency-treatment-anaphylactic-reactions

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008158
