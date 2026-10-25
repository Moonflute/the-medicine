---
type: qbank
schema_version: 1
id: medqa-us-train-001445
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ca44ac3428699d40ee6198bfa1e6095bc84c25870dd9f0ad3c74bccb14d9addb
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "necrotizing fasciitis"
  - "postoperative wound infection"
related_disease_slugs:
  - MDgg6rCQ7Je8L-q0tOyCrOyEsSDqt7zrp4nsl7wgKE5lY3JvdGl6aW5nIEZhc2NpaXRpcykubWQ
  - MTEg7Jm46rO8L-ywveyDgSDqsJDsl7wgKFdvdW5kIEluZmVjdGlvbikubWQ
question_type: management
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2xpbmRhbXljaW4ubWQ
---

# MedQA US 임상문제

## 문제

결장암으로 개복 결장절제술을 받은 지 하루 후 65세 남성에게 오한이 발생했다. 원래 복강경으로 시행할 예정이었으나 지속적인 출혈로 개복술로 전환했다. 전환 외에는 수술이 순조로웠다. 5년 전 낭성질환으로 신장이식을 받았고 이후 프레드니솔론을 복용 중이다. 설폰아미드 알레르기가 있다. 급성으로 아파 보인다. 체온은 39.2°C (102.5°F), 맥박은 120회/분, 호흡수는 23회/분, 혈압은 90/62 mm Hg이다. 복부검사에서 검상돌기부터 치골결합까지 정중선 절개가 있고 하복부 절개 가장자리 근처 5 cm (2 in) 부위가 자주색으로 변색되어 있다. 복부를 촉진하면 심한 통증이 있고 바스락거리는 소리가 들린다. 검사 결과 헤모글로빈 12.5 g/dL, 백혈구 18,600/mm3, 혈소판 228,000/mm3, ESR 120 mm/h, Na+ 134 mEq/L, K+ 3.5 mEq/L, Cl− 98 mEq/L, HCO3− 22 mEq/L, 포도당 200 mg/dL, 요소질소 60 mg/dL, 크레아티닌 3.2 mg/dL, 크레아틴키나아제 750 U/L이다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 복부와 골반 X선
B. 진공 보조 상처 봉합 장치
C. 외과적 변연절제
D. 클린다마이신 정맥주사

## 해설


수술 다음 날 고열·쇼크와 절개 주위 자주색 변화, 심한 통증·염발음은 괴사성 연조직 감염 또는 근괴사를 강하게 시사한다. 즉시 수술적 탐색·변연절제(C)로 감염원을 제어해야 하며 영상검사를 기다리며 지연하지 않는다. 동시에 패혈증 소생, 배양과 광범위 정맥 항생제를 시작한다. 클린다마이신은 특정 독소 생성 감염에서 병용할 수 있으나 단독 투여가 수술과 광범위 항생제를 대체하지 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001445 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 괴사성 수술부위 감염의 긴급 변연절제 C를 유지하고 항생제 단독치료로 오해하지 않도록 병행 처치를 명시했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001445
