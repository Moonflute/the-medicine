---
type: qbank
schema_version: 1
id: medqa-us-train-001635
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f0c2e9a9abe7ebf57f1e61e6443077e610c546f3a8cde4225ac810cc090a38f3
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "gonococcal ophthalmia neonatorum"
  - "neonatal conjunctivitis"
  - "erythromycin prophylaxis"
question_type: prevention
related_disease_slugs:
  - MTgg7JWI6rO8L-qysOyEseyXvCAoQ29uanVuY3Rpdml0aXMpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

분만 2일 후 신생아에게 노란 분비물이 있는 충혈된 눈이 발생했다. 임신 39주에 28세 초임부에게서 태어났고 임신과 분만은 합병증이 없었다. 산모는 첫 산전진료 이후 산부인과에 방문하지 않았다. 체온은 37.2°C (99.0°F), 맥박은 140회/분, 호흡수는 42회/분, 혈압은 73/53 mm Hg이다. 오른쪽 눈꺼풀 부종, 결막충혈 및 다량의 노란 점액농성 분비물이 보이나 각막궤양이나 각막염은 없고 안저검사는 정상이다. 진단을 확인하고 적절한 치료를 시행했다. 다음 중 이 상태를 예방했을 가능성이 가장 높은 것은 무엇인가?

## 선택지

A. 신생아에게 세프트리악손 정맥주사
B. 신생아에게 에리트로마이신 국소 투여
C. 산모에게 독시사이클린 경구 투여
D. 산모에게 아목시실린 경구 투여

## 해설

생후 2일 다량 화농성 결막염은 임균성 안염을 의심한다. 출생 직후 신생아 양안 국소 에리트로마이신(B)은 임균성 안염 예방에 사용된다. 산모 아목시실린(D)은 이를 대신하지 못한다. 이미 발생한 감염은 국소 연고만이 아니라 적절한 전신 치료가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 정답 B와 반대로 산모 아목시실린을 권한 명백한 예방 해설 오류 교정.
- https://www.cdc.gov/std/treatment-guidelines/gonorrhea-neonates.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001635
