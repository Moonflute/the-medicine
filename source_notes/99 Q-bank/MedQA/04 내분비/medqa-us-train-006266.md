---
type: qbank
schema_version: 1
id: medqa-us-train-006266
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f2cc6fd446af542b68b4c0c8b05c40dcb4b248dbec235eae6cd92a9b35230ace
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "갑상샘기능저하증"
  - "월경과다"
  - "하시모토 갑상샘염"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
  - MDQg64K067aE67mEL-2VmOyLnOuqqO2GoCDqsJHsg4Hsg5jsl7wgKEhhc2hpbW90bydzIFRoeXJvaWRpdGlzKS5tZA
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

16세 여아가 6개월 전부터 발생한 생리통, 월경량 증가 및 피로감으로 내원했다. 이 기간에 체중이 5kg(11lb) 증가했다. 월경은 30일 간격으로 규칙적이며 8~10일간 지속된다. 월경 중에는 하루에 탐폰 7개를 사용하고 심한 경련 때문에 신체 활동에 참여할 수 없다. 11세 초경 이후에는 월경이 4~5일간 지속되며 양도 보통이었다. 마지막 월경은 3주 전이었다. 제한형 경피증이 있고 손끝이 간헐적으로 창백해진다. 복용 약물은 없다. 키는 160cm(5ft 3in), 체중은 77kg(170lb), 체질량지수는 30kg/m²이다. 체온은 36.5°C(97.7°F), 맥박은 분당 56회, 호흡수는 분당 16회, 혈압은 100/65 mm Hg이다. 진찰에서 얼굴이 부어 있고 모세혈관확장증이 보이며 눈썹이 성기다. 양측 심부건반사는 1+이고 이완이 지연되어 있다. 골반 진찰에서 질, 자궁경부, 자궁 및 부속기는 정상으로 보인다. 추가 평가에서 다음 중 어떤 소견이 나타날 가능성이 가장 높은가?

## 선택지

A. TSH 상승
B. 자정 코르티솔 상승
C. LH:FSH 비율 상승
D. 안드로겐 상승

## 해설


월경과다, 체중 증가, 부종, 얼굴 부종·피부 건조·서맥은 갑상선 기능 저하를 나타낸다. 갑상선 기능 저하 시 TSH가 상승한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 월경과다·서맥·눈썹소실·반사이완지연은 원발성 갑상선저하의 TSH상승 A에 부합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006266
