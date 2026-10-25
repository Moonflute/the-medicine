---
type: qbank
schema_version: 1
id: medqa-us-train-007083
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:eb0ee9591ced2c8386f3f8ec9ad209ea8a72c2bc231a5443bd72007b7a3830db
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "알코올성 심근병증"
  - "확장성 심근병증"
  - "독성 심근병증"
  - "심부전"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2ZleyepeyEsSDsi6zqt7zrs5Hspp0gKERpbGF0ZWQgQ2FyZGlvbXlvcGF0aHkpLm1k
  - MDEg7Iic7ZmY6riwL-yLrOq3vOuzkeymnSAoQ2FyZGlvbXlvcGF0aHkpLm1k
  - MDEg7Iic7ZmY6riwL-yLrOu2gOyghC5tZA
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

70세 남자가 최소한의 운동에도 점점 심해지는 호흡곤란을 호소한다. 10년 전에는 매우 활동적이어서 건물 계단 3개 층을 오를 수 있었지만, 이제는 한 층만 올라가도 숨이 매우 찬다. 처음에는 나이 탓으로 생각했으나 최근에는 누워 있을 때도 비슷하게 숨이 차는 것을 느낀다. 최근 발열, 기침, 흉통, 오심, 구토, 설사는 없다. 과거 병력은 10년 동안 ‘떨림’으로 두 번 입원한 것 외에는 없다. 심장질환 가족력은 없다. 10갑년의 흡연력이 있고 현재 매일 밤 ‘몇 잔’의 술을 마신다. 활력징후는 혈압 120/80 mmHg, 심박수 85회/분, 호흡수 14회/분, 산소포화도 97%이다. 경미한 비만의 남자로 보이며 양쪽 폐기저부에 약간의 수포음이 들린다. 복부는 비만하고 간 가장자리가 늑골연 아래 2~3cm에서 만져진다. 양쪽 하지에 2+ 부종이 있다. 대사패널에서 나트륨 130 mEq/L 외에는 정상이다. 전혈구검사, 간기능검사, 응고검사도 정상이다. 심전도에서 좌심실 비대와 1도 방실차단이 보인다. 5년 전 심장도관검사에서 심장이 중등도로 커져 있었으나 관상동맥은 개방되어 있었다. 이 환자의 증상을 일으킨 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 독성 심근병증
B. 이완기 심부전
C. 허혈성 심근병증
D. 신증후군

## 해설

지속음주와 과거 '떨림' 입원은 음주문제를 시사하며 심장확장/울혈과 과거개방관상동맥은 제시중 알코올관련 독성심근병증 A를 지지한다. 음주량·기간과 현재심장평가로 확인해야 하고 과거관상동맥정상만으로 현재허혈을 영구배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 알코올남용병력없다고 반대로 쓴 해설을 과거떨림입원/지속음주 단서로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007083
