---
type: qbank
schema_version: 1
id: medqa-us-train-007231
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f77d63967d3f28f1336f4b1727da446b7c5a4469e9ac84d5e5d8c809277c0766
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "크론병"
  - "경벽성 육아종"
  - "구강 궤양"
  - "결절성 홍반"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tgazroaDrs5EgKENEKSAoQ3JvaG4ncyBEaXNlYXNlIChDRCkpLm1k
question_type: mechanism
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 남자가 심한 복통으로 응급실에 내원했다. 일주일 동안 피로와 발열이 있었고, 쥐어짜는 듯한 하복부 통증과 여러 차례의 설사가 있었다. 배변하면 통증이 어느 정도 완화된다고 한다. 2주 전 로키산맥으로 캠핑을 다녀왔으며 여행 중 덜 익힌 고기를 먹은 것이 원인일까 걱정한다. 불에서 구운 소고기와 닭고기를 먹었다고 한다. 정맥 수액과 모르핀을 투여하기 시작했다. 체온은 99.5°F(37.5°C), 혈압 130/77 mmHg, 맥박 90회/분, 호흡수 12회/분, 산소포화도 98%이다. 검사 결과 헤모글로빈 10 g/dL, 헤마토크릿 28%, 백혈구 수 11,500/mm³(감별 정상), 혈소판 수 445,000/mm³, ESR 75 mm/시간이다. 진찰에서 불편해 보이고 복부 촉진 시 통증이 있다. 이비인후과 검사에서 입안에 통증성 얕은 궤양이 여러 개 보이며, 하지에는 가려운 고리 모양 병변이 있다. 심폐검사는 정상이다. 이 환자의 기저 상태를 가장 잘 설명하는 것은 무엇인가?

## 선택지

A. 장벽의 경련성
B. p-ANCA 양성 자가면역성 장질환
C. 직장 점막의 주머니 돌출
D. 장벽 전층의 육아종

## 해설

빈혈, 혈소판 수와 ESR 상승, 구강 아프타는 염증성 장질환 중 크론병을 시사하므로 D의 전층성 육아종성 염증이 적합하다. 모든 크론병 환자에서 육아종이 확인되는 것은 아니다. 캠핑 후 발생한 감염 가능성은 별도의 검사로 배제해야 한다. 원문의 가려운 고리 모양 피부 병변을 결절홍반이나 관절통으로 바꾸어 해석하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Crohn D를모든환자의전층육아종으로확정하거나원문없는피부결절/관절통을추가한설명 한정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007231
