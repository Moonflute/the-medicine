---
type: qbank
schema_version: 1
id: medqa-us-train-004511
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f7a95a6ccd86769f7321c114de52d421585129374b6c37bd5d038522f4503306
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "파제트병"
  - "변형성 골염"
  - "알칼리성 인산분해효소 상승"
question_type: diagnosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-2MjOygnO2KuOuzkSAoUGFnZXQncyBEaXNlYXNlKS5tZA
difficulty: simple
answer: B
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

67세 남성이 왼쪽 고관절 통증으로 내원했다. 진찰에서 양쪽 무릎에 경한 관절삼출이 있고 양쪽 슬개대퇴관절에 염발음이 있다. 최근 청력이 악화되었고 모자가 더 이상 맞지 않는 느낌이 든다고 한다. 뼈 스캔에서 두개골, 오른쪽 근위 대퇴골과 왼쪽 장골에 미만성 섭취 증가가 보인다. 이 환자에게 예상되는 검사 이상은 무엇인가?

## 선택지

A. 혈청 알칼리성 인산분해효소 감소
B. 혈청 알칼리성 인산분해효소 증가
C. 혈청 부갑상샘호르몬 감소
D. 혈청 칼슘 증가

## 해설

정답은 B, 혈청 알칼리성 인산분해효소(ALP) 증가이다. 모자가 맞지 않을 정도의 두개골 변화, 청력저하 및 두개골·골반·대퇴골의 골스캔 섭취 증가는 파제트 골질환을 시사한다. 비정상적으로 증가한 골재형성과 골형성 활동 때문에 ALP가 상승하며, 합병증이 없는 경우 혈청 칼슘은 보통 정상이다. 골스캔 소견은 본문에 서술되어 있어 별도 이미지가 없어도 답을 판단할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. S. bovis/대장내시경 해설은 다른 케이스. 두개골 크기 증가·청력저하·골스캔 섭취를 파제트 골질환과 ALP 상승으로 설명. 원정답 B 유지.
- 공식/학회 근거: https://www.orthoinfo.org/diseases--conditions/pagets-disease-of-bone/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004511
