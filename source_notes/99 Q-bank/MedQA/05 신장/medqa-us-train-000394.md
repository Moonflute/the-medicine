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
question_type: mechanism
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

평소 건강하던 27세 남성이 진한 색 소변과 왼쪽 옆구리 통증으로 응급실에 내원하였다. 환자는 지난 2일간 발열, 인후통, 전신 권태감을 겪었다. 활력 징후는 체온 38.1°C, 혈압 120/82 mm Hg, 맥박 95회/분이다. 가족력상 특이 사항은 없다. 신체 검진에서 편도 비대와 압통을 동반한 앞목 림프절병증(anterior cervical lymphadenopathy)이 관찰된다. 소변 검사에서 20-25개의 적혈구/고배율 시야와 2+ 단백뇨를 보이는 분홍색 소변이 확인되었다. 이 환자의 상태는 다음 중 무엇 때문일 가능성이 가장 높은가?

## 선택지

A. 제4형 콜라겐의 유전적 이상
B. C3 신염 인자(C3 nephritic factor)
C. 면역 복합체 침착
D. 미만성 메산지움 IgA 침착

## 해설

인후염과 거의 동시에 나타난 육안혈뇨·단백뇨는 IgA 신병증에 합당하며 보기 중 D, 메산지움 IgA 침착이 가장 구체적인 설명이다. IgA를 포함한 면역복합체가 메산지움에 침착해 염증을 일으킨다. 다른 질환의 상피하 침착물을 'ground glass'라고 부르거나, 수주 뒤 나타나는 감염후 사구체신염과 시점을 혼동하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 D 유지. 상피하 고밀도 침착을 ground glass로 표현한 오기 제거 및 인후염과 동시 발생 혈뇨의 메산지움 IgA 기전 강조.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000394
