---
type: qbank
schema_version: 1
id: medqa-us-train-001327
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:058fdb57be998bb57a720b280605a1d13a22cd4f0f321475dc383525657fbb3a
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "heart failure"
  - "hyponatremia"
  - "reduced ejection fraction"
related_disease_slugs:
  - MDUg7Iug7J6lL-yggOuCmO2KuOulqO2YiOymnSAoSHlwb25hdHJlbWlhKS5tZA
  - MDEg7Iic7ZmY6riwL-unjOyEsSDsi6zrtoDsoIQgKOuwley2nOuloCDqsJDshowpIChDaHJvbmljIEhlYXJ0IEZhaWx1cmUgd2l0aCBSZWR1Y2VkIEVqZWN0aW9uIEZyYWN0aW9uIChIRnJFRikpLm1k
  - MDEg7Iic7ZmY6riwL-yLrOu2gOyghC5tZA
question_type: prognosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBsZXJlbm9uZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXRoYWNyeW5pY0FjaWQubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

75세 남성이 5일 동안 악화되는 호흡곤란, 기좌호흡 및 하지 부종으로 응급실에 내원했다. 고혈압, 고지혈증, 비알코올성 지방간질환 및 10년 전 심근경색 병력이 있다. 현재 메토프롤롤, 리시노프릴, 에타크린산, 에플레레논 및 아스피린을 복용한다. 하루에 맥주 1병을 마시고 30갑년의 흡연력이 있다. 설폰아미드에 알레르기가 있다. 체온은 37.0°C (98.6°F), 맥박은 120회/분, 혈압은 120/80 mm Hg이다. 신체검사에서 경정맥 팽창과 양쪽 하지의 3+ 함요부종이 보인다. 양쪽 폐기저부에서 수포음이 들린다. 최대 박동점은 왼쪽 쇄골중선에서 2 cm 바깥쪽인 제6늑간에 있다. 다음 중 사망률 증가와 가장 밀접하게 관련된 추가 소견은 무엇인가?

## 선택지

A. BNP 수치 감소
B. 혈청 Na+ 감소
C. VO2 증가
D. 심박수 변이도 증가

## 해설


심부전에서 저나트륨혈증은 체액 저류와 신경호르몬 활성화의 결과로 사망률을 높이는 독립적인 예후 인자이다. BNP 감소, VO2 증가, HRV 증가는 각각 다른 상황을 반영한다. 따라서 혈청 Na+ 감소가 사망률 증가와 가장 밀접하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 심한 울혈성 HF에서 저Na는 신경호르몬 활성/수분저류 및 나쁜 예후와 연관 B. 낮은 BNP·높은 운동VO2 등과 대비.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001327
