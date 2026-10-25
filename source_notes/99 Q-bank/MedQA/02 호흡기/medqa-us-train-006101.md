---
type: qbank
schema_version: 1
id: medqa-us-train-006101
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2ab31a4b3e731f7273c5cfea4a558d23e9f32653d5f2acacda5ff49d6372c565
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "비만 저환기 증후군"
  - "고탄산혈증"
  - "수면 중 저환기"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yggO2YuO2doSAoSHlwb3ZlbnRpbGF0aW9uKS5tZA
question_type: diagnosis
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

56세 남성이 1년 동안 심한 코골이로 내원했다. 특별한 병력이나 복용 약물은 없고 흡연도 하지 않는다. 혈압은 155/95 mmHg, BMI는 49kg/m²이다. 구인두검사에서 목젖이 커져 있고 비강에는 비중격 만곡이나 폴립이 없다. 폐와 심장검사는 정상이다. 수면다원검사에서 무호흡-저호흡지수는 시간당 2회이고 REM 수면 중 PCO₂는 51mmHg이다. 실내 공기 동맥혈가스는 pH 7.33, PCO₂ 50mmHg, PO₂ 92mmHg, HCO₃⁻ 26mEq/L이다. 다음 중 소견을 가장 잘 설명하는 것은 무엇인가?

## 선택지

A. 폐쇄성 수면 무호흡-저호흡 증후군
B. 비만 저환기 증후군
C. 중추성 저환기 증후군
D. 폐쇄성 수면무호흡을 동반한 중추성 저환기 증후군

## 해설

BMI49와 주간 PaCO2 50은 다른 저환기 원인을 배제할 때 OHS B를 지지한다. AHI2로 OSA가 없어도 OHS는 가능하다. 중추성 저환기가 반드시 구조적 뇌손상을 동반하는 것은 아니며 신경근·약물·흉벽 등 감별을 함께 한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: OHS B는 낮은 AHI가 아니라 비만+깨어있을 때 고탄산으로 설명하고 중추성저환기는 반드시 뇌손상이라는 단정 제거.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6680300/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006101
