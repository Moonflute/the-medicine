---
type: qbank
schema_version: 1
id: medqa-us-train-004083
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9d90353502c2d34921b5346581ac84ecfbdf46e321de8cf377c73ab4d7357872
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "거대세포동맥염"
  - "측두동맥염"
  - "턱 파행"
  - "giant cell arteritis"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-2YiOq0gOyXvCAoVmFzY3VsaXRpcykubWQ
question_type: 임상증례 객관식
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
---

# MedQA US 임상문제

## 문제

75세 여자가 6개월간 지속된 전신 쇠약으로 내원했다. 그동안 4kg의 체중 감소와 잦은 두통도 있었다. 심한 턱 통증 때문에 고형식을 피하고 있다. 고혈압과 골다공증이 있으며 2년 전 골관절염으로 왼쪽 무릎 전치환술을 받았다. 흡연과 음주는 하지 않는다. 현재 에날라프릴, 메토프롤롤, 저용량 아스피린, 종합비타민을 복용한다. 창백해 보인다. 체온 37.5°C, 맥박 82회/분, 혈압 135/80 mmHg이다. 신체검사는 정상이다. 헤모글로빈 10 g/dL, 평균적혈구용적 87 μm³, 백혈구 8,500/mm³, 혈소판 450,000/mm³, 적혈구침강속도 90 mm/h이다. 가장 적절한 다음 관리는 무엇인가?

## 선택지

A. 정맥 메틸프레드니솔론 단독
B. 정맥 메틸프레드니솔론과 측두동맥 생검
C. 경구 프레드니손과 측두동맥 생검
D. 측두동맥 생검 단독

## 해설


고령의 새 두통·턱 파행, 체중감소·빈혈·혈소판증가와 ESR 상승은 GCA를 의심하게 한다. 시력 위협 소견이 제시되지 않아 고용량 경구 prednisone을 신속히 시작하고 측두동맥 생검으로 확인하는 C가 적절하다. 생검 결과를 기다리며 치료를 미루지 않는다. 시력 상실이 위협되는 경우에는 정맥 pulse glucocorticoid를 고려하는 등 처치가 달라질 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004083 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 무관한 골반 초음파 설명을 제거하고 시각허혈 없는 GCA의 경구 steroid와 생검 C를 설명했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/acr.24632

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004083
