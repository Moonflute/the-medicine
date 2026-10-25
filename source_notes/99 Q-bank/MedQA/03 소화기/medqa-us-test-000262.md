---
type: qbank
schema_version: 1
id: medqa-us-test-000262
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:ddc7ec4166a06e1adc264fd9a20d24f35a661a1c4646bafeca74d119acc4ca95
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "황색포도상구균 식중독"
  - "독소 매개 식중독"
  - "급성 위장염"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2PrOuPhOyVjOq3oCDqsJDsl7wgKFN0YXBoeWxvY29jY2FsIEluZmVjdGlvbikubWQ
  - MDgg6rCQ7Je8L-yLneykkeuPhSDrsI8g7Iud7ZKI66ek6rCcIOqwkOyXvC5tZA
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

30세 남성이 복통으로 응급실에 왔다. 정오 무렵 바비큐 식사에 참석했으며 음식은 냉장하지 않은 뷔페로 준비되어 있었다. 2~3시간 이내에 복통과 수양성 설사 3회가 발생했다. 체온 99.1°F, 심박수 103회/분, 혈압 110/55 mmHg, 호흡수 14회/분이었다. 복부 깊은 촉진에서 통증이 있었으나 반발통이나 근육경직은 없었다. 대변 잠혈검사는 음성이었다. 이 환자 증상의 가장 가능성 높은 원인은?

## 선택지

A. Salmonella enteritidis
B. Listeria monocytogenes
C. 황색포도상구균(Staphylococcus aureus)
D. Vibrio cholerae

## 해설

냉장하지 않은 음식을 먹고 2~3시간 안에 복통과 수양성 설사가 발생한 짧은 잠복기는 음식 안에서 미리 만들어진 황색포도상구균 장독소에 의한 식중독(C)을 지지한다. 구토도 흔한 증상이지만 이 환자에게 실제로 있었다고 제시되지는 않았다. 다른 보기의 균들은 보통 이처럼 짧은 잠복기 양상을 덜 잘 설명한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 C 유지. 본문에 없는 구토를 실제 관찰한 증상처럼 추가한 해설을 수정하고 빠른 잠복기의 미리 형성된 독소 기전 설명.
- https://www.cdc.gov/staph-food-poisoning/about/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000262
