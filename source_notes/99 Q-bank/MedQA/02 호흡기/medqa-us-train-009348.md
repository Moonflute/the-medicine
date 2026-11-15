---
type: qbank
schema_version: 1
id: medqa-us-train-009348
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:55deffbef905f6594c2babab955508106fe5eeedfd7828f353be714e8c0b8940
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "acute respiratory distress syndrome"
  - "급성 호흡곤란증후군"
  - "PEEP"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-q4ieyEsSDtmLjtnaHqs6TrnoAg7Kad7ZuE6rWwIChBUkRTKSAoQWN1dGUgUmVzcGlyYXRvcnkgRGlzdHJlc3MgU3luZHJvbWUpLm1k
question_type: management
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

70세 남성이 패혈증 후 심한 ARDS로 기계환기를 받고 있다. 예측체중에 맞춰 일회호흡량을 6 mL/kg로 유지하고 PEEP를 최적화했는데도, FiO₂ 0.8에서 PaO₂가 62 mmHg이다. 순환은 안정적이고 체위 변경에 금기는 없다. 다음 호흡 보조 전략은?

## 선택지

A. 하루 16시간가량 복와위 환기를 시행한다
B. 일회호흡량을 예측체중당 12 mL로 늘린다
C. PEEP를 없애고 현재 FiO₂만 유지한다
D. 기계환기를 중단하고 일반 비강 캐뉼라로 바꾼다

## 해설

폐 보호 환기와 적절한 PEEP에도 심한 저산소혈증이 지속되면 장시간 복와위 환기를 시행한다. 복와위는 폐의 환기와 관류 분포를 개선할 수 있으며 일회호흡량을 크게 늘리는 것은 폐 손상을 증가시킬 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: PEEP C를 지지하되 중증 ARDS의 복와위 효과를 부정한 설명과 무분별한 일회호흡량 증가를 교정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10870893/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009348
- https://academic.oup.com/ajrccm/article/195/9/1253/8500154
