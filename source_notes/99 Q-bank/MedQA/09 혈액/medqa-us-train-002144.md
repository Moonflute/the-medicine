---
type: qbank
schema_version: 1
id: medqa-us-train-002144
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b5e2372ef606cee6d03c8cad26b703897f250850f4867f1a711e2187fcd92df8
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "hereditary spherocytosis"
  - "splenectomy"
  - "asplenia"
  - "penicillin prophylaxis"
related_disease_slugs:
  - MDkg7ZiI7JWhL-ycoOyghCDqtaztmIjsoIHtmIjqtazspp0gKEhlcmVkaXRhcnkgU3BoZXJvY3l0b3NpcykubWQ
question_type: prevention
difficulty: complex
answer: B
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
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
---

# MedQA US 임상문제

## 문제

3세 남아가 비장절제술 전 수술 평가를 위해 내원했다. 1년 전 유전성 구형적혈구증을 진단받았고 그 이후 심한 빈혈로 6회의 수혈을 받았다. 유일한 약물은 엽산 보충제이다. 예방접종은 최신 상태이다. 체온 36.7°C, 맥박 115회/분, 호흡 24회/분, 혈압 110/60 mmHg이다. 결막 창백과 황달이 보이며 비장 끝이 왼쪽 늑골연 아래 5 cm에서 만져진다. 다음 중 향후 이환율과 사망률을 예방하기 위한 가장 적절한 권고는?

## 선택지

A. B형 간염 바이러스 예방접종
B. 매일 페니실린 예방요법
C. 매일 와파린 예방요법
D. 하이드록시우레아 투여

## 해설


비장절제 후에는 피막세균, 특히 폐렴구균에 의한 급격한 패혈증 위험이 증가한다. 3세 소아에서는 접종을 받았더라도 매일 penicillin 예방요법 B가 적절하다. 적절한 폐렴구균·수막구균·Hib 등 예방접종 점검과 발열 시 즉시 진료 교육도 필요하다. 무비장 상태를 무맥성이라고 부르는 것은 잘못이다. 이 문항은 수술 후 감염 예방을 묻는 것으로, 어린 나이의 비장절제 시기 자체가 모든 유전구형적혈구증 환자에게 적절하다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002144 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 무맥성이 아니라 무비장 상태이며 예방접종 완료와 별개로 어린 소아 항생제 예방 필요성을 명확화.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/pneumococcal/hcp/clinical-guidance/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002144
