---
type: qbank
schema_version: 1
id: medqa-us-train-000726
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:785b91a3fc0f6b0cdbc141fafadfa37424e95634c9a5785e73d79ed0f093d2af
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "gastric cancer"
  - "partial gastrectomy"
  - "jejunal anastomosis"
  - "bacterial overgrowth"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITslZQgKEdhc3RyaWMgQ2FuY2VyKS5tZA
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_shLjqt6Ag6rO864uk7Kad7IudIOymne2bhOq1sCAoU21hbGwgSW50ZXN0aW5hbCBCYWN0ZXJpYWwgT3Zlcmdyb3d0aCBTeW5kcm9tZSkubWQ
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowNiDruYTrh6jCt-yLoOyepS9UYW1zdWxvc2luLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

위암으로 위 부분 절제 후 공장과 문합한 76세 남성이 식후 복부팽만, 지방변과 체중 감소를 보인다. CT상 재발이나 폐색은 없지만 길게 남은 맹관이 있다. 소장세균과증식이 의심될 때 사용할 비침습 검사는?

## 선택지

A. 혈청 항내인자 항체
B. 4시간 위배출 신티그래피
C. 포도당 수소·메탄 호기검사
D. 대변 칼프로텍틴

## 해설


수술 뒤 장 내용물이 맹관에 정체되면 소장세균과증식 위험이 높아진다. 증상과 수술력을 바탕으로 포도당 호기검사를 고려할 수 있다. 위장관 수술 후에는 장 통과 속도가 결과에 영향을 줄 수 있어 단독 확진으로 쓰지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 위절제/공장문합 후 만성 설사·저알부민과 B12형 신경증상/대구성 빈혈은 blind-loop SIBO C를 지지. 단순 운동 증가와 구별.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000726
- https://doi.org/10.14309/AJG.0000000000000501
