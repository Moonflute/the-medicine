---
type: qbank
schema_version: 1
id: medqa-us-train-006360
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8eea0bd8fbe0697e030846d1878389c1a9bcccf31f0ce9a9f52897c2a829c26d
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "울혈성 심부전 악화"
  - "이뇨제 치료"
  - "신기능 평가"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gOyghC5tZA
question_type: investigation
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRGlnb3hpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

울혈성 심부전 병력이 있는 70세 여성이 호흡곤란으로 응급실에 내원했다. 1~2주 전 푸로세미드와 리시노프릴 처방약이 떨어진 뒤 점점 호흡이 어려워졌다고 한다. 밤에, 그리고 누워 있을 때 호흡곤란이 더 심하다. 발열, 기침 또는 위장관 증상은 없다. 복용 약물 목록에 디곡신도 포함되어 있다. 신체진찰에서 활력징후는 정상이고 양쪽 폐기저부에 수포음이 있으며 양쪽 다리에 2+ 함요부종이 있다. 레지던트가 의대생에게 침대 머리를 30도 올리게 했다. 또한 푸로세미드, 모르핀, 질산염 및 산소를 투여하라는 처방을 작성했다. 이 약물 요법을 시작하기 전에 다음 중 무엇을 확인해야 하는가?

## 선택지

A. 기초 대사 패널
B. 흉부 X선
C. 뇌 나트륨이뇨 펩타이드
D. 소변검사

## 해설

Loop이뇨제 재개 시 BMP A로 K와 신기능을 확인하는 것이 중요하며 digoxin 독성위험과 Mg도 고려한다. 검사 때문에 응급소생을 지연하는 의미는 아니다. 본문 처방은 과거 케이스로 routine morphine이나 비저산소 환자의 산소를 일률 표준으로 권하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: BMP A의 K/Mg·digoxin독성 평가를 보완하고 routine morphine/산소를 현행 표준으로 승인하지 않음.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001063

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006360
