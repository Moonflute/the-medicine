---
type: qbank
schema_version: 1
id: medqa-us-train-006449
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:82d446cdd95fb0a4e6548f6dbe00e240a85bdf8b259b0579fb33b60f25a3e550
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "고중성지방혈증"
  - "급성 췌장염"
  - "황색종"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7LeM7J6l7Je8IChBY3V0ZSBQYW5jcmVhdGl0aXMpLm1k
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

21세 대학생 남성이 이틀 동안 지속된 구토와 심와부 통증으로 응급실에 내원했다. 아토피피부염과 하시모토 갑상샘염 병력이 있으며 레보티록신만 복용한다. 정기 예방접종은 받지 않았다. 주말에 맥주 1~2잔을 마시고 가끔 대마초를 피운다. 불안해 보이고 식은땀을 흘린다. 체온은 37.9°C(100.3°F), 맥박은 분당 105회, 호흡수는 분당 16회, 혈압은 130/78 mm Hg이다. 복부가 팽만되어 있고 심와부 압통이 있으나 방어성 긴장이나 반발통은 없다. 피부에서 몸통과 사지의 폄면에 황색 판이 여러 군데 보인다. 혈색소는 15.2 g/dL, 혈청 칼슘은 7.9 mg/dL이다. 다음 중 평가의 다음 단계로 가장 적절한 것은?

## 선택지

A. 필로카르핀 유발 땀 검사
B. 혈청 유행성이하선염 IgM 역가 측정
C. 복부 기립 X선 촬영
D. 혈청 지질 농도 측정

## 해설

황색 병변 군집과 췌장염 의심 복통은 심한 고중성지방혈증/발진성 황색종을 시사해 D의 혈청지질검사가 적절하다. 황색판을 급성췌장염에 의한 지방변성이라고만 설명하거나 지질검사가 아니라 영상이 정답이라고 뒤집지 않는다. 췌장효소와 임상에 필요한 영상으로 진단도 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 황색판-고TG췌장염의 지질검사 D 근거를 해설의 자기모순 없이 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006449
