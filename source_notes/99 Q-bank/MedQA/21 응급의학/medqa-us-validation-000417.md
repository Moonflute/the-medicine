---
type: qbank
schema_version: 1
id: medqa-us-validation-000417
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:aa12f3b5895fe75ce9ed9e2b1cf1c0dcc746f7978e583a0be8892d8a4b63fa10
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "메탄올 중독"
  - "고음이온차 대사성 산증"
  - "포메피졸"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yXkO2LuOugjOq4gOumrOy9nCDspJHrj4UgKEV0aHlsZW5lIEdseWNvbCBQb2lzb25pbmcpLm1k
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
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvQWNldHlsY3lzdGVpbmUubWQ
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvRmx1bWF6ZW5pbC5tZA
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTmFsb3hvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

29세 남성이 집에서 반응이 없는 상태로 발견되어 응급실에 왔다. 전날 밤 친구와 직접 만든 술을 마셨고 현재 통증 자극에도 반응하지 않는다. 체온 37°C, 맥박 126회/분, 얕은 호흡 30회/분, 혈압 84/44 mmHg, 산소포화도 96%이다. 나트륨 146, 칼륨 7.7, 염소 111 mmol/L, 젖산 11.2 mmol/L, 혈청 삼투질농도 379 mOsm/kg, 동맥혈 pH 6.69, pCO₂ 53 mmHg, HCO₃⁻ 4.3 mmol/L이다. 삽관과 수액을 시작했다. 가장 적절한 약물치료는?

## 선택지

A. N-아세틸시스테인
B. 포메피졸
C. 날록손
D. 플루마제닐

## 해설

직접 만든 술을 마신 뒤 혼수, 높은 삼투질농도와 심한 음이온차 증가 산증이 발생하여 메탄올 등 독성 알코올을 의심한다. 포메피졸(B)은 알코올 탈수소효소를 억제하여 독성 대사산물의 추가 생성을 줄인다. pH 6.69와 PaCO2 53 mmHg는 극심한 대사성 산증에 환기 장애도 동반되었음을 보여 주며, 삽관 뒤 충분한 환기를 유지해야 한다. 이 정도 산증·혼수는 해독제만 투여하고 기다릴 상태가 아니므로 긴급 투석과 고칼륨혈증 치료를 병행한다. 정상에 가까운 맥박산소측정치가 이러한 대사 독성을 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 독성 알코올 중독의 포메피졸 B를 유지한다. 심한 산증·혼수·고칼륨혈증에서 해독제만으로 충분하다는 오해를 피하고 원문 PaCO2를 복원한다.
- 공식/학회 근거: https://www.extrip-workgroup.org/methanol

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000417
