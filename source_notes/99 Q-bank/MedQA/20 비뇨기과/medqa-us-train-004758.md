---
type: qbank
schema_version: 1
id: medqa-us-train-004758
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6d0511187ac81e6c3bf00b671364a6f69fea56f839938906b306af8244a84c2b
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "수술 후 요폐"
  - "급성 무뇨"
  - "방광 스캔"
  - "Urinary retention"
question_type: investigation
related_disease_slugs:
  - MDQg64K067aE67mEL-yalOu2leymnSAoRGlhYmV0ZXMgSW5zaXBpZHVzKS5tZA
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

그레이브스병으로 갑상샘을 거의 전부 절제한 지 6시간 후, 58세 남성이 소변을 전혀 보지 못했다. 수술은 성공했고 경한 목 통증 외에는 괜찮다. 제2형 당뇨병과 고혈압이 있고 아버지는 상염색체 우성 다낭성 신장질환이 있다. 수술 전 메트포르민과 리시노프릴을 규칙적으로 복용하고 두통에는 이부프로펜을 필요할 때 사용했다. 현재 아세트아미노펜과 코데인을 복용한다. 체온은 36.2°C (97.2°F), 맥박은 분당 82회, 혈압은 122/66 mm Hg이다. 앞목 수술 상처는 7cm이고 경한 부종이 있지만 발적이나 열감은 없다. 관리에서 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 소변검사 시행
B. 침상 방광 스캔 시행
C. 신장 생검
D. 푸로세미드 투여

## 해설

정답은 B, 침상 방광 스캔이다. 수술·마취 및 코데인 같은 약물 후 배뇨가 없으면 방광에 소변이 고인 요정체와 신장에서 소변이 적게 만들어지는 상태를 구분해야 한다. 방광 스캔으로 방광 내 소변량을 비침습적으로 확인한다. 요폐는 소변이 차지 않는다는 뜻이 아니라 충분히 배출되지 않는 상태이며, 감압 필요성을 판단하기 전에 푸로세미드를 경험적으로 주는 것은 적절하지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 요폐를 방광에 소변이 차지 못함으로 설명한 반대기전 오류 수정. B 스캔으로 요정체/저생성 구분.
- 공식/학회 근거: https://www.niddk.nih.gov/health-information/urologic-diseases/urinary-retention/diagnosis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004758
