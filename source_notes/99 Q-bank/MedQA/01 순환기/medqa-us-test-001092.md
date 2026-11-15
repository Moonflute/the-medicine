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

64세 남성이 만성 심부전으로 치료 중이다. 심초음파에서 좌심실 박출률 55%와 좌심방 확장이 있고, 심부전 입원력이 있다. 현재 울혈은 조절됐고 신장기능은 적절하며 당뇨병은 없다. 심부전 입원을 줄이기 위해 추가할 수 있는 약물은?

## 선택지

A. 베라파밀
B. 디곡신
C. 엠파글리플로진
D. 피오글리타존

## 해설

박출률 보존 심부전에서도 SGLT2 억제제는 당뇨병 여부와 무관하게 심부전 악화에 따른 입원을 줄이는 데 도움이 된다. 환자의 신장기능과 약물 금기를 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: HFpEF에서 ARNI의 선택적 입원 감소 가능성과 보편적 사망률 효과를 구별.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001063

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001092
- 대한심부전학회 심부전 치료 진료지침: https://e-kcj.org/DOIx.php?id=10.4070%2Fkcj.2023.0047
