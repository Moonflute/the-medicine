---
type: qbank
schema_version: 1
id: medqa-us-train-006621
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:120ff07a60801ae463ee64e66a41541e0182f6af83fb0bb50992de26fcb16db3
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "재급식 증후군"
  - "영양 재개"
  - "저인산혈증"
question_type: prevention
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

69세 남성이 혼돈으로 딸과 함께 응급실에 내원했다. 딸은 어제 아버지가 자신이 누구인지 기억하지 못했고 점심을 차리려 했을 때 냉장고가 완전히 비어 있었다고 한다. 지난주 방문했을 때는 평소와 같았다. 수년간 알코올 사용장애가 있었고 20년 넘게 의사를 찾지 않았다. 다른 만성질환이 있는지는 모른다. 응급실에서 체온은 101.2°F(38.4°C), 맥박은 분당 103회, 호흡수는 분당 22회, 실내 공기 산소포화도는 92%이다. 체질량지수는 17.1kg/m²이고 사람, 장소 및 시간에 대한 지남력이 없다. 진찰 중 반응이 없어지고 산소포화도가 84%로 떨어져 기관삽관 후 폐렴으로 중환자실에 입원했다. 진정 상태이며 이전 입원에서 흡인 병력이 있어 총비경구영양을 시작했다. 이틀 후 새로운 말초부종이 보였다. 검사에서 Na+ 133, Cl− 101, K+ 2.4, HCO3− 24 mEq/L, BUN 22 mg/dL, 포도당 124 mg/dL, 크레아티닌 1.1 mg/dL, 인산염 1.1 mg/dL, Mg2+ 1.0 mg/dL이다. 이 환자에게 발생한 합병증을 예방할 수 있었던 방법은?

## 선택지

A. 총비경구영양을 천천히 시작
B. 경장영양 사용
C. 푸로세미드 시작
D. 저당 총비경구영양 사용

## 해설

영양결핍 환자에게 영양 공급을 시작한 뒤 저인산혈증, 저칼륨혈증, 저마그네슘혈증과 부종이 생기면 재급식 증후군을 의심한다. 탄수화물 공급에 따른 인슐린 증가로 전해질이 세포 안으로 이동하고 수분·나트륨 저류가 생기는 것이 핵심이며, 인이 많은 음식을 먹어서 생기는 현상이 아니다. 영양 공급 속도를 낮추는 A와 함께 티아민, 전해질과 체액 상태를 평가·교정하고 서서히 증량한다. 이는 정맥영양뿐 아니라 경장영양에서도 발생할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 재급식 증후군에서 인슐린에 따른 세포 내 전해질 이동을 고인산 식품 때문이라고 설명한 오류를 교정한다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/cg32/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006621
