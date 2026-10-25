---
type: qbank
schema_version: 1
id: medqa-us-train-004041
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c9d950b7220f7dc8f17ced8e85bc018b2935c30b675f17b27719befd95423da7
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "여행자 설사"
  - "장독소형 대장균"
  - "급성 감염성 설사"
related_disease_slugs:
  - MDgg6rCQ7Je8L-yEpOyCrCAo7Je87Kad7ISxKSAoRGlhcnJoZWEgKEluZmxhbW1hdG9yeSkpLm1k
question_type: 임상증례 객관식
difficulty: complex
answer: A
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQWxiZW5kYXpvbGUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
---

# MedQA US 임상문제

## 문제

22세 여자가 지난주 멕시코 신혼여행에서 돌아온 후 발생한 묽은 설사를 평가받기 위해 긴급진료를 방문했다. 3일 동안 하루 최소 3회 물 같은 변을 보았고 이제 복부 경련도 생겼다. 과거력은 특이사항이 없고 데포 메드록시프로게스테론 아세테이트만 복용한다. 혈압 104/72 mmHg, 심박수 104회/분, 호흡수 14회/분, 체온 39.4°C이다. 신체검사는 경미한 미만성 복부 압통과 건조한 점막 외에는 정상이다. 대변검사에서 충란은 없고 대변 백혈구도 보이지 않는다. 대변 배양 결과를 기다리는 중이다. 경구 수분 보충과 함께 가장 적절한 치료는 무엇인가?

## 선택지

A. 시프로플록사신
B. 메트로니다졸
C. 독시사이클린
D. 알벤다졸

## 해설


고열39.4°C와 탈수를 동반한 여행 후 설사는 단순 경증 무열성 설사로 보아서는 안 된다. 검체·임상중증도를 평가하고 수분을 보충하며 선택지 중 ciprofloxacin A는 감수성 있는 세균성 여행자설사에 사용할 수 있다. 다만 현행 권고에서 발열성 설사는 azithromycin이 선호되며 FQ 내성·부작용·지역 역학을 고려하므로 A를 모든 여행자설사의 자동 일차약으로 일반화하지 않는다. 대변 백혈구 음성만으로 침습성 감염을 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004041 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 39.4°C 고열을 경미한 무열성 설사로 오독하고 정답 A가 필요없다고 한 해설 교정; FQ의 제한을 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/yellow-book/hcp/preparing-international-travelers/travelers-diarrhea.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004041
