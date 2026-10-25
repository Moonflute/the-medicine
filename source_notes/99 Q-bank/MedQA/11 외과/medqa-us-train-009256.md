---
type: qbank
schema_version: 1
id: medqa-us-train-009256
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:217420006c435c2c7bfd30d6f486421a1f4ab07523914ac6e6d43a2c5264087a
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "pancreatic fistula"
  - "췌장루"
  - "postoperative enterocutaneous fistula"
related_disease_slugs:
  - MTEg7Jm46rO8L-yepSDriITqs7UgKEVudGVyb2N1dGFuZW91cyBGaXN0dWxhKS5tZA
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL1RpbW9sb2wubWQ
---

# MedQA US 임상문제

## 문제

만성 췌장염으로 전췌장절제술을 받은 지 12일 된 62세 여성이 복부 상처에서 삼출액이 나온다고 했다. 8시간 전 처음 발견했으며 수술 후 지속적인 저혈압으로 정맥 수액이 필요했고 음식 섭취도 잘 못했다. 제1형 당뇨병과 녹내장이 있다. 30년간 하루 담배 한 갑을 피우다 2년 전 금연했고, 20세부터 매일 보드카 1파인트를 마시다 35세에 끊었다. 현재 피하 인슐린과 티몰롤 점안액을 사용한다. 편안해 보이며 체온 37°C, 맥박 95회/분, 혈압 104/78 mmHg이다. 복부는 부드럽고 경미한 압통이 있다. 명치에서 아래쪽으로 이어지는 12 cm 수직 상처의 중앙에서 점성 있는 짙은 녹색 물질 25 mL가 배액된다. 상처 가장자리는 발적이 없고 고름은 없다. 헤마토크릿 38%, 백혈구 8,000/mm³, Na⁺ 135, Cl⁻ 100, K⁺ 3.4, HCO₃⁻ 23 mEq/L, 요소질소 13 mg/dL, 크레아티닌 1.1 mg/dL, 혈당 190 mg/dL이다. 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 복부 수술적 탐색
B. 경구 음식 섭취와 정맥 수액
C. 총정맥영양 및 장루 주머니
D. 상처 변연절제와 세척

## 해설


수술12일 뒤 상처로 짙은 녹색 장내용물 양상의 액체가 나오면 장피부누공이나 문합부 누출을 의심한다. 전췌장절제 후라는 사실만으로 췌장액 누공이라고 부르지 않는다. 안정적이며 복막염·패혈증이 뚜렷하지 않다면 수분·전해질, 배액량·해부학과 영양을 평가하고 피부를 보호하며 보존치료를 계획한다. 경구 섭취가 어려운 현재 선택지에서는 정맥영양과 누공 배액을 받는 ostomy pouch(C)가 적절하다. 이 주머니는 새 장루를 수술로 만드는 뜻이 아니다. 저배액 누공에서 경구/경장영양이 가능하면 TPN이 항상 필수는 아니며 복막염·농양 등이 있으면 배농/수술 판단이 달라진다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009256 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 전췌장절제 후 배액을 췌장누공으로 단정한 오류를 장피부누공/장내용물 누출로 교체하고 ostomy pouch 의미를 바로잡았다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://aspenjournals.onlinelibrary.wiley.com/doi/full/10.1177/0148607116680792

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009256
