---
type: qbank
schema_version: 1
id: medqa-us-train-001418
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b9cf5571c88d171680115855eda8826ecba7d8e80d1a4cb62b6be0072be7cdc6
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "cyclophosphamide hemorrhagic cystitis"
  - "mesna"
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-y2nO2YiOyEsSDrsKnqtJHsl7wgKEhlbW9ycmhhZ2ljIEN5c3RpdGlzKS5tZA
question_type: prevention
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
---

# MedQA US 임상문제

## 문제

60세 남성이 2일 동안의 혈뇨, 하복부 통증 및 배뇨 시 작열감으로 내원했다. 5개월 전 고등급 비호지킨 림프종과 오른쪽 슬와정맥 심부정맥혈전증 진단을 받았다. 3주마다 다제 화학요법과 저분자량 헤파린 피하주사를 매일 투여받는다. 마지막 화학요법은 2주 전이었다. 체온은 37°C (98.6°F), 맥박은 94회/분, 혈압은 110/76 mm Hg이다. 양측 겨드랑이와 서혜부 림프절병증, 간비장비대 및 경미한 치골상부 압통이 있다. 검사 결과 헤모글로빈 10.2 g/dL, 백혈구 4,300/mm3, 혈소판 145,000/mm3, PTT 55초, PT 11초(INR=1)이다. 소변에서 적혈구 50–55/hpf, 적혈구 원주 음성, 백혈구 7/hpf, 상피세포 5/hpf, 세균은 간헐적으로 보인다. 다음 중 어떤 약물을 투여했으면 현재 상태를 예방할 수 있었을 가능성이 가장 높은가?

## 선택지

A. 프로타민 황산염
B. 메스나(메르캅토에탄설폰산)
C. 시프로플록사신
D. 덱스라족산

## 해설


시클로포스파마이드의 요로 독성 대사산물인 아크롤레인은 출혈성 방광염을 일으킬 수 있다. 메스나(B)는 아크롤레인 등 요로 독성 대사산물을 결합·불활성화해 방광 손상을 줄인다. 아세트알데히드라고 설명한 기존 해설은 잘못이다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-001418`와 직접 대조했다.
- 판정: 출혈성 방광염 예방 메스나 B 유지. 독성 대사산물을 아세트알데히드에서 아크롤레인으로 교정.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.cancer.gov/publications/dictionaries/cancer-drug/def/mesna

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001418
