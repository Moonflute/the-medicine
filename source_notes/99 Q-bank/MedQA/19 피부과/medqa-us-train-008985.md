---
type: qbank
schema_version: 1
id: medqa-us-train-008985
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:38c2fce0c94a92af750698641603ad2a621c80656ac762fe33fb9fe05b274840
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "isotretinoin"
  - "teratogenicity"
  - "pregnancy testing"
question_type: prevention
related_disease_slugs: []
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL05hcHJveGVuLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

19세 여성이 대학 보건진료소에서 정기 방문을 했다. 과거력으로 우울증, 여드름, 주의력결핍 과잉행동장애, 월경곤란증이 있다. 파록세틴, 덱스트로암페타민을 복용하고 월경 중 나프록센을 사용한다. 금연을 위해 니코틴 대체제를 사용하고 있다. 여드름, 최근 체중 증가, 지난 한 달 동안의 우울한 기분을 걱정한다. 월경이 불규칙하고 아프다고도 한다. 성생활은 하지 않고 한 달에 한 번 정도 운동한다. 체온 97.6°F(36.4°C), 혈압 133/81mmHg, 맥박 80회/분, 호흡수 14회/분, 산소포화도 98%이다. 병적 비만이고 얼굴에 여드름이 있다. 골반검사는 정상이다. 환자에게 이소트레티노인 처방전을 주었다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. hCG 확인
B. 프로락틴 확인
C. TSH 확인
D. 일주일 후 혈압 재측정

## 해설

Isotretinoin을 시작하기 전 임신 가능 환자는 성생활을 하지 않는다고 보고해도 요구되는 임신검사를 확인해야 하므로 A가 적절하다. 미국 iPLEDGE의 치료 전 검사와 임신예방 조건을 충족하기 전 복용하지 않는다. 한 번의 hCG만으로 전체 요구조건이 끝나는 것은 아니며 월경·정신건강 등도 별도로 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Isotretinoin 전 hCG A는 맞고 처방을 받았다고 바로 복용 가능한 것처럼 오해하지 않도록 안전 조건을 명확히 한다.
- 공식/학회 근거: https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/ipledge-risk-evaluation-and-mitigation-strategy-rems

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008985
