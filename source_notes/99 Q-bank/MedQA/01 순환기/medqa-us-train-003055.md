---
type: qbank
schema_version: 1
id: medqa-us-train-003055
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9ee416669c06d89d751afd2907974b961b74578349ca1142ec32a0fb1d9696c7
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "acute decompensated heart failure"
  - "loop diuretic therapy"
  - "prerenal azotemia"
  - "hypokalemia"
related_disease_slugs:
  - MDUg7Iug7J6lL-yggOy5vOulqO2YiOymnSAoSHlwb2thbGVtaWEpLm1k
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDsi6zrtoDsoIQgKEFjdXRlIEhlYXJ0IEZhaWx1cmUpLm1k
question_type: adverse_effect
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

58세 남성이 2일 동안 호흡곤란, 기좌호흡, 하지부종으로 응급실에 왔다. 고혈압과 3년 전 관상동맥우회술이 필요한 심근경색 병력이 있다. 최근 실직과 보험 문제로 수개월 동안 처방약을 복용하지 못했다. 입원 시 혈압 155/92 mmHg, 심박수 102회/분, 호흡수 24회/분, 체온 36.4°C이며 양쪽 폐에 수포음, S3 갤럽, 2/6 범수축기 잡음이 있다. 초기 BUN 20 mg/dL, 크레아티닌 0.8 mg/dL였으나 다음 날 혈압 110/60 mmHg, 심박수 110회/분, BUN 45 mg/dL, 크레아티닌 1.7 mg/dL, 칼륨 3.2 mEq/L가 되었다. 다음 중 이러한 변화의 가장 좋은 설명은?

## 선택지

A. 이뇨제 치료
B. 콜레스테롤 색전
C. 사구체 기저막 손상
D. 요로 폐색

## 해설

울혈성 심부전 치료 후 혈압 감소·BUN/Cr 증가와 저칼륨혈증은 선택지 중 이뇨제 치료 A에 가장 부합한다. 체액/유효순환량 감소로 신전성 질소혈증이 나타날 수 있고 loop 이뇨제는 요중 K 배설을 늘린다. 빈혈이 아니라 질소혈증/AKI를 설명하는 문항이다. 이뇨 중 creatinine 상승은 용적상태·잔여 울혈·관류를 함께 재평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 이뇨 후 BUN/Cr·저K A의 해설에서 신전성 빈혈이라는 오기 수정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003055
