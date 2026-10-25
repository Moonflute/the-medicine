---
type: qbank
schema_version: 1
id: medqa-us-test-001092
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:5ccc76a7c545532c587216e76c92b0f3526904455b59d2114e989387ad0723c1
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "심부전 보존 박출률"
  - "사쿠비트릴"
  - "BNP 상승"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-unjOyEsSDsi6zrtoDsoIQgKOuwley2nOuloCDrs7TsobQpIChDaHJvbmljIEhlYXJ0IEZhaWx1cmUgd2l0aCBQcmVzZXJ2ZWQgRWplY3Rpb24gRnJhY3Rpb24gKEhGcEVGKSkubWQ
question_type: management
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQWxpc2tpcmVuLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvU2FjdWJpdHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmFsc2FydGFuLm1k
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0V0YW5lcmNlcHQubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

64세 남성이 2주 동안 쉽게 피로하고 계단을 오를 때 숨이 차 진료를 받으러 왔다. 밤에 잠든 지 2~3시간 후 기침이 나며 똑바로 앉으면 호전되고 휴식 시 호흡곤란, 두근거림, 실신은 없다. 20년간 고혈압이 있었고 혈압 122/82 mmHg, 맥박 104회/분, 양쪽 폐기저부 수포음, 경도의 간비대, BNP 증가, 좌심방 확대와 박출률 55%가 확인되었다. 발사르탄에 추가하면 도움이 될 새로운 약물은?

## 선택지

A. 에타너셉트
B. 목소니딘
C. 사쿠비트릴
D. 알리스키렌

## 해설

정답은 C이다. sacubitril은 neprilysin 억제제로 valsartan과 조합한 ARNI로 사용한다. EF55%의 HFpEF에서는 HFrEF와 같은 보편적 사망률 이득을 전제하지 않으며, 특히 보존 EF 범위의 낮은 쪽에 해당하는 일부 환자에서 입원 감소를 위해 고려할 수 있다. 제시된 선택지 중 이 기전에 해당하는 약은 C이다. 실제 치료에서는 혈압·신기능·칼륨 및 SGLT2 억제제 등 다른 권고 치료를 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: HFpEF에서 ARNI의 선택적 입원 감소 가능성과 보편적 사망률 효과를 구별.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001063

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001092
