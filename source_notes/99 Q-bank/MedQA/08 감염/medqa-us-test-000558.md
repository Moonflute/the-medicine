---
type: qbank
schema_version: 1
id: medqa-us-test-000558
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:d8b4c9222784219ef1a7919e3a55db8892e59a5976bcbf251f4dd19f292a37bf
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "폐페스트"
  - "선페스트"
  - "Yersinia pestis"
  - "plague"
related_disease_slugs: []
question_type: diagnosis
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

56세 남성이 전날부터 피가 섞인 가래를 동반한 심한 호흡곤란으로 응급실에 왔다. 미국 남서부, 애리조나 북부와 뉴멕시코를 하이킹하던 중 오른쪽 허벅지에 갑자기 가려운 구진성 발진이 생겼고 다음 날 같은 쪽 서혜부가 심하게 아프고 부었다. 의사를 찾지 않고 진통제로 조절했다. 다른 중대한 병력이나 복용약은 없다. 혼돈 상태였고 체온 39.5℃(103.1℉), 맥박 105회/분, 호흡 32회/분, 혈압 95/45 mmHg였다. 왼쪽 폐 하엽에서 수포음이 들렸고 오른쪽 서혜부 림프절이 커져 물렁한 느낌과 단단한 중심부가 있었다. 주변은 부어 있었지만 피부 홍반이나 연조직염은 없었다. CT는 그림과 같다. 다음 중 이 소견을 가장 잘 설명하는 것은?

## 선택지

A. 라임병
B. 말라리아
C. 페스트
D. 레지오넬라병

## 해설


미국 남서부 야외 노출 후 같은 쪽의 심한 서혜부 림프절 종창에 이어 객혈·호흡곤란과 패혈증 소견이 생겨 페스트(C)를 시사한다. CT 그림은 실제로 없어 특정 결절 모양을 관찰했다고 단정하지 않는다. 제시된 다른 감염은 이 bubo-폐증상 조합과 덜 맞는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000558 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 서남부 노출 후 bubo와 폐증상으로 이차 폐페스트 C 유지. 누락 CT에서 결절을 보았다고 꾸민 해설 제거; 텍스트만으로 선지 비교 가능.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000558
