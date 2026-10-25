---
type: qbank
schema_version: 1
id: medqa-us-train-004090
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2c51863754ab5e02a2db93a0f89ef1cf2ef3d517d02697381c35169a3c6450c3
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "크론병"
  - "소장 협착"
  - "협착성형술"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tgazroaDrs5EgKENEKSAoQ3JvaG4ncyBEaXNlYXNlIChDRCkpLm1k
question_type: 임상증례 객관식
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
  - ZHJ1ZzowMyDshoztmZTquLAvTG9wZXJhbWlkZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 남자가 하루 동안 반복된 구토로 응급실에 왔다. 담즙성 구토를 15회 이상 했고 그동안 복부 경련이 있었지만 배변이나 방귀는 없었다. 발열과 설사는 없다. 28세에 진단받은 크론병은 경구 메살라민으로 잘 조절되고 있다. 출생 시 중장 염전으로 소장 부분절제술을 받았다. 그 외 비타민 B12, 엽산, 로페라마이드, 황산철, 비타민 D3를 복용한다. 불편해 보이고 입술이 말라 있다. 체온 37.1°C, 맥박 103회/분, 혈압 104/70 mmHg이다. 복부가 팽만되고 고창음이 나며 배꼽 주위와 오른쪽 아랫배에 압통이 있다. 직장검사는 정상이다. 복부 CT에서 중간부터 말단 회장에 전환점이 있는 소장 확장 고리들이 보인다. 정맥 수액, 비위관 감압, 프로메타진, 진통제로 24시간 보존적 치료를 했지만 호전되지 않아 개복술을 계획했다. 수술 중 약 20cm 간격으로 중간 회장에 두 개의 뚜렷한 협착이 보였다. 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 회결장절제술
B. 각 협착에 대한 협착성형술
C. 복부를 봉합하고 완화의료 시작
D. 소장 절제술과 회장루 조성

## 해설

기존 소장절제력이 있고 떨어진 두 회장 협착이 있어 장길이를 보존하는 strictureplasty B가 선택지 중 적절하다. 이는 단순히 장을 잡아당기는 행위가 아니라 협착 부위를 절개·재봉합해 내강을 넓히는 수술이다. 길이·염증/섬유화·농양/누공·악성 의심 등을 평가해 적합성을 결정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Crohn 협착성형술 B를 단순 stretching으로 오역한 해설 교정.
- https://doi.org/10.14309/ajg.0000000000003465

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004090
