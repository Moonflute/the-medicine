---
type: qbank
schema_version: 1
id: medqa-us-train-000497
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:da7848f020fe2ad6d2d20d7cbbe7a02e1dd1561c9af9830e284f0a38b1638379
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "false labor"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yhsOq4sCDsp4TthrUgKFByZXRlcm0gTGFib3IpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 36주인 28세 초임부가 2시간 전부터 시작된 진통으로 응급실에 내원하였다. 임신 경과는 합병증 없이 순조로웠다. 진통은 20~30분마다 한 번씩 발생하며, 30초 미만으로 지속되고, 시작된 이후 강도와 지속 시간이 일정하다. 그동안 태동은 증가하였다. 체온은 37.1°C, 맥박은 98회/분, 혈압은 104/76 mmHg이다. 골반 검사상 맑은 자궁경부 점액이 관찰되며 자궁은 임신 36주 크기에 부합하는 단단한 상태이다. 자궁경부는 0% 소실되었고 개대되지 않았으며, 태아 선진부는 -3 하강도(station)이다. 태아 심박수는 안심할 수 있는 상태이다. 응급실에서 1시간 동안 관찰한 후에도 진통의 양상과 골반 검사 소견은 변화가 없다. 다음 중 가장 적절한 다음 조치는 무엇인가?

## 선택지

A. 국소 또는 부위 마취를 권한다
B. 지속적인 관찰을 위해 입원시킨다
C. 안심시키고 귀가시킨다
D. 제왕절개술을 시행한다

## 해설

짧고 드문 수축의 강도·기간이 늘지 않고 관찰 후에도 경부 소실·개대가 없으며 태아 상태가 양호하므로 가진통이 가장 적절하다. C처럼 설명 후 귀가가 가능하되 양수 누출, 출혈, 태동 감소 또는 수축 악화 시 즉시 재내원하도록 안내한다. 초음파 양수량 정상은 본문에 없으므로 임의로 추가하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 가진통 판단 근거 및 귀가 후 재평가 조건 명료화.
- https://www.acog.org/womens-health/faqs/how-to-tell-when-labor-begins

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000497
