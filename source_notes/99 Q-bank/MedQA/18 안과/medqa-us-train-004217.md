---
type: qbank
schema_version: 1
id: medqa-us-train-004217
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f5adeb7464940dedad1107c309b27810ffe3afce3168904a48df8459b9a03a4d
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "안검염"
  - "눈꺼풀 위생"
  - "마이봄샘 기능장애"
  - "Blepharitis"
question_type: 임상증례 객관식
related_disease_slugs:
  - MTgg7JWI6rO8L-uIiOq6vO2SgO2FjOyXvCAobWFyZ2luYWwgYmxlcGhhcml0aXMpLm1k
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

19세 여자가 3개월 동안 아침에 일어날 때 흐린 시야로 내원했다. 아침에 눈을 뜨면 양쪽 눈꺼풀이 자극되고 아프며 마른 딱지로 덮여 있다. 뜨거운 샤워 후 증상이 호전된다. 건강하고 약물이나 콘택트렌즈 사용은 없다. 최근 새로운 남성 파트너와 성생활을 시작했다. 체온 37.4°C, 맥박 88회/분이다. 양쪽 눈의 위쪽 눈꺼풀 가장자리에 홍반과 자극이 있고 속눈썹 기저부에 각질이 있지만 분비물은 없다. 시력은 양쪽 20/20이다. 가장 적절한 다음 관리는 무엇인가?

## 선택지

A. 경구 독시사이클린
B. 국소 사이클로스포린
C. 국소 무피로신
D. 눈꺼풀 위생과 온찜질

## 해설

정답은 D, 눈꺼풀 위생과 온찜질이다. 아침에 심한 눈꺼풀 자극과 딱지, 속눈썹 기저부 각질 및 눈꺼풀 가장자리 홍반은 안검염을 시사한다. 온찜질로 분비물과 딱지를 부드럽게 하고 눈꺼풀 가장자리를 부드럽게 세정하는 것이 초기 관리이다. 화농성 분비물이나 시력저하가 없으므로 제시된 전신 항생제·면역조절제·무피로신을 우선할 근거가 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 대장암 선별 해설은 무관. 만성 안검염의 눈꺼풀 위생/온찜질로 해설 교체. 원정답 D 유지.
- 공식/학회 근거: https://www.aao.org/eye-health/diseases/what-is-blepharitis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004217
