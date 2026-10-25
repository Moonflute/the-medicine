---
type: qbank
schema_version: 1
id: medqa-us-train-005544
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:988b5973975957ece21ce8e1d2f2fc3533c901bbd8f375661c0d2ac212696cc6
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "IgA 결핍"
  - "수혈 관련 아나필락시스"
  - "대량수혈"
question_type: mechanism
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
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

18세 남자가 여러 차례 자상을 입고 응급실에 왔다. 기도와 산소화는 유지되지만 대량수혈 중 저혈압과 빈맥이 악화되고 심정지 후 소생에 실패했다. 과거 심부전과 반복 상기도감염이 있다. 수혈 중 새로 호흡곤란과 양측 천명이 발생했다. 다음 중 소생 중 악화와 관련된 상태는?

## 선택지

A. 만성폐쇄성폐질환
B. 심부전
C. IgA 결핍
D. 지속적인 복강 내 출혈

## 해설

수혈 중 새 호흡곤란·양측 천명과 급격한 순환 악화는 아나필락시스성 수혈반응을 우려하게 한다. 심한 IgA 결핍과 anti-IgA 항체가 있는 일부 환자에서 관련될 수 있어 보기 C가 적합한 연관 상태이다. 대부분의 IgA 결핍 환자가 이런 반응을 겪는 것은 아니며, 출혈·다른 수혈반응도 긴급 평가해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 원문에 없는 천식 병력을 반복 호흡기 감염/심부전 병력과 구별하고 새 천명 단서 복원. IgA 결핍 모두가 아나필락시스라는 일반화 방지.
- 공식/학회 근거: https://www.lifeblood.com.au/health-professionals/clinical-practice/adverse-events/severe-allergic-reactions

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005544
