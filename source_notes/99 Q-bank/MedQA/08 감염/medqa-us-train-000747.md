---
type: qbank
schema_version: 1
id: medqa-us-train-000747
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b9b6a4526d63adb5d26539466d2c464a0c8f32c6935ef7195bada7da101586d7
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "heparin-induced thrombocytopenia"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2XpO2MjOumsCDsnKDrsJwg7ZiI7IaM7YyQ6rCQ7IaM7KadIChIZXBhcmluLUluZHVjZWQgVGhyb21ib2N5dG9wZW5pYSwgSElUKS5tZA
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
---

# MedQA US 임상문제

## 문제

결장암으로 개복 결장절제술 및 일시적 결장루술을 받은 지 5일 후, 73세 남성이 왼쪽 종아리에 심한 통증과 부종을 보입니다. 그는 3개월 전 결장암을 진단받았습니다. 갑상선기능저하증과 고혈압이 있습니다. 그의 아버지는 68세에 결장암으로 사망했습니다. 흡연은 하지 않습니다. 입원 전 복용 약물은 레보티록신, 암로디핀, 카르베딜롤이었습니다. 수술 이후에는 미분획 헤파린(unfractionated heparin), 모르핀, 피페라실린-타조박탐을 투여받고 있습니다. 키는 172cm, 체중은 101kg이며, 체질량지수(BMI)는 34.1kg/m2입니다. 환자는 불편해 보입니다. 체온은 38.1°C, 맥박은 103회/분, 혈압은 128/92mmHg입니다. 진찰 결과 양쪽 허벅지에 다발성 괴사 병변이 관찰됩니다. 왼쪽 종아리는 발적, 압통, 부종이 있습니다. 왼쪽 발의 배굴(dorsiflexion) 시 무릎 뒤쪽에 통증이 유발됩니다. 복부는 부드럽고 압통은 없습니다. 정중선 절개 부위는 치유 중이며 결장루는 건강하고 기능하고 있습니다. 나머지 진찰 소견은 정상입니다. 검사실 검사 결과는 다음과 같습니다: 혈색소 13.6g/dL, 백혈구 수 12,100/mm3, 혈소판 수 78,000/mm3, 프로트롬빈 시간 18초(INR = 1.1), 활성화 부분 트롬보플라스틴 시간 46초, 혈청 나트륨 138mEq/L, 염소 103mEq/L, 칼륨 4.1mEq/L, 요소질소 18mg/dL, 포도당 101mg/dL, 크레아티닌 1.1mg/dL. 다음 중 가장 적절한 다음 관리 단계는 무엇입니까?

## 선택지

A. 미분획 헤파린에서 와파린 요법으로 전환
B. 미분획 헤파린에서 아르가트로반(argatroban) 요법으로 전환
C. 비타민 K 투여
D. 혈소판 농축액 수혈

## 해설


헤파린 노출5일 뒤 혈소판감소, 의심 정맥혈전과 피부괴사는 HIT를 강하게 의심하게 한다. 4Ts 등으로 임상 가능성을 평가하고 모든 heparin을 중단하면서 비헤파린 항응고제인 직접 thrombin 억제제 argatroban으로 전환하는 B가 적절하다. 면역검사·기능검사를 의뢰하되 고위험에서는 결과를 기다리며 처치를 미루지 않는다. 혈소판 회복 전 warfarin을 시작하면 피부괴사·사지괴사 위험이 있어 피한다. 활동성 출혈 등 특별한 사유 없이 혈소판을 일률적으로 수혈하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000747 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: argatroban의 분류를 비헤파린 직접 thrombin 억제제로 고치고 급성 HIT에서 warfarin 조기 전환 위험을 명시했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6258919/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000747
