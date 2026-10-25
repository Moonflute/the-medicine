---
type: qbank
schema_version: 1
id: medqa-us-train-004621
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6098e4b0af906f5449f7911e776a8cb91462d9d821da9bda174edbbd1b4e36fc
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "유전구형적혈구증"
  - "적혈구 막 단백질 결함"
  - "용혈성 빈혈"
related_disease_slugs:
  - MDkg7ZiI7JWhL-ycoOyghCDqtaztmIjsoIHtmIjqtazspp0gKEhlcmVkaXRhcnkgU3BoZXJvY3l0b3NpcykubWQ
  - MDkg7ZiI7JWhL-yaqe2YiOyEsSDruYjtmIggKEhlbW9seXRpYyBBbmVtaWEpLm1k
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

3세 남아가 4주 동안 지속된 전신 피로와 권태감으로 내원했다. 만삭으로 태어났고 그 후 건강했다. 어머니에게 반복적인 빈혈 병력이 있다. 창백해 보인다. 체온은 37°C (98.6°F), 맥박은 분당 97회이다. 진찰에서 창백한 결막과 황달이 보이고 비장이 왼쪽 늑골연 아래 3~4cm 만져진다. 검사 결과는 다음과 같다.
헤모글로빈 9.3 g/dL
평균 적혈구 용적 81.3 μm3
평균 적혈구 혈색소 농도 39% Hb/cell
백혈구 7,300/mm3
혈소판 200,000/mm3
적혈구 분포 폭 19% (정상 13~15)
다음 중 진단을 가장 잘 확진할 검사는 무엇인가?

## 선택지

A. 형광점 검사
B. Eosin-5-maleimide 결합검사
C. 간접 항글로불린검사
D. 말초혈액도말

## 해설


가족성 빈혈·황달·비장비대와 MCHC 증가가 유전구형적혈구증을 시사한다. Eosin-5-maleimide(EMA)는 band3 등 막 단백에 결합하는 형광염료로, 유세포분석에서 결합 형광이 감소하면 진단을 지지하여 B가 적절하다. EMA를 적혈구막 단백의 이름이라고 설명하면 안 된다. 일부 다른 막질환에서도 감소할 수 있어 임상 및 다른 용혈 검사와 결합한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004621 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: EMA는 적혈구막 단백 자체가 아니라 결합하는 형광염료임을 교정; HS 확인 B 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004621
