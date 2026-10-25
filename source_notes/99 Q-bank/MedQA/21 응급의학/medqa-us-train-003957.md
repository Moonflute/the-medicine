---
type: qbank
schema_version: 1
id: medqa-us-train-003957
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4f2fcf9b1163a213c779fec12b61783130914088e98bced40ff6a033dae43e4a
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "에틸렌글리콜 중독"
  - "고음이온차 대사성 산증"
  - "옥살산염 결정"
question_type: 임상증례 객관식
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

36세 남자가 의식 변화로 이웃에게 이끌려 응급실에 왔다. 6시간 전 이웃의 덤불 사이를 비틀거리며 욕설을 하는 모습이 발견되었다. 이웃이 집까지 데려다주었지만 1시간 후 진입로에서 구토물 웅덩이에 엎드린 채 발견되었다. 자신이 누구인지는 알지만 장소와 시간은 인지하지 못한다. 체온 36.9°C, 맥박 82회/분, 호흡수 28회/분, 혈압 122/80 mmHg이다. 심폐검사는 정상이다. 신경학적 검사에는 협조하지 못한다. 팔과 턱에 근육 경련이 있다. 검사 결과 Na+ 140, K+ 5.5, Cl− 101, HCO3− 9 mEq/L, 요소질소 28 mg/dL, 크레아티닌 2.3 mg/dL, 포도당 75 mg/dL, 칼슘 7.2 mg/dL, 혈청 삼투질농도 320 mOsm/kg이다. 계산한 혈청 삼투질농도는 294 mOsm/kg이다. 동맥혈가스의 pH는 7.25이고 젖산은 3.2 mmol/L이다. 소변검사에서 옥살산염 결정이 보이며 케톤은 없다. 명백한 독성 물질 중독을 겪는 이 환자에게 가장 적절한 치료는 무엇인가?

## 선택지

A. 에탄올
B. 포메피졸
C. 하이드록소코발라민
D. 메틸렌 블루

## 해설

삼투차·고음이온차 산증·저칼슘혈증·옥살산 결정과 AKI는 ethylene glycol 중독을 시사한다. Fomepizole(B)은 alcohol dehydrogenase를 억제하여 유해 대사산물 생성을 막는다. 포도당으로 전환시키는 약이 아니다. 이 환자는 심한 산증과 높은 anion gap이 있어 해독제와 함께 혈액투석 필요성을 긴급 평가해야 하며, B만으로 모든 중증 독성물질이 제거되는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Fomepizole이 ethylene glycol을 glucose로 바꾼다는 중대 약리 오류 교정. 중증 산증에서 투석 추가 적응증 보완.
- 공식/학회 근거: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a31d0148-2729-49de-b666-f24b0dfd2401
- 공식/학회 근거: https://www.extrip-workgroup.org/ethylene-glycol

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003957
