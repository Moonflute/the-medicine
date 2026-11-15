---
type: qbank
schema_version: 1
id: medqa-us-train-000394
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:932ce7b3612c4458d352990c7d3dec007ca0044c573470596ac700f447439f84
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "IgA nephropathy"
related_disease_slugs:
  - MDUg7Iug7J6lL0lnQSDsvantjKXrs5Hspp0gKElnQU4pIChJZ0EgTmVwaHJvcGF0aHkpLm1k
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 남성이 상기도 감염 때마다 육안적 혈뇨를 경험한다. 감염이 없을 때도 사구체성 혈뇨가 남고 24시간 소변 단백이 두 차례 0.8g이었다. 신기능은 안정적이고 생검 금기는 없다. IgA 신병증이 의심될 때 확진을 위해 할 검사는?

## 선택지

A. 혈청 총 IgA만 측정한다
B. 소변 배양만 반복한다
C. 조영 CT 요로조영술을 시행한다
D. 신장 생검을 고려한다

## 해설

성인에서 IgA 신병증이 의심되고 단백뇨가 하루 0.5g 이상 지속되면 생검을 고려한다. 혈청 IgA 농도만으로는 확진할 수 없다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 D 유지. 상피하 고밀도 침착을 ground glass로 표현한 오기 제거 및 인후염과 동시 발생 혈뇨의 메산지움 IgA 기전 강조.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000394
- https://kdigo.org/guidelines/iga-nephropathy/
