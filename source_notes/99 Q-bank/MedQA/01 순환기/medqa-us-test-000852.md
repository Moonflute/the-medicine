---
type: qbank
schema_version: 1
id: medqa-us-test-000852
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:874160f63bb06a0358568833dbc9c6611b8384b6745ed3dcab2770e875956719
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "울혈성 심부전"
  - "심방 나트륨이뇨 펩타이드"
  - "저나트륨혈증"
related_disease_slugs:
  - MDUg7Iug7J6lL-yggOuCmO2KuOulqO2YiOymnSAoSHlwb25hdHJlbWlhKS5tZA
  - MDEg7Iic7ZmY6riwL-yLrOu2gOyghC5tZA
question_type: mechanism
difficulty: complex
answer: C
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

69세 남성이 호흡곤란으로 응급실에 왔다. 지난 한 달 동안 같은 증상으로 세 번 방문했다. 주치의가 없고 현재 약을 복용하지 않는다. 주차장에서 식당까지 걸어가던 중 호흡곤란이 시작되었다. 체온 99.5°F(37.5°C), 맥박 100회/분, 혈압 130/90 mmHg, 호흡 18회/분, 실내공기 산소포화도 96%였다. 피로해 보였고 심장 청진에서 S2 뒤에 추가 심음이 들렸으며 양쪽 폐에서 수포음이 있었다. 복부는 비만했지만 압통은 없었고 양측 하지에 함요부종이 있었다. 다음 중 이 환자의 상태에 가장 잘 맞는 검사 결과 조합은?

## 선택지

A. BNP 증가, ADH 증가, 나트륨 증가, 칼륨 증가
B. BNP 증가, ADH 감소, 나트륨 정상, 칼륨 감소
C. BNP 증가, ADH 증가, 나트륨 감소, 칼륨 감소
D. BNP 감소, ADH 감소, 나트륨 정상, 칼륨 정상

## 해설

호흡곤란·S3를 시사하는 추가 심음·폐수포음·말초부종은 울혈성 심부전을 지지한다. 심실벽 신장으로 BNP가 증가하고 유효 동맥혈량 감소에 대한 비삼투성 ADH 분비가 수분저류와 희석성 저나트륨혈증을 일으킬 수 있어 보기 중 C가 가장 합당하다. RAAS 활성화는 칼륨 배설을 증가시킬 수 있지만 혈중 칼륨은 신기능과 약물 등에 따라 달라진다. 현재 약을 복용하지 않는 환자에게 이뇨제 사용을 사실로 가정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 C 유지. 저Na 기전을 Na 재흡수 그 자체가 아닌 ADH 매개 수분저류로 교정하고 미복용 이뇨제를 가정하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000852
