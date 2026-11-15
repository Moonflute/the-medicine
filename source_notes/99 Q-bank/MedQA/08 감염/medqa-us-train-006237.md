---
type: qbank
schema_version: 1
id: medqa-us-train-006237
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0d9978f1e462fb48664ffbc4b18ea3d2c5ffebf46d0c76b153aac4d48d751b3e
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "수막구균성 수막염"
  - "밀접 접촉자 예방"
  - "리팜핀"
  - "Meningococcal disease"
related_disease_slugs:
  - MDgg6rCQ7Je8L-yImOunieyVjOq3oCAoTWVuaW5nb2NvY2N1cykubWQ
question_type: prevention
difficulty: standard
answer: D
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvUmlmYW1waW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

수막구균 수막염으로 입원한 환자와 함께 사는 가족이 마지막으로 환자를 만난 건 어제다. 가족은 지금 무증상이고 수막구균 백신을 맞은 적이 있다. 가족에게 안내할 조치는?

## 선택지

A. 예방접종력이 있으므로 별도 처치를 하지 않는다
B. 증상이 생길 때까지 기다렸다 항생제를 투여한다
C. 백신을 추가 접종하고 항생제는 사용하지 않는다
D. 접종력과 무관하게 가능한 한 빨리 예방 항생제를 투여한다

## 해설


동거인은 침습성 수막구균 감염의 밀접 접촉자이므로 백신 접종 여부와 무관하게 신속한 항생제 예방요법 대상이다. 약제 선택은 연령, 임신, 상호작용과 감수성을 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006237 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Rifampin2회·2주라는 잘못된 용량/기간 교정; 동거 접촉자 예방 D 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/surv-manual/php/table-of-contents/chapter-8-meningococcal-disease.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006237
- https://kdca.go.kr/bbs/kdca/55/304967/download.do
