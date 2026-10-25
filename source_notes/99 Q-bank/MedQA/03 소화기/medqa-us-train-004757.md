---
type: qbank
schema_version: 1
id: medqa-us-train-004757
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:52854f8536b50dd5642b6c28781d146ea3ef5e51a2b7969ee696a7784b83fc8a
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "알약 유발 식도염"
  - "알렌드로네이트 식도염"
  - "흉통"
  - "Pill-induced esophagitis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rtoDsi50g7Iud64-E7Je8IChDb3Jyb3NpdmUgRXNvcGhhZ2l0aXMpLm1k
question_type: diagnosis
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9BbGVuZHJvbmF0ZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2hsb3JvcXVpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 여성이 새벽 3시에 잠에서 깰 정도의 흉통으로 오전 5시에 응급실에 왔다. 통증은 지속되고 강도도 줄지 않았다. 비슷한 증상은 없었다. 주요 장기 침범이 없는 전신홍반루푸스가 있고 프레드니손, 칼슘, 알렌드로네이트와 하이드록시클로로퀸을 복용한다. 혈압은 120/75 mm Hg, 맥박은 분당 85회, 호흡수는 분당 19회, 체온은 36.5°C (97.7°F)이다. 흉부와 심폐 진찰은 정상이고 심전도도 정상이다. 흉부 CT에서 중간 부위 식도가 두꺼워져 있다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 미만성 식도경련
B. 식도 천공
C. 식도 협착
D. 알약 유발 식도염

## 해설

Alendronate 복용과 중부 식도 병변·급성 흉통은 D의 알약 유발 식도손상에 부합한다. 식도 증상이 발생하면 복용을 중단하고 평가한다. 충분한 물과 함께 복용하고 적어도 30분 및 첫 음식 섭취 때까지 눕지 않는 등 투여법이 중요하다. Naloxegol은 이 식도손상의 치료약이 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Alendronate 복용 식도염 D 해설의 무관한 naloxegol 연결을 제거.
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=14e931fd-2c5f-4d90-b7db-5980706f4a56

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004757
