---
type: qbank
schema_version: 1
id: medqa-us-train-009414
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:da9ab45c1e69f4d219785840edfca87118541a01c55c93b9615afa6c874b9e26
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "full-thickness burn"
  - "전층 화상"
  - "burn excision and grafting"
  - "Burn"
related_disease_slugs:
  - MTEg7Jm46rO8L-2ZlOyDgSAoQnVybikubWQ
question_type: management
difficulty: standard
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
---

# MedQA US 임상문제

## 문제

34세 여성이 아파트에서 전기 화재가 발생한 후 응급의료서비스에 의해 응급실로 이송되었다. 기침을 하고 비강 캐뉼라 2 L에서 산소포화도는 98%이다. 오른쪽 전완에 건조하고 하얗고 가죽 같은 화상이 있으며 모든 사지의 맥박과 감각은 정상이다. 심박수 110회/분, 혈압 110/80 mmHg, 체온 99.2°F, 호흡수 20회/분이다. 입안에 그을음은 없고 불이 시작되자마자 방을 빠져나왔다고 한다. 가장 적절한 치료는 무엇인가?

## 선택지

A. 바시트라신
B. 마페나이드 아세트산
C. 절제 및 피부이식
D. 절단술

## 해설


건조하고 하얗고 가죽 같은 화상은 전층 피부손상을 시사하며 절제·피부이식(C)이 필요한 경우에 해당한다. 전층 화상은 표피와 진피 전층의 파괴이며 피하조직까지 반드시 모두 침범한다는 뜻은 아니다. 사지의 맥박과 감각이 정상이라는 기술만으로 깊은 피부손상을 배제하지 않는다. 실제 진료에서는 화상 전문평가와 흡입손상/전기 노출의 동반 손상을 확인하며 국소 연고만으로 깊은 결손을 복구할 수 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009414 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 전층 화상의 해부층을 진피 전층 소실로 정확히 하고 신경·혈관 상태와 전기화상 평가를 구분했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://jts.health.mil/assets/docs/cpgs/Burn_Care_CPG_10_June_2025_ID12.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009414
