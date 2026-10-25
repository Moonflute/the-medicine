---
type: qbank
schema_version: 1
id: medqa-us-train-007406
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5ebe1b707688c36171ff0a105af4be5643224b453a3da45f0f0165c62ab30475
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "크론병"
  - "비건락성 육아종"
  - "샘와염"
  - "구강 궤양"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tgazroaDrs5EgKENEKSAoQ3JvaG4ncyBEaXNlYXNlIChDRCkpLm1k
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

61세 남자가 3주 동안 지속된 피로, 설사, 쥐어짜는 듯한 복통으로 내원했다. 식후 복통이 더 심해진다. 지난 일주일 동안 하루 최대 네 번 물 설사를 했다. 6일 동안 입과 잇몸 통증도 있었다. 오심, 구토, 발열은 없다. 4개월 전 도미니카공화국으로 일주일 여행을 다녀왔다. 심방세동, 고혈압, 갑상선기능저하증이 있어 레보티록신, 메토프롤롤, 와파린을 복용한다. 40년 동안 매일 담배 한 갑을 피웠다. 체온은 37.9°C(100.2°F), 맥박 81회/분, 혈압 120/75 mmHg이다. 구강에 1cm 크기의 압통성 궤양 두 개가 보인다. 복부는 부드럽고 오른쪽 하복부를 누르면 경미한 압통이 있으나 방어와 반발통은 없다. 헤모글로빈 11.5 g/dL, 평균 적혈구 용적 77 fL, 백혈구 수 11,800/mm³, 혈소판 수 360,000/mm³이다. 대장내시경과 결장 점막 생검을 시행했더니 비건락성 육아종과 샘와의 호중구성 염증이 보인다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 게실염
B. 열대성 스프루
C. 크론병
D. 셀리악병

## 해설

구강궤양·설사/RLQ통증과비건락성육아종/cryptitis는Crohn C를지지한다. Crohn은전층염증으로누공·농양·천공이가능하며장천공없이만진행하는질환이라는뜻은아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Crohn C를장천공이없어야하는질환처럼쓴설명교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007406
