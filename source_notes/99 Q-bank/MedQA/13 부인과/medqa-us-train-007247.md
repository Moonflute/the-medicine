---
type: qbank
schema_version: 1
id: medqa-us-train-007247
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:da3059c100aca3be46915ed86bc963e2a138e6210ea5e0e99d0aa1bf02c050d3
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "수술 후 요폐"
  - "폴리 카테터 폐색"
  - "자궁절제술 후 합병증"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7JqU66GcIOqwkOyXvCAoVXJpbmFyeSBUcmFjdCBJbmZlY3Rpb24pLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

복식 자궁절제술을 받은 지 4시간 후 43세 여자가 마취 후 회복실에서 수술 이후 파란빛을 띠는 소변이 5mL밖에 나오지 않아 평가받고 있다. 수술은 순조로웠고 폴리 카테터를 통해 생리식염수와 섞은 메틸렌 블루를 역행 주입하여 요관 개통성을 확인했다. 수술 중 결정질 수액 2.4L를 투여했고 소변량은 1.2L였다. 통증과 과다월경을 동반한 자궁근종 병력이 있다. 그 외에는 건강하며 8년 전과 5년 전 제왕절개를 각각 한 차례씩 받았다. 체온은 37.4°C(99.3°F), 맥박 75회/분, 호흡수 16회/분, 혈압 122/76 mmHg이다. 편안해 보이고 심폐검사는 정상이다. 정중선 수술 절개부 드레싱은 깨끗하고 건조하다. 복부는 부드럽고 하복부가 약간 팽창되어 있다. 방광이 약간 만져진다. 사지는 따뜻하고 관류가 좋으며 모세혈관 재충만은 빠르다. 검사에서 백혈구 수 8,300/mm³, 헤모글로빈 10.3 g/dL, 헤마토크릿 31%, 혈소판 수 250,000/mm³, 나트륨 140 mEq/L, 칼륨 4.2 mEq/L, 중탄산염 26 mEq/L, BUN 26 mg/dL, 크레아티닌 1.0 mg/dL이다. 소변은 혈액 1+, 백혈구 없음, 단백 음성, 적혈구 없음, 적혈구 원주 없음이다. 방광 스캔에서 잔뇨 250mL가 보인다. 다음 중 평가를 위한 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 링거액 500mL를 일시 주입한다
B. 폴리 카테터를 확인한다
C. 푸로세미드 20mg을 정맥 투여한다
D. 응급수술을 위해 수술실로 돌아간다

## 해설

정상 관류·크레아티닌과 방광 내 250mL 잔뇨는 도뇨관 꺾임·폐쇄·위치 이상을 먼저 확인할 근거다(B). 수액이나 이뇨제 투여 전에 배액 문제를 배제한다. 원문의 방광 내 메틸렌블루 역행 주입은 요관 개통성을 단독으로 입증하는 검사가 아니므로 그 문장만으로 요관 손상을 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 잔뇨를 동반한 수술 후 핍뇨의 카테터 점검 B 유지. 방광 역행 주입만으로 요관 개통을 증명한다는 원문 오류를 명시.
- https://www.exxcellence.org/list-of-pearls/postoperative-urinary-fistulae/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007247
