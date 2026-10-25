---
type: qbank
schema_version: 1
id: medqa-us-test-000880
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:df9b1cb4f98b42c25e1ab8d2ad111e0b26f24008bd63af7c6a5c1da071700b44
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "무월경"
  - "무배란"
  - "리스페리돈 유발 고프로락틴혈증"
question_type: diagnosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-ustOyblOqyvSAoQW1lbm9ycmhlYSkubWQ
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9UZXN0b3N0ZXJvbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9SaXNwZXJpZG9uZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

15세 여아가 3개월 동안 월경이 없어 진료를 받으러 왔다. 이전에는 15~45일 간격으로 불규칙하게 중등도에서 다량의 월경을 했다. 초경은 14세였다. 3개월 전 남자친구와 성관계를 시작했고, 6개월 전 조증 삽화로 리스페리돈 치료를 받았다. 어머니는 다낭성 난소 증후군, 아버지는 당뇨병이 있다. 체중과 외모에 매우 신경 쓰며 키 171 cm, 체중 79 kg, BMI 27.02 kg/m²였다. 활력징후와 복부·골반 진찰은 정상이었다. 프로락틴 16 ng/mL, TSH 3.8 μU/mL, FSH 6 mIU/mL, LH 5.1 mIU/mL, 프로게스테론 0.8 ng/mL, 테스토스테론 2.2 nmol/L였고 소변 임신검사는 음성이었다. 증상의 가장 가능성 높은 원인은?

## 선택지

A. 자궁근종
B. 뮐러관 선천성 결함
C. 구토 행동
D. 무배란

## 해설

초경 후 초기의 불규칙한 주기와 무월경, 임신검사 음성은 무배란(D)을 가장 시사한다. 배란이 없으면 황체가 형성되지 않아 황체기 프로게스테론 상승이 나타나지 않을 수 있지만 단일 수치의 해석에는 채혈 시점이 필요하다. 본문에 에스트로겐은 측정되지 않아 결핍을 단정해서는 안 된다. 프로락틴은 정상 범위여서 리스페리돈 복용만으로 고프로락틴혈증을 진단할 수 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 측정되지않은에스트로겐결핍창작삭제. 초경직후불규칙주기의무배란D와정상프로락틴구별.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000880
