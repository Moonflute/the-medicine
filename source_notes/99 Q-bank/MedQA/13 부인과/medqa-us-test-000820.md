---
type: qbank
schema_version: 1
id: medqa-us-test-000820
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:c74da501010439565d81cc25eaf1a0bac9fd2cba9a28440e44a0b2bad9ebdf70
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "완전 안드로겐 불감 증후군"
  - "46,XY"
  - "원발성 무월경"
question_type: diagnosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-yViOuTnOuhnOqykOu2iOqwkOydkSAoQW5kcm9nZW4gSW5zZW5zaXRpdml0eSkubWQ
difficulty: standard
answer: D
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

16세 환자가 초경을 하지 않았다. 유방은 발달했으나 음모가 거의 없고 초음파에서 자궁이 보이지 않는다. 핵형은 46,XY이고 사춘기 남성 범위의 테스토스테론이 검출된다. 진단은?

## 선택지

A. 뮐러관 무형성(MRKH증후군)
B. 터너증후군
C. 46,XY 완전 성선발생이상
D. 완전 안드로겐 불감증

## 해설

고환 항뮐러관호르몬으로 자궁이 형성되지 않지만 안드로겐 수용체가 작동하지 않아 음모는 적고 유방은 발달한다. MRKH증후군은 보통 46,XX이고 음모 발달은 정상이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: AIS기전D유지. 무의미한성피질감소표현삭제하고검사되지않은46XY를확정값처럼쓰지않음.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000820
- https://www.asrm.org/practice-guidance/practice-committee-documents/current-evaluation-of-amenorrhea/
