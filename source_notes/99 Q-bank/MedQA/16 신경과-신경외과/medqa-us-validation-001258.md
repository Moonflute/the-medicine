---
type: qbank
schema_version: 1
id: medqa-us-validation-001258
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:3cb9c4442c9903d66e6214d77547b5000aa285fbe3823f7ea9f1a793530ee86b
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "경막외혈종"
  - "측두골 골절"
  - "개두술"
question_type: management
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-y4oeuRkOqzqOqzqOygiCAoVGVtcG9yYWwgYm9uZSBmcmFjdHVyZSkubWQ
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 남성이 야구 경기 중 방망이에 머리를 맞고 의식을 잃었다가 15분 후 회복했다. 처음에는 괜찮아 보였지만 점점 혼돈이 심해지고, CT 후 왼쪽 동공이 6 mm로 확대되어 빛에 거의 반응하지 않으며 의식이 악화되었다. 가장 적절한 다음 처치는?

## 선택지

A. 저장성 식염수 투여
B. 덱사메타손 투여
C. 개두술 시행
D. 뇌 MRI 시행

## 해설

외상 후 일시적 각성에 이어 의식이 악화하고 동측 동공이 커지는 양상은 팽창하는 외상성 혈종과 갈고리탈출을 우려하게 한다. 기도를 확보한 환자에서 긴급 신경외과적 혈종 제거/개두술(C)이 적절하다. 누락된 CT의 모양을 확인했다고 할 수는 없지만 급속 악화가 강한 응급 단서이다. 핵심은 단순 동맥압 상승이 아니라 두개내 종괴효과와 뇌간/제3뇌신경 압박이며 MRI를 기다리느라 처치를 늦추지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 외상후 악화와 단측 산동의 두개내압/탈출 기전을 교정. 누락 CT보다 임상 악화로 C 유지.
- 공식/학회 근거: https://ww2.facs.org/media/vgfgjpfk/best-practices-guidelines-traumatic-brain-injury.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001258
