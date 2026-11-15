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
question_type: management
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

생후 2일 신생아에게 눈꺼풀의 심한 부종과 많은 고름이 생겼다. 각막 평가와 검체 채취를 했고, 임균성 신생아 안염이 강하게 의심된다. 황달은 없고 정맥 칼슘을 투여받지 않는다. 검사 결과를 기다리는 동안 적절한 치료는?

## 선택지

A. 에리트로마이신 안연고 단독
B. 전신 세프트리악손
C. 생리식염수 세척 단독
D. 경구 아목시실린

## 해설

생후 수일 내 다량의 고름과 눈꺼풀 부종이 있으면 임균성 안염을 고려한다. 각막 손상을 줄이기 위해 전신 치료를 지체하지 않으며, 안연고만으로는 치료되지 않는다. 전신 감염 가능성도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 정답 B와 반대로 산모 아목시실린을 권한 명백한 예방 해설 오류 교정.
- https://www.cdc.gov/std/treatment-guidelines/gonorrhea-neonates.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001635
- https://www.kdca.go.kr/bbs/kdca/55/310321/artclView.do
