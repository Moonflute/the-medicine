---
type: qbank
schema_version: 1
id: medqa-us-train-009772
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:50956b6827b9469edf88eb66edcb5e36f05a797f80dea1bd2511907444d50d10
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "항인지질 증후군"
  - "항카디오리핀 항체"
  - "반복 유산"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-2VreyduOyngOyniCDspp3tm4TqtbAgKEFudGlwaG9zcGhvbGlwaWQgU3luZHJvbWUpLm1k
question_type: investigation
difficulty: complex
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

29세 아프리카계 미국인 여성이 임신 4회, 출산 0회로 반복 유산 평가를 위해 내원했다. 매 임신이 임신 2분기에 자연유산으로 끝났다. 관절통, 만성 편두통, 경계가 불분명한 반점상 피부 발진이 반복되는 병력이 있다. 손가락이 창백하고 차가워졌다가 붉어지는 에피소드도 있다. 남편과 성생활을 하고 피임은 하지 않는다. 직업은 조경사이다. 어머니에게 자궁내막증 병력이 있다. 매일 산전 종합비타민을 복용하고 가끔 수마트립탄을 복용한다. 피곤해 보인다. 체온 36.5°C, 맥박 분당 65회, 혈압 110/65 mmHg이다. 손 진찰에서 오른쪽 검지 끝에 두 개의 궤양과 손발톱 아래 다수의 작은 출혈이 보인다. 양쪽 종아리에 보라색 그물모양 발진이 있다. 다음 중 진단을 확진하는 데 가장 도움이 되는 검사는?

## 선택지

A. 한랭글로불린 검사
B. 자궁경검사
C. 항카디오리핀 항체 검사
D. 겸상 적혈구를 확인하는 혈액 도말검사

## 해설


반복 임신중기 유산, livedo와 말단 허혈 소견은 obstetric APS를 의심하게 한다. 보기 중 anticardiolipin 항체 C가 적절한 평가이다. Lupus anticoagulant와 anti-β2GPI도 함께 평가하며, 항체는 일시적 양성이 가능하므로 통상 최소12주 간격의 지속양성을 확인한다. 분류기준을 임상진단과 기계적으로 동일시하지 않으며 단회 저역가 aCL만으로 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009772 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: anticardiolipin 단회로 APS가 확진된다는 오류를 지속양성·임상 맥락 및 검사panel로 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://ard.bmj.com/content/82/10/1258

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009772
