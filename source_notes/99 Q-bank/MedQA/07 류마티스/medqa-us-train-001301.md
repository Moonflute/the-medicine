---
type: qbank
schema_version: 1
id: medqa-us-train-001301
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a5f40cafeca8c1b7ad605e0b4a77cec7c6bce8f501e251d3820faac1f53ae694
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "reactive arthritis"
  - "postinfectious arthritis"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-uwmOydkeyEsSDqtIDsoIjsl7wgKFJlYWN0aXZlIEFydGhyaXRpcykubWQ
  - MDcg66WY66eI7Yuw7IqkL-qwkOyXvCDqtIDsoIjsl7wgKEluZmVjdGlvdXMgQXJ0aHJpdGlzKS5tZA
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL05hcHJveGVuLm1k
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL1N1bGZhc2FsYXppbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
---

# MedQA US 임상문제

## 문제

34세 남성이 7주 넘게 지속된 관절통을 호소하며 가정의학과에 내원했다. 관절염이 시작되기 전에 가벼운 설사와 복부 경련을 일으킨 위장관 감염을 앓았던 것을 기억한다. 회복 후 관절통이 시작될 때까지는 문제가 없었다. 나프록센을 처방받았지만 여전히 상태가 좋지 않다. 특별한 과거력이나 가족력은 없다. 혈압은 120/78 mm Hg, 호흡수는 17회/분, 맥박은 64회/분, 체온은 36.7°C (98.0°F)이다. 다음 중 이 환자 상태의 치료에 가장 유익할 가능성이 높은 요법은 무엇인가?

## 선택지

A. 디클로페낙
B. 설파살라진
C. 케토프로펜
D. 세프트리악손

## 해설


감염 뒤 지속된 관절염은 반응성관절염을 시사한다. 나프록센에도 증상이 지속되므로 선지 중 말초관절염에 사용하는 DMARD인 설파살라진(B)을 고려할 수 있다. 이는 설사 원인균을 치료하는 항생제가 아니며 모든 반응성관절염의 1차 약물이라는 뜻도 아니다. 치료는 염증의 지속·정도와 감염 상태를 평가해 정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 `medqa-us-train-001301` 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 감염후 반응성관절염에 NSAID 실패 후 설파살라진 B 고려. 살피라민 오염과 보편적 1차/항균제 설명 제거.
- 범위: evidence-reviewed. 기초 내용 대조와 해당 쟁점의 근거 확인을 구별하며 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/NG65/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001301
