---
type: qbank
schema_version: 1
id: medqa-us-validation-000320
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:3aee83d441516a1dacf09d1127aea3af55a8a5f7a472ee218493865b8b40f699
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "복잡성 게실염"
  - "결장주위 농양"
  - "경피적 배액"
  - "Diverticulitis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsozsi6Tsl7wgKERpdmVydGljdWxpdGlzKS5tZA
question_type: management
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0FsbG9wdXJpbm9sLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

55세 비만 남성이 복통으로 응급실에 왔다. 통증은 2일 전 시작되어 계속 악화되었다. 현재 복용약은 알로푸리놀뿐이다. 체온 38.3°C, 혈압 157/98 mmHg, 맥박 120회/분, 호흡수 17회/분, 산소포화도 98%이다. 왼쪽 아랫배 압통이 있고 직장수지검사는 정상이다. CT에서 결장 점막의 염증성 게실과 4 cm 농양이 보인다. 적절한 치료는?

## 선택지

A. 시프로플록사신과 겐타마이신
B. CT 유도 경피적 배액
C. 복강경 수술과 배액
D. 피페라실린-타조박탐과 반코마이신

## 해설


정답 B. 발열과 빈맥, 4cm 농양을 동반한 복잡성 게실염에서 접근 가능한 농양의 CT 유도 경피 배액은 항생제와 함께 고려할 적절한 감염원 조절 방법이다. ASCRS는 안정 환자의 >3cm 농양에서 대개 배액을 권고하지만 WSES는 작은 <4–5cm 농양에 항생제 단독 시도도 허용하므로 4cm라는 수치만으로 모든 상황에 배액이 필수인 것은 아니다. 악화·복막염·실패 여부를 계속 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000320 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 4cm 게실농양 B 배액+항생제는 적절한 선택이나 모든 지침에서 일률적 배액 필수라는 과장 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://doi.org/10.1097/DCR.0000000000004382
- https://doi.org/10.1186/s13017-020-00313-4

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000320
