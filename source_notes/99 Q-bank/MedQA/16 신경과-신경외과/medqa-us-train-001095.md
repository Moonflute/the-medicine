---
type: qbank
schema_version: 1
id: medqa-us-train-001095
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7c08f4f7b0ffaf195e436be23dac0450cc543694a96293746e7b923141bb19e6
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "Restless legs syndrome"
  - "Iron deficiency anemia"
question_type: investigation
related_disease_slugs:
  - MDkg7ZiI7JWhL-yyoCDqsrDtlY0g67mI7ZiIIChJcm9uIERlZmljaWVuY3kgQW5lbWlhKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

72세 남성이 지난 3개월간 심해진 수면 장애를 주소로 일차 진료 의사를 방문했다. 그는 밤중에 다리를 움직이고 싶은 충동 때문에 자주 잠에서 깨며, 잠들기 전 텔레비전을 볼 때도 비슷한 느낌을 받는다고 보고했다. 이러한 충동은 걸어 다니거나 다리를 문지르면 완화된다. 환자의 아내는 환자가 자는 동안 다리를 움직이는 것을 가끔 보며, 이 때문에 잠에서 깨기도 한다고 언급했다. 최근의 수면 문제로 인해 환자는 깨어 있기 위해 하루 동안 커피 섭취를 늘렸으며, 매일 최대 3잔을 마신다고 보고했다. 환자의 과거력상 고혈압과 비만이 있으나, 생활 습관 변화 없이 지난 3개월간 10파운드(약 4.5kg)의 체중 감소가 있었다고 밝혔다. 현재 하이드로클로로티아자이드(hydrochlorothiazide)와 종합비타민을 복용 중이다. 마지막 대장내시경 검사는 50세 때였으며, 가족력으로 제2형 당뇨병과 치매가 있다. 이번 방문 시 체온은 99.1°F(37.3°C), 혈압은 134/81 mmHg, 맥박은 82회/분, 호흡수는 14회/분이었다. 신체 검진에서 공막이 약간 창백했다. 심혈관계 및 폐 검진은 정상이며, 복부는 부드럽고 압통은 없다. 신경학적 검사에서 양측 슬개건 반사는 2+이며, 모든 사지의 근력은 5/5이다. 이 환자 증상의 기저 원인을 파악하는 데 가장 가능성이 높은 검사는 무엇인가?

## 선택지

A. 뇌 도파민 흡수 스캔(Dopamine uptake scan)
B. 대장내시경
C. 카페인 섭취 감소 시도
D. 프라미펙솔(pramipexole) 투여 시도

## 해설

야간·안정 시 다리를 움직이고 싶은 충동이 운동으로 완화되어 하지불안증후군에 합당하다. 고령 남성의 비의도적 체중감소와 창백은 철결핍 및 위장관 질환 평가의 근거가 되어, 원인 병변을 찾는 선지 중 대장내시경(B)이 가장 적절하다. 실제로는 CBC와 ferritin·transferrin saturation 등으로 빈혈과 철 상태를 함께 확인하며, 철결핍빈혈이 확인된 남성에서는 상·하부 위장관 평가를 고려한다. RLS 자체만으로 대장 질환이나 암이 확진되는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. RLS와 체중감소·창백·장기간 미검진에서 원인 병변을 찾는 B를 유지하되 철결핍을 확진 없이 단정하거나 모든 RLS에 즉시 내시경을 권하는 표현을 수정한다.
- 공식/학회 근거: https://aasm.org/wp-content/uploads/2026/02/quality-measures-restless-legs-RLS-AASM-2025.pdf
- 공식/학회 근거: https://agau.gastro.org/course/AGA_Clinical_Guidelines_on_Gastrointestinal_Evaluation_of_Iron_Deficiency_Anemia_-_Accompanying_Educational_Presentation/d351c1ce-dc6f-4523-9606-868e04ad4359

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001095
