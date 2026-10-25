---
type: qbank
schema_version: 1
id: medqa-us-train-009781
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:781a64ae10851da953f0a67dcc8f88396af376f9421158ae5add7f5196f46390
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "식도 천공"
  - "종격동 기종"
  - "보어하브 증후군"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rtYjrpbTtlZjruIwg7Kad7ZuE6rWwIChCb2VyaGFhdmUgU3luZHJvbWUpLm1k
question_type: investigation
difficulty: complex
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMyDshoztmZTquLAvUGFudG9wcmF6b2xlLm1k
---

# MedQA US 임상문제

## 문제

70세 남성이 오늘 아침 잠에서 깬 후 처음 느낀 악화되는 상복부 통증으로 응급실에 내원했다. 통증은 찢어지고 타는 듯하며 등으로 방사된다. 전날 상부 내시경을 받고 위염과 큰 식도열공탈장을 진단받았다. 고혈압, 고콜레스테롤혈증, 5년 전 진단된 좌각차단이 있다. 어머니는 70세에 심근경색으로, 아버지는 65세에 대동맥 박리로 사망했다. 40년 동안 하루 한 갑의 담배를 피웠으나 10년 전에 끊었다. 하루에 맥주 3캔을 마신다. 현재 히드로클로로티아지드, 암로디핀, 아토르바스타틴, 판토프라졸을 복용한다. 경미한 고통을 보인다. 체온 37.8°C, 맥박 분당 103회, 혈압은 왼팔 135/89 mmHg, 오른팔 132/90 mmHg이다. 심폐 진찰에서 매 심박동마다 딱딱거리는 소리가 들린다. 복부 진찰에서 심와부 촉진통이 있으나 장음은 정상이다. 혈색소 16.0 g/dL, 백혈구 11,000/mm³, Na⁺ 140 mEq/L, K⁺ 4.2 mEq/L, Cl⁻ 101 mEq/L, HCO₃⁻ 25 mEq/L, 크레아티닌 1.3 mg/dL, ALT 21 U/L, AST 43 U/L, 리파아제 40 U/L(정상 14~280), 트로포닌 I 0.025 ng/mL(정상 <0.1)이다. 흉부 X선에서 큰 식도열공탈장과 종격동 투과성이 보인다. 12유도 심전도는 동성 빈맥과 좌각차단을 보인다. 다음 중 진단을 위해 가장 적절한 다음 단계는?

## 선택지

A. 관상동맥조영술
B. 대동맥 조영증강 CT
C. 식도위십이지장내시경
D. 가스트로그라핀을 이용한 조영 식도조영술

## 해설


정답 D. 최근 내시경 후 통증과 종격동 기종/Hamman 징후는 의인성 식도천공을 의심하게 한다. 선택지 중 수용성 조영제 식도조영은 누출 확인에 적절하며 대동맥만 평가하는 CT는 목적이 다르다. 현행 응급 지침에서는 조영증강 CT/CT 식도조영을 우선적 영상으로 권고하므로 식도조영이 모든 상황에서 가장 정확한 유일 검사라는 뜻은 아니다. 진단과 치료를 지연시키지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009781 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 내시경 후 종격동 기종에서 수용성 식도조영 D는 주어진 선택지상 적절하나 현행 CT 식도조영보다 보편적 최선이라는 과장 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6544956/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009781
