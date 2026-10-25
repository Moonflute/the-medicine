---
type: qbank
schema_version: 1
id: medqa-us-train-002800
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d65e06bbea19b064efff882c1dcca6b7c20324a1e655a7d5b914522c2629f9dc
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "Paget disease of bone"
  - "increased bone turnover"
  - "cortical thickening"
  - "elevated alkaline phosphatase"
related_disease_slugs:
  - MTMg67aA7J246rO8L-2MjOygnO2KuOuzkSAoUGFnZXQncyBEaXNlYXNlKS5tZA
question_type: mechanism
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
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

60세 남성이 지난 4주 동안 점점 심해지는 오른쪽 고관절과 허리 통증으로 내원했다. 통증은 둔하고 지속적이며 운동과 밤에 악화된다. 지난 2개월 동안 아들의 집 수리를 도우며 무거운 것을 들고 무릎을 꿇는 일을 했다. 아버지는 전립선암으로 사망했다. 매일 맥주 2~3잔을 마신다. 진찰에서 오른쪽 고관절과 서혜부에 국소 압통이 있고 관절운동 범위가 감소되어 있다. 오른쪽 청력이 약간 감소했으며 나머지 진찰은 정상이다. 혈색소 15 g/dL, 총 단백질 6.5 g/dL, 빌리루빈 0.8 mg/dL, ALT 20 U/L, ALP 950 U/L, GGT 40 U/L, 칼슘 9 mg/dL, 인산 4 mg/dL, 부갑상샘호르몬 450 pg/mL이다. 고관절 X선에서 피질골 비후와 뚜렷한 골소주가 보인다. 다음 중 이 환자 증상의 가장 가능성 높은 기전은?

## 선택지

A. 골 재형성 속도 증가
B. 미세구조 붕괴를 동반한 골량 감소
C. 골과 골수의 경색
D. 골의 골아세포성 파괴

## 해설

국소 골통증, 청력저하, 높은 ALP와 정상 GGT·칼슘, 피질골 비후/굵어진 골소주는 Paget병을 시사한다. 골흡수와 무질서한 골형성이 함께 증가하는 골재형성 증가(A)가 보기 중 합당한 기전이다. 다만 PTH 450 pg/mL는 단순 Paget병의 전형적인 소견이 아니므로 동반 원인이나 원자료 수치를 재평가해야 하며 정상 소견으로 간주하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A 유지. Paget 소견의 골재형성 증가를 유지하되 PTH450이 단순 Paget의 전형적 정상 결과가 아니라 별도 평가가 필요한 점 명시.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002800
