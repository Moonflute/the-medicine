---
type: qbank
schema_version: 1
id: medqa-us-train-007408
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:06c29f39b77b40897e45b2551417b5537e346e4f56fdd9f4ddcfc54e90bb0910
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "유전구형적혈구증"
  - "용혈성 빈혈"
  - "비장절제술"
  - "비장절제 후 예방접종"
related_disease_slugs:
  - MDkg7ZiI7JWhL-ycoOyghCDqtaztmIjsoIHtmIjqtazspp0gKEhlcmVkaXRhcnkgU3BoZXJvY3l0b3NpcykubWQ
  - MDkg7ZiI7JWhL-yaqe2YiOyEsSDruYjtmIggKEhlbW9seXRpYyBBbmVtaWEpLm1k
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
---

# MedQA US 임상문제

## 문제

8세 남아가 지속되는 피로로 추적 진료를 위해 내원했다. 어머니는 아들이 일주일 동안 매일 쉬는 시간에 놀지 않고 앉아 있었다고 선생님에게 들었다. 몇 년 전부터 피로와 쇠약 증상이 생겼고 1년에 한두 번 비슷한 에피소드로 진료를 받았다. 일부는 바이러스 감염으로 유발되는 것 같지만 원인이 없는 경우도 있다. 매일 엽산을 보충하면서 약간 호전되었고 1년에 여러 차례 적혈구 수혈이 필요하다. 설파제 알레르기가 있으며 지난달 귀 감염으로 아목시실린을 복용했다. 친할아버지가 최근 다발골수종을 진단받았지만 부모는 다른 혈액질환 가족력은 없다고 한다. 체온은 99.0°F(37.2°C), 혈압 103/76 mmHg, 맥박 95회/분, 호흡수 14회/분이다. 결막이 창백하고 피곤해 보인다. 검사에서 백혈구 수 9,700/mm³, 헤모글로빈 8.4 g/dL, 헤마토크릿 27%, MCV 97 µm³, MCHC 40%, 혈소판 수 338,000/mm³, 망상적혈구 지수 4.2%이다. 다음 중 가장 적절한 치료 단계는 무엇인가?

## 선택지

A. 하이드록시우레아
B. 글루코코르티코이드
C. 예방접종 후 비장절제술
D. 예방접종 후 비장절제술과 1년간 페니실린

## 해설


수혈이 반복되는 중증 HS 의심에서8세의 비장절제는 용혈을 줄일 수 있고 접종·항균 예방을 동반하는 D가 선택지 중 적절하다. 수술이 막 유전결함을 교정하는 것은 아니며 평생 감염 위험이 남는다. BSH는 수술 직후와1–3년 예방, 고위험에는 장기/평생 요법을 권고하므로 D의1년을 모든 환자의 강제 종료 시점으로 해석하지 않는다. 백신·응급 항생제·발열 시 신속 진료 교육과 개인별 기간 재평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007408 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 수혈 의존 HS의 비장절제·예방 D 유지;수술이 유전결함의 근본 교정이며1년 후 반드시 예방 종료라는 설명 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://onlinelibrary.wiley.com/doi/full/10.1111/bjh.19361

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007408
