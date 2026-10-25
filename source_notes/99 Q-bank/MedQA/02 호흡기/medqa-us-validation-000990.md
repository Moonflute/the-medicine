---
type: qbank
schema_version: 1
id: medqa-us-validation-000990
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:b432251b39697fd578104f804b0135646aefe16f1d347fe14e76bf7c53366b9f
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "만성폐쇄성폐질환"
  - "흡연"
  - "인플루엔자 백신"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
  - MDgg6rCQ7Je8L-yduO2UjOujqOyXlOyekCAoSW5mbHVlbnphKS5tZA
question_type: prevention
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

48세 남성이 4년간 가래를 동반한 기침과 운동 시 호흡곤란으로 진료를 받으러 왔다. 10년간 흡연했으며 흉부 X선에서 기관지혈관 음영 증가와 횡격막 편평화가 보인다. 폐활량검사에서 FEV1/FVC 비는 0.66이고 흡입 알부테롤 후 FEV1이 82%에서 88%로 증가했다. 금연을 권고하고 예방접종을 제안했으나 한 가지만 받을 수 있다면 어떤 백신을 반드시 권고해야 하는가?

## 선택지

A. 23가 폐렴구균 다당질 백신
B. B형 헤모필루스 인플루엔자 백신
C. 인플루엔자 백신
D. 백일해 백신

## 해설

COPD 환자에게 인플루엔자 예방접종은 매년 권고되므로 제시된 제한 자원 상황에서 C가 적합하다. 다만 폐렴구균, 백일해 등도 연령과 접종력에 따라 필요하여 다른 백신이 중요하지 않다는 뜻은 아니다. 실제 진료에서는 현재 권고되는 백신 종류와 공적 지원을 확인하여 필요한 접종을 함께 계획한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 제한 자원 문항의 인플루엔자 C를 유지하되 다른 권고 백신보다 항상 우선이라는 보편 순위를 제거.
- https://goldcopd.org/2026-gold-report-and-pocket-guide/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000990
